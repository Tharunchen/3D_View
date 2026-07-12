import * as THREE from "three";

export default function createWindows() {

    const group = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({
        color: 0x6fa8dc,
        metalness: 0.6,
        roughness: 0.2
    });

    // Front windows
    for (let i = -16; i <= 16; i += 4) {

        const windowMesh = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 2, 0.2),
            material
        );

        windowMesh.position.set(i, 7, 7.6);

        group.add(windowMesh);
    }

    return group;
}