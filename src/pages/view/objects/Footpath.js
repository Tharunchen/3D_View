import * as THREE from "three";

export default function createFootpath(){

    const group = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({

        color:0xd5d5d5

    });

    const left = new THREE.Mesh(

        new THREE.BoxGeometry(120,0.15,2),

        material

    );
   left.position.set(0,0.08,-42);

    group.add(left);

    const right = new THREE.Mesh(

        new THREE.BoxGeometry(120,0.15,2),

        material

    );
    right.position.set(0,0.08,-28);

    group.add(right);

    return group;

}