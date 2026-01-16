
import { LogOut, Loader2 } from "lucide-react";
import { use, useEffect } from "react";
import { redirect, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { authClient } from "~/lib/auth.client";

export default function Page() {
  const navigate = useNavigate();

  useEffect(() => {
    authClient.signOut();
    navigate("/authenticate", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <LogOut className="h-6 w-6 text-foreground" />
          </div>
          <CardTitle className="text-xl"> Signing you out </CardTitle>
          <CardDescription>
            Your session is ending.You will be redirected shortly.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Please wait…</span>
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={() => navigate("/login", { replace: true })}
          >
            Go to login now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
