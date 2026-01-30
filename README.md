# 🚗 Importadora Aguilera - Landing Page

Landing page profesional para **Importadora Aguilera**, empresa familiar con más de 40 años de experiencia en la venta de repuestos automotrices en Loja, Ecuador.

## ✨ Características

### 🎨 Diseño Moderno y Profesional
- Diseño responsive para móviles, tablets y desktop
- Animaciones sutiles con Framer Motion
- Tema personalizable con Material UI v5
- Paleta de colores corporativa (azul marino y dorado)
- Tipografía elegante (Montserrat + Poppins)

### 📱 Secciones Principales

1. **Header/Navbar Sticky**
   - Menú de navegación suave
   - Logo y eslogan
   - Botón de WhatsApp destacado
   - Versión móvil con drawer

2. **Hero Section**
   - Mensaje impactante con eslogan
   - Botones de contacto (WhatsApp y llamada)
   - Animaciones llamativas
   - Badge de confianza (40+ años)

3. **Catálogo de Productos**
   - Sistema de filtros dinámicos por:
     - Búsqueda de texto
     - Marca de vehículo
     - Modelo
     - Año
     - Categoría de repuesto
   - Tarjetas de producto con información completa
   - Paginación con "cargar más"
   - Indicadores de stock

4. **Marcas de Vehículos**
   - Grid responsive con 12 marcas principales
   - Efectos hover
   - Descripciones breves

5. **Misión y Visión**
   - Identidad corporativa
   - Valores de la empresa
   - Estadística destacada (40+ años)

6. **Formulario de Contacto**
   - Validación de campos en tiempo real
   - Integración con WhatsApp
   - Información de contacto visible
   - Horarios de atención

7. **Ubicación con Google Maps**
   - Mapa interactivo integrado
   - Botones de navegación
   - Información de ubicación

8. **Footer Completo**
   - Enlaces rápidos
   - Redes sociales
   - Información de contacto
   - Copyright

### 🔧 Funcionalidades Técnicas

- **TypeScript**: Tipado estático para mayor seguridad
- **React 18**: Última versión con nuevas características
- **Material UI v5**: Componentes empresariales
- **Framer Motion**: Animaciones fluidas
- **Tema Global**: Variables fácilmente editables
- **Validación de Formularios**: Reglas de validación personalizadas
- **SEO Optimizado**: Meta tags, structured data, Open Graph
- **Performance**: Code splitting y lazy loading

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
cd importadora-aguilera

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## ⚙️ Configuración

### 1. Tema y Colores

Edita `/src/theme/theme.ts` para personalizar:

```typescript
const COLORS = {
  primary: {
    main: '#0A2351', // Azul marino - Cambiar aquí
    // ...
  },
  accent: {
    main: '#D4AF37', // Dorado - Cambiar aquí
    // ...
  },
  // ... más colores
};
```

### 2. Datos de Contacto

Actualiza en cada componente o crea un archivo de configuración:

```typescript
const CONTACT_INFO = {
  phone: '0987654321',        // Tu número real
  email: 'tu@email.com',       // Tu email real
  address: 'Tu dirección',     // Tu dirección real
  // ...
};
```

### 3. Productos

Edita `/src/data/products.ts` para actualizar el catálogo:

```typescript
export const products: Product[] = [
  {
    id: 'p001',
    name: 'Nombre del Producto',
    category: 'Categoría',
    brand: 'Marca',
    models: ['Modelo1', 'Modelo2'],
    years: [2020, 2021, 2022],
    price: 50.00,
    // ...
  },
  // ... más productos
];
```

### 4. Mapa de Google Maps

Actualiza las coordenadas en `/src/components/LocationSection.tsx`:

```typescript
const LOCATION = {
  lat: -3.9939,  // Tu latitud
  lng: -79.2042, // Tu longitud
  googleMapsUrl: 'https://goo.gl/maps/tu-link',
};
```

### 5. Redes Sociales

Actualiza los enlaces en `/src/components/Footer.tsx`:

```typescript
const COMPANY_INFO = {
  socialMedia: {
    facebook: 'https://facebook.com/tu-pagina',
    instagram: 'https://instagram.com/tu-cuenta',
    whatsapp: 'https://wa.me/593987654321',
  },
};
```

## 📁 Estructura del Proyecto

```
importadora-aguilera/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProductFilters.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductCatalog.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── MissionVisionSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── LocationSection.tsx
│   │   └── Footer.tsx
│   ├── data/                # Datos mock
│   │   ├── products.ts
│   │   └── brands.ts
│   ├── theme/               # Configuración de tema
│   │   └── theme.ts
│   ├── utils/               # Utilidades
│   │   └── validation.ts
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Punto de entrada
├── index.html               # HTML principal (SEO)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Personalización de Estilos

### Cambiar Tipografía

En `/src/theme/theme.ts`:

```typescript
const TYPOGRAPHY = {
  fontFamily: '"TuFuente", sans-serif',
  displayFont: '"TuFuenteTitulos", sans-serif',
  // ...
};
```

No olvides agregar las fuentes en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap" rel="stylesheet" />
```

### Cambiar Bordes Redondeados

```typescript
shape: {
  borderRadius: 12, // Cambiar valor
},
```

### Personalizar Sombras

```typescript
const SHADOWS = {
  card: '0 4px 20px rgba(10, 35, 81, 0.08)',
  // ... personalizar
};
```

## 📱 Responsive Design

La landing page está optimizada para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🔍 SEO

### Meta Tags Incluidos
- ✅ Descripción y keywords
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Canonical URL
- ✅ Robots meta

### Mejoras Adicionales Recomendadas
1. Agregar archivo `sitemap.xml`
2. Configurar `robots.txt`
3. Implementar análisis (Google Analytics)
4. Optimizar imágenes (WebP)
5. Configurar caché del navegador

## 🚀 Deployment

### Netlify
```bash
npm run build
# Subir carpeta 'dist' a Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Actions o subir 'dist' manualmente
```

## 📞 Soporte

Para soporte o consultas sobre la landing page:
- 📧 Email: soporte@ejemplo.com
- 💬 WhatsApp: +593 XXX XXX XXX

## 📝 Licencia

Este proyecto fue desarrollado exclusivamente para **Importadora Aguilera**.

---

**Desarrollado con ❤️ para Importadora Aguilera**  
*"Nada más, que lo mejor!"*
