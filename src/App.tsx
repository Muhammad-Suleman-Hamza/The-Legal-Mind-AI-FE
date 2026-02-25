import React from "react";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import { msalConfig } from "./features/auth/msalConfig";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <Toaster />
            <Dashboard />
          </ErrorBoundary>
        </QueryClientProvider>
      </MsalProvider>
    </React.StrictMode>
  );
}

export default App;
