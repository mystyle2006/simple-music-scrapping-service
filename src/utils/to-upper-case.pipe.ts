import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ToUpperCasePipe implements PipeTransform {
  transform(value: any) {
    return `${value}`.toUpperCase();
  }
}
