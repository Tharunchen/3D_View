export default function startAnimation(renderer,scene,camera,controller){

    function animate(){

        requestAnimationFrame(animate);
        controller.update();
        renderer.render(scene,camera);

    }

    animate();

}