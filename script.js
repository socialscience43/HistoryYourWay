console.log("Step 1: Script loaded");

try {
  console.log("Step 2: Loading Three.js...");
  console.log("THREE:", window.THREE);

  if (!window.THREE) {
    document.getElementById("loading").innerText = "THREE not found 😭";
  } else {
    document.getElementById("loading").innerText = "THREE found ✅";
  }
} catch (err) {
  console.error(err);
  document.getElementById("loading").innerText = "Error: " + err.message;
}
