// Basic 3D Scene using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Simple rotating cube placeholder for "the world"
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x007bff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Button behavior
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  // later you’ll load your world here
});

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const startBtn = document.getElementById("startBtn");
const overlay = document.getElementById("overlay");
const creator = document.getElementById("creator");
const confirmBtn = document.getElementById("confirmBtn");

startBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  creator.classList.remove("hidden");
});

confirmBtn.addEventListener("click", () => {
  const rulerName = document.getElementById("rulerName").value;
  const nationName = document.getElementById("nationName").value;
  const era = document.getElementById("eraSelect").value;

  creator.style.display = "none";

  const banner = document.createElement("div");
  banner.innerHTML = `<h2>Welcome, ${rulerName} of ${nationName} (${era} Era)</h2>`;
  banner.style.position = "absolute";
  banner.style.top = "20px";
  banner.style.left = "50%";
  banner.style.transform = "translateX(-50%)";
  banner.style.background = "rgba(0,0,0,0.7)";
  banner.style.padding = "15px 25px";
  banner.style.borderRadius = "10px";
  banner.style.zIndex = "10";
  document.body.appendChild(banner);
});

