export type MovieResponse = {
  content: Movie[];
  totalPages: number;

}

export type User = {
  id: number,
  email: string,
  name: string
}

export type Review = {
  id: number,
  text: string,
  movieId: number,
  user: User 
  
}

export type Movie = {
  id: number,
  title: string,
  subTitle: string,
  year: number,
  imgUrl: string,
  synopsis: string,
  genreId: number,
  genere: string
  reviews: Review[]
}

export type Genre = {
  name: string,
  id: number
}

