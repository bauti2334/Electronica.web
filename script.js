/* ============================================
   SCRIPT PRINCIPAL
   ============================================
   
   Este archivo contiene toda la funcionalidad
   del sitio web. NO necesitas modificar nada aquí
   a menos que quieras agregar funciones avanzadas.
   
   Para personalizar contenido, usa config.js
   
   ============================================ */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    /* ========================================
       INICIALIZACIÓN
       ======================================== */
    initializeWebsite();
    
    
    /* ========================================
       FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
       ======================================== */
    function initializeWebsite() {
        // Ocultar loader después del tiempo configurado
        setTimeout(hideLoader, CONFIG.settings.loaderDuration);
        
        // Cargar contenido dinámico
        loadDynamicContent();
        
        // Configurar eventos
        setupEventListeners();
        
        // Inicializar funcionalidades
        initNavbar();
        initChatbot();
        initThemeToggle();
        initSmoothScroll();
        initScrollAnimations();
    }
    
    
    /* ========================================
       LOADER
       ======================================== */
    function hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }
    
    
    /* ========================================
       CARGAR CONTENIDO DINÁMICO
       ======================================== */
    function loadDynamicContent() {
        // Cargar nombre del negocio en todos los lugares
        const businessNameElements = [
            'business-name',
            'hero-title',
            'about-business-name',
            'footer-business-name',
            'footer-copyright'
        ];
        
        businessNameElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = CONFIG.businessName;
            }
        });
        
        // Cargar tagline
        const taglineElements = ['hero-tagline', 'footer-tagline'];
        taglineElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = CONFIG.tagline;
            }
        });
        
        // Cargar descripción
        const descriptionElement = document.getElementById('hero-description');
        if (descriptionElement) {
            descriptionElement.textContent = CONFIG.description;
        }
        
        // Cargar productos
        loadProducts();
        
        // Cargar tabla de datos
        loadDataTable();
        
        // Cargar enlaces de redes sociales
        loadSocialLinks();
    }
    
    
    /* ========================================
       CARGAR PRODUCTOS
       ======================================== */
    function loadProducts() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        CONFIG.products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.style.animationDelay = `${index * 0.1}s`;
            
            productCard.innerHTML = `
                <div class="product-icon">${product.image}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${CONFIG.settings.currency}${product.price}</div>
                <button class="btn btn-product" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Agregar al carrito
                </button>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }
    
    
    /* ========================================
       CARGAR TABLA DE DATOS
       ======================================== */
    function loadDataTable() {
        const tableBody = document.getElementById('data-table-body');
        if (!tableBody) return;
        
        tableBody.innerHTML = '';
        
        CONFIG.dataTable.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.concepto}</td>
                <td>${row.valor}</td>
                <td><span class="badge">${row.estado}</span></td>
            `;
            tableBody.appendChild(tr);
        });
    }
    
    
    /* ========================================
       CARGAR ENLACES DE REDES SOCIALES
       ======================================== */
    function loadSocialLinks() {
        const socialLinks = {
            'social-instagram': CONFIG.social.instagram,
            'social-facebook': CONFIG.social.facebook,
            'social-twitter': CONFIG.social.twitter
        };
        
        Object.keys(socialLinks).forEach(id => {
            const element = document.getElementById(id);
            if (element && socialLinks[id] !== '#') {
                element.href = socialLinks[id];
            }
        });
    }
    
    
    /* ========================================
       CONFIGURAR EVENT LISTENERS
       ======================================== */
    function setupEventListeners() {
        // Menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('open');
                const icon = this.querySelector('i');
                icon.className = navLinks.classList.contains('open') 
                    ? 'fas fa-times' 
                    : 'fas fa-bars';
            });
        }
        
        // Cerrar menú al hacer clic en un link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }
    
    
    /* ========================================
       NAVBAR - Efecto al hacer scroll
       ======================================== */
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Marcar sección activa
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    
    /* ========================================
       CHATBOT
       ======================================== */
    function initChatbot() {
        if (!CONFIG.settings.enableChatbot) return;
        
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotContainer = document.getElementById('chatbot-container');
        const chatbotClose = document.getElementById('chatbot-close');
        const chatbotMessages = document.getElementById('chatbot-messages');
        const chatbotOptions = document.getElementById('chatbot-options');
        const chatbotInput = document.getElementById('chatbot-input-field');
        const chatbotSend = document.getElementById('chatbot-send');
        
        // Cargar mensaje de bienvenida
        addBotMessage(CONFIG.chatbot.welcomeMessage);
        
        // Cargar opciones predefinidas
        loadChatbotOptions();
        
        // Toggle chatbot
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('hidden');
        });
        
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.add('hidden');
        });
        
        // Enviar mensaje
        chatbotSend.addEventListener('click', sendChatMessage);
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
        
        function loadChatbotOptions() {
            chatbotOptions.innerHTML = '';
            
            CONFIG.chatbot.options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = option.text;
                button.addEventListener('click', function() {
                    handleOptionClick(option);
                });
                chatbotOptions.appendChild(button);
            });
        }
        
        function handleOptionClick(option) {
            addUserMessage(option.text);
            setTimeout(() => {
                addBotMessage(option.response);
            }, 500);
        }
        
        function sendChatMessage() {
            const message = chatbotInput.value.trim();
            if (message === '') return;
            
            addUserMessage(message);
            chatbotInput.value = '';
            
            // Buscar respuesta automática
            setTimeout(() => {
                const foundOption = CONFIG.chatbot.options.find(opt => 
                    message.toLowerCase().includes(opt.text.toLowerCase().replace(/[^\w\s]/gi, ''))
                );
                
                const response = foundOption 
                    ? foundOption.response 
                    : CONFIG.chatbot.defaultResponse;
                
                addBotMessage(response);
            }, 1000);
        }
        
        function addBotMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message bot';
            messageDiv.innerHTML = text;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function addUserMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message user';
            messageDiv.textContent = text;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }
    
    
    /* ========================================
       THEME TOGGLE - Modo oscuro
       ======================================== */
    function initThemeToggle() {
        if (!CONFIG.settings.enableDarkMode) return;
        
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');
        
        // Cargar tema guardado
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            icon.className = 'fas fa-sun';
        }
        
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    
    /* ========================================
       SMOOTH SCROLL
       ======================================== */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    
    /* ========================================
       SCROLL ANIMATIONS
       ======================================== */
    function initScrollAnimations() {
        if (!CONFIG.settings.enableAnimations) return;
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observar elementos que deben animarse
        document.querySelectorAll('.product-card, .stat, .data-table').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }
    
});


/* ========================================
   FUNCIONES GLOBALES
   ======================================== */

// Función para agregar al carrito (puedes personalizarla)
function addToCart(productId) {
    const product = CONFIG.products.find(p => p.id === productId);
    
    if (product) {
        alert(`¡${product.name} agregado al carrito!\n\nPrecio: ${CONFIG.settings.currency}${product.price}\n\nEn una implementación real, aquí se agregaría al carrito de compras.`);
        
        // Aquí puedes integrar con un sistema de carrito real
        // Por ejemplo: añadir a localStorage, enviar a una API, etc.
    }
}

// Función para scroll a sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Función para abrir WhatsApp
function openWhatsApp() {
    const phone = CONFIG.contact.whatsapp.replace(/\s/g, '');
    const message = `Hola! Me interesa consultar sobre los productos de ${CONFIG.businessName}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Prevenir errores de consola
console.log('%c🚀 Sitio web cargado correctamente', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%c✨ Powered by ' + CONFIG.businessName, 'color: #8b5cf6; font-size: 12px;');
