import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { colors } from '../theme/theme';

/**
 * FOOTER
 * 
 * Pie de página con información de contacto, enlaces y redes sociales
 */

const COMPANY_INFO = {
  name: 'Importadora Aguilera',
  slogan: 'Nada más, que lo mejor!',
  foundedYear: 1984,
  phone: '0987654321',
  email: 'contacto@importadoraaguilera.com',
  address: 'Av. Principal 123, Loja - Ecuador',
  socialMedia: {
    facebook: 'https://facebook.com', // Cambiar por el link real
    instagram: 'https://instagram.com', // Cambiar por el link real
    whatsapp: 'https://wa.me/593987654321', // Cambiar por el link real
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - COMPANY_INFO.foundedYear;

  const quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Productos', href: '#productos' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Nosotros', href: '#mision' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        pt: { xs: 6, sm: 7, md: 8 },
        pb: 4,
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
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Columna 1: Información de la empresa */}
          <Grid item xs={12} md={4}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <DirectionsCarIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: '0.5px',
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {COMPANY_INFO.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontStyle: 'italic',
                      color: colors.accent.main,
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' },
                    }}
                  >
                    "{COMPANY_INFO.slogan}"
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  mb: 3,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: { xs: '0.85rem', sm: '0.875rem' },
                }}
              >
                Empresa familiar con más de {yearsInBusiness} años de experiencia
                brindando repuestos automotrices de calidad en Loja, Ecuador.
              </Typography>

              {/* Redes sociales */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  href={COMPANY_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  href={COMPANY_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  href={COMPANY_INFO.socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: '#25D366',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#20BA5A',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Columna 2: Enlaces rápidos */}
          <Grid item xs={12} sm={6} md={2}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: colors.accent.main,
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                }}
              >
                Enlaces Rápidos
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link) => (
                  <Typography
                    key={link.label}
                    variant="body2"
                    onClick={() => handleLinkClick(link.href)}
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'white',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    → {link.label}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Columna 3: Servicios */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: colors.accent.main,
                }}
              >
                Nuestros Servicios
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  'Repuestos Originales',
                  'Repuestos Alternativos',
                  'Asesoría Técnica',
                  'Garantía de Calidad',
                  'Delivery en Loja',
                ].map((service) => (
                  <Typography
                    key={service}
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    • {service}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Columna 4: Contacto */}
          <Grid item xs={12} md={3}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: colors.accent.main,
                }}
              >
                Contacto
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'start' }}>
                  <PhoneIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Teléfono
                    </Typography>
                    <Typography variant="body2">{COMPANY_INFO.phone}</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'start' }}>
                  <EmailIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                      {COMPANY_INFO.email}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'start' }}>
                  <LocationOnIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Dirección
                    </Typography>
                    <Typography variant="body2">{COMPANY_INFO.address}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.5)',
              display: 'block',
              mt: 1,
            }}
          >
            Sirviendo con excelencia desde {COMPANY_INFO.foundedYear} • {yearsInBusiness}{' '}
            años de trayectoria
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
