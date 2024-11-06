import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('health_check.html')
export class HealthCheckController {
  @ApiTags('헬스 체크')
  getHealth() {
    return 'ok';
  }
}
