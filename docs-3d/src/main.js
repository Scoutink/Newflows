/**
 * Newflows Interactive 3D Documentation
 * Main Application Entry Point
 * Version: 1.0.0
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ContentManager } from './data/content.js';
import { PlatformDataLoader } from './data/platform-data.js';

/**
 * Main Application Class
 */
class DocumentationApp {
    constructor() {
        this.canvas = document.getElementById('webgl-canvas');
        this.loadingScreen = document.getElementById('loading-screen');
        this.loadingProgress = document.getElementById('loading-progress');
        this.loadingText = document.getElementById('loading-text');

        // Core components
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.lights = null;
        this.controls = null;

        // Effects
        this.particles = null;
        this.background = null;

        // Islands
        this.islands = {
            templates: null,
            workflows: null,
            boards: null
        };

        // Data
        this.contentManager = null;
        this.platformData = null;

        // UI
        this.uiManager = null;

        // State
        this.currentIsland = 'overview';
        this.isLoading = true;
        this.loadProgress = 0;

        // Animation
        this.clock = new THREE.Clock();
        this.mouse = new THREE.Vector2();

        this.init();
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            // Update loading progress
            this.updateLoadingProgress(10, 'Setting up 3D scene...');

            // Initialize core 3D components
            this.initScene();
            this.initCamera();
            this.initRenderer();
            this.initLighting();
            this.initControls();

            this.updateLoadingProgress(30, 'Creating particle effects...');

            // Initialize effects
            this.initEffects();

            this.updateLoadingProgress(50, 'Loading documentation content...');

            // Load data
            await this.loadData();

            this.updateLoadingProgress(70, 'Building 3D islands...');

            // Create islands
            this.createIslands();

            this.updateLoadingProgress(85, 'Initializing UI...');

            // Initialize UI
            this.initUI();

            this.updateLoadingProgress(95, 'Finalizing...');

            // Setup event listeners
            this.setupEventListeners();

            this.updateLoadingProgress(100, 'Ready!');

            // Start animation loop
            this.animate();

            // Hide loading screen
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 500);

        } catch (error) {
            console.error('Error initializing application:', error);
            this.loadingText.textContent = 'Error loading documentation. Please refresh.';
        }
    }

    /**
     * Initialize the Three.js scene
     */
    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0e27);
        this.scene.fog = new THREE.Fog(0x0a0e27, 20, 100);
    }

    /**
     * Initialize the camera
     */
    initCamera() {
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
        this.camera.position.set(0, 5, 15);
        this.camera.lookAt(0, 0, 0);
    }

    /**
     * Initialize the renderer
     */
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });

        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
    }

    /**
     * Initialize lighting
     */
    initLighting() {
        // Ambient light
        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambient);

        // Main directional light
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
        mainLight.position.set(10, 20, 10);
        mainLight.castShadow = true;
        mainLight.shadow.mapSize.width = 2048;
        mainLight.shadow.mapSize.height = 2048;
        mainLight.shadow.camera.near = 0.5;
        mainLight.shadow.camera.far = 500;
        this.scene.add(mainLight);

        // Cyan fill light
        const cyanLight = new THREE.DirectionalLight(0x00d9ff, 0.3);
        cyanLight.position.set(-10, 10, -10);
        this.scene.add(cyanLight);

        // Purple accent light
        const purpleLight = new THREE.PointLight(0x8b5cf6, 0.5, 50);
        purpleLight.position.set(0, 10, 0);
        this.scene.add(purpleLight);
    }

    /**
     * Initialize orbit controls
     */
    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 50;
        this.controls.maxPolarAngle = Math.PI / 2.1;
        this.controls.enablePan = false;
    }

    /**
     * Initialize visual effects
     */
    initEffects() {
        // Particle system
        this.createParticleSystem();

        // Background gradient plane
        this.createBackgroundPlane();
    }

    /**
     * Create particle system
     */
    createParticleSystem() {
        const particleCount = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color = new THREE.Color();

        for (let i = 0; i < particleCount * 3; i += 3) {
            // Position
            positions[i] = (Math.random() - 0.5) * 100;
            positions[i + 1] = (Math.random() - 0.5) * 50;
            positions[i + 2] = (Math.random() - 0.5) * 100;

            // Color (cyan to purple gradient)
            const t = Math.random();
            color.setHSL(0.5 + t * 0.3, 0.8, 0.6);
            colors[i] = color.r;
            colors[i + 1] = color.g;
            colors[i + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    /**
     * Create background plane
     */
    createBackgroundPlane() {
        const geometry = new THREE.PlaneGeometry(200, 100);
        const material = new THREE.MeshBasicMaterial({
            color: 0x1a1f3a,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });

        const plane = new THREE.Mesh(geometry, material);
        plane.position.z = -30;
        this.scene.add(plane);
    }

    /**
     * Load all data
     */
    async loadData() {
        this.contentManager = new ContentManager();
        this.platformData = new PlatformDataLoader();

        try {
            await Promise.all([
                this.contentManager.loadContent(),
                this.platformData.loadAll()
            ]);
        } catch (error) {
            console.error('Error loading data:', error);
            // Continue with demo mode
        }
    }

    /**
     * Create the three main islands
     */
    createIslands() {
        // Templates Island (left, green)
        const templatesGroup = new THREE.Group();
        templatesGroup.position.set(-20, 0, 0);
        this.createIslandMarker(templatesGroup, 'Templates', 0x10b981);
        this.scene.add(templatesGroup);
        this.islands.templates = templatesGroup;

        // Workflows Island (center, purple)
        const workflowsGroup = new THREE.Group();
        workflowsGroup.position.set(0, 0, 0);
        this.createIslandMarker(workflowsGroup, 'Workflows', 0x8b5cf6);
        this.scene.add(workflowsGroup);
        this.islands.workflows = workflowsGroup;

        // Boards Island (right, pink)
        const boardsGroup = new THREE.Group();
        boardsGroup.position.set(20, 0, 0);
        this.createIslandMarker(boardsGroup, 'Boards', 0xec4899);
        this.scene.add(boardsGroup);
        this.islands.boards = boardsGroup;

        // Add simple geometric shapes as placeholders
        this.addIslandGeometry(templatesGroup, 0x10b981, 'cube');
        this.addIslandGeometry(workflowsGroup, 0x8b5cf6, 'sphere');
        this.addIslandGeometry(boardsGroup, 0xec4899, 'torus');
    }

    /**
     * Create island marker (floating label)
     */
    createIslandMarker(group, label, color) {
        // Create a simple glowing sphere as marker
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.5,
            metalness: 0.8,
            roughness: 0.2
        });

        const marker = new THREE.Mesh(geometry, material);
        marker.position.y = 3;
        marker.userData = { label, color };
        group.add(marker);

        // Add point light
        const light = new THREE.PointLight(color, 1, 10);
        light.position.copy(marker.position);
        group.add(light);
    }

    /**
     * Add geometry to island
     */
    addIslandGeometry(group, color, type) {
        let geometry;

        switch (type) {
            case 'cube':
                geometry = new THREE.BoxGeometry(2, 2, 2);
                break;
            case 'sphere':
                geometry = new THREE.SphereGeometry(1.5, 32, 32);
                break;
            case 'torus':
                geometry = new THREE.TorusGeometry(1.2, 0.4, 16, 32);
                break;
        }

        const material = new THREE.MeshPhysicalMaterial({
            color: color,
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.8,
            envMapIntensity: 1
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);

        // Animate
        mesh.userData.rotationSpeed = 0.002;
    }

    /**
     * Initialize UI components
     */
    initUI() {
        this.uiManager = {
            searchModal: document.getElementById('search-modal'),
            contentPanel: document.getElementById('content-panel'),
            helpModal: document.getElementById('help-modal'),
            navOrb: document.getElementById('nav-orb'),
            orbMenu: document.getElementById('orb-menu')
        };

        // Setup UI interactions
        this.setupUIInteractions();
    }

    /**
     * Setup UI interactions
     */
    setupUIInteractions() {
        // Search trigger
        document.getElementById('search-trigger').addEventListener('click', () => {
            this.toggleSearch();
        });

        // Navigation orb
        const orbButton = this.uiManager.navOrb.querySelector('.orb-button');
        orbButton.addEventListener('click', () => {
            this.uiManager.orbMenu.classList.toggle('hidden');
        });

        // Island navigation
        document.querySelectorAll('.orb-menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const island = e.currentTarget.dataset.island;
                this.navigateToIsland(island);
                this.uiManager.orbMenu.classList.add('hidden');
            });
        });

        // Help modal
        document.getElementById('help-btn').addEventListener('click', () => {
            this.toggleHelp();
        });

        // Close modals on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

        // Search shortcut (Ctrl/Cmd + K)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleSearch();
            }
        });

        // Modal close buttons
        document.querySelectorAll('.modal-close, .search-close, .panel-close').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeAllModals();
            });
        });
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Window resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Mouse move for parallax
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));

        // Click on canvas for raycasting
        this.canvas.addEventListener('click', (e) => this.onCanvasClick(e));
    }

    /**
     * Navigate to island
     */
    navigateToIsland(islandName) {
        let targetPosition, targetLookAt;

        switch (islandName) {
            case 'overview':
                targetPosition = new THREE.Vector3(0, 5, 15);
                targetLookAt = new THREE.Vector3(0, 0, 0);
                break;
            case 'templates':
                targetPosition = new THREE.Vector3(-20, 5, 10);
                targetLookAt = new THREE.Vector3(-20, 0, 0);
                break;
            case 'workflows':
                targetPosition = new THREE.Vector3(0, 5, 10);
                targetLookAt = new THREE.Vector3(0, 0, 0);
                break;
            case 'boards':
                targetPosition = new THREE.Vector3(20, 5, 10);
                targetLookAt = new THREE.Vector3(20, 0, 0);
                break;
        }

        // Animate camera using GSAP
        gsap.to(this.camera.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 1.5,
            ease: 'power2.inOut'
        });

        gsap.to(this.controls.target, {
            x: targetLookAt.x,
            y: targetLookAt.y,
            z: targetLookAt.z,
            duration: 1.5,
            ease: 'power2.inOut',
            onUpdate: () => {
                this.controls.update();
            }
        });

        this.currentIsland = islandName;
        this.updateBreadcrumb(islandName);
    }

    /**
     * Update breadcrumb
     */
    updateBreadcrumb(location) {
        const breadcrumb = document.getElementById('breadcrumb');
        const locationNames = {
            overview: 'Platform Overview',
            templates: 'Templates',
            workflows: 'Workflows',
            boards: 'Boards'
        };

        breadcrumb.innerHTML = `<span class="breadcrumb-item active">${locationNames[location]}</span>`;
    }

    /**
     * Toggle search modal
     */
    toggleSearch() {
        const isHidden = this.uiManager.searchModal.classList.contains('hidden');

        if (isHidden) {
            this.uiManager.searchModal.classList.remove('hidden');
            document.getElementById('search-input').focus();
        } else {
            this.uiManager.searchModal.classList.add('hidden');
        }
    }

    /**
     * Toggle help modal
     */
    toggleHelp() {
        this.uiManager.helpModal.classList.toggle('hidden');
    }

    /**
     * Close all modals
     */
    closeAllModals() {
        this.uiManager.searchModal.classList.add('hidden');
        this.uiManager.contentPanel.classList.add('hidden');
        this.uiManager.helpModal.classList.add('hidden');
    }

    /**
     * Handle window resize
     */
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    /**
     * Handle mouse move
     */
    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    /**
     * Handle canvas click (raycasting)
     */
    onCanvasClick(event) {
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(this.mouse, this.camera);

        // Check all island groups
        const allObjects = [];
        Object.values(this.islands).forEach(island => {
            island.traverse(child => {
                if (child.isMesh) allObjects.push(child);
            });
        });

        const intersects = raycaster.intersectObjects(allObjects);

        if (intersects.length > 0) {
            const clicked = intersects[0].object;
            console.log('Clicked:', clicked.userData);
            // Handle click interaction
        }
    }

    /**
     * Update loading progress
     */
    updateLoadingProgress(progress, text) {
        this.loadProgress = progress;
        this.loadingProgress.style.width = `${progress}%`;
        if (text) {
            this.loadingText.textContent = text;
        }
    }

    /**
     * Hide loading screen
     */
    hideLoadingScreen() {
        this.loadingScreen.classList.add('fade-out');
        this.isLoading = false;

        setTimeout(() => {
            this.loadingScreen.style.display = 'none';
        }, 500);
    }

    /**
     * Animation loop
     */
    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();
        const elapsed = this.clock.getElapsedTime();

        // Update controls
        this.controls.update();

        // Rotate island geometries
        Object.values(this.islands).forEach(island => {
            island.traverse(child => {
                if (child.isMesh && child.userData.rotationSpeed) {
                    child.rotation.x += child.userData.rotationSpeed;
                    child.rotation.y += child.userData.rotationSpeed * 1.5;
                }
            });
        });

        // Animate particles
        if (this.particles) {
            this.particles.rotation.y += 0.0002;

            // Subtle wave motion
            const positions = this.particles.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] += Math.sin(elapsed + positions[i]) * 0.001;
            }
            this.particles.geometry.attributes.position.needsUpdate = true;
        }

        // Render scene
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new DocumentationApp();
    });
} else {
    new DocumentationApp();
}
