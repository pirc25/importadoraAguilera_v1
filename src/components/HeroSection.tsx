import { Box, Container, Typography, Button, Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import { motion } from 'framer-motion';
import { colors } from '../theme/theme';

/**
 * HERO SECTION
 * 
 * Sección principal con mensaje impactante y llamado a la acción
 */

const WHATSAPP_NUMBER = '0987654321'; // Cambiar por el número real

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = 'Hola, me gustaría obtener información sobre sus repuestos automotrices';
    window.open(
      `https://wa.me/593${WHATSAPP_NUMBER.substring(1)}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const handleCallClick = () => {
    window.location.href = `tel:${WHATSAPP_NUMBER}`;
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: 'calc(100vh - 80px)', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 50%, ${colors.primary.main} 100%)`,
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 },
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
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Círculos decorativos animados */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
          top: '-10%',
          right: '-5%',
          filter: 'blur(40px)',
        }}
      />

      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          bottom: '-5%',
          left: '-5%',
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge de confianza */}
              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  bgcolor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.75, md: 1 },
                  borderRadius: 50,
                  mb: { xs: 2, md: 3 },
                }}
              >
                <VerifiedIcon sx={{ color: colors.accent.main, fontSize: { xs: 18, md: 20 } }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  Más de 40 años de confianza en Loja
                </Typography>
              </Box>

              {/* Título principal */}
              <Typography
                component={motion.h1}
                variants={itemVariants}
                variant="h1"
                sx={{
                  color: 'white',
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                IMPORTADORA
                <br />
                AGUILERA
              </Typography>

              {/* Eslogan */}
              <Typography
                component={motion.p}
                variants={itemVariants}
                variant="h4"
                sx={{
                  color: colors.accent.main,
                  mb: { xs: 2, md: 3 },
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
                  fontStyle: 'italic',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                }}
              >
                "Nada más, que lo mejor!"
              </Typography>

              {/* Descripción */}
              <Typography
                component={motion.p}
                variants={itemVariants}
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: { xs: 3, md: 4 },
                  maxWidth: 600,
                  lineHeight: 1.7,
                  fontWeight: 400,
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
                }}
              >
                Repuestos automotrices de calidad garantizada para tu vehículo.
                Empresa familiar que te ofrece confianza, experiencia y el mejor
                servicio en Loja – Ecuador.
              </Typography>

              {/* Botones de acción */}
              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  onClick={handleWhatsAppClick}
                  sx={{
                    bgcolor: '#25D366',
                    color: 'white',
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 700,
                    borderRadius: 2,
                    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                    flex: { xs: '1', sm: 'auto' },
                    '&:hover': {
                      bgcolor: '#20BA5A',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 32px rgba(37, 211, 102, 0.5)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contactar WhatsApp
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  onClick={handleCallClick}
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.5)',
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    borderRadius: 2,
                    borderWidth: 2,
                    flex: { xs: '1', sm: 'auto' },
                    '&:hover': {
                      borderColor: 'white',
                      borderWidth: 2,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Llamar Ahora
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Imagen/gráfico decorativo */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component={motion.div}
              animate={floatingAnimation}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Círculo de fondo */}
              <Box
                sx={{
                  width: 350,
                  height: 350,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                {/* Iconos decorativos */}
                <Typography
                  sx={{
                    fontSize: '120px',
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  🚗
                </Typography>

                {/* Badges flotantes */}
                <Box
                  component={motion.div}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    bgcolor: colors.accent.main,
                    color: colors.primary.main,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
                  }}
                >
                  40+ años
                </Box>

                <Box
                  component={motion.div}
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    bgcolor: 'white',
                    color: colors.primary.main,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(255,255,255,0.3)',
                  }}
                >
                  Calidad garantizada
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
