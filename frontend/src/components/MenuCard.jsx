import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderDialog from "./OrderDialog";

const MenuCard = ({
	image,
	title,
	description,
	altText,
	dialogTitle,
	dialogButtonText,
	cardActionText,
}) => {
	const [open, setOpen] = useState(false);

	const handleDialogOpen = () => {
		setOpen(true);
	};

	const handleDialogClose = () => {
		setOpen(false);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="240"
				width="480"
				image={image}
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
			{cardActionText ? (
				<CardActions>
					<Divider color="grey" />
					<Button size="small" onClick={handleDialogOpen}>
						{cardActionText}
					</Button>
					<OrderDialog
						dialogTitle={dialogTitle}
						buttonText={dialogButtonText}
						open={open}
						onClose={handleDialogClose}
						name={title}
					/>
				</CardActions>
			) : (
				<></>
			)}
		</Card>
	);
};

export default MenuCard;
