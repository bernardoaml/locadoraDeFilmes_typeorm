import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { MovieCreate, MovieRead, MovieRepo, MovieUpdate, Pagination, PaginationParams } from "../interfaces";
import { movieRepo } from "../repositories";
import { AppError } from "../errors";

const create = async (payload: MovieCreate): Promise<Movie> =>{
    return await movieRepo.save(payload)
}


const read = async ({
  nextPage, 
  page, 
  perPage, 
  prevPage,
  order,
  sort,

  }: PaginationParams): Promise<Pagination> => {
     const [movies, count]: Array<MovieRead | number> = 
     await movieRepo.findAndCount({
      order: {[sort]: order},
      skip: page, 
      take: perPage
    })

    return {
      prevPage: page <=1? null : prevPage, 
      nextPage: count - page <= perPage? null : nextPage, 
      count, 
      data: movies, 
    }
  };


  const partialUpdate = async (
    movie: Movie,
    payload: MovieUpdate
  ): Promise<Movie> => {
    return await movieRepo.save({ ...movie, ...payload });
  };

  const destroy = async (movie: Movie): Promise<void> => {

    await movieRepo.remove(movie);
  };

export default{create, read, partialUpdate, destroy}