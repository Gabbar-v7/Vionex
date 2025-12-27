type SuccessResponse<T = any> = {
    success: true,
    message: string,
    data?: T,
    meta?: {
        timestamp: Date;
        requestId?: string;
        pagination?: {
            page: number;
            limit: number;
            total: number;
            hasNext: boolean;
            hasPrev: boolean;
        };
    };
}

type ErrorResponse = {
    success: false,
    error: {
        message: string | string[];
        field?: string;
        details?: Record<string, any>;
    };
}

export type ApiResponse = SuccessResponse | ErrorResponse