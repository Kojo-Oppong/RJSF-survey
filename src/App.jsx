import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusinessSurveyForm from "./pages/SurveyForm";
import NoiseAnalysis from "./pages/NoiseAnalysis";

const router = createBrowserRouter([

  { path: '/', element: <BusinessSurveyForm /> },
  { path: '/noise-assesment', element: <NoiseAnalysis /> },

]);

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl p-4">BMC Diagnostictics</h1>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;