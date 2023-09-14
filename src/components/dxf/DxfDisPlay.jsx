import { useEffect, useRef } from "react";
import * as THREE from "three";
// import { DXFLoader } from 'three-dxf-loader'
import DXFLoader from "three-dxf-loader";
function DXFDisplay({ file }) {
  const containerRef = useRef();
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const dxfLoader = new DXFLoader();
    dxfLoader.load(file, (geometry) => {
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      const mesh = new THREE.LineSegments(geometry, material);
      scene.add(mesh);
    });
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, [file]);
  return <></>;
}

export default DXFDisplay;
