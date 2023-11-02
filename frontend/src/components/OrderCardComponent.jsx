import React, { useState } from 'react';
import { 
	Card,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material';
import { CardActionArea } from '@mui/material';
import OrderDialog from './OrderDialog';

const OrderCardComponent = ({
  image, 
  title, 
  description, 
  altText, 
  dialogTitle, 
  dialogButtonText
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
      <OrderDialog
        dialogTitle={dialogTitle}
        buttonText={dialogButtonText}
        open={open}
        onClose={handleDialogClose}
        name={title}
      />
    </Card>
  );
}

export default OrderCardComponent;