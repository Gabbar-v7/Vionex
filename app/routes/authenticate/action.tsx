import { APIError } from "better-auth";
import { data } from "react-router";
import { auth } from "~/lib/auth.server";
import { appLogger } from "~/lib/logger.server";
import { catchTypedError } from "~/utilities/handlers/error.handlers";
import type { ApiResponse } from "~/utilities/types/api.types";
import { validatePassword } from "~/utilities/validators/auth.validators";

export async function signinAction(
  email: string,
  password: string,
  callbackURL: string,
  rememberMe: boolean,
  request: Request
) {
  return await catchTypedError(
    auth.api.signInEmail({
      body: {
        email: email,
        password: password,
        callbackURL: callbackURL,
        rememberMe: rememberMe,
      },
      headers: request.headers,
      returnHeaders: true,
    }),
    [APIError]
  ).then(([authError, authHeaders]) => {
    if (authError)
      return data<ApiResponse>(
        {
          success: false,
          error: { message: authError.message },
        },
        { status: 400 }
      );

    appLogger.info("Sign In Successful");
    return data<ApiResponse>(
      {
        success: true,
        data: { url: authHeaders.response.url },
        message: "Signed in Successfully!",
      },
      { headers: authHeaders.headers }
    );
  });
}

export async function signupAction(
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  role: number,
  callbackURL: string,
  rememberMe: boolean,
  request: Request
) {
  await validatePassword(password, confirmPassword);

  return await catchTypedError(
    auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
        role: role,
        callbackURL: callbackURL,
        rememberMe: rememberMe,
      },
      headers: request.headers,
      returnHeaders: true,
    }),
    [APIError]
  ).then(([authError, authHeaders]) => {
    if (authError)
      return data<ApiResponse>(
        {
          success: false,
          error: { message: authError.message },
        },
        { status: 400 }
      );

    appLogger.info("Sign up Successful");
    return data<ApiResponse>(
      {
        success: true,
        data: { url: callbackURL },
        message: "Account created Successfully!",
      },
      { headers: authHeaders.headers }
    );
  });
}
