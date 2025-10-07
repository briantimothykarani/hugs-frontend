
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStudentForm } from "../context/StudentFormContext";




function Createb() {
    const { values, updateValues } = useStudentForm();
    const [localValues, setLocalValues] = useState({
        gender: values.gender,
        year_of_study: values.year_of_study,
        about_student: values.about_student,
    });
    const navigator = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("access")) navigator("/login");
    }, [navigator]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateValues(localValues);
        navigator("/createc");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-5"
            >
                <h2 className="text-2xl font-bold text-pink-700 text-center">Create Student info</h2>

                {["year_of_study", "about_student"].map((field) => (
                    <div key={field}>
                        <label className="block mb-1 font-medium text-gray-700 capitalize">
                            {field.replace("_", " ")}
                        </label>
                        <input
                            type={field === "year_of_study" ? "number" : "text"}
                            value={localValues[field as keyof typeof localValues]}
                            onChange={(e) =>
                                setLocalValues({ ...localValues, [field]: e.target.value })
                            }
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                ))}

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Gender</label>
                    <select
                        value={localValues.gender}
                        onChange={(e) =>
                            setLocalValues({ ...localValues, gender: e.target.value })
                        }
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                >
                    Next
                </button>
            </form>
        </div>
    );
}

export default Createb;
