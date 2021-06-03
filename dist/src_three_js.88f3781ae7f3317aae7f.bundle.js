(self["webpackChunkrichardlovelace_devportfolio"] = self["webpackChunkrichardlovelace_devportfolio"] || []).push([["src_three_js"],{

/***/ "./src/three.js":
/*!**********************!*\
  !*** ./src/three.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_moonx_processed_gltf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/moonx-processed.gltf */ "./src/static/moonx-processed.gltf");
/* harmony import */ var _static_moonx_processed0_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/moonx-processed0.png */ "./src/static/moonx-processed0.png");
/* harmony import */ var _static_moonx_processed1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/moonx-processed1.png */ "./src/static/moonx-processed1.png");
/* harmony import */ var _static_moonx_processed2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/moonx-processed2.png */ "./src/static/moonx-processed2.png");
/* harmony import */ var _static_moonx_processed3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static/moonx-processed3.png */ "./src/static/moonx-processed3.png");
/* harmony import */ var _static_star_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/star.png */ "./src/static/star.png");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three/examples/jsm/loaders/DRACOLoader.js */ "./node_modules/three/examples/jsm/loaders/DRACOLoader.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");











 // import * as dat from "dat.gui";
// Loading

const dracoLoader = new three_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_9__.DRACOLoader();
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.4.1/");
const gltf = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_8__.GLTFLoader();
gltf.setDRACOLoader(dracoLoader);
const material = new three__WEBPACK_IMPORTED_MODULE_11__.PointsMaterial({});
let moon = _static_moonx_processed_gltf__WEBPACK_IMPORTED_MODULE_0__;
gltf.load(moon, function (gltf) {
  moon = gltf.scene;
  moon.rotation.y = -0.3;
  moon.rotation.x = -0.2;
  moon.position.y = -0.13;
  moon.position.x = -0.12;
  gltf.scene.scale.set(1.15, 1.15, 1.15);
  scene.add(gltf.scene);
}, // then you can load your glb file
// called as loading progresses
function (xhr) {
  console.log(xhr.loaded / xhr.total * 100 + "% loaded");
}, // called when loading has errors
function (error) {
  console.log("An error happened");
});
const textureLoader = new three__WEBPACK_IMPORTED_MODULE_11__.TextureLoader();
const star = textureLoader.load(_static_star_png__WEBPACK_IMPORTED_MODULE_5__); // const normalTexture = textureLoader.load("");
// Debug
//  const gui = new dat.GUI();
// Canvas

const canvas = document.querySelector("canvas.webgl"); // Scene

const scene = new three__WEBPACK_IMPORTED_MODULE_11__.Scene(); // Objects

const geometry = new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(0.001, 64, 64);
const particlesGeometry = new three__WEBPACK_IMPORTED_MODULE_11__.BufferGeometry();
const particlesCount = 15000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 6;
} // // Materials


particlesGeometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_11__.BufferAttribute(posArray, 3));
const particlesMaterial = new three__WEBPACK_IMPORTED_MODULE_11__.PointsMaterial({
  size: 0.03,
  map: star,
  transparent: true,
  color: "#ffffff",
  blending: three__WEBPACK_IMPORTED_MODULE_11__.AdditiveBlending
}); // // Mesh

const particlesMesh = new three__WEBPACK_IMPORTED_MODULE_11__.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh); // 3D Models
// Light 1
// const pointLight1 = new THREE.PointLight(0x190039, 0.5);
// pointLight1.position.x = 2;
// pointLight1.position.y = -1;
// pointLight1.position.z = -1;
// scene.add(pointLight1);
// // Light 2

const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_11__.PointLight(0x00000);
pointLight2.position.set(1, -2, 1.16);
pointLight2.intensity = 3.9;
scene.add(pointLight2); // const light2 = gui.addFolder("Light 2");
// light2.add(pointLight2.position, "x").min(-3).max(3).step(0.01);
// light2.add(pointLight2.position, "y").min(-6).max(6).step(0.01);
// light2.add(pointLight2.position, "z").min(-6).max(6).step(0.01);
// light2.add(pointLight2, "intensity").min(0).max(10).step(0.01);
// Light 3

