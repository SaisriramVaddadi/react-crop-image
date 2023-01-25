import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./getCroppedImage";
function ImageUpload() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCropper = () => {
    if (image) {
      var image1 = new Image();
      image1.src = image;
      var width = '347px';
      var height = '347px';
      var aspectRatio = width / height;
      if (aspectRatio !== 1 || width < 374 || height < 374) {
        return (
          <div style={{ height: '347px' }}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <button onClick={() => uploadCroppedImage()}>Upload</button>
          </div>
        );
      }
    }
  };

  const uploadCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      console.log(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input type="file" onChange={onSelectFile} />
      {showCropper()}
    </div>
  );
}

export default ImageUpload;
