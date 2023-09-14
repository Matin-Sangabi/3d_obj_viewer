import Layout from "./components/container/layout";
import ObjViewer from "./components/obj/objViewer";
const App = () => {
  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto container px-4 py-4">
        <ObjViewer />
      </div>
    </Layout>
  );
};

export default App;
