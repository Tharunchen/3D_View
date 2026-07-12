import * as THREE from "three";

export default function createCamera() {
    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0, 28, 95);

    camera.lookAt(0,8,0);

    return camera;
}