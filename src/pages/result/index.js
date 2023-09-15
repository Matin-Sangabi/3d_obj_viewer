import { useSearchParams } from "react-router-dom";
import Layout from "../../components/container/layout";

const Result = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("image"));
  return (
    <Layout color={"bg-slate-200"}>
      <div className="w-full min-h-screen flex items-center justify-center ">
        <img
          src={searchParams.get("image")}
          alt="result_image"
          className="rounded-md shadow-md  "
          //   onLoad={(e) => setLoading(false)}
        />
      </div>
    </Layout>
  );
};

export default Result;
