import { useContext } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CardMovie } from "../../components";

import { MovieFavoriteContext } from "../../context";

const Favorites = () => {
	const { favoriteMovies } = useContext(MovieFavoriteContext);

	return (
		<Box>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography
							variant="h6"
							sx={{
								textTransform: "capitalize",
							}}
						>
							Favorites
						</Typography>
					</Grid>
					{favoriteMovies.length > 0 &&
						favoriteMovies.map((favorite, index) => (
							<CardMovie movie={favorite.movie} key={index} />
						))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Favorites;
