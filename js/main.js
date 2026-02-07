// PORTFOLIO SLIDER DATA
        const portfolioSlides = [
            {
                title: "Universidades y Transferencia Tecnológica",
                content: "Preparando las capacidades necesarias para transferir conocimiento desde la investigación científica hacia mercados estratégicos.",
                points: [
                    "Incluye:",
                    "Diagnóstico de Capacidades Transferencia Tecnológica",
                    "Hoja de Ruta y Oferta de Servicios de Innovación",
                    "Diseño de Programas de Incubación de alto impacto"
                ],
                image: "../img/bg-slider-1.jpg"
            },
            {
                title: "Innovación Corporativa",
                content: "Diseñando la estrategia e iniciativas de transformación que guiará la generación del futuro de tu organización.",
                points: [
                    "Incluye:",
                    "Programa de Open Innovation",
                    "Open Innovation Readiness Assessment y diagnósticos",
                    "Estrategia de Innovación",
                    "Diseño de proyectos y mapa de oportunidades"
                ],
                image: "../img/bg-slider-2.jpg"
            },
            {
                title: "Gobierno y Políticas Públicas",
                content: "Construyendo las iniciativas públicas que potenciarán los sectores estratégicos a través de la ciencia, tecnología e innovación.",
                points: [
                    "Incluye:",
                    "Open Innovation",
                    "Open Innovation Readiness Assessment para Clusters",
                    "Agendas de innovación",
                    "Paquetes tecnológicos"
                ],
                image: "../img/bg-slider-3.jpg"
            }
        ];

        // PROJECTS DATA
        const projects = [
            {
                id: 1,
                tag: "Portafolio Corporativo",
                title: "Innovación abierta para el Tratamiento de Efluentes en el Sector Ganadero",
                reto: "Efluentes contaminantes y altos costos regulatorios.",
                image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600",
                description: "El tratamiento ineficiente de efluentes es un desafío ambiental y operativo para el sector ganadero, con impactos en suelo, agua y costos regulatorios. Este proyecto, desarrollado con una empresa ganadera, buscó transformar los residuos en recursos valiosos, como energía y fertilizantes, mediante tecnologías innovadoras. A través de un programa de innovación abierta, se realizó un estudio de vigilancia tecnológica para identificar soluciones como digestores anaeróbicos, sistemas de membranas y biofiltración, evaluando su viabilidad técnica y compatibilidad regulatoria.",
                additionalInfo: "El enfoque de innovación abierta permitió ampliar el radar de soluciones más allá de las alternativas tradicionales, integrando conocimiento de startups, centros de investigación y proveedores tecnológicos especializados. Este modelo facilitó la identificación de tecnologías con distintos niveles de madurez, evaluando no sólo su viabilidad técnica, sino también su compatibilidad con las condiciones operativas y regulatorias del sector ganadero.",
                challenge: "A partir del proceso de vigilancia tecnológica, se priorizaron soluciones con potencial de implementación operativa, capaces de reducir la carga contaminante de los efluentes y, al mismo tiempo, generar valor económico. Tecnologías como los digestores anaeróbicos abren oportunidades para la producción de biogas, mientras que sistemas de membranas y biofiltración permiten mejorar la calidad del agua tratada y avanzar hacia esquemas de reutilización.",
                impact: "El proyecto también puso en evidencia la importancia de abordar la gestión de efluentes desde una mirada sistémica. Más allá del cumplimiento normativo, la transformación de residuos en recursos contribuye a mejorar la eficiencia operativa, reducir riesgos ambientales y fortalecer la sostenibilidad del negocio ganadero en el largo plazo."
            },
            {
                id: 2,
                tag: "Portafolio Corporativo",
                title: "Innovación Abierta para la Seguridad Vial (transporte)",
                reto: "Reducir accidentes causados por factores humanos en el transporte.",
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600",
                description: "Los accidentes de tránsito representan una de las principales causas de mortalidad y lesiones graves a nivel mundial, con un alto porcentaje atribuible a factores humanos. Este proyecto, desarrollado para el sector del transporte, tuvo como objetivo identificar y evaluar soluciones tecnológicas capaces de prevenir accidentes mediante la detección temprana de comportamientos de riesgo en conductores. A través de un programa de innovación abierta, se llevó a cabo un ejercicio de vigilancia tecnológica que permitió mapear tecnologías emergentes en áreas como monitoreo de fatiga, detección de distracciones y sistemas de asistencia a la conducción.",
                additionalInfo: "El enfoque de innovación abierta facilitó la conexión con startups, centros de investigación y desarrolladores tecnológicos especializados en soluciones de seguridad vial. Este modelo permitió evaluar tecnologías desde múltiples perspectivas, considerando no solo su efectividad técnica, sino también su viabilidad operativa, costos de implementación y compatibilidad con las flotas y sistemas actuales del sector transporte.",
                challenge: "A partir de la vigilancia tecnológica realizada, se identificaron tecnologías con diferentes grados de madurez, que van desde sensores biométricos y cámaras de reconocimiento facial hasta sistemas integrados de inteligencia artificial para la predicción de riesgos. La priorización de estas soluciones consideró tanto el potencial de impacto en la reducción de accidentes como la factibilidad de escalamiento en operaciones de transporte masivo o de carga.",
                impact: "El proyecto destacó la relevancia de adoptar un enfoque preventivo y basado en datos para mejorar la seguridad vial. Más allá de cumplir con normativas, la implementación de estas tecnologías puede transformar la gestión de flotas, reducir costos asociados a siniestros y, sobre todo, proteger vidas. Además, refuerza el compromiso del sector transporte con la innovación responsable y la sostenibilidad operativa."
            },
            {
                id: 3,
                tag: "Portafolio Corporativo",
                title: "Cierre de Minas Regen Biotecnología",
                reto: "Reducir el impacto ambiental (relaves) ácido.",
                image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600",
                description: "El cierre de minas representa uno de los mayores desafíos ambientales en la industria extractiva, especialmente cuando se trata de relaves ácidos que pueden contaminar suelos y cuerpos de agua durante décadas. Este proyecto, desarrollado en colaboración con una empresa minera, tuvo como objetivo identificar soluciones biotecnológicas innovadoras para neutralizar la acidez y estabilizar los relaves, minimizando el impacto ambiental a largo plazo.",
                additionalInfo: "A través de un enfoque de innovación abierta, se realizó un ejercicio de vigilancia tecnológica que permitió identificar tecnologías emergentes en el campo de la biotecnología aplicada a la remediación ambiental. Se exploraron alternativas como el uso de microorganismos para la neutralización de pH, sistemas de fitorremediación y la aplicación de biorecubrimientos para estabilizar superficies contaminadas.",
                challenge: "El proceso de evaluación consideró no solo la efectividad técnica de las soluciones, sino también su viabilidad económica, escalabilidad operativa y compatibilidad con las condiciones específicas del sitio minero. Se priorizaron tecnologías que pudieran integrarse con los planes de cierre existentes y que ofrecieran beneficios adicionales, como la recuperación de suelos para otros usos productivos.",
                impact: "Este proyecto evidencia cómo la innovación puede transformar pasivos ambientales en oportunidades de restauración ecológica. La implementación de soluciones biotecnológicas no solo reduce riesgos ambientales, sino que también fortalece la responsabilidad social de la empresa minera y contribuye a la sostenibilidad del sector en el largo plazo."
            }
        ];

        // Initialize Portfolio Slider
        let currentPortfolioSlide = 0;
        let portfolioInterval;

        function initPortfolioSlider() {
            const sliderWrapper = document.getElementById('portfolioSlider');
            const bulletsContainer = document.getElementById('portfolioBullets');
            
            portfolioSlides.forEach((slide, index) => {
                const slideElement = document.createElement('div');
                slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
                slideElement.innerHTML = `
                    <div class="slide-text">
                        <h3>${slide.title}</h3>
                        <p>${slide.content}</p>
                        <ul>
                            ${slide.points.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="slide-image">
                        <img src="${slide.image}" alt="${slide.title}">
                    </div>
                `;
                sliderWrapper.appendChild(slideElement);

                // Create bullet
                const bullet = document.createElement('button');
                bullet.className = `portfolio-bullet ${index === 0 ? 'active' : ''}`;
                bullet.onclick = () => goToPortfolioSlide(index);
                bulletsContainer.appendChild(bullet);
            });

            startPortfolioAutoplay();
        }

        function goToPortfolioSlide(index) {
            const slides = document.querySelectorAll('#portfolioSlider .slide');
            const bullets = document.querySelectorAll('.portfolio-bullet');
            
            if (index === currentPortfolioSlide) return;

            // Mark current slide as exiting
            slides[currentPortfolioSlide].classList.remove('active');
            slides[currentPortfolioSlide].classList.add('exiting');
            bullets[currentPortfolioSlide].classList.remove('active');

            // Set new slide as previous (underneath)
            slides[index].classList.remove('exiting');
            slides[index].classList.add('previous');
            
            // After a brief moment, activate new slide
            setTimeout(() => {
                slides[index].classList.remove('previous');
                slides[index].classList.add('active');
                bullets[index].classList.add('active');
            }, 50);

            // Clean up exiting slide after transition
            setTimeout(() => {
                slides.forEach((slide, i) => {
                    if (i !== index) {
                        slide.classList.remove('exiting', 'previous', 'active');
                    }
                });
            }, 850);

            currentPortfolioSlide = index;
            
            // Reset autoplay
            clearInterval(portfolioInterval);
            startPortfolioAutoplay();
        }

        function startPortfolioAutoplay() {
            portfolioInterval = setInterval(() => {
                const nextSlide = (currentPortfolioSlide + 1) % portfolioSlides.length;
                goToPortfolioSlide(nextSlide);
            }, 5000);
        }

        // Initialize Projects
        function initProjects() {
            const track = document.getElementById('proyectosTrack');
            const bulletsContainer = document.getElementById('proyectosBullets');
            
            projects.forEach((project, index) => {
                // Create project card
                const card = document.createElement('div');
                card.className = 'proyecto-card';
                card.onclick = () => openProjectDetail(project);
                card.innerHTML = `
                    <div class="proyecto-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="proyecto-info">
                        <span class="proyecto-tag">${project.tag}</span>
                        <h3>${project.title}</h3>
                        <p class="proyecto-reto"><strong>Reto:</strong> ${project.reto}</p>
                    </div>
                `;
                track.appendChild(card);
                
                // Create bullet
                const bullet = document.createElement('div');
                bullet.className = `bullet ${index === 0 ? 'active' : ''}`;
                bullet.onclick = () => scrollToProject(index);
                bulletsContainer.appendChild(bullet);
            });
            
            // Handle scroll for bullets
            const wrapper = document.getElementById('proyectosWrapper');
            wrapper.addEventListener('scroll', updateBullets);
        }

        function scrollToProject(index) {
            const wrapper = document.getElementById('proyectosWrapper');
            const cards = document.querySelectorAll('.proyecto-card');
            const card = cards[index];
            
            wrapper.scrollTo({
                left: card.offsetLeft - 50,
                behavior: 'smooth'
            });
        }

        function updateBullets() {
            const wrapper = document.getElementById('proyectosWrapper');
            const cards = document.querySelectorAll('.proyecto-card');
            const bullets = document.querySelectorAll('.bullet');
            
            const scrollPosition = wrapper.scrollLeft;
            const cardWidth = cards[0].offsetWidth + 32; // width + gap
            
            const activeIndex = Math.round(scrollPosition / cardWidth);
            
            bullets.forEach((bullet, index) => {
                bullet.classList.toggle('active', index === activeIndex);
            });
        }

        // Project Detail Functions
        function openProjectDetail(project) {
            const detail = document.getElementById('projectDetail');
            const sidebar = document.getElementById('projectSidebar');
            const main = document.getElementById('projectMain');
            
            sidebar.innerHTML = `
                <span class="proyecto-tag">${project.tag}</span>
                <h1>${project.title}</h1>
            `;
            
            main.innerHTML = `
                <h3>Reto: ${project.reto}</h3>
                <img src="${project.image}" alt="${project.title}">
                <p>${project.description}</p>
                <p>${project.additionalInfo}</p>
                <p>${project.challenge}</p>
                <p>${project.impact}</p>
            `;
            
            // Load related projects
            const relatedGrid = document.getElementById('relatedGrid');
            relatedGrid.innerHTML = '';
            
            projects.filter(p => p.id !== project.id).forEach(p => {
                const card = document.createElement('div');
                card.className = 'proyecto-card';
                card.onclick = () => {
                    openProjectDetail(p);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                };
                card.innerHTML = `
                    <div class="proyecto-image">
                        <img src="${p.image}" alt="${p.title}">
                    </div>
                    <div class="proyecto-info">
                        <span class="proyecto-tag">${p.tag}</span>
                        <h3>${p.title}</h3>
                        <p class="proyecto-reto"><strong>Reto:</strong> ${p.reto}</p>
                    </div>
                `;
                relatedGrid.appendChild(card);
            });
            
            detail.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeProjectDetail() {
            const detail = document.getElementById('projectDetail');
            detail.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Drag to scroll for projects
        const proyectosWrapper = document.getElementById('proyectosWrapper');
        let isDown = false;
        let startX;
        let scrollLeft;

        proyectosWrapper.addEventListener('mousedown', (e) => {
            isDown = true;
            proyectosWrapper.style.cursor = 'grabbing';
            startX = e.pageX - proyectosWrapper.offsetLeft;
            scrollLeft = proyectosWrapper.scrollLeft;
        });

        proyectosWrapper.addEventListener('mouseleave', () => {
            isDown = false;
            proyectosWrapper.style.cursor = 'grab';
        });

        proyectosWrapper.addEventListener('mouseup', () => {
            isDown = false;
            proyectosWrapper.style.cursor = 'grab';
        });

        proyectosWrapper.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - proyectosWrapper.offsetLeft;
            const walk = (x - startX) * 2;
            proyectosWrapper.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        proyectosWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - proyectosWrapper.offsetLeft;
            scrollLeft = proyectosWrapper.scrollLeft;
        });

        proyectosWrapper.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - proyectosWrapper.offsetLeft;
            const walk = (x - startX) * 2;
            proyectosWrapper.scrollLeft = scrollLeft - walk;
        });

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            initPortfolioSlider();
            initProjects();
            proyectosWrapper.style.cursor = 'grab';
            
            // Mobile menu toggle
            const mobileBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileBtn.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-open');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('mobile-open');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('nav')) {
                    navLinks.classList.remove('mobile-open');
                }
            });
        });

        // Close project detail on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProjectDetail();
            }
        });