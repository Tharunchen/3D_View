import * as THREE from "three";
import createRoof from "./Roof";

export default function createFactory() {

    const factory = new THREE.Group();

    // ===========================
    // Materials
    // ===========================

    const wallMaterial = new THREE.MeshStandardMaterial({
        color: 0xbdbdbd,
        roughness: 0.9
    });

    const roofMaterial = new THREE.MeshStandardMaterial({
        color: 0x5f6368
    });

    const glassMaterial = new THREE.MeshStandardMaterial({
        color: 0x6fa8dc,
        transparent: true,
        opacity: 0.7
    });

    const shutterMaterial = new THREE.MeshStandardMaterial({
        color: 0x888888
    });

    const darkMaterial = new THREE.MeshStandardMaterial({
        color: 0x444444
    });

    // ======================================================
    // MAIN PRODUCTION HALL
    // ======================================================

    const hall = new THREE.Mesh(

        new THREE.BoxGeometry(70, 12, 30),

        wallMaterial

    );

    hall.position.set(0,6,0);

    hall.castShadow = true;
    hall.receiveShadow = true;

    factory.add(hall);

    // ======================================================
    // OFFICE BLOCK
    // ======================================================

    const office = new THREE.Mesh(

        new THREE.BoxGeometry(18,10,12),

        wallMaterial

    );

    office.position.set(-26,5,21);

    factory.add(office);

    factory.add(createRoof());
    
    // ======================================================
    // FRONT WINDOWS
    // ======================================================

    for(let i=-30;i<=30;i+=5){

        const windowMesh = new THREE.Mesh(

            new THREE.BoxGeometry(3,2,0.2),

            glassMaterial

        );

        windowMesh.position.set(i,8,15.2);

        factory.add(windowMesh);

    }

    // ======================================================
    // OFFICE WINDOWS
    // ======================================================

    for(let i=-32;i<=-20;i+=4){

        const officeWindow = new THREE.Mesh(

            new THREE.BoxGeometry(2.5,2,0.2),

            glassMaterial

        );

        officeWindow.position.set(i,7,27.1);

        factory.add(officeWindow);

    }

    // ======================================================
    // MAIN GLASS ENTRANCE
    // ======================================================

    const entrance = new THREE.Mesh(

        new THREE.BoxGeometry(8,6,0.3),

        glassMaterial

    );

    entrance.position.set(0,3,15.3);

    entrance.name="MainEntrance";

    factory.add(entrance);

    // ======================================================
    // LOADING SHUTTERS
    // ======================================================

    for(let i=-24;i<=24;i+=12){

        const shutter = new THREE.Mesh(

            new THREE.BoxGeometry(6,5,0.25),

            shutterMaterial

        );

        shutter.position.set(i,2.5,15.25);

        shutter.name="LoadingBay";

        factory.add(shutter);

    }

    // ======================================================
    // FRONT COLUMNS
    // ======================================================

    for(let i=-34;i<=34;i+=17){

        const pillar = new THREE.Mesh(

            new THREE.BoxGeometry(1,12,1),

            darkMaterial

        );

        pillar.position.set(i,6,15);

        factory.add(pillar);

    }

    // ======================================================
    // FACTORY NAME BOARD
    // ======================================================

    const board = new THREE.Mesh(

        new THREE.BoxGeometry(18,2.5,0.3),
        darkMaterial
    );
    board.position.set(0,10.2,15.35);
    factory.add(board);

    // ======================================================
    // SIDE WALL DETAILS
    // ======================================================

    const leftWall = new THREE.Mesh(

        new THREE.BoxGeometry(1,12,30),

        wallMaterial

    );

    leftWall.position.set(-35.5,6,0);

    factory.add(leftWall);

    const rightWall = leftWall.clone();

    rightWall.position.x = 35.5;

    factory.add(rightWall);

    return factory;
}