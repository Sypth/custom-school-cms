import { Suspense } from "react";
import { BrowserRouter, useRoutes, useLocation } from "react-router-dom";
import "@mantine/core/styles.css";
import "./styles/colors.css";
import ThemeProvider from "./providers/ThemeProvider";
import routes from "./routes/routes";
import Loading from "./components/loading/Loading";

const AppRoutes = () => {
  const router = useRoutes(routes);
  return router;
};

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          {/* <ScrollToTop /> */}
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
