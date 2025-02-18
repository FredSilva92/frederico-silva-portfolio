import React, {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import './index.scss'
import { readjustImage } from '../../Utils/ResizeImage';

const PtCard = ({props}) => {
  const data = props.data;

  const [resizedImage, setResizedImage] = useState(null);

  useEffect(() => {
    readjustImage(require(`../../../images/${data.image}`), 500, 400, setResizedImage);
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