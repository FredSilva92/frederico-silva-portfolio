import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    height: 320
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const PtCard = ({props}) => {
  const classes = useStyles();
  const data = props.data;

  console.log('Click1');
  console.log(props);

  return (
    <Card onClick={() => props.cardClick(props.name)} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={require(`../../../images/${data.image}`)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.shortText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PtCard;