// Three.js Scene Management
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, controls;
let animationId = null;
let isAnimating = true;

// Initialize 3D scene
export function initScene() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;
    
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 5, 10);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.enablePan = false;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x4a6cf7, 1, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);
    
    // Create 3D objects
    createTemplatesLayer();
    createWorkflowsLayer();
    createBoardsLayer();
    
    // Event listeners
    setupSceneControls();
    setupInteractions();
    
    // Handle resize
    window.addEventListener('resize', onWindowResize);
    
    // Listen for tier highlighting
    window.addEventListener('highlight-tier', (e) => {
        highlightTier(e.detail.tier);
    });
    
    window.addEventListener('unhighlight-tier', () => {
        unhighlightTier();
    });
    
    // Start animation loop
    animate();
}

// Setup mouse interactions
function setupInteractions() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;
    
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredObject = null;
    
    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        
        // Remove previous hover effect
        if (hoveredObject) {
            removeHoverEffect(hoveredObject);
            hoveredObject = null;
        }
        
        // Add hover effect to new object
        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.userData.type) {
                hoveredObject = object;
                addHoverEffect(object);
                canvas.style.cursor = 'pointer';
            }
        } else {
            canvas.style.cursor = 'default';
        }
    });
    
    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        
        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.userData.type) {
                handleObjectClick(object);
            }
        }
    });
}

// Add hover effect
function addHoverEffect(object) {
    if (object.userData.outline) {
        object.userData.outline.visible = true;
    }
    
    if (object.userData.hoverScale) {
        object.scale.multiplyScalar(object.userData.hoverScale);
    }
    
    // Increase emissive intensity
    if (object.material && object.material.emissive) {
        object.material.emissiveIntensity = 0.5;
    }
}

// Remove hover effect
function removeHoverEffect(object) {
    if (object.userData.outline) {
        object.userData.outline.visible = false;
    }
    
    if (object.userData.hoverScale) {
        object.scale.multiplyScalar(1 / object.userData.hoverScale);
    }
    
    // Reset emissive intensity
    if (object.material && object.material.emissive) {
        object.material.emissiveIntensity = 0.1;
    }
}

// Handle object click
function handleObjectClick(object) {
    const type = object.userData.type;
    console.log(`Clicked on ${type} object`);
    
    // You can add navigation or detail view here
    // For example, scroll to relevant section
    if (type === 'template') {
        document.querySelector('[data-tier="templates"]')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'workflow') {
        document.querySelector('[data-tier="workflows"]')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'board') {
        document.querySelector('[data-tier="boards"]')?.scrollIntoView({ behavior: 'smooth' });
    }
}

// Highlight tier layer
function highlightTier(tier) {
    const layerMap = {
        'templates': 'templatesLayer',
        'workflows': 'workflowsLayer',
        'boards': 'boardsLayer',
    };
    
    const layerName = layerMap[tier];
    if (!layerName) return;
    
    scene.traverse((object) => {
        if (object.parent && object.parent.name === layerName) {
            if (object.material) {
                object.material.emissiveIntensity = 0.4;
            }
        } else if (object.name !== layerName) {
            if (object.material && object.material.opacity !== undefined) {
                object.material.opacity = 0.3;
                object.material.transparent = true;
            }
        }
    });
}

// Unhighlight tier
function unhighlightTier() {
    scene.traverse((object) => {
        if (object.material) {
            if (object.material.emissiveIntensity !== undefined) {
                object.material.emissiveIntensity = 0.1;
            }
            if (object.material.opacity !== undefined && object.material.opacity < 1) {
                object.material.opacity = 1;
            }
        }
    });
}

