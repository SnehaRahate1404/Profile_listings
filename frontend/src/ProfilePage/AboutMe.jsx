import './Aboutme.css'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AboutMe(){
    
        const { id } = useParams();
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            axios
            .get(`/api/user/${id}`)
            .then((response) => {
                setUser(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error fetching user data : ", error);
                setLoading(false);
            });
        }, [id]);

        if (loading) return <p>Loading ....</p>;
        if (!user) return <p>User not found</p>;

    return(
        <>
            <div className="aboutme">
                <div className="description">
                    <p>{user.about}</p>
                </div>
                <div className="contact">
                    <p>{ user.Contact}</p>
                </div>
            </div>
        </>
    )
}