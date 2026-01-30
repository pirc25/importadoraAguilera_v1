import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { colors } from '../theme/theme';

/**
 * MISIÓN Y VISIÓN
 * 
 * Sección institucional que presenta la identidad y valores de la empresa
 */

const MissionVisionSection = () => {
  const values = [
    {
      icon: <FamilyRestroomIcon sx={{ fontSize: 40 }} />,
      title: 'Empresa Familiar',
      description: 'Tradición y valores que nos distinguen desde 1984',
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />,
      title: 'Calidad Garantizada',
      description: 'Solo trabajamos con repuestos certificados y de primera calidad',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
      title: 'Confianza Total',
      description: 'Más de 40 años construyendo relaciones duraderas con nuestros clientes',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Mejora Continua',
      description: 'Constantemente actualizando nuestro inventario y servicios',
    },
  ];

  return (
    <Box
      id="mision"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Patrón decorativo */}
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
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: 'white',
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
            }}
          >
            Nuestra Identidad
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Más de cuatro décadas sirviendo a Loja con compromiso, calidad y pasión por
            el servicio automotriz
          </Typography>
        </Box>

        {/* Misión y Visión */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Misión */}
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              elevation={0}
              sx={{
                height: '100%',
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: { xs: 60, md: 70 },
                  height: { xs: 60, md: 70 },
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  color: 'white',
                  mb: { xs: 2, md: 3 },
                }}
              >
                <TrackChangesIcon sx={{ fontSize: { xs: 30, md: 36 } }} />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                }}
              >
                Nuestra Misión
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                }}
              >
                Proporcionar a nuestros clientes repuestos automotrices de la más alta
                calidad, respaldados por un servicio excepcional y asesoramiento experto.
                Nos comprometemos a mantener la tradición familiar de honestidad,
                confiabilidad y excelencia que nos ha caracterizado durante más de 40 años
                en Loja, garantizando la satisfacción total de cada cliente que confía en
                nosotros para el cuidado de sus vehículos.
              </Typography>
            </Paper>
          </Grid>

          {/* Visión */}
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              elevation={0}
              sx={{
                height: '100%',
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: { xs: 60, md: 70 },
                  height: { xs: 60, md: 70 },
                  borderRadius: '50%',
                  bgcolor: colors.accent.main,
                  color: colors.primary.main,
                  mb: { xs: 2, md: 3 },
                }}
              >
                <VisibilityIcon sx={{ fontSize: { xs: 30, md: 36 } }} />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                }}
              >
                Nuestra Visión
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                }}
              >
                Ser la importadora de repuestos automotrices líder y más confiable en
                Loja y la región sur del Ecuador, reconocida por nuestra integridad,
                calidad de productos y servicio al cliente excepcional. Aspiramos a seguir
                creciendo como empresa familiar, manteniendo nuestros valores
                fundamentales mientras adoptamos las mejores prácticas y tecnologías del
                sector automotriz para servir mejor a las futuras generaciones de
                conductores.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Valores */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: 'white',
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
            }}
          >
            Nuestros Valores
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    textAlign: 'center',
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 70, md: 80 },
                      height: { xs: 70, md: 80 },
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      mb: { xs: 2, md: 3 },
                    }}
                  >
                    {value.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 2,
                      fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    }}
                  >
                    {value.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: { xs: '0.85rem', sm: '0.875rem' },
                    }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Estadística destacada */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{
            mt: 8,
            p: { xs: 4, sm: 5, md: 6 },
            bgcolor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              color: colors.accent.main,
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              mb: 2,
              textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
            }}
          >
            40+
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
            }}
          >
            Años de Trayectoria
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
            }}
          >
            Desde 1984 sirviendo con excelencia a la comunidad de Loja
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MissionVisionSection;
