import { auth } from "~/lib/auth.server";
import { ValidationError } from "./errors/validation.errors";

export async function authorizeRequest(request: Request, allowedMethod?: string, allowedRole?: number) {
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