import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { validate } from './env.validation';

export const environmentConfiguration: ConfigModuleOptions = {
  envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
  expandVariables: true,
  isGlobal: true,
  validate,
  validationOptions: { abortEarly: true },
};
