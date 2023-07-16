import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import back from '../data/meishi1.jpg';

function ImageGenerator() {
  const location = useLocation();
  const { state } = location;
  const { schoolCompany, name, website, twitter, github, message, imageUrl } = state || {};
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
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
    const canvas = document.createElement('canvas');
    const text = `${schoolCompany}\n${name}\n${website}\n${twitter}\n${github}\n${message}`;
    const context = canvas.getContext('2d');
    const canvasWidth = 1600;
    const canvasHeight = 900;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const imageElement = new Image();
    imageElement.crossOrigin = 'anonymous'; // クロスオリジンの画像を読み込むために必要
    imageElement.onload = () => {
      context.drawImage(imageElement, 0, 0, canvasWidth, canvasHeight);

      const textX = canvasWidth / 2;
      const textY = canvasHeight / 2;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = '40px Arial';
      context.fillStyle = 'red';

      // 改行を考慮してテキストを描画
      const lines = text.split('\n');
      lines.forEach((line, index) => {
        const offsetY = (index - (lines.length - 1) / 2) * 50;
        context.fillText(line, textX, textY + offsetY);
      });

      const generatedImage = canvas.toDataURL();
      setImage(generatedImage);
    };

    // Firebaseから画像を読み込む
    if (imageUrl) {
      imageElement.src = imageUrl;
    } else {
      imageElement.src = back;
    }
  };

  useEffect(() => {
    generateImage();
  },[])

  return (
    <div>
      {image && <img src={image} alt="Generated" />}
    </div>
  );
}

export default ImageGenerator;
