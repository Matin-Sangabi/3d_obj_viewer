import { useEffect, useState } from "react";
import Layout from "../../components/container/layout";
import Layer from "../../components/dxf/layer";
import { http } from "../../service/httprequest";
import Cookies from "js-cookie";
import Backdrop from "../../components/backdrop";

const EditLayer = () => {
  const [dataFile, setDataFile] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const id = Cookies.get("file_id");
        const res = await http.get(`/api/v1/render/converted_file/${id}/`);
        console.log(res);
        if (
          res.status === 200 &&
          res.data.NotReady === "File has not been ready"
        ) {
          setLoading(true);
        } else {
          const url = res.data.converted_file;
          setDataFile(url);
          // convertUrlToFileObject(url, (file) => {
          //   setDataFile(file);
          // });
          setLoading(false);
          clearInterval(getData);
        }
      } catch (error) {
        console.log(error);
      }
    }
    var getData = setInterval(() => {
      fetchData();
    }, 2500);
    function convertUrlToFileObject(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";

      xhr.onload = function () {
        if (xhr.status === 200) {
          const blob = xhr.response;
          const file = new File([blob], "filename");
          callback(file);
        }
      };

      xhr.send();
    }
    return () => {
      clearInterval(getData);
    };
  }, []);
  return (
    <Layout>
      {loading ? <Backdrop /> : ""}
      {dataFile ? <Layer address_file={dataFile} /> : <div></div>}
    </Layout>
  );
};

export default EditLayer;
