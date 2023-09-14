import { Route, Routes } from "react-router-dom";
// import Layout from "./components/container/layout";
// import ObjViewer from "./components/obj/objViewer";
import Homepage from "./pages/home";
import EditLayer from "./pages/editLayer";
import ConvertPage from "./pages/convert";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/editLayer" element={<EditLayer />} />
      <Route path="/convert" element={<ConvertPage />} />
    </Routes>
  );
};

export default App;
