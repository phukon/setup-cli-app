import createLogger from '../logger';

const logger = createLogger('commands: start');

interface Config {
  port: number;
}

export function start(config: Config) {
  logger.highlight('  Starting the app  ');
  logger.log('Received configuration', config);
}