import { Injectable } from '@nestjs/common';
import { AppRequestBodyDto } from './dto/app-request.dto';
import { AppResponseBodyDto } from './dto/app-response.dto';

@Injectable()
export class AppService {
  create(input: AppRequestBodyDto): AppResponseBodyDto  {
    return ({result: `Microservice A has saved user:${input.name}`});
  }
}
