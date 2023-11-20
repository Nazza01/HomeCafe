import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { API } from "../constant";
import { getToken } from "../hooks/useLocalStorage";

const CartPage = () => {
	const [userCart, setUserCart] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const axiosInstance = axios.create({
		baseURL: `${API}`,
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	});

	const removeItem = async (number) => {
		setIsError(false);
		setIsLoading(true);

		try {
			await axiosInstance.delete(`carts/${number}`);
			setUserCart((previousCart) =>
				previousCart.filter((data) => data.id !== number)
			);
		} catch (error) {
			setIsError(true);
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		const fetchCart = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				const getUserCart = await axiosInstance.get("carts?populate=image");
				setUserCart(getUserCart.data.data);
			} catch (error) {
				setIsError(true);
				console.log(error);
			}
			setIsLoading(false);
		};

		fetchCart();
	}, []);

	return (
		<>
			{isError && <div>Something went wrong...</div>}
			{isLoading ? (
				<div>Loading...</div>
			) : (
				userCart.map((cartItem) => (
					<Grid key={cartItem.id} paddingY={2}>
						<CartCard
							title={cartItem.attributes.name}
							description={cartItem.attributes.size}
							image={cartItem.attributes.image}
							cardActionText="Remove"
							cardButtonAction={() => {
								removeItem(cartItem.id);
							}}
						/>
					</Grid>
				))
			)}
		</>
	);
};

export default CartPage;
