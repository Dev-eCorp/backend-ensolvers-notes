import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'brgjiol6mbmaitf1pz6g-mysql.services.clever-cloud.com',
			port: 3306,
			username: 'ugxq1jqjtkwgi7mu',
			password: 'KTzUIlU2AkjCdywQm81m',
			database: 'brgjiol6mbmaitf1pz6g',
			entities: [__dirname + '/../**/*.entity.js'],
			synchronize: true,
			logger: 'advanced-console',
			logging: 'all',
		}),
		NotesModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
