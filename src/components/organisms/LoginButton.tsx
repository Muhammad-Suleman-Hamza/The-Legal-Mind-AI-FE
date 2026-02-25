import Button from "../atoms/Button";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/auth/msalConfig";

export function LoginButton() {
  const { instance } = useMsal();

  return (
    <Button
      onClick={() => instance.loginRedirect(loginRequest)}
      className="px-4 py-2 bg-indigo-600 text-white rounded"
    >
      Login with Microsoft
    </Button>
  );
}
