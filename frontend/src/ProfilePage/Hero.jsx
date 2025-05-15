import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InfoSection from "./InfoSection";
import Map from "./Map";

export default function Hero() {
  let style = {
    margin: "20px",
    width: "100%",
  };

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

  return (
    <>
      <div className="row" style={style}>
        <div className="col-3">
          <InfoSection user={user} />
        </div>
        <div className="col-9">
          <Map address={user.address} />
        </div>
      </div>
    </>
  );
}
