import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useEffect, useRef, useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import ActiveButtonGroup from "../active_btn";
import toast from "react-hot-toast";
let camera, scene, renderer;

const ObjViewer = () => {
  //* ref
  const refContainer = useRef(null);
  //* states
  const [scImages, setScImages] = useState(null);
  //*actions
  const getImage = () => {
    var strMime = "image/jpeg";
    const imgData = renderer.domElement.toDataURL(strMime);
    setScImages(imgData);
  };
  const sendDataHandler = () => {
    if (!scImages) {
      toast.error("first take shot of object and second convert data ");
      return;
    }
    console.log(scImages);
    const files = dataURLtoFile(scImages, "sc_image.jpg");
    console.log(files);
  };
  //* convert base64 to file
  const dataURLtoFile = (dataUrl, filename) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n) {
      u8arr[n - 1] = bstr.charCodeAt(n - 1);
      n -= 1; // to make eslint happy
    }
    return new File([u8arr], filename, { type: mime });
  };
  //*effect
  useEffect(() => {
    function init() {
      camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        20
      );
      camera.position.z = 2.5;
      camera.position.y = 0.8;
      camera.position.x = 1.5;
      // scene

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x282828);

      scene.add(new THREE.GridHelper(100, 100, 0xb91c1c, 0x393939));
      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 15);
      camera.add(pointLight);
      scene.add(camera);

      // model

      const onProgress = function (xhr) {
        if (xhr.lengthComputable) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          console.log(Math.round(percentComplete, 2) + "% downloaded");
        }
      };

      new MTLLoader()
        .setPath("obj/")
        .load("building_04.mtl", function (materials) {
          materials.preload();

          new OBJLoader()
            .setMaterials(materials)
            .setPath("obj/")
            .load(
              "building_04.obj",
              function (object) {
                object.position.y = 0.05;
                object.scale.setScalar(0.1);
                scene.add(object);
              },
              onProgress
            );
        });

      //

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      //   document.body.appendChild(renderer.domElement);
      refContainer.current &&
        refContainer.current.appendChild(renderer.domElement);
      //

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 2;
      controls.maxDistance = 5;

      //

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      refContainer.current &&
        refContainer.current.appendChild(renderer.domElement);
    }

    //

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    init();
      animate();
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4">
      <div className="col-span-12 lg:col-span-10 h-full min-h-[85vh]">
        <div className="w-full p-2 bg-white shadow-md rounded-md h-full relative">
          <div className="w-full h-full">
            <div className="w-full h-full" ref={refContainer}></div>
          </div>
          <div className="w-full flex items-center justify-center absolute bottom-8  ">
            <button
              onClick={getImage}
              type="button"
              className="p-2 rounded-md  flex items-center gap-x-2 bg-[#809FB8] "
            >
              <span>
                <BsFullscreen className="text-xl" />
              </span>
              <span className="text-xs">shot</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-2">
        <div className="p-2 w-full bg-white rounded-md shadow-md h-full flex items-center justify-between flex-col ">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-lg text-center py-4">Prompt : </h1>
            <ActiveButtonGroup />
          </div>
          <div className="px-4"></div>
          <button
            onClick={sendDataHandler}
            className="w-full flex items-center bg-[#809fb9]  py-2 justify-center rounded-md "
          >
            convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjViewer;
