import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import back from '../data/meishi1.jpg';

function ImageGenerator() {
  const location = useLocation();
  const { state } = location;
  const { schoolCompany, name, website, twitter, github, message, imageUrl } = state || {};
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      loadImage(imageUrl);
    } else {
      loadImage(back);
    }
  }, [imageUrl]);

  const loadImage = (url) => {
    const imageElement = new Image();
    imageElement.crossOrigin = 'anonymous'; // クロスオリジンの画像を読み込むために必要

    imageElement.onload = () => {
      setIsImageLoaded(true); // 画像の読み込みが完了したことを示すフラグを設定

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const canvasWidth = 1600;
      const canvasHeight = 900;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      context.drawImage(imageElement, 0, 0, canvasWidth, canvasHeight);

      const textX = canvasWidth / 2;
      const textY = canvasHeight / 2;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = '40px Arial';
      context.fillStyle = 'red';

      const textLines = [schoolCompany, name, website, twitter, github, message];
      textLines.forEach((line, index) => {
        const offsetY = (index - (textLines.length - 1) / 2) * 50;
        context.fillText(line, textX, textY + offsetY);
      });

      const generatedImage = canvas.toDataURL();
      setImage(generatedImage);
    };

    imageElement.src = url;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const generateImage = () => {
    if (!isImageLoaded) {
      setIsImageLoaded(true);
      return; // 画像がまだ読み込まれていない場合、何もせずに終了する
    }

    if (imageUrl) {
      loadImage(imageUrl);
    } else {
      loadImage(back);
    }
  };

  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
      {!isImageLoaded && <p>Loading image...</p>}
      {isImageLoaded && image && <img src={image} alt="Generated" />}
    </div>
  );
}

export default ImageGenerator;
