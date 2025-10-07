
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { getImageUrl } from "../utils/getImageUrl";

function Read() {
    const [data, setData] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        axiosInstance.get(`/StudentUpdate/${id}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
        })
            .then((res) => setData(res.data))
            .catch((err) => {
                console.error("Failed to fetch student data:", err);
            });
    }, [id]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-black flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-8 space-y-4">
                <h2 className="text-3xl font-bold text-purple-800 text-center">Student Details</h2>
                <img
                    src={getImageUrl(data.profile_pic)}
                    alt="Profile"
                    className="mx-auto w-24 h-24 rounded-full"
                />
                <div className="text-gray-800 space-y-2">
                    <p><strong className="text-purple-700">Username:</strong> {data.username}</p>
                    <p><strong className="text-purple-700">Age:</strong> {data.age}</p>
                    <p><strong className="text-purple-700">Institution:</strong> {data.institution}</p>
                    <p><strong className="text-purple-700">Gender:</strong> {data.gender}</p>
                    <p><strong className="text-purple-700">Year of Study:</strong> {data.year_of_study}</p>
                    <p><strong className="text-purple-700">About:</strong> {data.about_student}</p>
                </div>
                <div className="flex justify-between mt-6">
                    <Link to={`/update/${id}`} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Edit</Link>
                    <Link to="/chatbox" className="text-purple-700 hover:underline">Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Read;