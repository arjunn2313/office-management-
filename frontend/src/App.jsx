import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Management/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import EmployeeProfile from "./pages/EmployeeProfile/List";
import AddNewEmployee from "./pages/EmployeeProfile/AddNew";
import EmployeePreview from "./pages/EmployeeProfile/EmployeePreview";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "hiring",
        element: <Dashboard />,
      },
      {
        path: "employee-profile",
        children: [
          {
            path: "",
            element: <EmployeeProfile />,
          },
          {
            path: "create",
            element: <AddNewEmployee />,
          },
          {
            path: "preview/:id",
            element: <EmployeePreview />,
          },
        ],
      },
      {
        path: "attendance",
        element: <Dashboard />,
      },
      {
        path: "assign-task",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />{" "}
    </>
  );
}

export default App;
