import React, { useState } from 'react';
import { 
	Card,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material';
import { CardActionArea } from '@mui/material';
import SimpleDialog from './SimpleDialog';
import { Button } from 'react-bootstrap';

const CardComponent = ({
  image, title, description, altText
}) => {
  const [open, setOpen] = useState(false);
  
  const handleDialogOpen = () => {
    setOpen(true);
  };
  
  const handleDialogClose = () => {
    setOpen(false);
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleDialogOpen} >
        <CardMedia
          component="img"
          height="240"
          width="480"
          image={`http://localhost:1337${image}`}
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
      <SimpleDialog 
        dialogTitle={`Order ${title}`}
        buttonText={`Add to cart`}
        open={open}
        onClose={handleDialogClose}
      />
    </Card>
  );
}

export default CardComponent;