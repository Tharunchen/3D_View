import * as THREE from "three";

export default function createRoof() {

    const roofGroup = new THREE.Group();

    // ==================================================
    // MAIN ROOF
    // ==================================================

    const roof = new THREE.Mesh(

        new THREE.BoxGeometry(74, 1.2, 34),

        new THREE.MeshStandardMaterial({
            color: 0x6b6b6b,
            roughness: 0.9
        })

    );

    roof.position.set(0, 12.6, 0);

    roof.receiveShadow = true;

    roofGroup.add(roof);

    //---------------------------------------------------
    // Materials
    //---------------------------------------------------

    const frameMaterial = new THREE.MeshStandardMaterial({
        color: 0xcfcfcf,
        metalness: 1,
        roughness: 0.2
    });

    const panelMaterial = new THREE.MeshStandardMaterial({
        color: 0x103d8c,
        metalness: 0.85,
        roughness: 0.15
    });

    const cableMaterial = new THREE.MeshStandardMaterial({
        color: 0x111111
    });

    //four large solar panal

    const positions = [
        [-24, -8],
        [10, -8],
        [-24, 8],
        [10, 8]
    ];

    positions.forEach(pos => {

        const array = new THREE.Group();

        //frame

        const frame = new THREE.Mesh(

            new THREE.BoxGeometry(20,0.15,8),

            frameMaterial

        );

        array.add(frame);

        //panel

        const panel = new THREE.Mesh(

            new THREE.BoxGeometry(19.5,0.05,7.5),

            panelMaterial

        );

        panel.position.y=0.09;

        //vertical grid

        for(let i=-8;i<=8;i+=2){

            const line=new THREE.Mesh(

                new THREE.BoxGeometry(0.03,0.01,7.3),

                new THREE.MeshBasicMaterial({
                    color:0xffffff
                })

            );

            line.position.set(i,0.04,0);

            panel.add(line);

        }

        //horizontal grid

        for(let j=-3;j<=3;j+=1.5){

            const line=new THREE.Mesh(

                new THREE.BoxGeometry(19.3,0.01,0.03),

                new THREE.MeshBasicMaterial({
                    color:0xffffff
                })

            );

            line.position.set(0,0.04,j);

            panel.add(line);

        }

        array.add(panel);

        //junction box

        const junction = new THREE.Mesh(

            new THREE.BoxGeometry(1,0.4,1),

            cableMaterial

        );

        junction.position.set(8.5,0.4,0);

        array.add(junction);

        //tilt

        array.rotation.x=-Math.PI/10;

        array.position.set(pos[0],14.2,pos[1]);

        roofGroup.add(array);

    });

    //main cable tray

    const tray=new THREE.Mesh(

        new THREE.BoxGeometry(64,0.35,0.4),

        new THREE.MeshStandardMaterial({
            color:0x444444
        })

    );

    tray.position.set(0,13.4,0);

    roofGroup.add(tray);

    //roof cables
    positions.forEach(pos=>{

        const cable=new THREE.Mesh(

            new THREE.BoxGeometry(0.15,0.15,8),

            cableMaterial

        );

        cable.position.set(pos[0]+8,13.4,pos[1]/2);

        roofGroup.add(cable);

    });

    //roof ventilation
    const ventMaterial=new THREE.MeshStandardMaterial({
        color:0xb5b5b5,
        metalness:0.7
    });

    for(let i=-26;i<=26;i+=13){

        const base=new THREE.Mesh(

            new THREE.BoxGeometry(2,1.2,2),

            ventMaterial

        );

        base.position.set(i,13.3,-14);

        roofGroup.add(base);

        const cap=new THREE.Mesh(

            new THREE.CylinderGeometry(1.4,1.4,0.4,20),

            ventMaterial

        );

        cap.position.set(i,14.1,-14);

        roofGroup.add(cap);

    }
//hvac units
    for(let i=-18;i<=18;i+=18){

        const ac=new THREE.Mesh(

            new THREE.BoxGeometry(5,2,4),

            new THREE.MeshStandardMaterial({
                color:0x9d9d9d
            })

        );

        ac.position.set(i,14,-3);

        roofGroup.add(ac);

        const grill=new THREE.Mesh(

            new THREE.BoxGeometry(4.2,0.05,3),

            new THREE.MeshBasicMaterial({
                color:0x444444
            })

        );

        grill.position.y=1.05;

        ac.add(grill);

    }

    //safty rails

    const railMaterial=new THREE.MeshStandardMaterial({
        color:0xd0d0d0
    });

    [-35,35].forEach(x=>{

        const rail=new THREE.Mesh(

            new THREE.BoxGeometry(0.2,1,34),

            railMaterial

        );

        rail.position.set(x,13.2,0);

        roofGroup.add(rail);

    });

    [-16.5,16.5].forEach(z=>{

        const rail=new THREE.Mesh(

            new THREE.BoxGeometry(74,1,0.2),

            railMaterial

        );

        rail.position.set(0,13.2,z);

        roofGroup.add(rail);

    });

    return roofGroup;

}