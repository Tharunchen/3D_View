import * as THREE from "three";

export default function createParking(){

    const parking = new THREE.Mesh(

        new THREE.BoxGeometry(35,0.05,18),

        new THREE.MeshStandardMaterial({

            color:0x6b6b6b

        })

    );

    parking.position.set(0,0.03,35);

    return parking;

}