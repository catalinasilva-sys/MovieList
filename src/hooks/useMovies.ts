import { Category, Movie } from '@/interfaces/movie.interface';
import { getMovies } from '@/services/movies.service';
import { useEffect, useState } from 'react';

export const useMovies = () => {
  const [movies, setMovies] = useState<Record<string, Movie[]>>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getMovies().then(({ categorizedMovies, categories }) => {
      setMovies(categorizedMovies);
      setCategories(categories);
      setIsLoaded(true);
    });
  }, []);

  return {
    movies,
    isLoaded,
    categories,
  };
};
