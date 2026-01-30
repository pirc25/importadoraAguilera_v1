# 🎨 GUÍA RÁPIDA DE PERSONALIZACIÓN

Esta guía te ayudará a personalizar rápidamente los aspectos más importantes de la landing page.

## 🎯 Cambios Esenciales (5 minutos)

### 1. Número de WhatsApp y Teléfono

Busca y reemplaza `0987654321` en TODOS estos archivos:

```
src/components/Header.tsx
src/components/HeroSection.tsx
src/components/ProductCard.tsx
src/components/ContactSection.tsx
src/components/Footer.tsx
```

**Buscar:** `0987654321`  
**Reemplazar por:** Tu número real (formato: 09XXXXXXXX)

### 2. Email de Contacto

Busca y reemplaza en estos archivos:

```
src/components/ContactSection.tsx
src/components/Footer.tsx
```

**Buscar:** `contacto@importadoraaguilera.com`  
**Reemplazar por:** Tu email real

### 3. Dirección

En `src/components/ContactSection.tsx` y `Footer.tsx`:

**Buscar:** `Av. Principal 123, Loja - Ecuador`  
**Reemplazar por:** Tu dirección real

## 🎨 Cambios de Diseño (10 minutos)

### Cambiar Colores del Tema

Archivo: `src/theme/theme.ts`

```typescript
// COLOR PRIMARIO (Azul marino)
primary: {
  main: '#0A2351', // ← CAMBIAR AQUÍ
}

// COLOR DE ACENTO (Dorado)
accent: {
  main: '#D4AF37', // ← CAMBIAR AQUÍ
}
```

**Colores sugeridos:**
- Azul corporativo: `#1976D2`
- Verde confianza: `#2E7D32`
- Rojo energía: `#C62828`
- Naranja moderno: `#F57C00`

### Cambiar Tipografía

En el mismo archivo `src/theme/theme.ts`:

```typescript
const TYPOGRAPHY = {
  fontFamily: '"Poppins", sans-serif', // ← Fuente del cuerpo
  displayFont: '"Montserrat", sans-serif', // ← Fuente de títulos
}
```

Si cambias las fuentes, también actualiza `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap" rel="stylesheet" />
```

## 📦 Personalizar Productos (15 minutos)

Archivo: `src/data/products.ts`

### Agregar un Nuevo Producto

```typescript
{
  id: 'p013',                          // ID único
  name: 'Filtro de Aceite Premium',   // Nombre del producto
  category: 'Filtros',                 // Categoría
  brand: 'Toyota',                     // Marca del vehículo
  models: ['Corolla', 'Yaris'],        // Modelos compatibles
  years: [2020, 2021, 2022, 2023],    // Años compatibles
  price: 25.00,                        // Precio
  description: 'Descripción del producto',
  image: 'URL_de_imagen',              // URL de imagen
  inStock: true,                       // true = disponible
  featured: false,                     // true = producto destacado
}
```

### Eliminar un Producto

Simplemente elimina el objeto completo del array `products`.

### Cambiar Imágenes

Reemplaza las URLs en el campo `image`:

```typescript
image: 'https://tu-servidor.com/imagen.jpg',
```

**Recomendaciones de imágenes:**
- Tamaño: 400x400px mínimo
- Formato: JPG o WebP
- Peso: Menos de 200KB
- Fondo: Blanco o transparente

## 🗺️ Configurar Google Maps (5 minutos)

Archivo: `src/components/LocationSection.tsx`

### 1. Obtén tus Coordenadas

Ve a Google Maps, haz clic derecho en tu ubicación y copia las coordenadas.

### 2. Actualiza el Código

```typescript
const LOCATION = {
  name: 'Importadora Aguilera',
  address: 'Tu Dirección Real',
  lat: -3.9939,    // ← Tu latitud
  lng: -79.2042,   // ← Tu longitud
  googleMapsUrl: 'https://goo.gl/maps/TU-LINK', // ← Tu link de Maps
};
```

### 3. Obtener Link de Google Maps

1. Ve a Google Maps
2. Busca tu negocio
3. Haz clic en "Compartir"
4. Copia el enlace corto
5. Pégalo en `googleMapsUrl`

## 🌐 Redes Sociales (2 minutos)

Archivo: `src/components/Footer.tsx`

```typescript
socialMedia: {
  facebook: 'https://facebook.com/tu-pagina',     // ← Tu Facebook
  instagram: 'https://instagram.com/tu-cuenta',   // ← Tu Instagram
  whatsapp: 'https://wa.me/593XXXXXXXXX',        // ← Tu WhatsApp
}
```

## 📝 Texto de Misión y Visión (5 minutos)

Archivo: `src/components/MissionVisionSection.tsx`

Busca estas secciones y personaliza el texto:

```typescript
// MISIÓN
<Typography variant="body1">
  Proporcionar a nuestros clientes... // ← Edita aquí tu misión
</Typography>

// VISIÓN
<Typography variant="body1">
  Ser la importadora de repuestos... // ← Edita aquí tu visión
</Typography>
```

## 🏷️ Marcas de Vehículos (5 minutos)

Archivo: `src/data/brands.ts`

### Agregar una Nueva Marca

```typescript
{
  id: 'nueva-marca',
  name: 'Nombre de la Marca',
  description: 'Descripción breve',
}
```

### Eliminar una Marca

Elimina el objeto completo del array `vehicleBrands`.

## ⏰ Horarios de Atención (2 minutos)

Archivo: `src/components/ContactSection.tsx`

```typescript
const CONTACT_INFO = {
  schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM',
  // ↑ Cambia tu horario aquí
};
```

## 📅 Año de Fundación (1 minuto)

Archivo: `src/components/Footer.tsx`

```typescript
const COMPANY_INFO = {
  foundedYear: 1984, // ← Cambia el año de fundación
};
```

## 🔧 Después de Hacer Cambios

1. **Guarda todos los archivos**
2. **Reinicia el servidor de desarrollo:**
   ```bash
   # Detén el servidor (Ctrl + C)
   # Inicia nuevamente
   npm run dev
   ```
3. **Verifica en el navegador**

## ✅ Checklist de Personalización

- [ ] Cambié el número de WhatsApp en todos los archivos
- [ ] Actualicé el email de contacto
- [ ] Actualicé la dirección física
- [ ] Personalicé los colores del tema
- [ ] Agregué/edité productos
- [ ] Configuré Google Maps con mi ubicación
- [ ] Actualicé links de redes sociales
- [ ] Edité la misión y visión
- [ ] Ajusté horarios de atención
- [ ] Verifiqué que todo funciona correctamente

## 🆘 Problemas Comunes

### El sitio no carga después de cambios

```bash
# Limpia el caché y reinstala
rm -rf node_modules
npm install
npm run dev
```

### Las imágenes no se muestran

- Verifica que las URLs sean accesibles
- Prueba abriendo la URL en una nueva pestaña
- Considera usar un servicio de hosting de imágenes

### Los colores no cambian

- Verifica que hayas guardado el archivo `theme.ts`
- Reinicia el servidor de desarrollo
- Limpia el caché del navegador (Ctrl + Shift + R)

## 📞 Necesitas Ayuda?

Si tienes problemas con la personalización:
1. Revisa el README.md principal
2. Verifica la consola del navegador (F12)
3. Asegúrate de que todos los archivos estén guardados

---

**¡Listo!** Con estos cambios tendrás tu landing page 100% personalizada. 🎉
