import { ThemeProvider, CssBaseline, Box, Fab, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import theme from './theme/theme';

// Componentes
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import BrandsSection from './components/BrandsSection';
import MissionVisionSection from './components/MissionVisionSection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

/**
 * COMPONENTE PRINCIPAL
 * 
 * Landing page completa de Importadora Aguilera
 */

const WHATSAPP_NUMBER = '0987654321'; // Cambiar por el número real

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detectar scroll para mostrar botón "volver arriba"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = 'Hola, me gustaría obtener información sobre sus repuestos';
    window.open(
      `https://wa.me/593${WHATSAPP_NUMBER.substring(1)}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header/Navbar */}
        <Header />

        {/* Main content */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* Hero Section */}
          <HeroSection />

          {/* Catálogo de Productos */}
          <ProductCatalog />

          {/* Marcas */}
          <BrandsSection />

          {/* Misión y Visión */}
          <MissionVisionSection />

          {/* Contacto */}
          <ContactSection />

          {/* Ubicación */}
          <LocationSection />
        </Box>

        {/* Footer */}
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <Fab
          color="primary"
          aria-label="whatsapp"
          onClick={handleWhatsApp}
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            bgcolor: '#25D366',
            color: 'white',
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            zIndex: 1000,
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              bgcolor: '#20BA5A',
              transform: 'scale(1.1)',
              boxShadow: '0 12px 32px rgba(37, 211, 102, 0.5)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              },
              '50%': {
                boxShadow: '0 8px 32px rgba(37, 211, 102, 0.6)',
              },
              '100%': {
                boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>

        {/* Botón volver arriba */}
        <Zoom in={showScrollTop}>
          <Fab
            size="medium"
            aria-label="scroll back to top"
            onClick={handleScrollTop}
            sx={{
              position: 'fixed',
              bottom: { xs: 80, md: 96 },
              right: { xs: 16, md: 24 },
              bgcolor: 'primary.main',
              color: 'white',
              zIndex: 999,
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-4px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Box>
    </ThemeProvider>
  );
}

export default App;
