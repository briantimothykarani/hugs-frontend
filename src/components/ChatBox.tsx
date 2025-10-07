
import { useEffect, useRef, useState } from "react";
import VerticalNavbar from "./VerticalNavbar"; // import the sidebar

interface ChatMessage {
    message: string;
    sender: string;
}

interface ChatBoxProps {
    currentUser: string;
    otherUser: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ currentUser, otherUser }) => {
    const [message, setMessage] = useState("");
    const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
    const socketRef = useRef<WebSocket | null>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const roomName =
        currentUser < otherUser
            ? `${currentUser}_${otherUser}`
            : `${otherUser}_${currentUser}`;

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("WebSocket connected.");
        };

        socket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            if (data.type === "chat") {
                setChatLog((prev) => [...prev, { message: data.message, sender: data.sender }]);
            }
        };

        socket.onerror = (e) => {
            console.error("WebSocket error:", e);
        };

        socket.onclose = () => {
            console.warn("WebSocket closed.");
        };

        return () => {
            socket.close();
        };
    }, [roomName]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatLog]);

    const sendMessage = () => {
        const socket = socketRef.current;
        if (message.trim() && socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ message, sender: currentUser }));
            setMessage("");
        }
    };

    return (
        <div className="flex h-screen bg-gray-950 text-white">
            {/* Sidebar */}
            <VerticalNavbar />

            {/* Chat content */}
            <div className="flex flex-col flex-1 h-full max-w-4xl mx-auto bg-black border border-purple-800 rounded-lg shadow-xl overflow-hidden">
                <header className="p-4 border-b border-purple-700 text-xl font-bold text-purple-400 text-center">
                    Chat with {otherUser}
                </header>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-black">
                    {chatLog.length === 0 ? (
                        <p className="text-center text-gray-400">No messages yet...</p>
                    ) : (
                        chatLog.map((msg, idx) => {
                            const isCurrentUser = msg.sender === currentUser;
                            return (
                                <div
                                    key={idx}
                                    className={`max-w-xs break-words px-4 py-2 rounded-md ${isCurrentUser
                                        ? "bg-purple-700 text-white self-end"
                                        : "bg-blue-900 text-white self-start"
                                        }`}
                                    style={{ alignSelf: isCurrentUser ? "flex-end" : "flex-start" }}
                                >
                                    <div className="text-sm font-semibold">{isCurrentUser ? "You" : msg.sender}</div>
                                    <div>{msg.message}</div>
                                </div>
                            );
                        })
                    )}
                    <div ref={bottomRef} />
                </div>

                <footer className="flex border-t border-purple-700 p-4 gap-2">
                    <input
                        type="text"
                        placeholder="What's on  your mind..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        className="flex-1 bg-gray-900 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-purple-600 hover:bg-purple-700 rounded-r-md px-6 font-semibold transition cursor-pointer"
                    >
                        Send
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default ChatBox;