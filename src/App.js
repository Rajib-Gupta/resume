import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Header from "./app/components/shared/header/header";
import React, { Suspense } from "react";

const LazyHeader = React.lazy(() =>
  import("../src/app/components/shared/header/header")
);
function App() {
  return (
    <ErrorBoundary
      onError={(error) => {
        console.log(error);
      }}
      FallbackComponent={() => <p>Something went wrong</p>}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader />
      </Suspense>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
