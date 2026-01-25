import { env } from '@/env';
import pino from 'pino';

const logger = pino({
  level: env.PINO_LOG_LEVEL,
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: {
    paths: ['email'],
  },
});

export default logger;
