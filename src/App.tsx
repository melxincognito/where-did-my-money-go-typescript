import { FC } from "react";
import "./App.css";
import { Layout } from "./components/navigation/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChartsPage } from "./pages/ChartsPage";
import { CategorizedPurchasesPage } from "./pages/CategorizedPurchasesPage";

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route
            path="/categorized-purchases"
            element={<CategorizedPurchasesPage />}
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
