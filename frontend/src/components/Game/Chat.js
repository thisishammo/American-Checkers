import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../../store/chatSlice';

function Chat() {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const messages = useSelector(state => state.chat.messages);

    const handleSend = () => {
        dispatch(sendMessage(message));
        setMessage('');
    };

    return (
        <div className="chat">
            <div className="messages">
                {messages.map((msg, idx) => <p key={idx}><strong>{msg.user}:</strong> {msg.text}</p>)}
            </div>
            <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message..." />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default Chat; 