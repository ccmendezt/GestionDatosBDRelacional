import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Hola!, las rutas para hacer las peticiones las encontrarás en el readme.md';
  }
}
