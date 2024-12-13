import { Movie } from '@/interfaces/movie.interface';
import { AiFillStar } from 'react-icons/ai';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MovieInfo } from './MovieInfo';

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  const MySwal = withReactContent(Swal);
  const stars = [];

  for (let i = 0; i < Math.ceil(movie.rating / 2); i++) {
    stars.push(i + 1);
  }

  const showAlert = () => {
    MySwal.fire({
      html: <MovieInfo movie={movie} />,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return (
    <div className='relative w-48 aspect-[3/4] rounded-2xl overflow-clip group'>
      <img
        src={movie.img}
        alt={movie.title}
        className='absolute top-0 left-0 size-full object-cover -z-10 group-hover:scale-110 transition-transform duration-300'
      />
      <div className='absolute opacity-0 size-full inset-0 flex flex-col gap-2 p-5 bg-black/50 backdrop-blur-sm group-hover:opacity-100 transition-opacity'>
        <header className='font-medium line-clamp-2'>{movie.title}</header>
        <span className='text-xs text-pretty flex flex-col gap-1'>
          <p className='flex flex-col line-clamp-4'>
            {movie.description}
            <button
              className='underline hover:text-amber-400 transition-colors text-start'
              onClick={showAlert}
            >
              Ver mas
            </button>
          </p>
          <small className='font-thin italic'>{movie.releaseDate}</small>
        </span>
        <footer className='flex text-xs items-end justify-between mt-auto'>
          <a
            href={movie.category}
            title={movie.category}
            className='hover:underline line-clamp-1 w-14 overflow-ellipsis'
          >
            {movie.category}
          </a>
          <span className='flex'>
            {stars.map((n) => (
              <AiFillStar key={n} className='size-4 fill-amber-400' />
            ))}
          </span>
        </footer>
      </div>
    </div>
  );
}
