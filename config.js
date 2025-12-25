/* ============================================
   ARCHIVO DE CONFIGURACIÓN
   ============================================
   
   INSTRUCCIONES:
   Este es el archivo donde puedes personalizar
   TODO el contenido de tu sitio web sin tocar
   el código HTML, CSS o JavaScript principal.
   
   Simplemente modifica los valores entre comillas
   y guarda el archivo para ver los cambios.
   
   ============================================ */

const CONFIG = {
    
    /* ========================================
       INFORMACIÓN DEL NEGOCIO
       ======================================== */
    businessName: "TechStore Pro",
    tagline: "Tu tienda de tecnología de confianza",
    description: "Ofrecemos los mejores productos tecnológicos del mercado con garantía y soporte profesional.",
    
    
    /* ========================================
       COLORES DEL SITIO
       ======================================== 
       
       Puedes usar:
       - Nombres: "blue", "red", "green"
       - Hexadecimal: "#6366f1"
       - RGB: "rgb(99, 102, 241)"
    */
    colors: {
        primary: "#6366f1",      // Color principal (botones, enlaces)
        secondary: "#8b5cf6",    // Color secundario (degradados)
        accent: "#ec4899",       // Color de acento
        dark: "#1f2937",         // Color oscuro (textos, fondos)
        light: "#f9fafb"         // Color claro (fondos)
    },
    
    
    /* ========================================
       TIPOGRAFÍA
       ======================================== 
       
       Fuentes disponibles de Google Fonts:
       - 'Inter'
       - 'Poppins'
       - 'Roboto'
       - 'Montserrat'
       - 'Open Sans'
       
       O usa fuentes del sistema:
       - 'Arial'
       - 'Helvetica'
       - 'Georgia'
    */
    fonts: {
        primary: "'Inter', sans-serif",      // Fuente principal
        secondary: "'Poppins', sans-serif"   // Fuente para títulos
    },
    
    
    /* ========================================
       PRODUCTOS O SERVICIOS
       ======================================== 
       
       Agrega tantos productos como quieras.
       Cada producto debe tener:
       - id: número único
       - name: nombre del producto
       - price: precio (solo número)
       - description: descripción corta
       - image: emoji o URL de imagen
       
       EMOJIS SUGERIDOS:
       💻 📱 🎧 ⌚ 🖥️ ⌨️ 🖱️ 📷 🎮 🔊 
       🎬 📺 💡 🏠 🚗 👕 👟 🎒 📚 ✈️
    */
    products: [
        {
            id: 1,
            name: "Laptop Pro X1",
            price: 1299,
            description: "Laptop de alto rendimiento para profesionales",
            image: "💻"
        },
        {
            id: 2,
            name: "Smartphone Ultra",
            price: 899,
            description: "Último modelo con cámara profesional de 108MP",
            image: "📱"
        },
        {
            id: 3,
            name: "Auriculares Premium",
            price: 299,
            description: "Audio de alta fidelidad con cancelación de ruido",
            image: "🎧"
        },
        {
            id: 4,
            name: "Tablet Pro",
            price: 599,
            description: "Perfecta para diseñadores y creativos",
            image: "📱"
        },
        {
            id: 5,
            name: "Smartwatch Elite",
            price: 399,
            description: "Monitoreo de salud y notificaciones inteligentes",
            image: "⌚"
        },
        {
            id: 6,
            name: "Teclado Mecánico RGB",
            price: 149,
            description: "Switches cherry MX con iluminación personalizable",
            image: "⌨️"
        }
    ],
    
    
    /* ========================================
       TABLA DE INFORMACIÓN
       ======================================== 
       
       Esta tabla se muestra en la sección 
       "Información del Servicio"
       
       Puedes agregar o quitar filas según necesites
    */
    dataTable: [
        {
            concepto: "Envío nacional",
            valor: "Gratis en compras +$500",
            estado: "Activo"
        },
        {
            concepto: "Garantía extendida",
            valor: "2 años",
            estado: "Disponible"
        },
        {
            concepto: "Soporte técnico",
            valor: "24/7 por WhatsApp y Email",
            estado: "Activo"
        },
        {
            concepto: "Devoluciones",
            valor: "30 días sin preguntas",
            estado: "Activo"
        },
        {
            concepto: "Métodos de pago",
            valor: "Todas las tarjetas y transferencias",
            estado: "Activo"
        }
    ],
    
    
    /* ========================================
       CHATBOT / ASISTENTE VIRTUAL
       ======================================== 
       
       Configura las respuestas automáticas
       del chatbot que aparece en la esquina
       inferior derecha.
    */
    chatbot: {
        // Mensaje de bienvenida
        welcomeMessage: "¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
        
        // Opciones y respuestas predefinidas
        options: [
            {
                text: "📅 Horarios de atención",
                response: "Estamos disponibles de Lunes a Viernes de 9:00 AM a 6:00 PM. Sábados de 10:00 AM a 2:00 PM. ¡Los domingos descansamos! 😊"
            },
            {
                text: "💳 Formas de pago",
                response: "Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias y efectivo en nuestras sucursales."
            },
            {
                text: "🚚 Envíos y entregas",
                response: "Realizamos envíos a todo el país. Entregas en 24-48 horas para Capital Federal y GBA. Interior del país: 3-5 días hábiles. Envío gratis en compras superiores a $500."
            },
            {
                text: "📞 Contactar a un asesor",
                response: "Puedes contactarnos por:<br>📱 WhatsApp: +54 11 1234-5678<br>📧 Email: ventas@techstore.com<br>☎️ Teléfono: +54 11 4567-8900<br><br>¡Estamos para ayudarte!"
            },
            {
                text: "🛡️ Garantías",
                response: "Todos nuestros productos tienen garantía oficial del fabricante. Además, ofrecemos garantía extendida de hasta 2 años con cobertura total. ¡Tu compra está protegida!"
            }
        ],
        
        // Respuesta cuando el mensaje no coincide con las opciones
        defaultResponse: "Gracias por tu mensaje. Un asesor se comunicará contigo pronto. También puedes escribirnos a ventas@techstore.com o llamarnos al +54 11 1234-5678. 📧📞"
    },
    
    
    /* ========================================
       REDES SOCIALES
       ======================================== 
       
       Agrega los enlaces a tus redes sociales
       Deja en blanco (#) las que no uses
    */
    social: {
        instagram: "https://instagram.com/techstorepro",
        facebook: "https://facebook.com/techstorepro",
        twitter: "https://twitter.com/techstorepro",
        whatsapp: "https://wa.me/5491112345678", // Formato: código país + número
        youtube: "https://youtube.com/@techstorepro",
        linkedin: "https://linkedin.com/company/techstorepro"
    },
    
    
    /* ========================================
       INFORMACIÓN DE CONTACTO
       ======================================== */
    contact: {
        email: "ventas@techstore.com",
        phone: "+54 11 1234-5678",
        address: "Av. Corrientes 1234, CABA, Argentina",
        whatsapp: "+54 9 11 1234-5678"
    },
    
    
    /* ========================================
       CONFIGURACIÓN AVANZADA
       ======================================== 
       
       Solo modifica esto si sabes lo que haces
    */
    settings: {
        // Moneda para mostrar precios
        currency: "$",
        
        // Idioma del sitio
        language: "es",
        
        // Habilitar/deshabilitar funciones
        enableDarkMode: true,
        enableChatbot: true,
        enableAnimations: true,
        
        // Velocidad de animaciones (milisegundos)
        animationSpeed: 300,
        
        // Tiempo del loader inicial (milisegundos)
        loaderDuration: 2000
    }
};

/* ============================================
   NO MODIFIQUES NADA DEBAJO DE ESTA LÍNEA
   A menos que sepas JavaScript
   ============================================ */

// Hacer CONFIG disponible globalmente
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Aplicar colores CSS dinámicamente
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const root = document.documentElement;
        root.style.setProperty('--color-primary', CONFIG.colors.primary);
        root.style.setProperty('--color-secondary', CONFIG.colors.secondary);
        root.style.setProperty('--color-accent', CONFIG.colors.accent);
        root.style.setProperty('--color-dark', CONFIG.colors.dark);
        root.style.setProperty('--color-light', CONFIG.colors.light);
        root.style.setProperty('--font-primary', CONFIG.fonts.primary);
        root.style.setProperty('--font-secondary', CONFIG.fonts.secondary);
    });
}
