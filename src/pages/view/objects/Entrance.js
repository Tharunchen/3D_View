import * as THREE from "three";

export default function createEntrance() {

    const group = new THREE.Group();

    const door = new THREE.Mesh(

        new THREE.BoxGeometry(5,5,0.3),

        new THREE.MeshStandardMaterial({
            color:0x4d7ea8,
            transparent:false,
            opacity:0.65
        })

    );

    door.position.set(0,2.5,7.7);

    door.name = "MainDoor";

    group.add(door);

    return group;
}