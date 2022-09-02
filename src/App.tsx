import { FC } from "react";
import "./App.css";
import { Layout } from "./components/navigation/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChartsPage } from "./pages/ChartsPage";
import { CategorizedPurchasesPage } from "./pages/CategorizedPurchasesPage";
import { LoginPage } from "./pages/LoginPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { UserAccountPage } from "./pages/UserAccountPage";
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
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/user-account" element={<UserAccountPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
