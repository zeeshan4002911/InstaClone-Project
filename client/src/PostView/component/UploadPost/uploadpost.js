import React from "react";
import { useNavigate } from "react-router-dom";
import "./uploadpost.css";
const API_KEY = process.env.API_URL || "http://localhost:3001";


export default function UploadPost() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const name = event.target.elements.name.value;
            const location = event.target.elements.location.value;
            const likes = Math.floor(Math.random() * 1e5);
            const description = event.target.elements.description.value;

            const formData = new FormData();
            formData.append("name", name);
            formData.append("location", location);
            formData.append("description", description);
            formData.append("likes", likes);
            const file = event.target.elements.PostImage.files[0];
            formData.append("PostImage", file);

            await fetch(API_KEY + '/post', {
                method: "POST",
                body: formData,
            }).then((res) => res.json())
                .then(() => alert("Succesfully posted"))
                .catch((err) => { alert("Failed! can't upload"); console.log(err) })
                .finally(() => {
                    event.target.reset();
                    navigate("/postview")
                })
        } catch (err) {
            console.log("ERROR:", err);
            alert("All form data are mandatory")
            navigate("/upload")
        }
    };
    return (
        <div className="form-container">
            <form action={API_KEY + '/post'} encType='multipart/form-data' method="post" onSubmit={handleSubmit}>
                <input type="file" name="image" id="PostImage" required />
                <input type="text" id="name" placeholder="Author" required />
                <input type="text" id="location" placeholder="location" required />
                <input type="text" id="description" placeholder="description" className="description" required />
                <button type="submit"> Post </button>
            </form>
        </div>
    )
}