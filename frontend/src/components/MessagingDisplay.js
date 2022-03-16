import React from 'react'
import { Message } from './display/Message'
import { Input } from './display/Input'

export const MessagingDisplay = (props) => {
    const testingArray = [
        {userName: 'TESTUSER',content: 'asdf',sentDate: new Date()},
        {userName: 'JR', sentDate: new Date(), content: 'asdfasdfasdfasdfasdfasdf'},
        {content: 'asdfasdfasdf'}
    ];
    return (
        <div className='messaging-display'>
            {testingArray.map((el) => {
                return <Message content={el.content} userName={el.userName} sentDate={el.sentDate}/>
            })}
            <Input />
        </div>
    )
}