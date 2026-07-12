import * as THREE from "three";

export default function createRoad() {

    const roadGroup = new THREE.Group();

    // Road

    const road = new THREE.Mesh(

        new THREE.BoxGeometry(120,0.1,10),

        new THREE.MeshStandardMaterial({

            color:0x3a3a3a

        })

    );

    road.position.set(0,0.05,-35);

    roadGroup.add(road);

    // Yellow Center Lines

    for(let i=-55;i<=55;i+=6){

        const line = new THREE.Mesh(

            new THREE.BoxGeometry(3,0.12,0.25),

            new THREE.MeshStandardMaterial({

                color:0xffd400

            })

        );

        line.position.set(i,0.11,25);

        roadGroup.add(line);

    }

    return roadGroup;

}