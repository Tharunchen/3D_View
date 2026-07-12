import * as THREE from "three";

export default function enableClick(renderer,camera,scene){

    const raycaster=new THREE.Raycaster();

    const mouse=new THREE.Vector2();

    renderer.domElement.addEventListener("click",(event)=>{

        const rect=renderer.domElement.getBoundingClientRect();

        mouse.x=((event.clientX-rect.left)/rect.width)*2-1;

        mouse.y=-((event.clientY-rect.top)/rect.height)*2+1;

        raycaster.setFromCamera(mouse,camera);

        const hit=raycaster.intersectObjects(scene.children,true);

        if(hit.length){

            alert(hit[0].object.name);

        }

    });

}