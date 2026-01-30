/**
 * MARCAS DE VEHÍCULOS
 * 
 * Marcas de vehículos con las que trabaja Importadora Aguilera
 */

export interface VehicleBrand {
  id: string;
  name: string;
  logo?: string;
  description: string;
}

export const vehicleBrands: VehicleBrand[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    description: 'Repuestos originales y alternativos para todos los modelos Toyota',
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    description: 'Amplio stock de repuestos para vehículos Chevrolet',
  },
  {
    id: 'nissan',
    name: 'Nissan',
    description: 'Partes y accesorios de calidad para Nissan',
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    description: 'Repuestos certificados para la línea Hyundai',
  },
  {
    id: 'kia',
    name: 'Kia',
    description: 'Componentes originales y compatibles para Kia',
  },
  {
    id: 'mazda',
    name: 'Mazda',
    description: 'Repuestos de alta calidad para vehículos Mazda',
  },
  {
    id: 'ford',
    name: 'Ford',
    description: 'Piezas y accesorios para toda la línea Ford',
  },
  {
    id: 'renault',
    name: 'Renault',
    description: 'Stock permanente de repuestos Renault',
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    description: 'Repuestos alemanes para Volkswagen',
  },
  {
    id: 'honda',
    name: 'Honda',
    description: 'Componentes de calidad para Honda',
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    description: 'Repuestos para vehículos Suzuki',
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    description: 'Partes originales y compatibles Mitsubishi',
  },
];
