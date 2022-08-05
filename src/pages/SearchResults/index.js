import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Container, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import Services from "../../services";
import { CardMovie, MenuBar, MenuBarChildren } from "../../components";

const SearchResults = () => {
	const [movies, setMovies] = useState([]);
	const { searchText } = useParams();
	const history = useNavigate();

	async function getSearchResults() {
		const data = await Services.searchByText(searchText);
		setMovies(data.Search);
		console.log(data.Search);
	}

	useEffect(() => {
		getSearchResults();
	}, []);

	function backButton() {
		history("/search");
	}

	return (
		<Box>
			<MenuBar
				text={"Search Results: " + searchText}
				buttonClick={backButton}
				buttonIcon={<CloseIcon />}
			/>

			<MenuBarChildren text={"Search Results: " + searchText}>
				<IconButton color="info" onClick={backButton}>
					<CloseIcon />
				</IconButton>
			</MenuBarChildren>

			<Container>
				{movies.length > 0 &&
					movies.map((movie, index) => (
						<CardMovie movie={movie} key={index} />
					))}
			</Container>
		</Box>
	);
};

export default SearchResults;
