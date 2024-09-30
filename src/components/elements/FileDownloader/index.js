import React from 'react';
import './index.scss';

const FileDownloader = () => {
  // Function to handle file download
  const downloadFile = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/CV_Pedro_Silva.pdf`; // Use PUBLIC_URL to reference the public directory
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_Pedro_Silva.pdf'; // The name of the file that will be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='file-downloader'>
      <div className='image-download' style={{ backgroundImage: `url(${require(`./download.png`)})` }}></div>
      <button onClick={downloadFile}>
        Download my resume
      </button>
    </div>
  );
};

export default FileDownloader;