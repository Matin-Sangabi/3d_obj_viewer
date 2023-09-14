import ActiveButtonGroup from "./components/active_btn";
import Layout from "./components/container/layout";
import ObjViewer from "./components/obj/objViewer";
const App = () => {
  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto container px-4 py-4">
        <div className="grid grid-cols-12 gap-x-4 gap-y-4 px-4">
          <div className="col-span-12 lg:col-span-10 h-full min-h-[90vh] ">
            <ObjViewer />
          </div>
          <div className="col-span-12 lg:col-span-2">
            <div className="p-2 w-full bg-white rounded-md shadow-md h-full flex items-center justify-between flex-col ">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg text-center py-4">Prompt : </h1>
                <ActiveButtonGroup />
              </div>
              <div className="px-4"></div>
              <button className="w-full flex items-center bg-[#809fb9]  py-2 justify-center rounded-md ">
                convert
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
