import React from 'react';
import { 
	Card,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material';
import { CardActionArea } from '@mui/material';

const CardComponent = ({
  image, title, description, altText
}) => {
  return (
    <Card sx={{ maxWidth: 345, paddingTop: 5 + '%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={image}
          alt={altText ? altText : "No alt text provided"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
						{title ? title : "No title provided"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
						{description ? description : "No description provided"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;