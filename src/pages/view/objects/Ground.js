import * as THREE from "three";

export default function createGround() {

    const ground = new THREE.Mesh(

        new THREE.PlaneGeometry(250, 250),

        new THREE.MeshStandardMaterial({
            color: 0x162228
        })

    );

    ground.rotation.x = -Math.PI / 2;

    ground.receiveShadow = true;

    ground.name = "Ground";

    return ground;
}