import * as THREE from "three";

export default function createCameraController(camera, renderer) {

    const target = new THREE.Vector3(0, 5, 0);

    let radius = 45;
    let theta = Math.PI / 4;
    let phi = Math.PI / 3;

    let isDragging = false;

    let previousMouse = {
        x: 0,
        y: 0
    };

    function updateCamera() {

        camera.position.x =
            radius * Math.sin(phi) * Math.sin(theta);

        camera.position.y =
            radius * Math.cos(phi);

        camera.position.z =
            radius * Math.sin(phi) * Math.cos(theta);

        camera.lookAt(target);
    }

updateCamera();

renderer.domElement.addEventListener("mousedown", (e) => {
    isDragging = true;

    previousMouse.x = e.clientX;
    previousMouse.y = e.clientY;
});

window.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    const deltaX = e.clientX - previousMouse.x;
    const deltaY = e.clientY - previousMouse.y;

    theta -= deltaX * 0.01;
    phi -= deltaY * 0.01;

    phi = Math.max(0.2, Math.min(Math.PI - 0.2, phi));

    previousMouse.x = e.clientX;
    previousMouse.y = e.clientY;

    updateCamera();
});

renderer.domElement.addEventListener("wheel", (e) => {

    radius += e.deltaY * 0.02;

    radius = Math.max(20, Math.min(80, radius));

    updateCamera();
});

return {
    update: updateCamera
};

}