import Layout from "./components/container/layout";

const App = () => {
  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto container px-4">
        <div className="grid grid-cols-12 gap-x-4 gap-y-4 px-4">
          <div className="col-span-12 lg:col-span-9 ">
            <div className="w-full p-4 bg-white shadow-md rounded-md">
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
