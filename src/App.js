import { Route, Routes } from "react-router-dom";
// import Layout from "./components/container/layout";
// import ObjViewer from "./components/obj/objViewer";
import Homepage from "./pages/home";
import EditLayer from "./pages/editLayer";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/editLayer" element={<EditLayer />} />
    </Routes>
  );
};

export default App;
