import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/contact";
import { PageNotFound } from "./pages/notFound";
import { Home } from "./pages/home";
import { GlobalProvider } from "./context/globalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
