import React from 'react';
import "./postcard.css";
const API_KEY = process.env.API_URL || "http://localhost:3001";

export default function Card({ data }) {
    data.date = new Date(data.date).toLocaleDateString();
    return (
        <div className='card'>
            <img className='icon right' srcSet="./Icons/option.png" alt="triple-dot" />
            <p>{data.name}</p>
            <p>{data.location}</p>
            <img className='post' src={`${API_KEY}/uploads/${data.PostImage}`} alt={`pic-${data.description}`} />
            <img className='icon' alt="Like" srcSet="./Icons/like.png" />
            <img className='icon' alt="Share" srcSet="./Icons/share.png" />
            <p>{data.date}</p>
            <p>{data.likes} likes</p>
            <p>{data.description}</p>
        </div>
    )
}