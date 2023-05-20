import React from "react";

const PhotoGrid = ({ photos }) => {

  return (
    <div>
     
      <div className="grid-container">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid_item">
            <img src={`http://localhost:5000/uploads/${photo}`} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
