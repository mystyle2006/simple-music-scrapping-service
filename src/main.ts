import { NestFactory } from '@nestjs/core';

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

  await app.listen(3000);
}
bootstrap();
