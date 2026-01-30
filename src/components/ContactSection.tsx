import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';
import {
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
  generateWhatsAppUrl,
} from '../utils/validation';

/**
 * SECCIÓN DE CONTACTO
 * 
 * Formulario de contacto con validación y métodos alternativos
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const CONTACT_INFO = {
  phone: '0987654321', // Cambiar por el número real
  email: 'contacto@importadoraaguilera.com', // Cambiar por el email real
  address: 'Av. Principal 123, Loja - Ecuador',
  schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM',
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
    // Limpiar error del campo al escribir
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const nameValidation = validateName(formData.name);
    if (!nameValidation.isValid) {
      newErrors.name = nameValidation.error;
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error;
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.error;
    }

    const messageValidation = validateMessage(formData.message);
    if (!messageValidation.isValid) {
      newErrors.message = messageValidation.error;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      // Enviar por WhatsApp
      const message = `Hola, soy ${formData.name}.

Email: ${formData.email}
Teléfono: ${formData.phone}

Mensaje:
${formData.message}`;

      const whatsappUrl = generateWhatsAppUrl(CONTACT_INFO.phone, message);
      window.open(whatsappUrl, '_blank');

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setShowSuccess(true);
    }
  };

  const handleWhatsAppDirect = () => {
    window.open(generateWhatsAppUrl(CONTACT_INFO.phone), '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}`;
  };

  const contactMethods = [
    {
      icon: <WhatsAppIcon sx={{ fontSize: 32 }} />,
      title: 'WhatsApp',
      value: CONTACT_INFO.phone,
      action: handleWhatsAppDirect,
      color: '#25D366',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: 'Teléfono',
      value: CONTACT_INFO.phone,
      action: handleCall,
      color: '#0A2351',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: 'Email',
      value: CONTACT_INFO.email,
      action: handleEmail,
      color: '#0A2351',
    },
  ];

  return (
    <Box
      id="contacto"
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
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
            }}
          >
            Contáctanos
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
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes
            posible.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Formulario */}
          <Grid item xs={12} md={7}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              elevation={3}
              sx={{
                p: { xs: 3, sm: 3.5, md: 4 },
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                Envíanos un Mensaje
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre Completo"
                      value={formData.name}
                      onChange={handleChange('name')}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      placeholder="0987654321"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      error={!!errors.phone}
                      helperText={errors.phone || 'Formato: 09XXXXXXXX'}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange('message')}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 700,
                      }}
                    >
                      Enviar por WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Métodos de contacto */}
              {contactMethods.map((method, index) => (
                <Paper
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  elevation={2}
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(10, 35, 81, 0.15)',
                    },
                  }}
                  onClick={method.action}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 } }}>
                    <Box
                      sx={{
                        width: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        borderRadius: '50%',
                        bgcolor: method.color,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {method.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {method.title}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' } }}>
                        {method.value}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}

              {/* Ubicación */}
              <Paper
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                elevation={2}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 3,
                }}
              >
                <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, mb: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: { xs: 24, sm: 28 } }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      Dirección
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      {CONTACT_INFO.address}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Horario */}
              <Paper
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                elevation={2}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 3,
                }}
              >
                <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 } }}>
                  <AccessTimeIcon sx={{ color: 'primary.main', fontSize: { xs: 24, sm: 28 } }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      Horario de Atención
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.6, fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                      {CONTACT_INFO.schedule}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar de éxito */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          ¡Mensaje enviado! Te redirigiremos a WhatsApp.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
