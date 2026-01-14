import { auth } from "~/lib/auth.server";
import { ValidationError } from "./errors/validation.errors";
import { data } from "react-router";
import { type ApiResponse } from "./types/api.types";
import { toast } from "sonner";

export async function authorizeRequest(request: Request, allowedMethod?: HttpMethod, allowedRole?: number) {
    // Method Check
    if (allowedMethod && request.method != allowedMethod)
        throw new ValidationError("request.method", "Method not allowed. Please try again!");

    // Session Check
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session || !session.user)
        throw new ValidationError("auth", "Authentication required.")

    // Role Check
    if (allowedRole && session.user.role < allowedRole)
        throw new ValidationError("auth.role", "Insufficient permissions.")

    return session;
}

export function requireHttpMethod(request: Request, allowedMethod: HttpMethod) {
    if (request.method !== allowedMethod)
        throw data<ApiResponse>({
            success: false,
            error: { message: "Invalid method please try again!" },
        }, { status: 404 });
}

export function toastResponse(data: ApiResponse) {
    if (!data.success) toast.error(data.error.message || "An error occurred. Please try again!");
    else if (data.message) toast.success(data.message);
}