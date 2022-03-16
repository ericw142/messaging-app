import React from 'react'

export const Message = ({content, userName, sentDate}) => {
    return (
        <div className='message'>
            <p className='message-content'>{content}</p>
            <p className='message-info'>{userName} - {new Date(sentDate).toLocaleDateString({})}</p>
        </div>
    )
}