
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Confirmreg() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Function to delete the student by ID


    // Cancel delete, go back to home page
    const handleCancel = () => {
        navigate("/home");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-black">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">

                <p className="mb-6 text-gray-700">
                    Succesfully created an account<br />

                </p>

                {error && (
                    <p className="mb-4 text-red-600 font-medium">
                        {error}
                    </p>
                )}

                <div className="flex justify-center space-x-4">
                    <button

                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-2 px-6 rounded transition"

                    ><Link to='/ChatBoX'>
                            {loading ? "creating account..." : "Account created"}
                        </Link>
                    </button>
                    <button
                        onClick={handleCancel}
                        disabled={loading}
                        className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-2 px-6 rounded transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Confirmreg;