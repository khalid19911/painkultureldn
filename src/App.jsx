import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";

import Login from "../pages/login";
import Register from "../pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                </>
              }
            />

            <Route
              path="/Login"
              element={
                <>
                  {" "}
                  <Login />{" "}
                </>
              }
            />
            <Route
              path="/Register"
              element={
                <>
                  {" "}
                  <Register />{" "}
                </>
              }
            />
          </Routes>
        </main>
        <Newsletter />
      </div>
    </BrowserRouter>
  );
}

export default App;
