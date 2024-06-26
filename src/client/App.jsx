import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
