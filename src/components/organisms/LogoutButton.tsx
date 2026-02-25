import Button from "../atoms/Button";
import { useMsal } from "@azure/msal-react";

export function LogoutButton() {
  const { instance } = useMsal();

  return (
    <Button
      onClick={() => instance.logoutRedirect()}
      className="px-4 py-2 bg-slate-600 text-white rounded"
    >
      Logout
    </Button>
  );
}
