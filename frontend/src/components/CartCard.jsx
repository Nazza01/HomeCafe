import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Typography,
} from "@mui/material";
import React from "react";

const CartCard = ({
	image,
	title,
	description,
	altText,
	cardActionText,
	cardButtonAction,
}) => {
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
					<Button size="small" onClick={cardButtonAction}>
						{cardActionText}
					</Button>
				</CardActions>
			) : (
				<></>
			)}
		</Card>
	);
};

export default CartCard;