const pointLight3 = new three__WEBPACK_IMPORTED_MODULE_11__.PointLight(0x673a7c);
pointLight3.position.set(-8, 5, 8);
pointLight3.intensity = 3;
scene.add(pointLight3);
/**
 * Sizes
 */

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight; // Update camera

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix(); // Update renderer

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
/**
 * Camera
 */
// Base camera

const camera = new three__WEBPACK_IMPORTED_MODULE_11__.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0.1;
camera.position.y = -0.17;
camera.position.z = 1;
scene.add(camera); //Controls

const controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_10__.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
controls.enableZoom = false;
controls.autoRotateSpeed = 0.15;
controls.enablePan = false;
controls.update;
/**
 * Renderer
 */

const renderer = new three__WEBPACK_IMPORTED_MODULE_11__.WebGLRenderer({
  canvas: canvas,
  alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Mouse

document.addEventListener("mousemove", animatedParticles);
let mouseX = 0.5;
let mouseY = -0.5;

function animatedParticles(event) {
  mouseY = event.clientY;
  mouseX = event.clientX;
}
/**
 * Animate
 */


const clock = new three__WEBPACK_IMPORTED_MODULE_11__.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime(); // Update objects
  // sphere.rotation.y = 0.5 * elapsedTime;
  // sphere.rotation.x = 0.5 * elapsedTime;
  // sphere.rotation.z = 0.5 * elapsedTime;

  particlesMesh.rotation.x = mouseX * (elapsedTime * -0.0000022);
  particlesMesh.rotation.y = mouseY * (elapsedTime * -0.0000023); // Update Orbital Controls

  controls.update(); // Render

  renderer.render(scene, camera); // Call tick again on the next frame

  window.requestAnimationFrame(tick);
};

tick();

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/static/moonx-processed.gltf":
/*!*****************************************!*\
  !*** ./src/static/moonx-processed.gltf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/moonx-processed.gltf";

/***/ }),

/***/ "./src/static/moonx-processed0.png":
/*!*****************************************!*\
  !*** ./src/static/moonx-processed0.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/moonx-processed0.png";

/***/ }),

/***/ "./src/static/moonx-processed1.png":
/*!*****************************************!*\
  !*** ./src/static/moonx-processed1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/moonx-processed1.png";

/***/ }),

/***/ "./src/static/moonx-processed2.png":
/*!*****************************************!*\
  !*** ./src/static/moonx-processed2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/moonx-processed2.png";

/***/ }),

/***/ "./src/static/moonx-processed3.png":
/*!*****************************************!*\
  !*** ./src/static/moonx-processed3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/moonx-processed3.png";

/***/ }),

