import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { motion } from 'framer-motion';

/**
 * HEADER / NAVBAR
 * 
 * Navegación principal con menú responsive
 */

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Productos', href: '#productos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Nosotros', href: '#mision' },
  { label: 'Contacto', href: '#contacto' },
];

const WHATSAPP_NUMBER = '0987654321'; // Cambiar por el número real

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/593${WHATSAPP_NUMBER.substring(1)}`, '_blank');
  };

  // Drawer para móvil
  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'primary.main' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DirectionsCarIcon sx={{ color: 'white', fontSize: 32 }} />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
            Aguilera
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ pt: 3 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 3, mt: 'auto' }}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsAppClick}
          sx={{
            bgcolor: '#25D366',
            color: 'white',
            '&:hover': {
              bgcolor: '#20BA5A',
            },
          }}
        >
          WhatsApp
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          bgcolor: 'rgba(10, 35, 81, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                flexGrow: isMobile ? 1 : 0,
              }}
              onClick={() => handleNavClick('#hero')}
            >
              <DirectionsCarIcon sx={{ fontSize: 36, color: 'secondary.main' }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: 'white',
                    lineHeight: 1,
                    letterSpacing: '0.5px',
                  }}
                >
                  IMPORTADORA AGUILERA
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.7rem',
                    letterSpacing: '1px',
                  }}
                >
                  Más de 40 años de confianza
                </Typography>
              </Box>
            </Box>

            {/* Menú Desktop */}
            {!isMobile && (
              <>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 1 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        color: 'white',
                        px: 2,
                        py: 1,
                        fontWeight: 500,
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.1)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  onClick={handleWhatsAppClick}
                  sx={{
                    bgcolor: '#25D366',
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#20BA5A',
                    },
                  }}
                >
                  WhatsApp
                </Button>
              </>
            )}

            {/* Botón menú móvil */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejor rendimiento en móvil
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
