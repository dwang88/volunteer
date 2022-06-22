import React from 'react';
import '../components/Card.css';

export default function Card(title, imageUrl, body) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h1>{title}</h1>
                </div>
                <div className='card-body'>
                    <h1>{body}</h1>
                </div>
            </div>
        </div>
    )
}