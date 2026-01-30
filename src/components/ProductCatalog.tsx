import { useState, useMemo } from 'react';
import { Box, Container, Typography, Grid, Alert, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ProductFiltersComponent, { ProductFilters } from './ProductFilters';
import ProductCard from './ProductCard';
import {
  products,
  getUniqueBrands,
  getUniqueCategories,
  getUniqueModels,
  getYearRange,
} from '../data/products';
import InventoryIcon from '@mui/icons-material/Inventory';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

/**
 * CATÁLOGO DE PRODUCTOS
 * 
 * Sección con lista filtrable de repuestos
 */

const ProductCatalog = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    brand: '',
    model: '',
    year: '',
    category: '',
  });

  const [visibleCount, setVisibleCount] = useState(9);

  // Datos para los filtros
  const brands = useMemo(() => getUniqueBrands(), []);
  const categories = useMemo(() => getUniqueCategories(), []);
  const models = useMemo(() => getUniqueModels(), []);
  const years = useMemo(() => getYearRange(), []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Búsqueda por texto
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Filtro por marca
      if (filters.brand && product.brand !== filters.brand) {
        return false;
      }

      // Filtro por modelo
      if (filters.model && !product.models.includes(filters.model)) {
        return false;
      }

      // Filtro por año
      if (filters.year && !product.years.includes(parseInt(filters.year))) {
        return false;
      }

      // Filtro por categoría
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      brand: '',
      model: '',
      year: '',
      category: '',
    });
  };

  return (
    <Box
      id="productos"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: 'primary.main',
              color: 'white',
              px: 3,
              py: 1,
              borderRadius: 50,
              mb: 2,
            }}
          >
            <InventoryIcon />
            <Typography variant="body2" sx={{ fontWeight: 600, letterSpacing: '1px' }}>
              NUESTRO CATÁLOGO
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
            }}
          >
            Repuestos de Calidad
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Encuentra el repuesto perfecto para tu vehículo. Trabajamos con las mejores
            marcas y garantizamos la calidad de todos nuestros productos.
          </Typography>
        </Box>

        {/* Filtros */}
        <ProductFiltersComponent
          filters={filters}
          onFiltersChange={setFilters}
          brands={brands}
          models={models}
          years={years}
          categories={categories}
        />

        {/* Resultados */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Mostrando {visibleProducts.length} de {filteredProducts.length} productos
          </Typography>
        </Box>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <>
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {visibleProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={product.id}>
                  <ProductCard product={product} index={index} />
                </Grid>
              ))}
            </Grid>

            {/* Botón cargar más */}
            {hasMore && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 6,
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleLoadMore}
                  sx={{
                    px: 6,
                    py: 2,
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Ver Más Productos ({filteredProducts.length - visibleCount} restantes)
                </Button>
              </Box>
            )}
          </>
        ) : (
          // Sin resultados
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Alert
              severity="info"
              sx={{
                borderRadius: 3,
                py: 4,
                '& .MuiAlert-message': {
                  width: '100%',
                },
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  No se encontraron productos
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  No hay productos que coincidan con los filtros seleccionados.
                  Intenta ajustar los criterios de búsqueda.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<RestartAltIcon />}
                  onClick={handleResetFilters}
                >
                  Limpiar Filtros
                </Button>
              </Box>
            </Alert>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProductCatalog;
