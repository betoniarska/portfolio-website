import * as THREE from 'three';

export function createParticleSystem(scene) {
    console.log('particles.js loaded');
    const particleCount = 50000;
    const particleGeometry = new THREE.SphereGeometry(0.5, 8, 8);
    const particleMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 1,
    });

    const instancedMesh = new THREE.InstancedMesh(particleGeometry, particleMaterial, particleCount);

    const range = 300;
    const dummy = new THREE.Object3D();

    for (let i = 0; i < particleCount; i++) {
        
        dummy.position.set(
            (Math.random() - 0.5) * range,
            (Math.random() - 0.5) * range,
            (Math.random() - 0.5) * range
        );
        
        
        dummy.scale.setScalar(Math.random() * 0.3 + 0.1);
        dummy.updateMatrix();

        instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    scene.add(instancedMesh);
    return { instancedMesh };
}