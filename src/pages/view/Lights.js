import * as THREE from "three";

export default function createLights(scene){

    const ambient = new THREE.AmbientLight(
        0xffffff,
        1.2
    );

    scene.add(ambient);

    const sun = new THREE.DirectionalLight(
        0xffffff,
        2
    );

    sun.position.set(30,40,20);

    sun.castShadow = true;

    scene.add(sun);

}