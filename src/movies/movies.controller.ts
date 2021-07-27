import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id : ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie whit the id: ${movieId}`;
  }

  // 전체를 업데이트 할때 Put , 일부를 업데이트 할때 Patch
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will update a movie whit the id: ${movieId}`;
  }
}
