import { Route, Routes } from "react-router-dom";
// import Layout from "./components/container/layout";
// import ObjViewer from "./components/obj/objViewer";
import Homepage from "./pages/home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
