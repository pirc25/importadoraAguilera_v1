/**
 * DATOS MOCK DE PRODUCTOS
 * 
 * Este archivo contiene el catálogo de productos.
 * En producción, estos datos vendrían de una API o base de datos.
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  models: string[];
  years: number[];
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  // FRENOS Y SUSPENSIÓN
  {
    id: 'p001',
    name: 'Pastillas de Freno Delanteras',
    category: 'Frenos',
    brand: 'Toyota',
    models: ['Corolla', 'Hilux', 'RAV4'],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    price: 45.00,
    description: 'Pastillas de freno de alta calidad, material cerámico para mejor frenado',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
    inStock: true,
    featured: true,
  },
  {
    id: 'p002',
    name: 'Amortiguadores Traseros',
    category: 'Suspensión',
    brand: 'Chevrolet',
    models: ['Spark', 'Sail', 'Aveo'],
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    price: 85.00,
    description: 'Amortiguadores de gas, tecnología europea para máximo confort',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400',
    inStock: true,
    featured: true,
  },
  {
    id: 'p003',
    name: 'Discos de Freno',
    category: 'Frenos',
    brand: 'Nissan',
    models: ['Sentra', 'Versa', 'X-Trail'],
    years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    price: 65.00,
    description: 'Discos ventilados con tratamiento anticorrosivo',
    image: 'https://images.unsplash.com/photo-1625047509204-9d15eb5eb2c7?w=400',
    inStock: true,
  },

  // MOTOR Y TRANSMISIÓN
  {
    id: 'p004',
    name: 'Filtro de Aceite',
    category: 'Motor',
    brand: 'Toyota',
    models: ['Corolla', 'Yaris', 'Hilux', 'Fortuner'],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    price: 12.00,
    description: 'Filtro de aceite original, alta eficiencia de filtración',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
    inStock: true,
    featured: true,
  },
  {
    id: 'p005',
    name: 'Bujías de Encendido',
    category: 'Motor',
    brand: 'Mazda',
    models: ['Mazda 3', 'Mazda 2', 'CX-5'],
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    price: 18.00,
    description: 'Bujías de platino, máximo rendimiento y durabilidad',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400',
    inStock: true,
  },
  {
    id: 'p006',
    name: 'Kit de Embrague Completo',
    category: 'Transmisión',
    brand: 'Hyundai',
    models: ['Accent', 'Elantra', 'Tucson'],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    price: 320.00,
    description: 'Kit completo: disco, plato y collarin, garantía de 1 año',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400',
    inStock: true,
  },

  // SISTEMA ELÉCTRICO
  {
    id: 'p007',
    name: 'Batería 12V 60Ah',
    category: 'Eléctrico',
    brand: 'Chevrolet',
    models: ['Spark', 'Sail', 'Cruze', 'Aveo'],
    years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    price: 95.00,
    description: 'Batería libre de mantenimiento, 2 años de garantía',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400',
    inStock: true,
    featured: true,
  },
  {
    id: 'p008',
    name: 'Alternador',
    category: 'Eléctrico',
    brand: 'Kia',
    models: ['Rio', 'Sportage', 'Sorento'],
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    price: 180.00,
    description: 'Alternador remanufacturado, calidad OEM',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400',
    inStock: true,
  },

  // FILTROS Y MANTENIMIENTO
  {
    id: 'p009',
    name: 'Filtro de Aire',
    category: 'Filtros',
    brand: 'Toyota',
    models: ['Corolla', 'Yaris', 'RAV4'],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    price: 15.00,
    description: 'Filtro de aire de alto flujo, mejor rendimiento del motor',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400',
    inStock: true,
  },
  {
    id: 'p010',
    name: 'Filtro de Combustible',
    category: 'Filtros',
    brand: 'Nissan',
    models: ['Sentra', 'Versa', 'March'],
    years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    price: 22.00,
    description: 'Filtro separador de agua, protección total del sistema',
    image: 'https://images.unsplash.com/photo-1598946114320-eaec06feeded?w=400',
    inStock: true,
  },

  // ILUMINACIÓN
  {
    id: 'p011',
    name: 'Focos LED H4',
    category: 'Iluminación',
    brand: 'Universal',
    models: ['Múltiples modelos'],
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    price: 35.00,
    description: 'Focos LED de alta luminosidad, luz blanca 6000K',
    image: 'https://images.unsplash.com/photo-1621277224630-81d9af65e40e?w=400',
    inStock: true,
  },
  {
    id: 'p012',
    name: 'Faro Delantero Derecho',
    category: 'Iluminación',
    brand: 'Chevrolet',
    models: ['Spark'],
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    price: 125.00,
    description: 'Faro original, incluye regulador eléctrico',
    image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=400',
    inStock: false,
  },
];

// Obtener valores únicos para filtros
export const getUniqueBrands = (): string[] => {
  return Array.from(new Set(products.map(p => p.brand))).sort();
};

export const getUniqueCategories = (): string[] => {
  return Array.from(new Set(products.map(p => p.category))).sort();
};

export const getUniqueModels = (): string[] => {
  const allModels = products.flatMap(p => p.models);
  return Array.from(new Set(allModels)).sort();
};

export const getYearRange = (): number[] => {
  const allYears = products.flatMap(p => p.years);
  const uniqueYears = Array.from(new Set(allYears)).sort((a, b) => b - a);
  return uniqueYears;
};
