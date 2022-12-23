import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/notFound";
import { Home } from "./pages/home";
import { GlobalProvider } from "./context/globalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
