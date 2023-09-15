import React, { useEffect, useState } from "react";
import { DXFViewer } from "../src/dxfViewer";
import { Boilerplate } from "../boilerplate";
import GUI from "lil-gui";
import "./index.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// let html = new Boilerplate();
const font = "fonts/helvetiker_regular.typeface.json";

let viewer = new DXFViewer();
let snaps, gui;

const Layer = ({ address_file }) => {
  const [activeViewer, setViewer] = useState([]);
  const [visibleLayer, setVisibleLayer] = useState({});

  useEffect(() => {
    let html = new Boilerplate();
    html.onLoad = async (file) => {
      if (gui) gui.destroy();
      gui = new GUI({ width: 310 });
      html.three.clear();

      let dxf = await viewer.getFromFile(file, font);
      // console.log(dxf);
      if (dxf) {
        //Optional. Add control snap.
        // if (snaps) snaps.clear();

        //get layer names
        const layer_names = Object.keys(viewer.layers);

        //add entity array property to layers
        layer_names.forEach((name) => (viewer.layers[name].entities = []));

        //add entities to layers
        dxf.traverse((m) => {
          if (!m.userData || !m.userData.entity) return;

          let name = m.userData.entity.layer;
          if (viewer.layers[name]) viewer.layers[name].entities.push(m);
        });

        html.three.scene.add(dxf);
        html.three.centerCamera();

        //Optional - add layer visibility to gui
        layer_names.forEach((name) => {
          const layer = viewer.layers[name];

          gui
            .add(layer, "visible")
            .name(name)
            .onChange((value) => {
              layer.entities.forEach((e) => (e.visible = value));
            });
        });
        // console.log("layerr : " , layer_names)

        //colorize gui layers options with layer color
        document
          .querySelectorAll(".controller")
          .forEach(
            (c) =>
              (c.style.color = `#${viewer.layers[
                c.firstChild.innerText
              ].color.toString(16)}`)
          );
        setViewer(viewer.layers);
      }
    };
    html.init(address_file);
    console.log(address_file);
  }, [address_file]);

  const clickHandler = () => {
    let visible = {};
    for (const key in activeViewer) {
      if (activeViewer[key].visible) {
        visible[key] = activeViewer[key];
      }
    }
    setVisibleLayer(visible);
    setTimeout(() => {
      window.location.href = "/convert";
      toast.success("layer changes success");
    }, 1500);
  };
  return (
    <div>
      <div className="flex h-full min-h-[80vh] items-center justify-center w-full relative ">
        <button
          onClick={clickHandler}
          className="flex items-center justify-center py-3 absolute bottom-4 left-6 text-sm rounded-md  z-50 bg-[#809fb0] px-6 "
        >
          Get Layer
        </button>
      </div>
    </div>
  );
};

export default Layer;
