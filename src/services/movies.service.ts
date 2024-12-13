import { Movie } from '@/interfaces/movie.interface';
import mockData from '@/mock-data.json';
import mockCategories from '@/mock-categories.json'

export const getMovies = async () => {
  const categorizedMovies = mockData.reduce<Record<string, Movie[]>>(
    (acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = []; // Inicializa la categoría si no existe
      }
      acc[curr.category].push(curr); // Agrega la película a la categoría correspondiente
      return acc;
    },
    {}
  );


  return {categorizedMovies, categories: mockCategories};
};
