export interface Movie {
  title: string;
  description: string;
  releaseDate: string;
  img: string;
  rating: number;
  category: string;
}

export interface Category {
  _id: string;
  category: string;
}
