

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStudentForm } from "../context/StudentFormContext";

function Create() {
    const { values, updateValues } = useStudentForm();
    const [localValues, setLocalValues] = useState(values);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("access")) navigate("/login");
    }, [navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateValues(localValues);
        navigate("/createb");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-5"
            >
                <h2 className="text-2xl font-bold text-purple-700  text-center">Create Student Info</h2>
                {["username", "age", "institution"].map((field) => (
                    <div key={field}>
                        <label className="block mb-1 font-medium text-gray-700 capitalize">
                            {field.replace("_", " ")}
                        </label>
                        <input
                            type={field === "age" ? "number" : "text"}
                            value={localValues[field as keyof typeof localValues]}
                            onChange={(e) =>
                                setLocalValues({ ...localValues, [field]: e.target.value })
                            }
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
                >
                    Next
                </button>
            </form>
        </div>
    );
}

export default Create;
