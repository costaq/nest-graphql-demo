import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { News } from './models/news.model';
import { NewsService } from './news.service';

@Resolver((of) => News)
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Query((returns) => News)
  async news(@Args('id') id: string): Promise<News> {
    const news = await this.newsService.findOneById(id);
    if (!news) {
      throw new NotFoundException(id);
    }
    return news;
  }

  @Query((returns) => [News])
  async newsList(): Promise<News[]> {
    const newsList = await this.newsService.findAll();
    return newsList;
  }
}
