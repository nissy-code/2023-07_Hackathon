import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

// import ImageLogo from "./image.svg";
import "./ImageUpload.css";

import storage from "../firebase";
import {ref, uploadBytesResumable} from "firebase/storage";

const ImageUploader = () => {
    // ローディングの状態を見ている
    
    const [loading, setLoading] = useState(false);
    const [isUploaded, setUploaded] = useState(false);

    const navigate = useNavigate();

    const OnFileUploadToFirebase =(e) => {
        // console.log(e.target.files[0].name);
        const file = e.target.files[0];
        const storageRef = ref(storage, "image/" + File.name);
        // uploadBytes(storageRef, file).then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        //   });
        // upload時間の監視
        const uploadImage = uploadBytesResumable(storageRef, file);

        uploadImage.on(
            "state_changed",
            // ロードが開始されたら
            (snapshot) => {
                setLoading(true);
            },
            (err) => {
                console.log(err);
            },
            () => {
                setLoading(false);
                setUploaded(true);
            }
        )
    };

    // upload後の処理

    useEffect(() => {
        if (isUploaded) {
          const timer = setTimeout(() => {
            navigate("/newstep1"); // step1.jsxへのパスを指定してください
          }, 5000);
    
          return () => clearTimeout(timer);
        }
      }, [isUploaded, navigate]);

    return (
        // 状態確認
        <>{loading ? (
            <h2> アップロード中です.</h2>
        ) : (
            <>
            {isUploaded ? (
                <h2>アップロード完了!!!...5秒後に次の画面に遷移します.</h2>
            ) : (
                <div className="outerBox">
                    <div className="title">
                        <h2>画像アップローダー</h2>
                        <p>JpegかPngの画像ファイル</p>
                    </div>
                    <div className="imageUplodeBox">
                        <div className="imageLogoAndText">
                        {/* <img src={ImageLogo} alt="imagelogo" /> */}
                        <p>ここにドラッグ＆ドロップしてね</p>
                        </div>
                        <input 
                            className="imageUploadInput"
                            multiple name="imageURL"
                            type="file"
                            accept=".png, .jpeg, .jpg"
                            onChange={OnFileUploadToFirebase}
                        />
                    </div>
                    <p>または</p>
                    <Button variant="contained">
                        ファイルを選択
                        <input 
                            className="imageUploadInput"
                            type="file"
                            accept=".png, .jpeg, .jpg"
                            onChange={OnFileUploadToFirebase}
                        />
                    </Button>
                </div>
            )}
            </>
        )}

        </>
        
        
        
    
   
  );
};

export default ImageUploader;
