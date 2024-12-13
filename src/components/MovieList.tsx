import { Movie } from '@/interfaces/movie.interface';
import { MovieCard } from '@/components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '@/css/swiper.css'
import { FreeMode, Navigation } from 'swiper/modules';

interface Props {
  movies: Movie[];
  category: string;
}

export function MovieList({ movies, category }: Props) {
  return (
    <section className='space-y-5 mt-16' id={category}>
      <h2 className='text-3xl font-medium'>{category}</h2>
      <Swiper
        slidesPerView={5}
        grabCursor
        navigation
        freeMode
        modules={[Navigation, FreeMode]}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.title}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
