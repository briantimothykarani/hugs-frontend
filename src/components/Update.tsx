import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useImagePreview } from "../utils/UseImagePreview";
import axiosInstance from "../utils/axiosInstance";
import { getImageUrl } from "../utils/getImageUrl";

function Update() {
    const { id } = useParams();
    const [values, setValues] = useState({
        username: "",
        age: "",
        institution: "",
        gender: "male",
        year_of_study: "",
        about_student: ""
    });

    const [file, setFile] = useState<File | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const preview = useImagePreview(file);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;

        axiosInstance.get(`StudentUpdate/${id}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`
            }
        })
            .then((res) => {
                setValues({
                    username: res.data.username,
                    age: res.data.age,
                    institution: res.data.institution,
                    gender: res.data.gender,
                    year_of_study: res.data.year_of_study,
                    about_student: res.data.about_student
                });
                setCurrentImage(res.data.profile_pic ?? null);
            })
            .catch((err) => {
                console.error("Failed to fetch student data:", err);
            });
    }, [id]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (file && file.size > 2_000_000) return;

        const form = new FormData();
        Object.entries(values).forEach(([k, v]) => form.append(k, v as string));
        if (file) form.append("profile_pic", file);

        axiosInstance.put(`StudentUpdate/${id}/`, form, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`,
                "Content-Type": "multipart/form-data",
            },
        })
            .then(() => navigate("/home"))
            .catch((err) => {
                console.error("Update failed:", err);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-700 via-blue-800 to-black flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-8">
                <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Update Student</h2>
                <form onSubmit={handleUpdate} className="space-y-5">
                    {["username", "age", "institution", "year_of_study", "about_student"].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block text-sm font-semibold text-gray-700 mb-1">
                                {field.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                            </label>
                            <input
                                type={field === "age" || field === "year_of_study" ? "number" : "text"}
                                name={field}
                                value={(values as any)[field]}
                                onChange={(e) => setValues({ ...values, [field]: e.target.value })}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
                        <select
                            name="gender"
                            value={values.gender}
                            onChange={(e) => setValues({ ...values, gender: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Profile Picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        />
                        {(preview || currentImage) && (
                            <img
                                src={preview ?? getImageUrl(currentImage)}
                                alt="Profile"
                                className="mt-2 w-24 h-24 object-cover rounded-full"
                            />
                        )}
                        <p className="text-xs text-gray-500">Max size: 2MB.</p>
                    </div>

                    <div className="flex justify-between">
                        <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded">Submit</button>
                        <Link to="/home" className="text-purple-700 hover:underline">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;










