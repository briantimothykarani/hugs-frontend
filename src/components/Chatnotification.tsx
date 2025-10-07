import React from "react";

interface NotificationProps {
    notifications: { [sender: string]: number }; // sender => unread count
    onClick: (sender: string) => void;
}

const Chatnotification: React.FC<NotificationProps> = ({ notifications, onClick }) => {
    const senders = Object.keys(notifications);

    if (senders.length === 0) {
        return <p className="text-gray-400 p-4">No new messages</p>;
    }

    return (
        <ul className="divide-y divide-purple-700">
            {senders.map((sender) => (
                <li
                    key={sender}
                    className="cursor-pointer p-3 hover:bg-purple-800 flex justify-between items-center"
                    onClick={() => onClick(sender)}
                >
                    <span className="font-semibold text-white">{sender}</span>
                    <span className="bg-purple-600 text-white rounded-full px-2 py-1 text-xs font-bold">
                        {notifications[sender]}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default Chatnotification;