import { useEffect, useRef } from "react";
import * as THREE from "three";

import createCamera from "./Camera";
import createRenderer from "./Renderer";
import createLights from "./Lights";
import createGround from "./objects/Ground";
import createFactory from "./objects/Factory";
import startAnimation from "./AnimationLoop"; 
import enableClick from "./ClickManager";
import createRoad from "./objects/Road";
import createFootpath from "./objects/Footpath";
import createParking from "./objects/Parking";
import createCameraController from "./CameraController";

export default function Scene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x162228);

    const camera = createCamera();
    const renderer = createRenderer();
    const controller = createCameraController(camera, renderer);

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    mountRef.current.appendChild(renderer.domElement);

    createLights(scene);
    scene.add(createGround());
    scene.add(createFactory());


    //enableClick(renderer, camera, scene);
    startAnimation(renderer, scene, camera, controller);

      const handleResize = () => {
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);

      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}