import { pino } from "pino"

export const appLogger = pino({
    transport: {
        target: 'pino-pretty'
    },
})
