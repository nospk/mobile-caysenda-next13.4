'use client'
import { useState, useCallback, useRef } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import styles from './AvatarEditor.module.css'
import Image from 'next/image';

export function getCroppedImg(image: HTMLImageElement, crop: Crop, fileName: string): Promise<Blob> {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas context is null.");
  }

  // New lines to be added
  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Failed to create blob."));
          return;
        }

        const file = new File([blob], fileName, { type: blob.type });
        resolve(file);
        if (process.env.NODE_ENV !== 'production') generateDownload(file);
      },
      "image/jpeg",
      1
    );
  });
}

function generateDownload(blob: Blob) {
  const previewUrl = window.URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.download = 'cropPreview.png';
  anchor.href = URL.createObjectURL(blob);
  anchor.click();

  window.URL.revokeObjectURL(previewUrl);
}

type Props = {
  sourceImg: string
  onFinishUpload: () => void
}
function AvatarEditor({ sourceImg, onFinishUpload }: Props) {
  const [src, setSrc] = useState(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0, width: 100, height: 100, unit: '%' });
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);

  const onLoad = useCallback((img: HTMLImageElement) => {
    imgRef.current = img;
  }, []);


  const uploadImage = async () => {
    if (imgRef.current && completedCrop) {
      const blobImg = await getCroppedImg(imgRef.current, completedCrop, 'avatar');
      // upload to supabase
      console.log(blobImg);
      onFinishUpload();
    }
  };

  return (
    <div className="App">
      <ReactCrop
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)
        }
        circularCrop={true}
        keepSelection={true}
        minWidth={100}
        className={styles.crop}
      >
        <Image src={sourceImg} alt={'avartar'} width={300} height={300} />
      </ReactCrop>
      <button
        type="button"
        disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={uploadImage}
      >
        Upload avatar
      </button>
    </div>)
}

export default AvatarEditor;
