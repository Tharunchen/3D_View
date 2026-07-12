import * as THREE from "three";

export default function createFactory() {

    const group = new THREE.Group();

    const building = new THREE.Mesh(

        new THREE.BoxGeometry(40,10,15),

        new THREE.MeshStandardMaterial({

            color:0xc8c8c8,
            roughness:0.9,
            metalness:0.05

        })

    );

    building.position.set(0,5,0);

    building.castShadow = true;
    building.receiveShadow = true;

    group.add(building);

    return group;

}