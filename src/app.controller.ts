import { Controller, Post, Param, Body, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { AppRequestBodyDto } from './dto/app-request.dto';
import { AppResponseBodyDto } from './dto/app-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/poc')
  create(@Body() appDto: AppRequestBodyDto): AppResponseBodyDto {
    return this.appService.create(appDto);
  }
}
