
// main.js responsible for initializing the scene, camera, renderer, and handling the particle system, soundtrack, and theme updates.

import * as THREE from 'three';
import { createParticleSystem } from './particles';

export let instancedMesh;
const particleCount = 50000;
const scales = new Array(particleCount);
let scene, camera, renderer, ambientLight;
let audioContext, audioBuffer, audioSource;
let isLightMode = false;

export let additionalZoomSpeed = 10;

export function increaseZoomSpeed(amount) {
    additionalZoomSpeed += amount;
}

// initscene
export function initScene(containerId) {
    console.log("main.js loaded");
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found!`);
        return;
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = -600;

    const initialFogColor = 0x111111;
    const near = 110;
    const far = 125;
    scene.fog = new THREE.Fog(initialFogColor, near, far);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
    scene.add(ambientLight);

    scene.background = new THREE.Color(0x111111);

    if (instancedMesh) {
        scene.remove(instancedMesh);
    }
    ({ instancedMesh } = createParticleSystem(scene));

    // logic to reposition particles on lightmode init

    const dummy = new THREE.Object3D();
    for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;

    let z;
    if (isLightMode) {
        z = 50 - Math.random() * 2050;
    } else {
        z = -2000 + Math.random() * 2050 + Math.random() * 500;
    }

    dummy.position.set(x, y, z);
    dummy.scale.setScalar(Math.random() * 0.3 + 0.1);
    dummy.updateMatrix();

    instancedMesh.setMatrixAt(i, dummy.matrix);
}
instancedMesh.instanceMatrix.needsUpdate = true;

    const storedTheme = localStorage.getItem('isDarkMode');
    if (storedTheme !== null) {
        const isDark = JSON.parse(storedTheme);
        updateSceneTheme(isDark);
    }

    for (let i = 0; i < particleCount; i++) {
        scales[i] = Math.random() * 0.3 + 0.1;
    }

    const dampingFactor = 0.98;
    const zoomSpeed = 0.04;

    window.addEventListener('wheel', (event) => {
        additionalZoomSpeed += Math.abs(event.deltaY * 0.0001);
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });


    loadAndPlaySoundtrack('../../resources/deep-space-ambiance-48854.mp3');

    // animate function
    function animate() {
        requestAnimationFrame(animate);

        const time = performance.now() * 0.002;
        const dummy = new THREE.Object3D();

        for (let i = 0; i < particleCount; i++) {
            instancedMesh.getMatrixAt(i, dummy.matrix);

            dummy.position.setFromMatrixPosition(dummy.matrix);

            const effectiveZoomSpeed = isLightMode ? -(zoomSpeed + additionalZoomSpeed) : zoomSpeed + additionalZoomSpeed;
            dummy.position.z += effectiveZoomSpeed;

            if (isLightMode) {
                if (dummy.position.z < -2000) {
                    dummy.position.z = 50 - Math.random() * 2050;
                }
            } else {
                if (dummy.position.z > 50) {
                    dummy.position.z = -2000 + Math.random() * 2050;
                    dummy.position.z += Math.random() * 500;
                }
            }

            const scale = Math.sin(time + i * 0.1) * 0.15 + 0.15;
            dummy.scale.setScalar(scale);

            dummy.updateMatrix();

            instancedMesh.setMatrixAt(i, dummy.matrix);
        }

        additionalZoomSpeed *= dampingFactor;

        instancedMesh.instanceMatrix.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}

//soundtrack
function loadAndPlaySoundtrack(audioFilePath) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    function startAudioContext() {
        if (audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                console.log("AudioContext resumed successfully");
                playSoundtrack();
            });
        } else {
            playSoundtrack();
        }

        window.removeEventListener('click', startAudioContext);
        window.removeEventListener('touchstart', startAudioContext);
    }

    window.addEventListener('click', startAudioContext);
    window.addEventListener('touchstart', startAudioContext);

    fetch(audioFilePath)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(buffer => {
            audioBuffer = buffer;
            console.log("Audio loaded successfully");
        })
        .catch(error => console.error('Error loading audio file:', error));
}

function playSoundtrack() {
    if (!audioBuffer || !audioContext) return;

    audioSource = audioContext.createBufferSource();
    audioSource.buffer = audioBuffer;
    audioSource.loop = true;
    audioSource.connect(audioContext.destination);

    audioSource.start(0);
}

let animationFrameId = null;

// light - dark theme
export function updateSceneTheme(isDarkMode) {
    if (!scene || !ambientLight) return;

    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));

    const darkModeColors = {
        background: new THREE.Color(0x111111),
        fog: new THREE.Color(0x111111),
        ambientLight: new THREE.Color(0xFFFFFF),
        particle: new THREE.Color(0xFFFFFF),
    };
    
    const lightModeColors = {
        background: new THREE.Color(0xC9C9C9),
        fog: new THREE.Color(0xC9C9C9),
        ambientLight: new THREE.Color(0xFFFFFF),
        particle: new THREE.Color(0x000000),
    };

    const colors = isDarkMode ? darkModeColors : lightModeColors;

    const startColors = {
        background: scene.background.clone(),
        fog: scene.fog.color.clone(),
        ambientLight: ambientLight.color.clone(),
        particle: instancedMesh.material.color.clone(),
    };

    const duration = 0.9;
    const startTime = performance.now();

    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    function interpolateColor(currentTime) {
        const elapsedTime = (currentTime - startTime) / 1000;
        const t = Math.min(elapsedTime / duration, 1);

        scene.background.copy(startColors.background).lerp(colors.background, t);
        scene.fog.color.copy(startColors.fog).lerp(colors.fog, t);
        ambientLight.color.copy(startColors.ambientLight).lerp(colors.ambientLight, t);
        instancedMesh.material.color.copy(startColors.particle).lerp(colors.particle, t);

        if (t < 1) {
            animationFrameId = requestAnimationFrame(interpolateColor);
            instancedMesh.material.needsUpdate = true;
    
        } else {
            animationFrameId = null;
        }
    }

    isLightMode = !isDarkMode;

    animationFrameId = requestAnimationFrame(interpolateColor);
}

