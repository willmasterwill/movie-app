import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Chip,
} from "@mui/material";

const CardMovie = ({ movie }) => {
  return (
    <Grid item xs={12} md={4} my={3}>
      <Card
        sx={{
          height: 400,
        }}
      >
        <CardMedia
          component="img"
          height="240"
          sx={{
            objectPosition: "top",
          }}
          image={movie.Poster}
          alt="green iguana"
        />
        <CardContent
          sx={{
            cursor: "pointer",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {movie.Title}
              </Typography>
              <Typography variant="body1">{movie.Year}</Typography>
              <Chip
                label={movie.Type}
                color="success"
                size="small"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardMovie;
