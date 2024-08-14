// src/utils/resizeImage.js
export const resizeImage = (src, width, height) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
  
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg'));
      };
  
      img.onerror = err => {
        reject(err);
      };
    });
  };
  