import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { vehicleBrands } from '../data/brands';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VerifiedIcon from '@mui/icons-material/Verified';

/**
 * MARCAS DE VEHÍCULOS
 * 
 * Sección que muestra las marcas con las que trabaja la empresa
 */

const BrandsSection = () => {
  return (
    <Box
      id="marcas"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Patrón de fondo decorativo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230A2351' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
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
            <DirectionsCarIcon />
            <Typography variant="body2" sx={{ fontWeight: 600, letterSpacing: '1px' }}>
              MARCAS AUTORIZADAS
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
            Trabajamos con las Mejores Marcas
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
            }}
          >
            Repuestos originales y de calidad garantizada para todas las marcas de
            vehículos más populares del mercado.
          </Typography>
        </Box>

        {/* Grid de marcas */}
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {vehicleBrands.map((brand, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={brand.id}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 12px 40px rgba(10, 35, 81, 0.15)',
                }}
                elevation={2}
                sx={{
                  height: '100%',
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: { xs: 120, sm: 140, md: 160 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    '& .brand-icon': {
                      transform: 'scale(1.1)',
                      color: 'primary.main',
                    },
                    '& .verified-icon': {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Icono de verificación */}
                <VerifiedIcon
                  className="verified-icon"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    fontSize: { xs: 16, md: 18 },
                    color: 'success.main',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Icono de marca */}
                <Box
                  sx={{
                    mb: { xs: 1, sm: 1.5, md: 2 },
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <DirectionsCarIcon
                    className="brand-icon"
                    sx={{
                      fontSize: { xs: 36, sm: 42, md: 50 },
                      color: 'text.secondary',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Box>

                {/* Nombre de marca */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 0.5,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                  }}
                >
                  {brand.name}
                </Typography>

                {/* Descripción */}
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    display: { xs: 'none', sm: 'block' },
                    lineHeight: 1.5,
                    fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
                  }}
                >
                  {brand.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Nota adicional */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{
            mt: 8,
            p: 4,
            bgcolor: 'primary.main',
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 1,
            }}
          >
            ¿No encuentras tu marca?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Contamos con repuestos para muchas otras marcas. Contáctanos y te ayudaremos
            a encontrar exactamente lo que necesitas.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BrandsSection;
