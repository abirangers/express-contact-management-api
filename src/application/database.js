import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";

export const prismaClient = new PrismaClient({
    log: [
        {
            level: 'query',
            emit: 'event'
        },
        {
            level: 'error',
            emit: 'event'
        },
        {
            level: 'info',
            emit: 'event'
        },
        {
            level: 'warn',
            emit: 'event'
        }
    ]
});

prismaClient.$on('error', (event) => {
    logger.error(event);
});

prismaClient.$on('warn', (event) => {
    logger.warn(event);
});

prismaClient.$on("info", (event) => {
    logger.info(event);
});

prismaClient.$on("query", (event) => {
    logger.info(event);
});

