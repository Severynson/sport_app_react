import { FC } from "react";
import  Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface CardProp {
    name: string;
    description: string;
    picture: string;
};

const CardComponent: FC<CardProp> = ({name, description, picture}) => {
    return (
        <Card sx={{ width: 330, height: 350, position: "relative" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{position: "absolute", bottom: 0}}>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    );
};

export default CardComponent;