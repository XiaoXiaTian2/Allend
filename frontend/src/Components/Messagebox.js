import React from 'react'

function Messagebox({message ,userId}) {
    const formatDate = (value)=>{
        if(!value) return '';
        const date = new Date(value);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const isSentByCurrentUser = message.senderId === userId;
    return (
        
        <div style={{ textAlign: isSentByCurrentUser ? 'right' : 'left'}}>
            <div >
                <span style={{backgroundColor:isSentByCurrentUser ?"#e2f7cb":"#d4d4d4",width:'fit-content'}}>{message.message}</span>
                <p >{formatDate(message.created_at)}</p>
            </div>
        </div>
    );
}

export default Messagebox
