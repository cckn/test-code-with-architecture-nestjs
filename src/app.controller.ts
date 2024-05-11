import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health_check.html')
  @ApiTags('헬스 체크')
  getHealth() {
    return this.appService.getHealth();
  }
}
