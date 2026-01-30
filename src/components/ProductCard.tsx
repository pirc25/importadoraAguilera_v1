import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  IconButton,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from 'framer-motion';
import { Product } from '../data/products';
import { colors } from '../theme/theme';

/**
 * TARJETA DE PRODUCTO
 * 
 * Componente para mostrar información de un producto
 */

interface ProductCardProps {
  product: Product;
  index: number;
}

const WHATSAPP_NUMBER = '0987654321'; // Cambiar por el número real

const ProductCard = ({ product, index }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `Hola, me interesa el producto: ${product.name} - ${product.brand} (${product.models.join(', ')})`;
    window.open(
      `https://wa.me/593${WHATSAPP_NUMBER.substring(1)}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(10, 35, 81, 0.2)',
          '& .product-image': {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      {/* Badge destacado */}
      {product.featured && (
        <Chip
          label="Destacado"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            zIndex: 2,
            bgcolor: colors.accent.main,
            color: colors.primary.main,
            fontWeight: 700,
            fontSize: '0.75rem',
          }}
        />
      )}

      {/* Badge de stock */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          bgcolor: product.inStock ? 'success.main' : 'error.main',
          color: 'white',
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          fontSize: '0.75rem',
          fontWeight: 600,
        }}
      >
        {product.inStock ? (
          <>
            <CheckCircleIcon sx={{ fontSize: 14 }} />
            En Stock
          </>
        ) : (
          <>
            <CancelIcon sx={{ fontSize: 14 }} />
            Agotado
          </>
        )}
      </Box>

      {/* Imagen */}
      <Box
        sx={{
          overflow: 'hidden',
          bgcolor: '#f5f5f5',
          height: { xs: 180, sm: 200, md: 220 },
          position: 'relative',
        }}
      >
        <CardMedia
          className="product-image"
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />
      </Box>

      {/* Contenido */}
      <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 2.5, md: 3 } }}>
        {/* Categoría */}
        <Chip
          label={product.category}
          size="small"
          variant="outlined"
          sx={{
            mb: 1.5,
            borderColor: 'primary.main',
            color: 'primary.main',
            fontWeight: 600,
            fontSize: { xs: '0.65rem', sm: '0.7rem' },
          }}
        />

        {/* Nombre */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: 'primary.main',
            lineHeight: 1.3,
            minHeight: { xs: 40, sm: 50 },
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
          }}
        >
          {product.name}
        </Typography>

        {/* Marca */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
            Marca:
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            {product.brand}
          </Typography>
        </Box>

        {/* Modelos */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
            mb: 1.5,
          }}
        >
          {product.models.slice(0, 3).map((model, idx) => (
            <Chip
              key={idx}
              label={model}
              size="small"
              sx={{
                bgcolor: 'background.paper',
                fontSize: '0.7rem',
                height: 24,
              }}
            />
          ))}
          {product.models.length > 3 && (
            <Chip
              label={`+${product.models.length - 3}`}
              size="small"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontSize: '0.7rem',
                height: 24,
              }}
            />
          )}
        </Box>

        {/* Descripción */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </Typography>

        {/* Precio y acciones */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: { xs: 2, sm: 0 },
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              Precio desde
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              }}
            >
              ${product.price.toFixed(2)}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', sm: 'flex-end' } }}>
            <IconButton
              size="small"
              sx={{
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>

            {product.inStock && (
              <Button
                variant="contained"
                size="small"
                startIcon={<WhatsAppIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />}
                onClick={handleWhatsAppClick}
                sx={{
                  bgcolor: '#25D366',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  px: { xs: 2, sm: 2.5 },
                  '&:hover': {
                    bgcolor: '#20BA5A',
                  },
                }}
              >
                Consultar
              </Button>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
