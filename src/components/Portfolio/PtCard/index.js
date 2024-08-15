import React, {useState, useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import './index.scss'

const PtCard = ({props}) => {
  const data = props.data;

  const [resizedImage, setResizedImage] = useState(null);

  useEffect(() => {
    const sampleImage = require(`../../../images/${data.image}`);
    
    const img = new Image();
    img.onload = () => {
      const width = 500;
      const height = 400;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, width, height);

      const resizedImageUrl = canvas.toDataURL('image/jpeg');
      setResizedImage(resizedImageUrl);
    };
    img.src = sampleImage;
  }, []);

  return (
    <Card className="root zoom-card">
       
        {resizedImage && (
          <CardMedia
            component="img"
            className="zoom-card-media"
            image={resizedImage}
            alt={data.title}
          />
        )}
        <CardContent className="hover-content">
          <div className="hover-layout">
            <div className="text-elements">
              {data.title}: {data.shortText}
            </div>
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="project-link text-elements">
              {data.goTo}
            </a>
          </div>


        </CardContent>

    </Card>
  );
}

export default PtCard;