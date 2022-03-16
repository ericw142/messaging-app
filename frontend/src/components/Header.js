import React from 'react'

export const Header = (props) => {
    return (
        <div className='header row justify-end'>
            <div className='row-item'>
                <div className='user-icon mr-1'></div>
            </div>
            <div className='row-item'>
                <p className='mr-1'>{props.user.userName}</p>
            </div>
        </div>
    )
}