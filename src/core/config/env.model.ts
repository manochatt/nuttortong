import { IsEnum } from 'class-validator';

export enum Environment {
  DEVELOPMENT = 'development',
  LOCAL = 'local',
  PRODUCTION = 'production',
  QA = 'qa',
  TEST = 'test',
  UAT = 'uat',
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;
}
