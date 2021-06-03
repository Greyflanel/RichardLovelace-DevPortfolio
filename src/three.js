import "./static/moonx-processed0.png";
import "./static/moonx-processed2.png";
import "./static/moonx-processed1.png";
import "./static/moonx-processed3.png";
import myMoon from "./static/moonx-processed.gltf";
import myStar from "./static/star.png";
import "./styles/style.css";
import "./styles/main.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";

// Loading

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.4.1/"
);

const gltf = new GLTFLoader();
gltf.setDRACOLoader(dracoLoader);

let moon = myMoon;

gltf.load(
  moon,
  function (gltf) {
    moon = gltf.scene;

    moon.rotation.y = -0.1;
    moon.rotation.x = -0.1;

    moon.position.y = -0.13;
    moon.position.x = -0.12;

    gltf.scene.scale.set(1.15, 1.15, 1.15);

    scene.add(gltf.scene);
  },

  // then you can load your glb file

  // called as loading progresses
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log("An error happened");
  }
);


const textureLoader = new THREE.TextureLoader();

const star = textureLoader.load(myStar);

// const normalTexture = textureLoader.load("");

// Debug
//  const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects


const particlesGeometry = new THREE.BufferGeometry();

const particlesCount = 15000;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 6;
}
// // Materials

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);



const particlesMaterial = new THREE.PointsMaterial({
  size: 0.03,
  map: star,
  transparent: true,
  color: "#ffffff",
  blending: THREE.AdditiveBlending,
});

// // Mesh

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// 3D Models



// Light 1

const pointLight1 = new THREE.DirectionalLight(0x68228B	, 0.5);
pointLight1.position.set(-1, 5, 4);
pointLight1.intensity = 2;
scene.add(pointLight1);

// // Light 2

const pointLight2 = new THREE.DirectionalLight(0x68228B	);

pointLight2.position.set(1, -2, 1);
pointLight2.intensity = 2;

scene.add(pointLight2);

// const light2 = gui.addFolder("Light 2");

// light2.add(pointLight2.position, "x").min(-3).max(3).step(0.01);
// light2.add(pointLight2.position, "y").min(-6).max(6).step(0.01);
// light2.add(pointLight2.position, "z").min(-6).max(6).step(0.01);
// light2.add(pointLight2, "intensity").min(0).max(10).step(0.01);

// Light 3
const pointLight3 = new THREE.DirectionalLight(0x68228B	);

pointLight3.position.set(-10, 5, 8);
pointLight3.intensity = 2;

scene.add(pointLight3);


/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0.1;
camera.position.y = -0.17;
camera.position.z = 1;
scene.add(camera);

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
controls.enableZoom = false;
controls.autoRotateSpeed = 0.15;
controls.enablePan = false;

controls.update;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Mouse

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

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  particlesMesh.rotation.x = mouseX * (elapsedTime * -0.0000022);
  particlesMesh.rotation.y = mouseY * (elapsedTime * -0.0000023);

  // Update Orbital Controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();


// tl.set(".container", {
  //   visibility: "visible",
  //   autoAlpha: 1,

  //   xPercent: -50,
  //   yPercent: -50,
  //   x: "35%",
  //   y: "0%",

  // });

  // if (mqls[0].matches) {

  //   tl.to(".container", {

  //     x: "+=5%",
  //     y: "-=25%",
  //     duration: 20,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=45%",
  //       y: "+=30%",
  //       duration: 45,
  //       ease: "linear",
  //       delay: 9999999999999999999999999999,
  //     })
  //     .to(".container", {
  //       x: "-=45%",
  //       y: "+=20%",
  //       duration: 45,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=45%",
  //       y: "-=20%",
  //       duration: 45,
  //       ease: "linear",
  //     });
  // } else if (mqls[1].matches) {
  //   tl.set(".container", {
  //     x: "+=10%",
  //     delay: 0
  //   });
  //   tl.to(".container", {
  //     x: "+=38%",
  //     y: "-=13%",
  //     duration: 30,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=38%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=38%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=38%",
  //       y: "-=13%",
  //       duration: 30,
  //       ease: "linear",
  //     });

  // }