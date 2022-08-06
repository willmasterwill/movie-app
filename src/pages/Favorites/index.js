import { useContext } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { CardMovie } from "../../components";

import { MovieFavoriteContext } from "../../context";

const Favorites = () => {
	const { favoriteMovies, cleanFavorites } = useContext(MovieFavoriteContext);

	return (
		<Box>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Typography
							variant="h6"
							sx={{
								textTransform: "capitalize",
							}}
						>
							Favorites
						</Typography>
					</Grid>
					<Grid item xs={4}>
						{favoriteMovies.length > 0 && (
							<Button
								variant="outlined"
								color="warning"
								onClick={cleanFavorites}
							>
								Clean
							</Button>
						)}
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
