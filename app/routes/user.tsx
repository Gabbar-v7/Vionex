import type { LoaderFunctionArgs } from "react-router";
import { permissionLevel } from "~/data/const/auth.levels";
import { authorizeRequest } from "~/utilities/router.utilty";

export async function loader({ request }: LoaderFunctionArgs) {
  await authorizeRequest(request, "GET", permissionLevel.USER);
  return null;
}
