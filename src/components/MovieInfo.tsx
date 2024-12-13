import { Movie } from '@/interfaces/movie.interface';

interface Props {
  movie: Movie;
}

export function MovieInfo({ movie }: Props) {
  return (
    <article className='text-start p-1'>
      <header>
        <h3 className='text-3xl font-semibold border-b pb-2'>{movie.title}</h3>
      </header>
      <main className='space-y-4'>
        <div className='flex gap-4 border-b py-4'>
          <img
            src={movie.img}
            alt={movie.title}
            className='w-20 aspect-[3/4] object-cover rounded-lg'
          />
          <div>
            <legend className='font-semibold'>Plot</legend>
            <p className='text-base w-fit'>{movie.description}</p>
          </div>
        </div>
        <ul className='flex gap-2 justify-between'>
          <li className='text-center p-2 shadow-md flex-grow rounded'>
            <legend className='font-semibold'>Category</legend>
            <a
              href={movie.category}
              title={movie.category}
              className='hover:underline line-clamp-1 text-gray-500 text-base'
            >
              {movie.category}
            </a>
          </li>
          <li className='text-center p-2 shadow-md flex-grow rounded'>
            <legend className='font-semibold'>Release Date</legend>
            <span className='text-gray-500 text-base block'>
              {movie.releaseDate}
            </span>
          </li>
          <li className='text-center p-2 shadow-md flex-grow rounded'>
            <legend className='font-semibold'>Rating</legend>
            <span className='text-gray-500 text-base block'>
              {movie.rating}
            </span>
          </li>
        </ul>
      </main>
    </article>
  );
}
