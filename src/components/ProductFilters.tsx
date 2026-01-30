import { useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
  SelectChangeEvent,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

/**
 * FILTROS DE PRODUCTOS
 * 
 * Componente reutilizable para filtrar productos por múltiples criterios
 */

export interface ProductFilters {
  search: string;
  brand: string;
  model: string;
  year: string;
  category: string;
}

interface ProductFiltersProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  brands: string[];
  models: string[];
  years: number[];
  categories: string[];
}

const ProductFiltersComponent = ({
  filters,
  onFiltersChange,
  brands,
  models,
  years,
  categories,
}: ProductFiltersProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showFilters, setShowFilters] = useState(true);

  const handleFilterChange = (field: keyof ProductFilters, value: string) => {
    onFiltersChange({
      ...filters,
      [field]: value,
    });
  };

  const handleSelectChange = (field: keyof ProductFilters) => (event: SelectChangeEvent) => {
    handleFilterChange(field, event.target.value);
  };

  const handleClearFilters = () => {
    onFiltersChange({
      search: '',
      brand: '',
      model: '',
      year: '',
      category: '',
    });
  };

  const activeFiltersCount = Object.values(filters).filter((v) => v !== '').length;

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      elevation={3}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      }}
    >
      {/* Header de filtros */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: showFilters ? 3 : 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterListIcon color="primary" />
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'primary.main',
                }}
              >
                Filtros
              </Box>
              {activeFiltersCount > 0 && (
                <Chip
                  label={activeFiltersCount}
                  size="small"
                  color="primary"
                  sx={{ height: 20, fontSize: '0.75rem' }}
                />
              )}
            </Box>
            {!isMobile && (
              <Box sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                Encuentra el repuesto perfecto para tu vehículo
              </Box>
            )}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          {activeFiltersCount > 0 && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<ClearIcon />}
              onClick={handleClearFilters}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Limpiar
            </Button>
          )}
          <Button
            variant="text"
            size="small"
            onClick={() => setShowFilters(!showFilters)}
            sx={{ display: { md: 'none' } }}
          >
            {showFilters ? 'Ocultar' : 'Mostrar'}
          </Button>
        </Box>
      </Box>

      {/* Filtros */}
      {showFilters && (
        <Grid container spacing={2}>
          {/* Búsqueda por texto */}
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              placeholder="Buscar por nombre o descripción..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'white',
                },
              }}
            />
          </Grid>

          {/* Marca */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Marca del Vehículo</InputLabel>
              <Select
                value={filters.brand}
                label="Marca del Vehículo"
                onChange={handleSelectChange('brand')}
                sx={{ bgcolor: 'white' }}
              >
                <MenuItem value="">Todas las marcas</MenuItem>
                {brands.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Modelo */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Modelo</InputLabel>
              <Select
                value={filters.model}
                label="Modelo"
                onChange={handleSelectChange('model')}
                disabled={!filters.brand}
                sx={{ bgcolor: 'white' }}
              >
                <MenuItem value="">Todos los modelos</MenuItem>
                {models.map((model) => (
                  <MenuItem key={model} value={model}>
                    {model}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Año */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Año</InputLabel>
              <Select
                value={filters.year}
                label="Año"
                onChange={handleSelectChange('year')}
                sx={{ bgcolor: 'white' }}
              >
                <MenuItem value="">Todos los años</MenuItem>
                {years.map((year) => (
                  <MenuItem key={year} value={year.toString()}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Categoría */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Tipo de Repuesto</InputLabel>
              <Select
                value={filters.category}
                label="Tipo de Repuesto"
                onChange={handleSelectChange('category')}
                sx={{ bgcolor: 'white' }}
              >
                <MenuItem value="">Todas las categorías</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Botón limpiar en móvil */}
          {activeFiltersCount > 0 && (
            <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ClearIcon />}
                onClick={handleClearFilters}
              >
                Limpiar Filtros
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    </Paper>
  );
};

export default ProductFiltersComponent;
