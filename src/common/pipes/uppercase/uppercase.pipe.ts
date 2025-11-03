import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value !== 'string') {
      throw new BadRequestException('Value must be a string!');
    }
    return value.toUpperCase();
  }
}
