
import { useNavigate } from "react-router-dom";
import { useStudentForm } from "../context/StudentFormContext";
import { useImagePreview } from "../utils/UseImagePreview";
import { useEffect, useState } from "react";
import axios from "axios";

function Createc() {
    const { values } = useStudentForm();
    const [file, setFile] = useState<File | null>(null);
    const preview = useImagePreview(file);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // 🔐 Fetch CSRF cookie on mount
    useEffect(() => {
        axios.get("http://localhost:8000/api/csrf/", {
            withCredentials: true,
        })
            .then(() => console.log("✅ CSRF cookie set"))
            .catch((err) => console.error("CSRF error:", err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (file && file.size > 2_000_000) {
            setError("Image must be under 2MB.");
            return;
        }

        const formData = new FormData();
        Object.entries(values).forEach(([key, val]) => {
            formData.append(key, val);
        });
        if (file) formData.append("profile_pic", file);

        try {
            await axios.post("http://localhost:8000/api/StudentApiListCreate/", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            navigate("/home");
        } catch (err: any) {
            const data = err?.response?.data;
            setError(typeof data === "object" ? JSON.stringify(data) : "Error submitting data");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-800 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-5"
            >
                <h2 className="text-2xl font-bold text-indigo-700 text-center"> Upload Profile Picture</h2>

                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Upload Profile Picture:
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        className="w-full"
                    />
                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="mt-3 w-24 h-24 rounded-full object-cover border border-gray-300"
                        />
                    )}
                </div>

                {error && <p className="text-red-600 bg-red-100 p-2 rounded">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Createc;
