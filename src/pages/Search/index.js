import { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import {
	Box,
	Container,
	Grid,
	Card,
	CardContent,
	Stack,
	Typography,
	TextField,
	Button,
} from "@mui/material";

import { MenuBar } from "../../components";

import LogoutIcon from "@mui/icons-material/Logout";

const Search = () => {
	const [searchText, setSearchText] = useState("");
	const history = useNavigate();

	const { user, logout, isAuth } = useContext(AuthContext);

	function searchInput(event) {
		setSearchText(event.target.value);
	}

	function searchButton() {
		if (searchText === "") return;
		history(`/search/${searchText}`);
	}

	function logoutButton() {
		logout();
		history("/");
	}

	if (!isAuth()) {
		return <Navigate to="/" />;
	}

	return (
		<Box>
			<MenuBar
				text={user.name}
				buttonClick={logoutButton}
				buttonIcon={<LogoutIcon />}
			/>
			<Container maxWidth="sm">
				<Grid container mt={6}>
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Typography variant="h2">
									OMDB Search
								</Typography>
								<Stack
									mt={2}
									direction="row"
									justifyContent="space-between"
									spacing={2}
								>
									<TextField
										label="Movie or tv show..."
										fullWidth
										onChange={searchInput}
									/>
									<Button
										variant="contained"
										fullWidth
										onClick={searchButton}
									>
										Search
									</Button>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Search;
