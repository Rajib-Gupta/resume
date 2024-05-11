import { Route, Routes } from "react-router-dom";
import Header from "./app/components/shared/header/header";
import Home from "./app/components/pages/home/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default AppRoutes;
