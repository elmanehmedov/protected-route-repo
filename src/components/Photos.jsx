import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserCard } from "react-ui-cards";
const Photos = () => {
  const [images, setImages] = useState(null);
  const navigate = useNavigate();

  const getPhotos = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((images) => {
        setImages(images.data);
      });
  };


  useEffect(() => {
    getPhotos();
  }, [images]);

  return (
    <>
      <div className="cards">
        {images !== null &&
          images.map((image) => (
            <div className="card" key={image.id}>
              <UserCard
                key={image.id}
                onClick={() => navigate(`/photos/${image.id}`)}
                header={image.url}
                name={image.id}
                positionName={image.title}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Photos;