// Create Templates layer (top)
function createTemplatesLayer() {
    const group = new THREE.Group();
    group.name = 'templatesLayer';
    group.position.y = 3;
    
    // Create template shapes with different geometries
    const templateConfigs = [
        { type: 'box', size: 1, color: 0x4a6cf7 },
        { type: 'cone', size: 0.7, color: 0x5b7cfa },
        { type: 'octahedron', size: 0.8, color: 0x6b84f8 },
    ];
    
    templateConfigs.forEach((config, index) => {
        let geometry;
        switch(config.type) {
            case 'box':
                geometry = new THREE.BoxGeometry(config.size, config.size, config.size);
                break;
            case 'cone':
                geometry = new THREE.ConeGeometry(config.size, config.size * 1.5, 8);
                break;
            case 'octahedron':
                geometry = new THREE.OctahedronGeometry(config.size);
                break;
        }
        
        const material = new THREE.MeshStandardMaterial({
            color: config.color,
            metalness: 0.8,
            roughness: 0.2,
            emissive: config.color,
            emissiveIntensity: 0.1,
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (index - 1) * 2;
        mesh.rotation.y = Math.PI / 4;
        mesh.userData = {
            type: 'template',
            originalY: mesh.position.y,
            originalX: mesh.position.x,
            rotationSpeed: 0.01 + index * 0.005,
            hoverScale: 1.2,
        };
        
        // Add outline effect
        const outlineGeometry = geometry.clone();
        const outlineMaterial = new THREE.MeshBasicMaterial({
            color: config.color,
            side: THREE.BackSide,
        });
        const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
        outline.scale.multiplyScalar(1.1);
        outline.position.copy(mesh.position);
        outline.rotation.copy(mesh.rotation);
        outline.visible = false;
        outline.userData.isOutline = true;
        mesh.userData.outline = outline;
        
        group.add(mesh);
        group.add(outline);
    });
    
    // Add connecting lines between templates
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x4a6cf7, 
        opacity: 0.3, 
        transparent: true 
    });
    
    for (let i = 0; i < templateConfigs.length - 1; i++) {
        const points = [
            new THREE.Vector3((i - 1) * 2, 0, 0),
            new THREE.Vector3(i * 2, 0, 0)
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
    }
    
    scene.add(group);
}

// Create Workflows layer (middle)
function createWorkflowsLayer() {
    const group = new THREE.Group();
    group.name = 'workflowsLayer';
    group.position.y = 0;
    
    // Create workflow tree structure with hierarchy
    const nodeGeometry = new THREE.SphereGeometry(0.35, 16, 16);
    const parentMaterial = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0x10b981,
        emissiveIntensity: 0.2,
    });
    
    // Parent node (larger)
    const parentNode = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 16, 16), 
        parentMaterial
    );
    parentNode.position.set(0, 0.5, 0);
    parentNode.userData = { type: 'workflow', isParent: true };
    group.add(parentNode);
    
    // Child nodes in hierarchical structure
    const childCount = 4;
    const childMaterial = new THREE.MeshStandardMaterial({
        color: 0x34d399,
        metalness: 0.6,
        roughness: 0.4,
    });
    
    for (let i = 0; i < childCount; i++) {
        const angle = (i / childCount) * Math.PI * 2;
        const radius = 1.8;
        const childNode = new THREE.Mesh(nodeGeometry, childMaterial);
        childNode.position.set(
            Math.cos(angle) * radius,
            -0.3,
            Math.sin(angle) * radius
        );
        childNode.userData = {
            type: 'workflow',
            isParent: false,
            originalScale: 1,
        };
        group.add(childNode);
        
        // Connection line with animation
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0.5, 0),
            childNode.position
        ]);
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x10b981,
            opacity: 0.6,
            transparent: true,
            linewidth: 2,
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        line.userData = { 
            type: 'connection',
            parentPos: new THREE.Vector3(0, 0.5, 0),
            childPos: childNode.position.clone(),
        };
        group.add(line);
        
        // Add grandchild nodes (optional - for more complex hierarchy)
        if (i < 2) {
            const grandchildGeometry = new THREE.SphereGeometry(0.2, 12, 12);
            const grandchildMaterial = new THREE.MeshStandardMaterial({
                color: 0x6ee7b7,
                metalness: 0.5,
                roughness: 0.5,
            });
            
            const grandchildAngle = angle + (Math.PI / childCount);
            const grandchildRadius = 0.8;
            const grandchild = new THREE.Mesh(grandchildGeometry, grandchildMaterial);
            grandchild.position.set(
                childNode.position.x + Math.cos(grandchildAngle) * grandchildRadius,
                childNode.position.y - 0.4,
                childNode.position.z + Math.sin(grandchildAngle) * grandchildRadius
            );
            group.add(grandchild);
            
            // Connection to grandchild
            const gcLineGeometry = new THREE.BufferGeometry().setFromPoints([
                childNode.position,
                grandchild.position
            ]);
            const gcLine = new THREE.Line(gcLineGeometry, lineMaterial);
            gcLine.material.opacity = 0.4;
            group.add(gcLine);
        }
    }
    
    scene.add(group);
}

