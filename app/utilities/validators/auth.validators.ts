import { PasswordValidationError } from "../errors/validation.errors";

export async function validatePassword(
    password: string | undefined,
    confirmPassword: string | null = null
): Promise<boolean> {
    // Check if password is provided
    if (!password) {
        throw new PasswordValidationError("", "Password is required");
    }

    // Check minimum length
    if (password.length < 8) {
        throw new PasswordValidationError(password, "Password must be at least 8 characters long");
    }

    // Check maximum length (prevent extremely long passwords)
    if (password.length > 128) {
        throw new PasswordValidationError(password, "Password must not exceed 128 characters");
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        throw new PasswordValidationError(password, "Password must contain at least one lowercase letter");
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        throw new PasswordValidationError(password, "Password must contain at least one uppercase letter");
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
        throw new PasswordValidationError(password, "Password must contain at least one digit");
    }

    // Check for at least one special character
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password)) {
        throw new PasswordValidationError(password,
            "Password must contain at least one special character (!@#$%^&*()_+-=[]{}|;':\",./<>?~`)"
        );
    }

    // Check for no whitespace
    if (/\s/.test(password)) {
        throw new PasswordValidationError(password, "Password must not contain spaces");
    }

    // Check password confirmation if provided
    if (confirmPassword !== null) {
        if (password !== confirmPassword) {
            throw new PasswordValidationError(confirmPassword, "Passwords do not match");
        }
    }

    // If all checks pass, return true
    return true;
}