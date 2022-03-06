import React, { useState } from 'react';
function SendMessageForm({sendMessage}) {
	const [message, setMessage] = useState('');
	return (
		<form onSubmit={(e)=>{
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }} className="send-message-form">
			<input
				placeholder="message..."
				onChange={(e) => setMessage(e.currentTarget.value)}
				value={message}
			/>
			<button disabled={!message} type="submit" className="btn btn-primary">
				Send
			</button>
		</form>
	);
}
export default SendMessageForm;