// Create Boards layer (bottom)
function createBoardsLayer() {
    const group = new THREE.Group();
    group.name = 'boardsLayer';
    group.position.y = -3;
    
    // Create Kanban-style columns
    const columns = [
        { name: 'To Do', color: 0xf59e0b, count: 3 },
        { name: 'In Progress', color: 0xfbbf24, count: 2 },
        { name: 'Done', color: 0x84cc16, count: 2 },
    ];
    
    columns.forEach((column, colIndex) => {
        const columnGroup = new THREE.Group();
        columnGroup.position.x = (colIndex - 1) * 2.5;
        
        // Create cards for this column
        for (let i = 0; i < column.count; i++) {
            const cardGeometry = new THREE.BoxGeometry(1.2, 0.1, 0.8);
            const cardMaterial = new THREE.MeshStandardMaterial({
                color: column.color,
                metalness: 0.6,
                roughness: 0.4,
                emissive: column.color,
                emissiveIntensity: 0.1,
            });
            
            const card = new THREE.Mesh(cardGeometry, cardMaterial);
            card.position.set(
                0,
                i * 0.3,
                0
            );
            card.rotation.x = -0.1;
            card.userData = {
                type: 'board',
                column: column.name,
                originalY: card.position.y,
                hoverY: card.position.y + 0.2,
            };
            columnGroup.add(card);
        }
        
        // Add column label (using a plane as text placeholder)
        const labelGeometry = new THREE.PlaneGeometry(1.5, 0.3);
        const labelMaterial = new THREE.MeshBasicMaterial({
            color: column.color,
            opacity: 0.3,
            transparent: true,
            side: THREE.DoubleSide,
        });
        const label = new THREE.Mesh(labelGeometry, labelMaterial);
        label.position.set(0, -0.8, 0);
        label.rotation.x = -Math.PI / 2;
        columnGroup.add(label);
        
        group.add(columnGroup);
    }
    
    // Add connecting flow lines between columns
    const flowLineMaterial = new THREE.LineBasicMaterial({
        color: 0xf59e0b,
        opacity: 0.4,
        transparent: true,
    });
    
    for (let i = 0; i < columns.length - 1; i++) {
        const points = [
            new THREE.Vector3((i - 1) * 2.5 + 0.6, -0.5, 0),
            new THREE.Vector3(i * 2.5 - 0.6, -0.5, 0)
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const flowLine = new THREE.Line(lineGeometry, flowLineMaterial);
        group.add(flowLine);
    }
    
    scene.add(group);
}

// Animation loop
function animate() {
    if (!isAnimating) {
        animationId = requestAnimationFrame(animate);
        return;
    }
    
    animationId = requestAnimationFrame(animate);
    
    // Update controls
    controls.update();
    
    // Animate objects
    const time = Date.now() * 0.001;
    
    scene.traverse((object) => {
        // Template layer animations
        if (object.userData.type === 'template') {
            if (object.userData.rotationSpeed) {
                object.rotation.y += object.userData.rotationSpeed;
            }
            if (object.userData.originalY !== undefined) {
                object.position.y = object.userData.originalY + Math.sin(time + object.userData.originalX) * 0.15;
            }
        }
        
        // Workflow layer animations
        if (object.userData.type === 'workflow' && !object.userData.isParent) {
            const pulse = Math.sin(time * 2 + object.position.x) * 0.1 + 1;
            object.scale.set(pulse, pulse, pulse);
        }
        
        // Board layer animations
        if (object.userData.type === 'board') {
            const hover = Math.sin(time * 0.5 + object.position.x) * 0.05;
            object.position.y = object.userData.originalY + hover;
        }
    });
    
    // Animate connection lines (flow effect)
    scene.traverse((object) => {
        if (object.userData.type === 'connection') {
            const material = object.material;
            if (material.opacity !== undefined) {
                material.opacity = 0.4 + Math.sin(time * 2) * 0.2;
            }
        }
    });
    
    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;
    
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

// Setup scene controls
function setupSceneControls() {
    const resetCamera = document.getElementById('reset-camera');
    const toggleAnimation = document.getElementById('toggle-animation');
    const fullscreen = document.getElementById('fullscreen');
    
    if (resetCamera) {
        resetCamera.addEventListener('click', () => {
            camera.position.set(0, 5, 10);
            controls.reset();
        });
    }
    
    if (toggleAnimation) {
        toggleAnimation.addEventListener('click', () => {
            isAnimating = !isAnimating;
            const icon = toggleAnimation.querySelector('i');
            if (icon) {
                icon.className = isAnimating ? 'fas fa-pause' : 'fas fa-play';
            }
        });
    }
    
    if (fullscreen) {
        fullscreen.addEventListener('click', () => {
            const container = document.getElementById('scene-container');
            if (!container) return;
            
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(err => {
                    console.error('Error attempting to enable fullscreen:', err);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
}

// Cleanup
export function disposeScene() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    
    window.removeEventListener('resize', onWindowResize);
    
    if (scene) {
        scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(m => m.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
    }
    
    if (renderer) {
        renderer.dispose();
    }
}
