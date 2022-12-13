import React, { useEffect, useState } from 'react';
import "./postview.css"
import Card from './component/PostCard/postcard';
import { useNavigate } from 'react-router-dom';

const API_KEY = process.env.API_URL || "http://localhost:3001/post";

export default function Postview() {
    const [data, setdata] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(API_KEY)
            .then(response => response.json())
            .then(data => {setdata([...data.data]) /*; console.log(data.data) */})
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            <div className='title-bar'>
                <h1>Instaclone</h1>
                <img alt="upload" srcSet="./Icons/camera.png" onClick={() => { navigate("/upload") }} />
            </div>
            {data.map((obj) => {
                return (
                    <Card key={obj.name + obj.likes} data={obj} />
                );
            })}
        </>
    );
}