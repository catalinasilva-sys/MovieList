import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useMovies } from './hooks/useMovies';
import { MovieList } from './components/MovieList';
import { AiOutlineLoading } from 'react-icons/ai';

function App() {
  const { movies, isLoaded, categories } = useMovies();

  return (
    <div className='mx-auto'>
      <NavBar />
      <main className='mx-auto w-5/6'>
        {isLoaded ? (
          categories.map(({ _id, category }) => {
            if (movies[category]) {
              return (
                <MovieList
                  key={_id}
                  category={category}
                  movies={movies[category]}
                />
              );
            }
          })
        ) : (
          <AiOutlineLoading className='size-5 animate-spin' />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
