import * as THREE from "three";

export default function createRenderer(width,height){

    const renderer = new THREE.WebGLRenderer({
        antialias:true
    });

    renderer.setSize(width,height);

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled=true;

    return renderer;

}