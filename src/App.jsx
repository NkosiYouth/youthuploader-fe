import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { UploadFiles, AllYouthData, ValidateProfiles } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <UploadFiles />,
        },
        {
          path: "validate-profiles",
          element: <ValidateProfiles />,
        },
        {
          path: "all-youth-data",
          element: <AllYouthData />,
        },
      ],
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
