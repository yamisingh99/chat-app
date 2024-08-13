import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function ChatPage() {
    const [chats, setChats] = useState([]);
    const isMounted = useRef(false);

    const fetchChats = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/chat");
            console.log(data);
            setChats(data);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    useEffect(() => {
        if (!isMounted.current) {
            fetchChats();
            isMounted.current = true;
        }
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>
                    <h2>{chat.chatName}</h2>
                </div>
            ))}
        </div>
    );
}

export default ChatPage;
