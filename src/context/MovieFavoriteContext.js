import { useState, createContext } from "react";

export const MovieFavoriteContext = createContext();

export const MovieFavoriteProvider = ({ children }) => {
  const favorites =
    JSON.parse(localStorage.getItem("movieapp.favorites")) ?? [];

  const [favoriteMovies, setFavoriteMovies] = useState(favorites);

  /**
   * para poder crear guardar la pelicula en mis favoritos
   * vamos a guardar 2 cosas
   * id de la pelicula
   * fecha en la que guarde el favorito
   */

  const addToFavorite = (id) => {
    const favorite = {
      id,
      created_favorited: new Date(),
    };

    if (favoriteMovies.length === 0) {
      setFavoriteMovies([favorite]);
      saveInLocalStorage();
      return;
    }

    setFavoriteMovies([...favoriteMovies, favorite]);
    saveInLocalStorage();
  };

  const saveInLocalStorage = () => {
    localStorage.setItem("movieapp.favorites", favoriteMovies);
  };

  return (
    <MovieFavoriteContext.Provider
      value={{
        favoriteMovies,
        addToFavorite,
      }}
    >
      {children}
    </MovieFavoriteContext.Provider>
  );
};
