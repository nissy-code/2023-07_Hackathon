import React from 'react';
import pic from "./data/meishi1.jpg"

const ImageWithText = () => {
  return (
    <div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={pic} alt="Image" style={{ width: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2 style={{ color: 'white', fontSize: '24px' }}>テキスト</h2>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
