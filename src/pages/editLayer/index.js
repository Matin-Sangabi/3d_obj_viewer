import { useEffect, useState } from "react";
import Layout from "../../components/container/layout";
import Layer from "../../components/dxf/layer";

const EditLayer = () => {
  const [dataFile, setDataFile] = useState(null);
  useEffect(() => {
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
    const url = "http://localhost:3000/dxf/dfxfor3d.dxf";
    convertUrlToFileObject(url, (file) => {
      setDataFile(file);
    });
  }, []);
  return (
    <Layout>
      {dataFile ? <Layer address_file={dataFile} /> : <div></div>}
     
    </Layout>
  );
};

export default EditLayer;
