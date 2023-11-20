import { Grid, Tab, Tabs } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaDialogCard from "../components/MenuCard";
import { API } from "../constant";
import { getToken } from "../hooks/useLocalStorage";

const MenuPage = () => {
	const [menuTypes, setMenuTypes] = useState([]);
	const [menuItems, setMenuItems] = useState([]);

	const [selectedMenuType, setSelectedMenuType] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const axiosInstance = axios.create({
				baseURL: `${API}`,
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
			setIsError(false);
			setIsLoading(true);

			try {
				const getMenuTypes = await axiosInstance.get("menu-types");
				setMenuTypes(getMenuTypes.data.data);

				const getMenuItems = await axiosInstance.get(
					"menu-items?populate=menuType&populate=image"
				);
				setMenuItems(getMenuItems.data.data);
				setSelectedMenuType(getMenuTypes.data.data[0].attributes.name);
			} catch (error) {
				setIsError(true);
				console.log(error);
			}
			setIsLoading(false);
		};

		fetchData();
	}, []);

	const handleTabChange = (event, newValue) => {
		setSelectedMenuType(menuTypes[newValue].attributes.name);
	};

	return (
		<>
			{isError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<Grid container flexDirection="column" alignContent="center">
					<Tabs
						value={menuTypes.findIndex(
							(type) => type.attributes.name === selectedMenuType
						)}
						onChange={handleTabChange}
						centered>
						{menuTypes.map((type) => (
							<Tab key={type.id} label={type.attributes.name} />
						))}
					</Tabs>
					{menuItems
						.filter(
							(menuItem) =>
								menuItem.attributes.menuType.data.attributes.name ===
								selectedMenuType
						)
						.map((menuItem) => (
							<Grid item key={menuItem.id} paddingY={2}>
								<MediaDialogCard
									image={`http://localhost:1337${menuItem.attributes.image.data?.attributes.url}`}
									title={menuItem.attributes.name}
									description={menuItem.attributes.description}
									altText={menuItem.attributes.altText}
									dialogTitle="Order"
									dialogButtonText="Add to Cart"
									cardActionText="Order"
								/>
							</Grid>
						))}
				</Grid>
			)}
		</>
	);
};

export default MenuPage;
