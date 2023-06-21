import React, { useEffect, useState } from "react";
import axios from "axios";
import { base64StringToBlob } from "blob-util";
import { useParams } from "react-router-dom";

export default function show_image() {
  const id_image = useParams();
  const [image, setImage] = useState(null);

  const getImage = async (image_id) => {
    await axios
      .get(`http://localhost:8000/api/image/get/${image_id}`)
      .then((res) => {
        console.log(res);
        // convert base64 string to blob
        const blob = base64StringToBlob(res.data.data);
        // convert blob to url
        const url = URL.createObjectURL(blob);
        setImage(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getImage(id_image.id);
  }, [id_image]);

  return (
    <>
      {image ? <img src={image} alt='image' /> : <p>loading...</p>}
    </>
  );
}
