import { FC } from "react";
import "./App.css";

import { Layout } from "./components/navigation/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
