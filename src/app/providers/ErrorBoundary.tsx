import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ReactErrorBoundary
    fallbackRender={({ error }) => (
      <div>
        <p>Something went wrong!</p>
        <pre>{error.message}</pre>
        <button onClick={() => window.location.reload()}>Reset</button>
      </div>
    )}
  >
    {children}
  </ReactErrorBoundary>
);
