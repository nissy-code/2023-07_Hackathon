// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import back from"../data/meishi1.jpg";

// function ImageGenerator() {
//   const location = useLocation();
//   const { state } = location;
//   const { schoolCompany, name, website, twitter, github, message, imageUrl } = state || {};
//   const [text, setText] = useState('');
//   const [image, setImage] = useState('');

//   // const handleTextChange = (event) => {
//   //   setText(event.target.value);
//   // };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       setImage(event.target.result);
//     };

//     reader.readAsDataURL(file);
//   };

//   const generateImage = () => {
//       // 1. 画像の生成用のキャンバス要素を作成
//     const canvas = document.createElement('canvas');
//     //test

//     const text = "hogehoge";
//     const context = canvas.getContext('2d');

//     // 2. キャンバスのサイズを設定（例: 1600px × 900px）
//     const canvasWidth = 16000;
//     const canvasHeight = 900;
//     canvas.width = canvasWidth;
//     canvas.height = canvasHeight;

//     // 3. 画像を描画
//     const imageElement = new Image();
//     imageElement.src = image;
//     context.drawImage(imageElement, 0, 0, canvasWidth, canvasHeight);

//     // 4. テキストを描画
//     const textX = canvasWidth / 2; // テキストのX座標（中央に配置）
//     const textY = canvasHeight / 2; // テキストのY座標（中央に配置）
//     context.textAlign = 'center';
//     context.textBaseline = 'middle';
//     context.font = '40px Arial';
//     context.fillStyle = 'red';
//     context.fillText(text, textX, textY);

//     // 5. 生成された画像を表示するか、ダウンロードさせるなどの方法で出力
//     const generatedImage = canvas.toDataURL(); // 生成された画像のデータURLを取得
//     setImage(generatedImage); // 生成された画像を state 変数にセット

// };
//   return (
//     <div>
//       <input type="text" value={text} onChange={handleTextChange} />
//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       <button onClick={generateImage}>Generate Image</button>
//       {image && <img src={image} alt="Generated" />}
//     </div>
//   );
// }

// export default ImageGenerator;

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
      console.log('generateImage', isImageLoaded);
      setIsImageLoaded(true);
      if (imageUrl) {
        loadImage(imageUrl);
      } else {
        loadImage(back);
      }
    };
      return; // 画像がまだ読み込まれていない場合、何もせずに終了する
    }



  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
      {!isImageLoaded && <p>Loading image...</p>}
      {isImageLoaded && image && <img src={image} alt="Generated" />}
    </div>
  );
}

export default ImageGenerator;

