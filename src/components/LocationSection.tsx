import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';

/**
 * SECCIÓN DE UBICACIÓN
 * 
 * Mapa de Google Maps mostrando la ubicación del negocio
 */

const LOCATION = {
  name: 'Importadora Aguilera',
  address: 'Loja, Ecuador',
  // Coordenadas de ejemplo para Loja, Ecuador - Cambiar por las coordenadas reales
  lat: -3.9939,
  lng: -79.2042,
  googleMapsUrl: 'https://goo.gl/maps/example', // Cambiar por el link real
};

const LocationSection = () => {
  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}`,
      '_blank'
    );
  };

  const handleViewOnMaps = () => {
    window.open(LOCATION.googleMapsUrl, '_blank');
  };

  // URL del embed de Google Maps
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127537.89!2d${LOCATION.lng}!3d${LOCATION.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTknMzguMCJTIDc5wrAxMicxNS4xIlc!5e0!3m2!1ses!2sec!4v1234567890`;

  return (
    <Box
      id="ubicacion"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
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
            <LocationOnIcon />
            <Typography variant="body2" sx={{ fontWeight: 600, letterSpacing: '1px' }}>
              ENCUÉNTRANOS
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
            Nuestra Ubicación
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
            Visítanos en nuestro local en Loja. Estamos para atenderte con el mejor
            servicio.
          </Typography>
        </Box>

        {/* Mapa y detalles */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={4}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Mapa */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 400, md: 500 },
                overflow: 'hidden',
              }}
            >
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Importadora Aguilera"
              />
            </Box>

            {/* Tarjeta de información superpuesta */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 20, md: 40 },
                left: { xs: 20, md: 40 },
                right: { xs: 20, md: 'auto' },
                maxWidth: { xs: 'auto', md: 380 },
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'start', gap: { xs: 1.5, sm: 2 }, mb: { xs: 2, sm: 3 } }}>
                  <Box
                    sx={{
                      width: { xs: 44, sm: 50 },
                      height: { xs: 44, sm: 50 },
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 0.5,
                        fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                      }}
                    >
                      {LOCATION.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                      {LOCATION.address}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<DirectionsIcon />}
                    onClick={handleGetDirections}
                    sx={{
                      py: { xs: 1.25, sm: 1.5 },
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                  >
                    Cómo Llegar
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<LocationOnIcon />}
                    onClick={handleViewOnMaps}
                    sx={{
                      py: { xs: 1.25, sm: 1.5 },
                      fontWeight: 600,
                      borderWidth: 2,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      '&:hover': {
                        borderWidth: 2,
                      },
                    }}
                  >
                    Ver en Google Maps
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Paper>
        </Box>

        {/* Información adicional */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{
            mt: 4,
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
            ¿Necesitas Ayuda para Encontrarnos?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            No dudes en contactarnos. Estaremos encantados de ayudarte con indicaciones o
            cualquier consulta que tengas.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationSection;
