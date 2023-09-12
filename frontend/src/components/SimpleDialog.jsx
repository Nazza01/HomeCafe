import { Dialog, DialogTitle } from "@mui/material";
import { Button } from "react-bootstrap";

const SimpleDialog = ({
	onClose, open, buttonText, dialogTitle
}) => {
	
	//TODO: add product to cart using post request? Look up more about it
	//TODO: also add a current cart feature using whatever they've added - backend functionality
	
	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>{dialogTitle}</DialogTitle>
			<Button>{buttonText}</Button>
		</Dialog>
	)
};

export default SimpleDialog;