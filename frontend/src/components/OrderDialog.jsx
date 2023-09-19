import { Close } from "@mui/icons-material";
import { 
	Button, 
	Dialog, 
	DialogTitle, 
	FormControl, 
	Grid, 
	IconButton, 
	InputLabel, 
	MenuItem, 
	Select } 
from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { API } from "../constant";
import { getToken } from "../hooks/useLocalStorage";

const OrderDialog = ({
	onClose, open, buttonText, dialogTitle, name
}) => {
	
	const [size, setSize] = useState('');
	
	const sizeChange = (event) => {
		setSize(event.target.value);
	}
	
	//TODO: Add confirmation that the item has been added to the cart - use toast notifications to display this
	const addToCart = async (name, size) => {
		let data = JSON.stringify({
			"data": {
				"name": name,
				"size": size
			}
		});
		
		let config = {
			method: 'post',
			url: `${API}/carts`,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${getToken()}`
			},
			data: data,
		}
		
		try {
			await axios.request(config);
		} catch (error) {
			console.log(error)
		}
	}
	
	return (
		<Dialog onClose={onClose} open={open} fullWidth maxWidth='xs'>
			<Grid container direction="column">
				<DialogTitle sx={{ m: 0, p:2 }}>
					{dialogTitle}
				</DialogTitle>
				<IconButton
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
					}}
				>
					<Close />
				</IconButton>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small-label">Size</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={size ? size : "Regular"}
						label="Size"
						onChange={sizeChange}
					>
						<MenuItem value={"Regular"}>Regular</MenuItem>
						<MenuItem value={"Large"}>Large</MenuItem>
					</Select>
				</FormControl>
				<Grid display="flex" alignItems="center" justifyContent="center" paddingY={2}>
					<Button variant="contained" size="large" onClick={() => addToCart(name, size)}>
						{buttonText}
					</Button>
				</Grid>
			</Grid>
		</Dialog>
	)
};

export default OrderDialog;