import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<h1>About page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
