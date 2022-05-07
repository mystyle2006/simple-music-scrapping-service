import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { vendorDatabase } from './database/vendor.database';
import { vendorInformationDictionary } from './dictionary/vendor-information.dictionary';
import { VendorEnum } from './enum/vendor.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  vendorDatabase.create(
    VendorEnum.MELON,
    vendorInformationDictionary[VendorEnum.MELON],
  );

  const config = new DocumentBuilder()
    .setTitle('Music Chart')
    .setDescription('The Music Chart API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
