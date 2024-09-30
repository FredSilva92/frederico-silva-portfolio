// src/utils/resizeImage.js
export const readjustImage = (src, width, height, onPassProp) => {
    const sampleImage = src;
      
    const img = new Image();
    img.onload = () => {

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, width, height);

      const resizedImageUrl = canvas.toDataURL('image/jpeg');
      onPassProp(resizedImageUrl);
    };
    img.src = sampleImage;
};
  