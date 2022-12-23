import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Photo = () => {
  let { id } = useParams();
  const [photo, setPhoto] = useState(null);

  const getPhoto = async (id) => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((image) => {
        console.log(image.data);
        setPhoto(image.data);
      });
  };

  useEffect(() => {
    getPhoto(id);
  }, [id]);

  return (
    <div>
      {photo && (
        <div className="photo__container">
          <img className="photo__img" src={photo?.url} alt={photo?.title} />

          <p className="photo__id"> {photo?.id}</p>
          <p className="photo__title"> {photo?.title}</p>
        </div>
      )}
    </div>
  );
};

export default Photo;