/***/ "./src/static/star.png":
/*!*****************************!*\
  !*** ./src/static/star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/star.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWNoYXJkbG92ZWxhY2UtZGV2cG9ydGZvbGlvLy4vc3JjL3RocmVlLmpzIiwid2VicGFjazovL3JpY2hhcmRsb3ZlbGFjZS1kZXZwb3J0Zm9saW8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzU4NDYiLCJ3ZWJwYWNrOi8vcmljaGFyZGxvdmVsYWNlLWRldnBvcnRmb2xpby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIl0sIm5hbWVzIjpbImRyYWNvTG9hZGVyIiwiRFJBQ09Mb2FkZXIiLCJzZXREZWNvZGVyUGF0aCIsImdsdGYiLCJHTFRGTG9hZGVyIiwic2V0RFJBQ09Mb2FkZXIiLCJtYXRlcmlhbCIsIlRIUkVFIiwibW9vbiIsIm15TW9vbiIsImxvYWQiLCJzY2VuZSIsInJvdGF0aW9uIiwieSIsIngiLCJwb3NpdGlvbiIsInNjYWxlIiwic2V0IiwiYWRkIiwieGhyIiwiY29uc29sZSIsImxvZyIsImxvYWRlZCIsInRvdGFsIiwiZXJyb3IiLCJ0ZXh0dXJlTG9hZGVyIiwic3RhciIsIm15U3RhciIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdlb21ldHJ5IiwicGFydGljbGVzR2VvbWV0cnkiLCJwYXJ0aWNsZXNDb3VudCIsInBvc0FycmF5IiwiRmxvYXQzMkFycmF5IiwiaSIsIk1hdGgiLCJyYW5kb20iLCJzZXRBdHRyaWJ1dGUiLCJwYXJ0aWNsZXNNYXRlcmlhbCIsInNpemUiLCJtYXAiLCJ0cmFuc3BhcmVudCIsImNvbG9yIiwiYmxlbmRpbmciLCJBZGRpdGl2ZUJsZW5kaW5nIiwicGFydGljbGVzTWVzaCIsInBvaW50TGlnaHQyIiwiaW50ZW5zaXR5IiwicG9pbnRMaWdodDMiLCJzaXplcyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbWVyYSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJyZW5kZXJlciIsInNldFNpemUiLCJzZXRQaXhlbFJhdGlvIiwibWluIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInoiLCJjb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJlbmFibGVEYW1waW5nIiwiYXV0b1JvdGF0ZSIsImVuYWJsZVpvb20iLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJ1cGRhdGUiLCJhbHBoYSIsImFuaW1hdGVkUGFydGljbGVzIiwibW91c2VYIiwibW91c2VZIiwiZXZlbnQiLCJjbGllbnRZIiwiY2xpZW50WCIsImNsb2NrIiwidGljayIsImVsYXBzZWRUaW1lIiwiZ2V0RWxhcHNlZFRpbWUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsSUFBSUMsa0ZBQUosRUFBcEI7QUFDQUQsV0FBVyxDQUFDRSxjQUFaLENBQ0UseURBREY7QUFJQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0ZBQUosRUFBYjtBQUNBRCxJQUFJLENBQUNFLGNBQUwsQ0FBb0JMLFdBQXBCO0FBRUEsTUFBTU0sUUFBUSxHQUFHLElBQUlDLGtEQUFKLENBQXlCLEVBQXpCLENBQWpCO0FBRUEsSUFBSUMsSUFBSSxHQUFHQyx5REFBWDtBQUVBTixJQUFJLENBQUNPLElBQUwsQ0FDRUYsSUFERixFQUVFLFVBQVVMLElBQVYsRUFBZ0I7QUFDZEssTUFBSSxHQUFHTCxJQUFJLENBQUNRLEtBQVo7QUFFQUgsTUFBSSxDQUFDSSxRQUFMLENBQWNDLENBQWQsR0FBa0IsQ0FBQyxHQUFuQjtBQUNBTCxNQUFJLENBQUNJLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixDQUFDLEdBQW5CO0FBRUFOLE1BQUksQ0FBQ08sUUFBTCxDQUFjRixDQUFkLEdBQWtCLENBQUMsSUFBbkI7QUFDQUwsTUFBSSxDQUFDTyxR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Y0FBTixFQUFwQixDQURpQixDQUdqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQXRDLGVBQWEsQ0FBQ25DLFFBQWQsQ0FBdUJFLENBQXZCLEdBQTJCK0QsTUFBTSxJQUFJTyxXQUFXLEdBQUcsQ0FBQyxTQUFuQixDQUFqQztBQUNBckMsZUFBYSxDQUFDbkMsUUFBZCxDQUF1QkMsQ0FBdkIsR0FBMkJpRSxNQUFNLElBQUlNLFdBQVcsR0FBRyxDQUFDLFNBQW5CLENBQWpDLENBVGlCLENBV2pCOztBQUNBakIsVUFBUSxDQUFDTyxNQUFULEdBWmlCLENBY2pCOztBQUNBYixVQUFRLENBQUN5QixNQUFULENBQWdCM0UsS0FBaEIsRUFBdUIrQyxNQUF2QixFQWZpQixDQWlCakI7O0FBQ0FMLFFBQU0sQ0FBQ2tDLHFCQUFQLENBQTZCSixJQUE3QjtBQUNELENBbkJEOztBQXFCQUEsSUFBSSxHOzs7Ozs7Ozs7Ozs7QUMvT0o7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJzcmNfdGhyZWVfanMuODhmMzc4MWFlN2YzMzE3YWFlN2YuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15TW9vbiBmcm9tIFwiLi9zdGF0aWMvbW9vbngtcHJvY2Vzc2VkLmdsdGZcIjtcclxuaW1wb3J0IFwiLi9zdGF0aWMvbW9vbngtcHJvY2Vzc2VkMC5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdGF0aWMvbW9vbngtcHJvY2Vzc2VkMS5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdGF0aWMvbW9vbngtcHJvY2Vzc2VkMi5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdGF0aWMvbW9vbngtcHJvY2Vzc2VkMy5wbmdcIjtcclxuaW1wb3J0IG15U3RhciBmcm9tIFwiLi9zdGF0aWMvc3Rhci5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uY3NzXCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanNcIjtcclxuaW1wb3J0IHsgRFJBQ09Mb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvRFJBQ09Mb2FkZXIuanNcIjtcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qc1wiO1xyXG4vLyBpbXBvcnQgKiBhcyBkYXQgZnJvbSBcImRhdC5ndWlcIjtcclxuXHJcbi8vIExvYWRpbmdcclxuXHJcbmNvbnN0IGRyYWNvTG9hZGVyID0gbmV3IERSQUNPTG9hZGVyKCk7XHJcbmRyYWNvTG9hZGVyLnNldERlY29kZXJQYXRoKFxyXG4gIFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZHJhY28vdmVyc2lvbmVkL2RlY29kZXJzLzEuNC4xL1wiXHJcbik7XHJcblxyXG5jb25zdCBnbHRmID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuZ2x0Zi5zZXREUkFDT0xvYWRlcihkcmFjb0xvYWRlcik7XHJcblxyXG5jb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7fSk7XHJcblxyXG5sZXQgbW9vbiA9IG15TW9vbjtcclxuXHJcbmdsdGYubG9hZChcclxuICBtb29uLFxyXG4gIGZ1bmN0aW9uIChnbHRmKSB7XHJcbiAgICBtb29uID0gZ2x0Zi5zY2VuZTtcclxuXHJcbiAgICBtb29uLnJvdGF0aW9uLnkgPSAtMC4zO1xyXG4gICAgbW9vbi5yb3RhdGlvbi54ID0gLTAuMjtcclxuXHJcbiAgICBtb29uLnBvc2l0aW9uLnkgPSAtMC4xMztcclxuICAgIG1vb24ucG9zaXRpb24ueCA9IC0wLjEyO1xyXG5cclxuICAgIGdsdGYuc2NlbmUuc2NhbGUuc2V0KDEuMTUsIDEuMTUsIDEuMTUpO1xyXG5cclxuICAgIHNjZW5lLmFkZChnbHRmLnNjZW5lKTtcclxuICB9LFxyXG5cclxuICAvLyB0aGVuIHlvdSBjYW4gbG9hZCB5b3VyIGdsYiBmaWxlXHJcblxyXG4gIC8vIGNhbGxlZCBhcyBsb2FkaW5nIHByb2dyZXNzZXNcclxuICBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICBjb25zb2xlLmxvZygoeGhyLmxvYWRlZCAvIHhoci50b3RhbCkgKiAxMDAgKyBcIiUgbG9hZGVkXCIpO1xyXG4gIH0sXHJcbiAgLy8gY2FsbGVkIHdoZW4gbG9hZGluZyBoYXMgZXJyb3JzXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIGhhcHBlbmVkXCIpO1xyXG4gIH1cclxuKTtcclxuXHJcblxyXG5jb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuXHJcbmNvbnN0IHN0YXIgPSB0ZXh0dXJlTG9hZGVyLmxvYWQobXlTdGFyKTtcclxuXHJcbi8vIGNvbnN0IG5vcm1hbFRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoXCJcIik7XHJcblxyXG4vLyBEZWJ1Z1xyXG4vLyAgY29uc3QgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbi8vIENhbnZhc1xyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzLndlYmdsXCIpO1xyXG5cclxuLy8gU2NlbmVcclxuY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbi8vIE9iamVjdHNcclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC4wMDEsIDY0LCA2NCk7XHJcblxyXG5jb25zdCBwYXJ0aWNsZXNHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG5cclxuY29uc3QgcGFydGljbGVzQ291bnQgPSAxNTAwMDtcclxuXHJcbmNvbnN0IHBvc0FycmF5ID0gbmV3IEZsb2F0MzJBcnJheShwYXJ0aWNsZXNDb3VudCAqIDMpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNDb3VudCAqIDM7IGkrKykge1xyXG4gIHBvc0FycmF5W2ldID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNjtcclxufVxyXG4vLyAvLyBNYXRlcmlhbHNcclxuXHJcbnBhcnRpY2xlc0dlb21ldHJ5LnNldEF0dHJpYnV0ZShcclxuICBcInBvc2l0aW9uXCIsXHJcbiAgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NBcnJheSwgMylcclxuKTtcclxuXHJcblxyXG5cclxuY29uc3QgcGFydGljbGVzTWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoe1xyXG4gIHNpemU6IDAuMDMsXHJcbiAgbWFwOiBzdGFyLFxyXG4gIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICBibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZyxcclxufSk7XHJcblxyXG4vLyAvLyBNZXNoXHJcblxyXG5jb25zdCBwYXJ0aWNsZXNNZXNoID0gbmV3IFRIUkVFLlBvaW50cyhwYXJ0aWNsZXNHZW9tZXRyeSwgcGFydGljbGVzTWF0ZXJpYWwpO1xyXG5zY2VuZS5hZGQocGFydGljbGVzTWVzaCk7XHJcblxyXG4vLyAzRCBNb2RlbHNcclxuXHJcblxyXG5cclxuLy8gTGlnaHQgMVxyXG5cclxuLy8gY29uc3QgcG9pbnRMaWdodDEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweDE5MDAzOSwgMC41KTtcclxuLy8gcG9pbnRMaWdodDEucG9zaXRpb24ueCA9IDI7XHJcbi8vIHBvaW50TGlnaHQxLnBvc2l0aW9uLnkgPSAtMTtcclxuLy8gcG9pbnRMaWdodDEucG9zaXRpb24ueiA9IC0xO1xyXG4vLyBzY2VuZS5hZGQocG9pbnRMaWdodDEpO1xyXG5cclxuLy8gLy8gTGlnaHQgMlxyXG5cclxuY29uc3QgcG9pbnRMaWdodDIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweDAwMDAwKTtcclxuXHJcbnBvaW50TGlnaHQyLnBvc2l0aW9uLnNldCgxLCAtMiwgMS4xNik7XHJcbnBvaW50TGlnaHQyLmludGVuc2l0eSA9IDMuOTtcclxuXHJcbnNjZW5lLmFkZChwb2ludExpZ2h0Mik7XHJcblxyXG4vLyBjb25zdCBsaWdodDIgPSBndWkuYWRkRm9sZGVyKFwiTGlnaHQgMlwiKTtcclxuXHJcbi8vIGxpZ2h0Mi5hZGQocG9pbnRMaWdodDIucG9zaXRpb24sIFwieFwiKS5taW4oLTMpLm1heCgzKS5zdGVwKDAuMDEpO1xyXG4vLyBsaWdodDIuYWRkKHBvaW50TGlnaHQyLnBvc2l0aW9uLCBcInlcIikubWluKC02KS5tYXgoNikuc3RlcCgwLjAxKTtcclxuLy8gbGlnaHQyLmFkZChwb2ludExpZ2h0Mi5wb3NpdGlvbiwgXCJ6XCIpLm1pbigtNikubWF4KDYpLnN0ZXAoMC4wMSk7XHJcbi8vIGxpZ2h0Mi5hZGQocG9pbnRMaWdodDIsIFwiaW50ZW5zaXR5XCIpLm1pbigwKS5tYXgoMTApLnN0ZXAoMC4wMSk7XHJcblxyXG4vLyBMaWdodCAzXHJcbmNvbnN0IHBvaW50TGlnaHQzID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHg2NzNhN2MpO1xyXG5cclxucG9pbnRMaWdodDMucG9zaXRpb24uc2V0KC04LCA1LCA4KTtcclxucG9pbnRMaWdodDMuaW50ZW5zaXR5ID0gMztcclxuXHJcbnNjZW5lLmFkZChwb2ludExpZ2h0Myk7XHJcblxyXG5cclxuLyoqXHJcbiAqIFNpemVzXHJcbiAqL1xyXG5jb25zdCBzaXplcyA9IHtcclxuICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgLy8gVXBkYXRlIHNpemVzXHJcbiAgc2l6ZXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBzaXplcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIC8vIFVwZGF0ZSBjYW1lcmFcclxuICBjYW1lcmEuYXNwZWN0ID0gc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQ7XHJcbiAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgLy8gVXBkYXRlIHJlbmRlcmVyXHJcbiAgcmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KTtcclxuICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyKSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIENhbWVyYVxyXG4gKi9cclxuLy8gQmFzZSBjYW1lcmFcclxuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gIDc1LFxyXG4gIHNpemVzLndpZHRoIC8gc2l6ZXMuaGVpZ2h0LFxyXG4gIDAuMSxcclxuICAxMDBcclxuKTtcclxuY2FtZXJhLnBvc2l0aW9uLnggPSAwLjE7XHJcbmNhbWVyYS5wb3NpdGlvbi55ID0gLTAuMTc7XHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gMTtcclxuc2NlbmUuYWRkKGNhbWVyYSk7XHJcblxyXG4vL0NvbnRyb2xzXHJcbmNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xyXG5jb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcclxuY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XHJcbmNvbnRyb2xzLmVuYWJsZVpvb20gPSBmYWxzZTtcclxuY29udHJvbHMuYXV0b1JvdGF0ZVNwZWVkID0gMC4xNTtcclxuY29udHJvbHMuZW5hYmxlUGFuID0gZmFsc2U7XHJcblxyXG5jb250cm9scy51cGRhdGU7XHJcblxyXG4vKipcclxuICogUmVuZGVyZXJcclxuICovXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gIGNhbnZhczogY2FudmFzLFxyXG4gIGFscGhhOiB0cnVlLFxyXG59KTtcclxucmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KTtcclxucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMikpO1xyXG5cclxuLy8gTW91c2VcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgYW5pbWF0ZWRQYXJ0aWNsZXMpO1xyXG5cclxubGV0IG1vdXNlWCA9IDAuNTtcclxubGV0IG1vdXNlWSA9IC0wLjU7XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlZFBhcnRpY2xlcyhldmVudCkge1xyXG4gIG1vdXNlWSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgbW91c2VYID0gZXZlbnQuY2xpZW50WDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuaW1hdGVcclxuICovXHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xyXG5cclxuY29uc3QgdGljayA9ICgpID0+IHtcclxuICBjb25zdCBlbGFwc2VkVGltZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCk7XHJcblxyXG4gIC8vIFVwZGF0ZSBvYmplY3RzXHJcbiAgLy8gc3BoZXJlLnJvdGF0aW9uLnkgPSAwLjUgKiBlbGFwc2VkVGltZTtcclxuICAvLyBzcGhlcmUucm90YXRpb24ueCA9IDAuNSAqIGVsYXBzZWRUaW1lO1xyXG4gIC8vIHNwaGVyZS5yb3RhdGlvbi56ID0gMC41ICogZWxhcHNlZFRpbWU7XHJcblxyXG4gIHBhcnRpY2xlc01lc2gucm90YXRpb24ueCA9IG1vdXNlWCAqIChlbGFwc2VkVGltZSAqIC0wLjAwMDAwMjIpO1xyXG4gIHBhcnRpY2xlc01lc2gucm90YXRpb24ueSA9IG1vdXNlWSAqIChlbGFwc2VkVGltZSAqIC0wLjAwMDAwMjMpO1xyXG5cclxuICAvLyBVcGRhdGUgT3JiaXRhbCBDb250cm9sc1xyXG4gIGNvbnRyb2xzLnVwZGF0ZSgpO1xyXG5cclxuICAvLyBSZW5kZXJcclxuICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcblxyXG4gIC8vIENhbGwgdGljayBhZ2FpbiBvbiB0aGUgbmV4dCBmcmFtZVxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbn07XHJcblxyXG50aWNrKCk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=