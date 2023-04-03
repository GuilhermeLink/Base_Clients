import { Route, Routes, Navigate } from "react-router-dom";
import DashboardLibrary from "../components/DashboardLibrary";
import { DashboardPage } from "../pages/DashBoardPage";
import { LandingPage } from "../pages/LandingPage";
import ProtectedRoutes from "../components/ProtectedRouter";
import DashboardMain from "../components/DashboardMain";
import {ClientListPage} from "../pages/ClientListPage";

export const RoutesMain = () => (
  <>
  <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardMain/>} />
          <Route path="clientes" element={<ClientListPage />} />
          <Route path="biblioteca" element={<DashboardLibrary />} />
        </Route>
      </Route>
    </Routes>
  </>
);

