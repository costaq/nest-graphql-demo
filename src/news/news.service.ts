import { Injectable } from '@nestjs/common';
import { NewNewsInput } from './dto/new-news.input';
import { NewsArgs } from './dto/news.args';
import { News } from './models/news.model';

@Injectable()
export class NewsService {
  async create(data: NewNewsInput): Promise<News> {
    return {} as any;
  }

  async findOneById(id: string): Promise<News> {
    return { id: '32131', title: '2222' };
  }

  // async findAll(newsArgs: NewsArgs): Promise<News[]> {
  //   return [] as News[];
  // }

  async findAll(): Promise<News[]> {
    return [{ id: '32131', title: '2222' }] as News[];
  }
}
