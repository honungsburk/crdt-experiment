import { Suspense, lazy } from "react";
import Loading from "./Pages/Loading";
import { Route, RouteProps, Routes } from "react-router-dom";
import Layout from "./Layout";
import Paths from "./Paths";
import PageErrorBoundary from "./Components/ErrorBoundary/PageErrorBoundary";

// Pages
const NotFound = lazy(() => import("./Pages/NotFound"));
const Home = lazy(() => import("./Pages/Home"));

export default function App() {
  return (
    <PageErrorBoundary>
      <Suspense fallback={<Loading minH={"100vh"} />}></Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path={Paths.home}
            element={
              <PageErrorBoundary>
                <Home />
              </PageErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </PageErrorBoundary>
  );
}
