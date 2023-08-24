import React from "react";

const ImageResult = ({ item }) => {
  console.log(item);

  return (
    <div className="imagePage__results">
      <img
        src={
          item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
        }
        alt={item.title}
        className="imagePage__img"
      />
    </div>
  );
};

export default ImageResult;
