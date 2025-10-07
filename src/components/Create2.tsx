
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useImagePreview } from "../utils/UseImagePreview";


function Create2() {
    const [values, setValues] = useState({ username: "", age: "", institution: "", gender: "", year_of_study: "", about_student: "" });
    const [file, setFile] = useState<File | null>(null);
    const preview = useImagePreview(file);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (file && file.size > 2_000_000) return setError("Image must be under 2MB.");
        const form = new FormData();
        Object.entries(values).forEach(([k, v]) => form.append(k, v));
        if (file) form.append("profile_pic", file);
        try {
            await axios.post("http://localhost:8000/api/StudentApiListCreate/", form, {
                headers: { Authorization: `Bearer ${localStorage.getItem("access")}`, "Content-Type": "multipart/form-data" },
            });
            navigate("/home");
        } catch (err: any) {
            setError(err.response?.data ? JSON.stringify(err.response.data) : "Submit error");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-black flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-8 space-y-5">
                <h2 className="text-3xl font-bold text-purple-800 text-center">Add a Student</h2>
                {error && <p className="p-3 bg-red-100 text-red-700 rounded">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {["username", "age", "institution", "year_of_study", "about_student"].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-semibold text-gray-700">{field.replace("_", " ")}</label>
                            <input
                                type={["age", "year_of_study"].includes(field) ? "number" : "text"}
                                className="w-full border rounded px-3 py-2 focus:ring-purple-600"
                                value={(values as any)[field]}
                                onChange={(e) => setValues({ ...values, [field]: e.target.value })}
                                required
                            />
                        </div>
                    ))}
                    {/* Gender */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Gender</label>
                        <select
                            className="w-full border rounded px-3 py-2 focus:ring-purple-600"
                            value={values.gender}
                            onChange={(e) => setValues({ ...values, gender: e.target.value })}
                            required
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    {/* Profile Pic */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Profile Picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        />
                        {preview && <img src={preview} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded-full" />}
                        <p className="text-xs text-gray-500">Max size: 2MB. Recommended: 500×500px</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Submit</button>
                        <Link to="/home" className="text-purple-700 hover:underline">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create2;

/*

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [values, setValues] = useState({
        username: "",
        age: "",
        institution: "",
        gender: "",
        year_of_study: "",
        about_student: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    // 🔐 Redirect if not logged in
    useEffect(() => {
        const token = localStorage.getItem('access');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const payload = {
            ...values,
            age: parseInt(values.age),
            year_of_study: parseInt(values.year_of_study),
        };

        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/api/StudentApiListCreate/",
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access")}`,
                    },
                }
            );
            console.log(res);
            navigate("/home");
        } catch (err: any) {
            console.error(err);
            setError(
                err.response?.data
                    ? JSON.stringify(err.response.data)
                    : "An error occurred while submitting."
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-black flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-8">
                <h2 className="text-3xl font-bold text-purple-800 mb-6">Add a Student</h2>

                {error && (
                    <p className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-300">
                        Error: {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {["username", "age", "institution", "year_of_study", "about_student"].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                                {field.replace("_", " ")}
                            </label>
                            <input
                                type={field === "age" || field === "year_of_study" ? "number" : "text"}
                                name={field}
                                value={values[field as keyof typeof values]}
                                onChange={(e) =>
                                    setValues({ ...values, [field]: e.target.value })
                                }
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                    ))}


                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
                        <select
                            name="gender"
                            value={values.gender}
                            onChange={(e) => setValues({ ...values, gender: e.target.value })}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>


                    <div className="flex items-center justify-between mt-6">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition">
                            Submit
                        </button>
                        <Link to="/home" className="text-purple-700 hover:underline font-semibold">
                            Back
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
*/