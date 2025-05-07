document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // --- TRANSLATION LOGIC ---
    const translations = {
        // --- YOU NEED TO FILL THESE IN! ---
        // Example structure:
        // "key_name": {
        //     "en": "English Text",
        //     "pt": "Texto em Português",
        //     "de": "Text auf Deutsch",
        //     "fr": "Texte en Français",
        //     "es": "Texto en Español"
        // },
        "page_title": {
            "en": "Victor Ugrinovich - Fullstack Developer",
            "pt": "Victor Ugrinovich - Desenvolvedor Fullstack",
            "de": "Victor Ugrinovich - Fullstack-Entwickler",
            "fr": "Victor Ugrinovich - Développeur Fullstack",
            "es": "Victor Ugrinovich - Desarrollador Fullstack"
        },
        "header_name": { /* Name might not need translation */
            "en": "Victor Ugrinovich", "pt": "Victor Ugrinovich", "de": "Victor Ugrinovich", "fr": "Victor Ugrinovich", "es": "Victor Ugrinovich"
        },
        "header_role": {
            "en": "Fullstack Developer", "pt": "Desenvolvedor Fullstack", "de": "Fullstack-Entwickler", "fr": "Développeur Fullstack", "es": "Desarrollador Fullstack"
        },
        "header_location": {
            "en": "Location: Brazil / Eligible for EU (Austrian Citizenship - No work visa required)",
            "pt": "Localização: Brasil / Elegível para UE (Cidadania Austríaca - Visto de trabalho não necessário)",
            "de": "Standort: Brasilien / EU-berechtigt (Österreichische Staatsbürgerschaft - Kein Arbeitsvisum erforderlich)",
            "fr": "Lieu: Brésil / Éligible pour l'UE (Citoyenneté autrichienne - Aucun visa de travail requis)",
            "es": "Ubicación: Brasil / Elegible para UE (Ciudadanía austríaca - No se requiere visa de trabajo)"
        },
        "nav_about": {"en": "About", "pt": "Sobre", "de": "Über", "fr": "À propos", "es": "Acerca de"},
        "nav_skills": {"en": "Skills", "pt": "Habilidades", "de": "Fähigkeiten", "fr": "Compétences", "es": "Habilidades"},
        "nav_experience": {"en": "Experience", "pt": "Experiência", "de": "Erfahrung", "fr": "Expérience", "es": "Experiencia"},
        "nav_education": {"en": "Education", "pt": "Educação", "de": "Bildung", "fr": "Éducation", "es": "Educación"},
        "nav_languages": {"en": "Languages", "pt": "Idiomas", "de": "Sprachen", "fr": "Langues", "es": "Idiomas"},
        "about_title": {"en": "About Me", "pt": "Sobre Mim", "de": "Über mich", "fr": "À propos de moi", "es": "Sobre mí"},
        "about_text": {
            "en": "Dynamic and results-oriented Fullstack Developer with a strong foundation in .NET technologies, modern frontend frameworks, and cloud services. Proven ability to contribute to all phases of the software development lifecycle, from concept and design to deployment and maintenance. Passionate about building scalable, efficient, and user-friendly applications. Eager to leverage diverse technical skills and a proactive approach to problem-solving in challenging projects.",
            "pt": "Desenvolvedor Fullstack dinâmico e orientado a resultados, com forte base em tecnologias .NET, frameworks frontend modernos e serviços em nuvem. Capacidade comprovada de contribuir em todas as fases do ciclo de vida de desenvolvimento de software, desde o conceito e design até a implantação e manutenção. Apaixonado por construir aplicações escaláveis, eficientes e fáceis de usar. Ansioso para alavancar diversas habilidades técnicas e uma abordagem proativa para resolver problemas em projetos desafiadores.",
            "de": "Dynamischer und ergebnisorientierter Fullstack-Entwickler mit fundierten Kenntnissen in .NET-Technologien, modernen Frontend-Frameworks und Cloud-Diensten. Nachgewiesene Fähigkeit, in allen Phasen des Softwareentwicklungszyklus mitzuwirken, von Konzept und Design bis hin zu Bereitstellung und Wartung. Leidenschaft für die Entwicklung skalierbarer, effizienter und benutzerfreundlicher Anwendungen. Bestrebt, vielfältige technische Fähigkeiten und einen proaktiven Ansatz zur Problemlösung in anspruchsvollen Projekten einzusetzen.",
            "fr": "Développeur Fullstack dynamique et axé sur les résultats, avec une solide base en technologies .NET, frameworks frontend modernes et services cloud. Capacité avérée à contribuer à toutes les phases du cycle de vie du développement logiciel, de la conception à la maintenance, en passant par le déploiement. Passionné par la création d'applications évolutives, efficaces et conviviales. Désireux de mettre à profit des compétences techniques diverses et une approche proactive de la résolution de problèmes dans des projets stimulants.",
            "es": "Desarrollador Fullstack dinámico y orientado a resultados con una sólida base en tecnologías .NET, frameworks frontend modernos y servicios en la nube. Capacidad demostrada para contribuir en todas las fases del ciclo de vida del desarrollo de software, desde el concepto y diseño hasta la implementación y el mantenimiento. Apasionado por construir aplicaciones escalables, eficientes y fáciles de usar. Deseoso de aprovechar diversas habilidades técnicas y un enfoque proactivo para la resolución de problemas en proyectos desafiantes."
        },
        "skills_title": {"en": "Skills", "pt": "Habilidades", "de": "Fähigkeiten", "fr": "Compétences", "es": "Habilidades"},
        "skills_backend_title": {"en": "Backend Development", "pt": "Desenvolvimento Backend", "de": "Backend-Entwicklung", "fr": "Développement Backend", "es": "Desarrollo Backend"},
        "skills_frontend_title": {"en": "Frontend Development", "pt": "Desenvolvimento Frontend", "de": "Frontend-Entwicklung", "fr": "Développement Frontend", "es": "Desarrollo Frontend"},
        "skills_misc_title": {"en": "Miscellaneous", "pt": "Diversos", "de": "Sonstiges", "fr": "Divers", "es": "Misceláneos"},
        "skills_msoffice": {"en": "Microsoft Office", "pt": "Microsoft Office", "de": "Microsoft Office", "fr": "Microsoft Office", "es": "Microsoft Office"},
        "skills_scrum": {"en": "Scrum", "pt": "Scrum", "de": "Scrum", "fr": "Scrum", "es": "Scrum"},
        "skills_agile": {"en": "Agile Methodology", "pt": "Metodologia Ágil", "de": "Agile Methodik", "fr": "Méthodologie Agile", "es": "Metodología Ágil"},
        "skills_selfmanage": {"en": "Self-management", "pt": "Autogestão", "de": "Selbstmanagement", "fr": "Autogestion", "es": "Autogestión"},
        "skills_autonomy": {"en": "Autonomy", "pt": "Autonomia", "de": "Autonomie", "fr": "Autonomie", "es": "Autonomía"},
        "experience_title": {"en": "Experience", "pt": "Experiência", "de": "Erfahrung", "fr": "Expérience", "es": "Experiencia"},
        "experience_tech_stack_note": {
            "en": "Technologies: .NET, C#, HTML, JavaScript, SQL Server",
            "pt": "Tecnologias: .NET, C#, HTML, JavaScript, SQL Server",
            "de": "Technologien: .NET, C#, HTML, JavaScript, SQL Server",
            "fr": "Technologies: .NET, C#, HTML, JavaScript, SQL Server",
            "es": "Tecnologías: .NET, C#, HTML, JavaScript, SQL Server"
        },
        "experience_role_midlevel": {"en": "Mid-Level Fullstack Developer", "pt": "Desenvolvedor Fullstack Pleno", "de": "Mid-Level Fullstack-Entwickler", "fr": "Développeur Fullstack Mid-Level", "es": "Desarrollador Fullstack de Nivel Medio"},
        "experience_date_midlevel_present": {"en": "Jan 2023 - Today", "pt": "Jan 2023 - Hoje", "de": "Jan 2023 - Heute", "fr": "Janv 2023 - Aujourd'hui", "es": "Ene 2023 - Actualidad"},
        "experience_role_junior": {"en": "Junior Fullstack Developer", "pt": "Desenvolvedor Fullstack Júnior", "de": "Junior Fullstack-Entwickler", "fr": "Développeur Fullstack Junior", "es": "Desarrollador Fullstack Junior"},
        "experience_date_junior": {"en": "July 2020 - Dec 2022", "pt": "Jul 2020 - Dez 2022", "de": "Juli 2020 - Dez 2022", "fr": "Juil 2020 - Déc 2022", "es": "Jul 2020 - Dic 2022"},
        "experience_role_intern": {"en": "Intern Fullstack Developer", "pt": "Estagiário Desenvolvedor Fullstack", "de": "Praktikant Fullstack-Entwickler", "fr": "Stagiaire Développeur Fullstack", "es": "Pasante Desarrollador Fullstack"},
        "experience_date_intern": {"en": "Jan 2020 - July 2020", "pt": "Jan 2020 - Jul 2020", "de": "Jan 2020 - Juli 2020", "fr": "Janv 2020 - Juil 2020", "es": "Ene 2020 - Jul 2020"},
        "experience_key_projects_title": {"en": "Key Projects & Responsibilities:", "pt": "Principais Projetos e Responsabilidades:", "de": "Wichtige Projekte & Verantwortlichkeiten:", "fr": "Projets Clés & Responsabilités :", "es": "Proyectos y Responsabilidades Clave:"},
        "experience_project_orbia_title": {"en": "E-commerce Loyalty Development – Orbia (Bayer's loyalty program):", "pt": "Desenvolvimento de Lealdade E-commerce – Orbia (programa de lealdade da Bayer):", "de": "E-Commerce-Loyalty-Entwicklung – Orbia (Bayers Treueprogramm):", "fr": "Développement de la fidélisation e-commerce – Orbia (programme de fidélité de Bayer) :", "es": "Desarrollo de Lealtad de Comercio Electrónico – Orbia (programa de lealtad de Bayer):"},
        "experience_project_orbia_item1": {"en": "Developed .NET API integrating SQL Server to send daily loyalty program data to Bayer via scheduled server jobs.", "pt": "Desenvolveu API .NET integrando SQL Server para enviar dados diários do programa de lealdade para a Bayer via tarefas agendadas no servidor.", "de": "Entwickelte .NET-API zur Integration von SQL Server, um tägliche Treueprogrammdaten über geplante Serveraufträge an Bayer zu senden.", "fr": "A développé une API .NET intégrant SQL Server pour envoyer quotidiennement les données du programme de fidélité à Bayer via des tâches serveur planifiées.", "es": "Desarrolló API .NET integrando SQL Server para enviar datos diarios del programa de lealtad a Bayer mediante trabajos programados del servidor."},
        "experience_project_orbia_item2": {"en": "Improved user registration and user data management on the Orbia Brazil website.", "pt": "Melhorou o registro de usuários e o gerenciamento de dados de usuários no site da Orbia Brasil.", "de": "Verbesserte Benutzerregistrierung und Benutzerdatenverwaltung auf der Orbia Brasilien Webseite.", "fr": "A amélioré l'enregistrement des utilisateurs et la gestion des données utilisateurs sur le site Web d'Orbia Brésil.", "es": "Mejoró el registro de usuarios y la gestión de datos de usuarios en el sitio web de Orbia Brasil."},
        "experience_project_orbia_item3": {"en": "Contributed to Orbia Mexico, Colombia, and Argentina's .NET-based e-commerce platforms and mobile web & app (Angular/Ionic), consuming data via .NET API; refactored login & product pages, optimized backend queries, and supported new feature implementations.", "pt": "Contribuiu para as plataformas de e-commerce baseadas em .NET e aplicativos móveis web e app (Angular/Ionic) da Orbia México, Colômbia e Argentina, consumindo dados via API .NET; refatorou páginas de login e produto, otimizou consultas de backend e apoiou novas implementações de recursos.", "de": "Mitarbeit an den .NET-basierten E-Commerce-Plattformen und mobilen Web- & App-Anwendungen (Angular/Ionic) von Orbia Mexiko, Kolumbien und Argentinien, Datenkonsum über .NET-API; Überarbeitung von Login- und Produktseiten, Optimierung von Backend-Abfragen und Unterstützung neuer Feature-Implementierungen.", "fr": "A contribué aux plateformes de commerce électronique basées sur .NET et aux applications Web et mobiles (Angular/Ionic) d'Orbia Mexique, Colombie et Argentine, en consommant des données via l'API .NET ; a refactorisé les pages de connexion et de produits, optimisé les requêtes backend et soutenu les implémentations de nouvelles fonctionnalités.", "es": "Contribuyó a las plataformas de comercio electrónico basadas en .NET y aplicaciones web y móviles (Angular/Ionic) de Orbia México, Colombia y Argentina, consumiendo datos a través de la API .NET; refactorizó páginas de inicio de sesión y productos, optimizó consultas de backend y apoyó nuevas implementaciones de funciones."},
        "experience_project_orbia_item4": {"en": "Built a QR Code reading app (Ionic/Angular) for Orbia Mexico's trade fairs, integrating real-time user registration & point tracking.", "pt": "Construiu um aplicativo de leitura de QR Code (Ionic/Angular) para as feiras comerciais da Orbia México, integrando registro de usuários em tempo real e rastreamento de pontos.", "de": "Erstellte eine QR-Code-Lese-App (Ionic/Angular) für die Messen von Orbia Mexiko, die Echtzeit-Benutzerregistrierung und Punktverfolgung integriert.", "fr": "A créé une application de lecture de QR Code (Ionic/Angular) pour les salons professionnels d'Orbia Mexique, intégrant l'enregistrement des utilisateurs en temps réel et le suivi des points.", "es": "Construyó una aplicación de lectura de códigos QR (Ionic/Angular) para las ferias comerciales de Orbia México, integrando el registro de usuarios en tiempo real y el seguimiento de puntos."},
        "experience_project_bravium_title": {"en": "E-commerce Loyalty Development – Bravium LATAM:", "pt": "Desenvolvimento de Lealdade E-commerce – Bravium LATAM:", "de": "E-Commerce-Loyalty-Entwicklung – Bravium LATAM:", "fr": "Développement de la fidélisation e-commerce – Bravium LATAM :", "es": "Desarrollo de Lealtad de Comercio Electrónico – Bravium LATAM:"},
        "experience_project_bravium_item1": {"en": "Helped build and maintain loyalty platforms websites (Desktop & Mobile) from scratch for Didi Food Mexico, Swiss Just, and ITAU Uruguay using .NET.", "pt": "Ajudou a construir e manter sites de plataformas de lealdade (Desktop e Mobile) do zero para Didi Food México, Swiss Just e ITAU Uruguai usando .NET.", "de": "Half beim Aufbau und der Wartung von Loyalty-Plattform-Websites (Desktop & Mobile) von Grund auf für Didi Food Mexiko, Swiss Just und ITAU Uruguay mit .NET.", "fr": "A aidé à créer et à maintenir des sites Web de plateformes de fidélisation (ordinateur et mobile) à partir de zéro pour Didi Food Mexique, Swiss Just et ITAU Uruguay en utilisant .NET.", "es": "Ayudó a construir y mantener sitios web de plataformas de lealtad (Escritorio y Móvil) desde cero para Didi Food México, Swiss Just e ITAU Uruguay utilizando .NET."},
        "experience_project_bravium_item2": {"en": "Implemented microservices-based scoring system for user challenges, replacing direct DB queries.", "pt": "Implementou sistema de pontuação baseado em microsserviços para desafios de usuários, substituindo consultas diretas ao BD.", "de": "Implementierte ein auf Microservices basierendes Bewertungssystem für Benutzerherausforderungen und ersetzte direkte DB-Abfragen.", "fr": "A implémenté un système de notation basé sur des microservices pour les défis utilisateurs, remplaçant les requêtes directes à la base de données.", "es": "Implementó un sistema de puntuación basado en microservicios para desafíos de usuarios, reemplazando las consultas directas a la base de datos."},
        "education_title": {"en": "Education", "pt": "Educação", "de": "Bildung", "fr": "Éducation", "es": "Educación"},
        "education_uni_name": {"en": "Federal University Of Uberlandia", "pt": "Universidade Federal De Uberlândia", "de": "Bundesuniversität Uberlandia", "fr": "Université Fédérale d'Uberlandia", "es": "Universidad Federal De Uberlandia"},
        "education_uni_degree": {"en": "BA in Mechatronics Engineering", "pt": "Bacharelado em Engenharia Mecatrônica", "de": "BA in Mechatronik", "fr": "Licence en Ingénierie Mécatronique", "es": "Licenciatura en Ingeniería Mecatrónica"},
        "education_cert_name": {"en": "Microsoft Certified", "pt": "Certificado Microsoft", "de": "Microsoft-zertifiziert", "fr": "Certifié Microsoft", "es": "Certificado por Microsoft"},
        "education_cert_desc": {"en": "Azure Fundamentals (AZ-900)", "pt": "Azure Fundamentals (AZ-900)", "de": "Azure Fundamentals (AZ-900)", "fr": "Azure Fundamentals (AZ-900)", "es": "Azure Fundamentals (AZ-900)"},
        "languages_title": {"en": "Languages", "pt": "Idiomas", "de": "Sprachen", "fr": "Langues", "es": "Idiomas"},
        "lang_portuguese": {"en": "Portuguese:", "pt": "Português:", "de": "Portugiesisch:", "fr": "Portugais :", "es": "Portugués:"},
        "lang_native": {"en": "Native", "pt": "Nativo", "de": "Muttersprache", "fr": "Natif", "es": "Nativo"},
        "lang_english": {"en": "English:", "pt": "Inglês:", "de": "Englisch:", "fr": "Anglais :", "es": "Inglés:"},
        "lang_fluent": {"en": "Fluent", "pt": "Fluente", "de": "Fließend", "fr": "Courant", "es": "Fluido"},
        "lang_spanish": {"en": "Spanish:", "pt": "Espanhol:", "de": "Spanisch:", "fr": "Espagnol :", "es": "Español:"},
        "lang_french": {"en": "French:", "pt": "Francês:", "de": "Französisch:", "fr": "Français :", "es": "Francés:"},
        "lang_advanced": {"en": "Advanced", "pt": "Avançado", "de": "Fortgeschritten", "fr": "Avancé", "es": "Avanzado"},
        "lang_german": {"en": "German:", "pt": "Alemão:", "de": "Deutsch:", "fr": "Allemand :", "es": "Alemán:"},
        "lang_intermediate": {"en": "Intermediate", "pt": "Intermediário", "de": "Mittelstufe", "fr": "Intermédiaire", "es": "Intermedio"},
        "footer_rights": {"en": "All rights reserved.", "pt": "Todos os direitos reservados.", "de": "Alle Rechte vorbehalten.", "fr": "Tous droits réservés.", "es": "Todos los derechos reservados."}
    };

    const languageSwitcher = document.getElementById('language-switcher');
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('preferredLang') || 'en'; // Default to English

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('preferredLang', lang);
        document.documentElement.lang = lang; // Set lang attribute on HTML element

        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[key] && translations[key][lang]) {
                element.textContent = translations[key][lang];
            } else if (translations[key] && translations[key]['en']) {
                // Fallback to English if translation for current lang is missing
                element.textContent = translations[key]['en'];
            } else {
                console.warn(`Translation key "${key}" or its "${lang}" translation not found.`);
            }
        });

        // Update active button
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    languageSwitcher.addEventListener('click', (event) => {
        if (event.target.matches('.lang-btn')) {
            const lang = event.target.dataset.lang;
            if (lang) {
                setLanguage(lang);
            }
        }
    });

    // Apply initial language
    setLanguage(currentLang);


    // --- Sticky Navbar (basic version) ---
    const navbar = document.getElementById('navbar');
    // Ensure navbar exists before trying to get its offsetTop
    const sticky = navbar ? navbar.offsetTop : 0; 

    window.onscroll = function() {
        if (navbar && window.pageYOffset >= sticky) {
            navbar.classList.add("sticky-nav"); 
        } else if (navbar) {
            navbar.classList.remove("sticky-nav");
        }
    };
    
    // --- THREE.JS SCENE ---
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        console.error("Canvas element not found for Three.js");
        // return; // Don't return, allow other JS to run
    }

    let scene, camera, renderer, shapes = [];

    function initThree() {
        if (!canvas) return; // Don't initialize if canvas is not there

        scene = new THREE.Scene();
        
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); 

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0x00aeff, 1, 100); 
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const geometries = [
            new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16), 
            new THREE.SphereGeometry(0.3, 32, 32),
            new THREE.BoxGeometry(0.5, 0.5, 0.5),
            new THREE.OctahedronGeometry(0.4),
        ];

        const material = new THREE.MeshStandardMaterial({ 
            color: 0x0077ff, 
            metalness: 0.6,
            roughness: 0.3,
            transparent: true,
            opacity: 0.6 
        });

        geometries.forEach((geom, index) => {
            const shape = new THREE.Mesh(geom, material);
            shape.position.x = (Math.random() - 0.5) * 8;
            shape.position.y = (Math.random() - 0.5) * 6;
            shape.position.z = (Math.random() - 0.5) * 2 -1; 
            
            shape.rotation.x = Math.random() * 2 * Math.PI;
            shape.rotation.y = Math.random() * 2 * Math.PI;
            
            shapes.push(shape);
            scene.add(shape);
        });

        animate();
    }

    function animate() {
        if (!renderer) return; // Don't animate if renderer not initialized
        requestAnimationFrame(animate);

        shapes.forEach((shape, index) => {
            shape.rotation.x += 0.002 + (index * 0.0005);
            shape.rotation.y += 0.003 + (index * 0.0005);
            shape.rotation.z += 0.001 + (index * 0.0005);
            shape.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.002;
        });
        
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        if (!camera || !renderer) return; // Check if they exist
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    // Initialize Three.js scene
    initThree();

});