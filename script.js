document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Sticky Navbar (basic version)
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky-nav"); // You can define .sticky-nav if you want different styles
        } else {
            navbar.classList.remove("sticky-nav");
        }
    };
    
    // --- THREE.JS SCENE ---
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        console.error("Canvas element not found for Three.js");
        return;
    }

    let scene, camera, renderer, shapes = [];

    function initThree() {
        scene = new THREE.Scene();
        
        // Camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // alpha: true for transparent background
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent clear color

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0x00aeff, 1, 100); // Blueish light
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Geometries and Materials
        const geometries = [
            new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16), // Main cool shape
            new THREE.SphereGeometry(0.3, 32, 32),
            new THREE.BoxGeometry(0.5, 0.5, 0.5),
            new THREE.OctahedronGeometry(0.4),
        ];

        const material = new THREE.MeshStandardMaterial({ 
            color: 0x0077ff, // A bit less intense blue
            metalness: 0.6,
            roughness: 0.3,
            transparent: true,
            opacity: 0.6 // Make shapes semi-transparent
        });

        // Create shapes
        geometries.forEach((geom, index) => {
            const shape = new THREE.Mesh(geom, material);
            // Position them somewhat randomly but spread out
            shape.position.x = (Math.random() - 0.5) * 8;
            shape.position.y = (Math.random() - 0.5) * 6;
            shape.position.z = (Math.random() - 0.5) * 2 -1; // Slightly in front/behind camera plane
            
            // Random initial rotation
            shape.rotation.x = Math.random() * 2 * Math.PI;
            shape.rotation.y = Math.random() * 2 * Math.PI;
            
            shapes.push(shape);
            scene.add(shape);
        });

        animate();
    }

    function animate() {
        requestAnimationFrame(animate);

        shapes.forEach((shape, index) => {
            // Different rotation speeds for variety
            shape.rotation.x += 0.002 + (index * 0.0005);
            shape.rotation.y += 0.003 + (index * 0.0005);
            shape.rotation.z += 0.001 + (index * 0.0005);

            // Subtle bobbing motion
            shape.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.002;
        });
        
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    // Initialize Three.js scene
    initThree();

});