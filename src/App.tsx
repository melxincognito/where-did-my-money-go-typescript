import { FC } from "react";
import "./App.css";
import { Layout } from "./components/navigation/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChartsPage } from "./pages/ChartsPage";
import { CategorizedPurchasesPage } from "./pages/CategorizedPurchasesPage";
import { LoginPage } from "./pages/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route
              path="/categorized-purchases"
              element={<CategorizedPurchasesPage />}
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
