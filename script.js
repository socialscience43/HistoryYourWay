const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

const groundGeo = new THREE.PlaneGeometry(200, 200);
const groundMat = new THREE.MeshPhongMaterial({ color: 0x228b22 });
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const controls = new THREE.PointerLockControls(camera, document.body);
document.addEventListener("click", () => controls.lock());

const move = { forward: 0, backward: 0, left: 0, right: 0 };
document.addEventListener("keydown", e => {
  if (e.code === "KeyW") move.forward = 1;
  if (e.code === "KeyS") move.backward = 1;
  if (e.code === "KeyA") move.left = 1;
  if (e.code === "KeyD") move.right = 1;
});
document.addEventListener("keyup", e => {
  if (e.code === "KeyW") move.forward = 0;
  if (e.code === "KeyS") move.backward = 0;
  if (e.code === "KeyA") move.left = 0;
  if (e.code === "KeyD") move.right = 0;
});

const velocity = new THREE.Vector3();
const speed = 0.1;
camera.position.y = 2;

document.getElementById("loading").style.display = "none";

function animate() {
  requestAnimationFrame(animate);

  if (controls.isLocked) {
    velocity.z = (move.backward - move.forward) * speed;
    velocity.x = (move.right - move.left) * speed;

    controls.moveRight(velocity.x);
    controls.moveForward(velocity.z);
  }

  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

