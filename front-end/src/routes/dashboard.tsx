import { lazy } from "react";

const AreaRegPage = lazy(() => import("pages/dashboard/area-reg"));
const WorkerRegPage = lazy(() => import("pages/dashboard/worker-reg"));
const RefInfoPage = lazy(() => import("pages/dashboard/ref-info"));
const ReportPage = lazy(() => import("pages/dashboard/report"));
export const dashboardRoutes = [
  {
    key: "area-reg",
    path: "area-reg",
    element: <AreaRegPage />,
  },
  {
    key: "worker-reg",
    path: "worker-reg",
    element: <WorkerRegPage />,
  },
  {
    key: "ref-info",
    path: "ref-info",
    element: <RefInfoPage />,
  },
  {
    key: "report",
    path: "report",
    element: <ReportPage />,
  },
];
