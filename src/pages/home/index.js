import { useCallback, useState } from "react";
import Layout from "../../components/container/layout";

import UseMyDropzoneFile from "../../components/dropzone/useDropzone";
import Backdrop from "../../components/backdrop";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  //*states
  const [showTransform, setShowTransform] = useState(false);
  const [myFile, setMyFile] = useState([]);
  const [loading, setLoading] = useState(false);
  //* call hooks
  const navigate = useNavigate();
  const onDrop = useCallback(
    (acceptedFiles) => {
      setMyFile([...myFile, ...acceptedFiles]);
    },
    [myFile]
  );
  const removeAll = () => {
    setMyFile([]);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const file = myFile[0];
    const formData = new FormData();
    formData.append("uploaded_file", file);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
        toast.success("data_transfer");
        navigate("/editLayer")
    }, 1500);
      
  };
  return (
    <Layout>
      {loading ? <Backdrop /> : ""}
      <div className="w-full h-full min-h-[80vh] max-w-screen-xl mx-auto flex items-center justify-center px-4">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-y-5">
            <UseMyDropzoneFile
              setShowTransform={setShowTransform}
              myFile={myFile}
              onDrop={onDrop}
            />
            {showTransform && (
              <div className="flex flex-col gap-y-2 w-full pt-10 px-4">
                <button
                  type="submit"
                  className="rounded-xl border-2 border-[#2377fc] bg-[#2377FC] text-white p-2"
                >
                  Click Transform
                </button>
                <button
                  type="button"
                  onClick={removeAll}
                  className="rounded-xl bg-transparent border-2 border-red-500 text-red-500 p-2"
                >
                  Delete and Add new
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Homepage;
