import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInLeftBig"> {category} </h3>
      {loading && <h4 className="animate__animated animate__flash"> Loading 🔄 </h4>}
      <div className="card-grid">
        <br />
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
      <hr />
    </>
  );
};
