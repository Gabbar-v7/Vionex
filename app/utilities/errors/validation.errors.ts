export class ValidationError extends Error {
    field: string;

    constructor(field: string, message: string) {
        super(message);
        this.name = new.target.name; // dynamically sets to class name
        this.field = field;
    }
}

export class PasswordValidationError extends ValidationError { }

export class EMailValidationError extends ValidationError { }

export class HostnameValidationError extends ValidationError { }