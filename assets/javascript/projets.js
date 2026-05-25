document.addEventListener('DOMContentLoaded', () => {
    const projectCardsBTS = document.getElementById('project-cards-bts');
    const projectCardsBUT = document.getElementById('project-cards-but');
    const realisationCardsContainer = document.getElementById('realisation-cards');
    const isGithubPages = window.location.hostname.includes('.io');

    // Tableau des projets avec des variables distinctes pour les descriptions
    const projects = [
        {
            id: "project2",
            title: "Analyse base de données",
            titleEN: "Database Analysis",
            date: "2024-01-01",
            closedDescription: "Analyse d'une DB contenant des informations sur les passagers du Titanic.",
            closedDescriptionEN: "Analysis of a database containing information on Titanic passengers.",
            openDescription: "Projet dans le cadre des études.<br>Analyse d'une BD pour comprendre les facteurs qui ont influencé la survie des passagers du Titanic, grâce à des commandes SQL.",
            openDescriptionEN: "Academic project.<br>Analyzed a database to understand factors influencing Titanic passenger survival using SQL commands.",
            footerText: "Compétences renforcées : PostgreSQL, Analyse de données, Travail d'équipe",
            footerTextEN: "Skills improved: PostgreSQL, Data Analysis, Teamwork",
            icon: "/assets/icons/postgres.png",
            category: 'BUT'
        },
        {
            id: "project3",
            title: "Site web pour ESN",
            titleEN: "Website for IT Company",
            date: "2024-01-01",
            closedDescription: "Développement du site web d'une ESN visant à mettre en avant l'entreprise.",
            closedDescriptionEN: "Development of a website for an IT service company to showcase its business.",
            openDescription: "Projet dans le cadre des études.<br>Conception et réalisation d'un site web (fictif) pour une ESN, destiné à la génération Alpha dans le but de promouvoir l'entreprise et ses valeurs.",
            openDescriptionEN: "Academic project.<br>Designed and developed a (fictitious) website for an IT service company, targeting Generation Alpha to promote its business and values.",
            footerText: "Compétences renforcées : HTML, CSS, Gestion de projet",
            footerTextEN: "Skills improved: HTML, CSS, Project Management",
            icon: "/assets/icons/html5.png",
            category: 'BUT'
        },
        {
            id: "project4",
            title: "App. de classification Java",
            titleEN: "Java Classification App",
            date: "2024-02-01",
            closedDescription: "Développement d'un programme de classification de dépêches en Java.",
            closedDescriptionEN: "Development of a news classification program in Java.",
            openDescription: "Projet dans le cadre des études.<br>Développement d'un programme de classification de dépêches en Java, utilisant des algorithmes de machine learning pour prédire la catégorie d'une dépêche.",
            openDescriptionEN: "Academic project.<br>Developed a news classification program in Java using machine learning algorithms to predict news categories.",
            footerText: "Compétences renforcées : Java",
            footerTextEN: "Skills improved: Java",
            icon: "/assets/icons/java.png",
            category: 'BUT'
        },
        {
            id: "project6",
            title: "Tri base de données",
            titleEN: "Database Sorting",
            date: "2024-04-01",
            closedDescription: "Tri d'une BD répertoriant des infos. sur le Nutri-Score des produits alimentaires.",
            closedDescriptionEN: "Sorting of a database listing information on food product Nutri-Scores.",
            openDescription: "Projet dans le cadre des études.<br>Tri et rédaction d'un rapport sur une BD contenant des infos. relatives au Nutri-Score de denrées alimentaires, afin d'en comprendre son fonctionnement et ses failles.",
            openDescriptionEN: "Academic project.<br>Sorted and wrote a report on a database containing information on the Nutri-Score of food products to understand its function and limitations.",
            footerText: "Compétences renforcées : SQL, Analyse de données, RMD",
            footerTextEN: "Skills improved: SQL, Data Analysis, RMD",
            icon: "/assets/icons/sql.png",
            category: 'BUT'
        },
        {
            id: "project7",
            title: "Guide d'install. serveur Debian",
            titleEN: "Debian Server Install. Guide",
            date: "2024-05-01",
            closedDescription: "Installation d'un serveur Debian avec outils basiques.",
            closedDescriptionEN: "Installation of a Debian server with basic tools.",
            openDescription: "Projet dans le cadre des études.<br>Installation d'un serveur Debian avec outils basiques (Apache, Postgres) afin d'en rédiger un guide détaillé en Anglais pour des étudiants débutants.",
            openDescriptionEN: "Academic project.<br>Installed a Debian server with basic tools (Apache, Postgres) and wrote a detailed guide in English for beginner students.",
            footerText: "Compétences renforcées : Linux, Serveurs, Rédaction anglaise",
            footerTextEN: "Skills improved: Linux, Servers, English Writing",
            icon: "/assets/icons/debian.png",
            category: 'BUT'
        },
        {
            id: "project8",
            title: "App. de gestion d'évènements",
            titleEN: "Event Management App",
            date: "2024-06-01",
            closedDescription: "Développement d'une app. de gestion d'évènements avec interface graphique.",
            closedDescriptionEN: "Development of an event management app with a graphical interface.",
            openDescription: "Projet dans le cadre des études.<br>Développement d'une application de gestion d'évènements en Java, avec interface graphique, permettant de gérer des évènements et des participants.",
            openDescriptionEN: "Academic project.<br>Developed an event management application in Java with a graphical interface, allowing for the management of events and participants.",
            footerText: "Compétences renforcées : JavaFX, Leadership, Gestion de projet",
            footerTextEN: "Skills improved: JavaFX, Leadership, Project Management",
            icon: "/assets/icons/java.png",
            category: 'BUT'
        },
        {
            id: "project9",
            title: "Portfolio",
            titleEN: "Portfolio",
            date: "2024-09-01",
            closedDescription: "Création de ce portfolio pour présenter mes projets et compétences.",
            closedDescriptionEN: "Creation of this portfolio to showcase my projects and skills.",
            openDescription: "Projet évolutif.<br>Développement de ce portfolio pour présenter mes projets et compétences, en utilisant HTML, CSS et JavaScript. Je considère cela comme un projet, car il contribue à mon apprentissage.",
            openDescriptionEN: "Evolutive project.<br>Developing this portfolio to showcase my projects and skills, using HTML, CSS, and JavaScript. I consider this as a project as it contributes to my learning.",
            footerText: "Compétences renforcées : HTML, CSS, JavaScript",
            footerTextEN: "Skills improved: HTML, CSS, JavaScript",
            icon: "/assets/icons/js.png",
            category: 'BUT'
        },
        {
            id: "project10",
            title: "Hôtel California",
            titleEN: "Hotel California",
            date: "2025-12-15",
            closedDescription: "Gestion des réservations d’un hôtel de luxe.",
            closedDescriptionEN: "Reservation management for a luxury hotel.",
            openDescription: "Projet dans le cadre des études.<br><br>Ce projet en équipe a pour objectif de concevoir le système de gestion des réservations d'un hôtel de luxe. L'application se concentre sur le développement d'un cœur de système robuste (Backend Node.js) capable de gérer 400 chambres, le suivi des clients, et un algorithme gérant les conflits de dates. Une API RESTful découplée, versionnée et sécurisée a été mise en place (JWT, hachage, CORS, Rate Limiting), avec une interface d'administration interne.",
            openDescriptionEN: "Academic project.<br><br>This team project aims to design a reservation management system for a luxury hotel. The application focuses on developing a robust core system (Node.js Backend) capable of managing 400 rooms, guest tracking, and a date conflict resolution algorithm. A decoupled, versioned, and secured RESTful API was implemented (JWT, hashing, CORS, Rate Limiting), along with an internal administration interface.",
            footerText: "Compétences renforcées : Conception API RESTful (Node.js), Sécurité (JWT, Bcrypt), Gestion de bases de données (CRUD), Optimisation (Redis), Documentation technique (Swagger).",
            footerTextEN: "Skills improved: RESTful API design (Node.js), Security (JWT, Bcrypt), Database management (CRUD), Optimization (Redis), Technical documentation (Swagger).",
            icon: "/assets/icons/hotelEmoji.png",
            category: 'BTS'
        },
        {
            id: "project11",
            title: "Collège Asimov",
            titleEN: "Asimov Secondary School",
            date: "2026-01-05",
            closedDescription: "Gestion scolaire d’un établissement scolaire.",
            closedDescriptionEN: "School management of an educational institution.",
            openDescription: "Projet dans le cadre des études.<br><br>Réalisé en équipe, ce projet consiste à développer un système de gestion scolaire pour la fondation Asimov. Le travail a débuté par une gestion de projet Agile (Kanban, Gantt, user/abuser stories). La conception de la base de données a été modélisée via des diagrammes UML. Techniquement, le projet repose sur la programmation d'une API REST (Node.JS/PHP) délivrant des données au format JSON, qui est ensuite consommée par un client lourd en Java et une application mobile pour les enseignants-référents.",
            openDescriptionEN: "Academic project.<br><br>Completed as a team, this project involves developing a school management system for the Asimov foundation. The work began with Agile project management (Kanban, Gantt, user/abuser stories). Database design was modeled using UML diagrams. Technically, the project relies on programming a REST API (Node.JS/PHP) delivering JSON data, which is then consumed by a Java thick client and a mobile application for referring teachers.",
            footerText: "Compétences renforcées : Gestion de projet Agile, Modélisation UML, Développement Backend (API REST), Développement d'interfaces (Client Java, Mobile), Qualité logicielle (Tests, JSDoc).",
            footerTextEN: "Skills improved: Agile project management, UML modeling, Backend development (REST API), Interface development (Java client, Mobile), Software quality (Tests, JSDoc).",
            icon: "/assets/icons/school.png",
            category: 'BTS'
        }
    ];

    // Tableau des 12 réalisations professionnelles avec des icônes et des titres uniques
    // Tableau complet des 12 réalisations professionnelles (FRP)
    const realisations = [
        {
            id: "realisation1", title: "Automatisation Active Directory", titleEN: "Active Directory Automation",
            closedDescription: "Automatisation de la création et désactivation des comptes utilisateurs.",
            closedDescriptionEN: "Automation of user account creation and deactivation.",
            icon: "/assets/icons/openfolderEmoji.png", fileLink: "/assets/files/SIO-FRP-01-SEILLER-JULIAN-Automatisation-AD.pdf"
        },
        {
            id: "realisation2", title: "Gestion Licences O365 & Exchange", titleEN: "O365 & Exchange Management",
            closedDescription: "Automatisation de l'attribution des licences et configuration Exchange.",
            closedDescriptionEN: "Automation of license assignment and Exchange configuration.",
            icon: "/assets/icons/journalEmoji.png", fileLink: "/assets/files/SIO-FRP-02-SEILLER-JULIAN-Offiche365-Exchange.pdf"
        },
        {
            id: "realisation3", title: "Refonte Intranet & Notifications", titleEN: "Intranet Redesign & Notifications",
            closedDescription: "Migration des données vers JSON et intégration d'un système SMTP.",
            closedDescriptionEN: "Data migration to JSON and SMTP system integration.",
            icon: "/assets/icons/php.png", fileLink: "/assets/files/SIO-FRP-03-SEILLER-JULIAN-Refonte-JSON-PHPMailer.pdf"
        },
        {
            id: "realisation4", title: "Maintenance & Recette ADA", titleEN: "ADA Maintenance & Testing",
            closedDescription: "Refactoring, sécurisation du code et correction de bugs d'interface.",
            closedDescriptionEN: "Code refactoring, security enhancements, and UI bug fixing.",
            icon: "/assets/icons/vscode.png", fileLink: "/assets/files/SIO-FRP-04-SEILLER-JULIAN-Maintenance-Recette-ADA.pdf"
        },
        {
            id: "realisation5", title: "Architecture JavaFX & MVC", titleEN: "JavaFX Architecture & MVC",
            closedDescription: "Implémentation d'une architecture MVC robuste et du pattern DAO.",
            closedDescriptionEN: "Implementation of a robust MVC architecture and DAO pattern.",
            icon: "/assets/icons/java.png", fileLink: "/assets/files/SIO-FRP-05-SEILLER-JULIAN-Architecture-JavaFX-MVC.pdf"
        },
        {
            id: "realisation6", title: "Stockage Hybride MinIO & SQL", titleEN: "MinIO & SQL Hybrid Storage",
            closedDescription: "Mise en place d'un stockage S3 asynchrone pour l'imagerie médicale.",
            closedDescriptionEN: "Implementation of asynchronous S3 storage for medical imaging.",
            icon: "/assets/icons/minio.png", fileLink: "/assets/files/SIO-FRP-06-SEILLER-JULIAN-Stockage-Hybride-MinIO.pdf"
        },
        {
            id: "realisation7", title: "Sécurité RBAC & Audit", titleEN: "RBAC Security & Auditing",
            closedDescription: "Contrôle d'accès basé sur les rôles et historique inaltérable d'audit.",
            closedDescriptionEN: "Role-based access control and unalterable audit history.",
            icon: "/assets/icons/globeEmoji.png", fileLink: "/assets/files/SIO-FRP-07-SEILLER-JULIAN-Securite-RBAC-Audit.pdf"
        },
        {
            id: "realisation8", title: "Déploiement via Docker", titleEN: "Deployment via Docker",
            closedDescription: "Conteneurisation de la base de données avec Docker Compose.",
            closedDescriptionEN: "Database containerization using Docker Compose.",
            icon: "/assets/icons/docker.png", fileLink: "/assets/files/SIO-FRP-08-SEILLER-JULIAN-Deploiement-Docker.pdf"
        },
        {
            id: "realisation9", title: "Gestion Hôtelière (Node.js)", titleEN: "Hotel Management (Node.js)",
            closedDescription: "Création d'une application Web MVC sécurisée avec Node.js et Express.",
            closedDescriptionEN: "Creation of a secure MVC Web application with Node.js and Express.",
            icon: "/assets/icons/hotelEmoji.png", fileLink: "/assets/files/SIO-FRP-09-SEILLER-JULIAN-Gestion-HotelCalifornia.pdf"
        },
        {
            id: "realisation10", title: "Plateforme Scolarité Asimov", titleEN: "Asimov School Platform",
            closedDescription: "Programmation d'une API REST et import massif de données CSV.",
            closedDescriptionEN: "Programming of a REST API and bulk CSV data import.",
            icon: "/assets/icons/school.png", fileLink: "/assets/files/SIO-FRP-10-SEILLER-JULIAN-Gestion-Scolarite-Asimov.pdf"
        },
        {
            id: "realisation11", title: "Portfolio Web Professionnel", titleEN: "Professional Web Portfolio",
            closedDescription: "Conception d'une plateforme Web moderne centralisant CV et projets.",
            closedDescriptionEN: "Design of a modern Web platform centralizing resume and projects.",
            icon: "/assets/icons/js.png", fileLink: "/assets/files/SIO-FRP-11-SEILLER-JULIAN-Portfolio-Web.pdf"
        },
        {
            id: "realisation12", title: "Tests Unitaires & CI/CD", titleEN: "Unit Testing & CI/CD",
            closedDescription: "Mise en place de tests automatisés Jest et intégration continue GitHub Actions.",
            closedDescriptionEN: "Implementation of automated Jest tests and GitHub Actions continuous integration.",
            icon: "/assets/icons/vscode.png", fileLink: "/assets/files/SIO-FRP-12-SEILLER-JULIAN-Tests-Unitaires-Jest.pdf"
        }
    ];

    // Trier les projets par date décroissante
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Stockage de la hauteur initiale de chaque carte
    const initialHeights = {};

    // Vérifier si la page est "indexEN.html"
    const isEnglish = window.location.pathname.includes("indexEN.html");

    // Fonction de rendu générique pour les cartes (Projets et Réalisations)
    function renderCards(dataArray, container) {
        if (!container) return;
        dataArray.forEach((item) => {
            const iconPath = isGithubPages ? `/portfolio${item.icon}` : item.icon;
        
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('id', item.id); 
        
            if (item.inProgress) {
                card.classList.add('in-progress');
            }
        
            const title = isEnglish ? item.titleEN : item.title;
            const closedDescription = isEnglish ? item.closedDescriptionEN : item.closedDescription;
            const openDescription = isEnglish ? item.openDescriptionEN : item.openDescription;
            const footerText = isEnglish ? item.footerTextEN : item.footerText;
        
            card.innerHTML = `
                <div class="card-content">
                <div class="card-image-wrapper">
                    <img src="${iconPath}" alt="${title}">
                </div>
                <div class="card-text-wrapper">
                    <h3>${title}</h3>
                    <p class="date">${formatDate(item.date)}</p>
                    <p class="desc">${closedDescription}</p>
                </div>
                </div>
                <div class="card-overlay">
                <h4>${title}</h4>
                <p class="dateOnLeft">${formatDate(item.date)}</p>
                <div class="card-details">
                    <p>${openDescription}</p>
                </div>
                <p class="footer-text">${footerText}</p>
                ${item.hasGitRepo ? `<a href="${isGithubPages ? `/portfolio${item.gitRepoLink}` : item.gitRepoLink}" class="btn" target="_blank">${isEnglish ? 'See the project ➔' : 'Voir le projet ➔'}</a>` : ''}
                ${item.hasFile ? `<a href="${isGithubPages ? `/portfolio${item.fileLink}` : item.fileLink}" class="btn" target="_blank">${isEnglish ? 'See the file ➔' : 'Voir le fichier ➔'}</a>` : ''}
                </div>
            `;

            container.appendChild(card);

            const cardContent = card.querySelector('.card-content');
            cardContent.style.height = 'auto';

            const img = card.querySelector('img');
            img.onload = () => {
                initialHeights[item.id] = cardContent.scrollHeight;
            };

            card.addEventListener('click', (e) => {
                if (!card.classList.contains('active')) {
                    e.stopPropagation();
                    const wasAnyCardOpen = document.querySelector('.project-card.active');
                    closeAllCards();

                    img.onload = () => {
                        initialHeights[item.id] = cardContent.scrollHeight;
                    };
                    
                    const cardOverlay = card.querySelector('.card-overlay');
                    
                    cardContent.style.height = `${initialHeights[item.id]}px`;
                    cardContent.offsetHeight; 

                    const applyHeight = () => {
                        requestAnimationFrame(() => {
                            cardContent.style.height = `${cardOverlay.scrollHeight}px`;
                            card.classList.add('active');
                        });
                    };

                    if (wasAnyCardOpen && window.innerWidth > 650) {
                        setTimeout(applyHeight, 200); 
                    } else {
                        applyHeight();
                    }
                }
            });
        });
    }

    // Fonction de rendu spécifique pour les réalisations (Ouvre un PDF au clic)
    function renderRealizations(dataArray, container) {
        if (!container) return;
        dataArray.forEach((item) => {
            const iconPath = isGithubPages ? `/portfolio${item.icon}` : item.icon;
            const filePath = isGithubPages ? `/portfolio${item.fileLink}` : item.fileLink;
        
            const card = document.createElement('a');
            card.className = 'project-card realization-card';
            card.href = filePath;
            card.target = '_blank';
            card.style.textDecoration = 'none';
            card.style.color = 'inherit';
        
            const title = isEnglish ? item.titleEN : item.title;
            const closedDescription = isEnglish ? item.closedDescriptionEN : item.closedDescription;
        
            card.innerHTML = `
                <div class="card-content" style="height: 100%; justify-content: center;">
                    <div class="card-image-wrapper">
                        <img src="${iconPath}" alt="${title}">
                    </div>
                    <div class="card-text-wrapper">
                        <h3 style="text-align: center;">${title}</h3>
                        <p class="desc" style="text-align: center; margin-top: 10px;">${closedDescription}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Rendu des cartes
    renderCards(projects.filter(p => p.category === 'BTS'), projectCardsBTS);
    renderCards(projects.filter(p => p.category === 'BUT'), projectCardsBUT);
    renderRealizations(realisations, realisationCardsContainer);

    // Fermer une carte spécifique
    function closeCard(card, projectId) {
        const cardContent = card.querySelector('.card-content');
        card.classList.remove('active');
        cardContent.style.height = `${initialHeights[projectId]}px`;
        setTimeout(() => {
            cardContent.style.height = 'auto';
        }, 300);
    }

    // Fermer toutes les cartes
    function closeAllCards() {
        document.querySelectorAll('.project-card.active').forEach(card => {
            const cardId = card.getAttribute('id');
            closeCard(card, cardId);
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.project-card')) {
            closeAllCards(); // Ferme toutes les cartes si on clique ailleurs
        }
    });

    // Fonction pour formater les dates
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        const date = new Date(dateString);
        return date.toLocaleDateString(isEnglish ? 'en-US' : 'fr-FR', options);
    }
});