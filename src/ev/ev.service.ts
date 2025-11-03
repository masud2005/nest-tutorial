/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    constructor(private configService: ConfigService) { }

    getDbURL(): string {
        const dbUrl = this.configService.get<string>('DATABASE_URL');
        if (!dbUrl) {
            throw new Error('DATABASE_URL is not set in configuration');
        }
        return dbUrl;
    }
}
