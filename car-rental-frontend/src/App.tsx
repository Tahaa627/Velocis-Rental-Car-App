import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRoutes />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#0F172A",
            border: "1px solid #E2E8F0",
            borderRadius: "10px",
            padding: "16px",
          },
        }}
      />
    </>
  );
}

export default App;