/**
 * UTILIDADES DE VALIDACIÓN
 * 
 * Funciones helper para validar formularios
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Valida un email
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { isValid: false, error: 'El email es requerido' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Email inválido' };
  }
  
  return { isValid: true };
};

/**
 * Valida un teléfono ecuatoriano
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone) {
    return { isValid: false, error: 'El teléfono es requerido' };
  }
  
  // Formato ecuatoriano: 09XXXXXXXX o 07XXXXXXXX (10 dígitos)
  const phoneRegex = /^0[97]\d{8}$/;
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  
  if (!phoneRegex.test(cleanPhone)) {
    return { 
      isValid: false, 
      error: 'Teléfono inválido. Formato: 09XXXXXXXX' 
    };
  }
  
  return { isValid: true };
};

/**
 * Valida un nombre
 */
export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'El nombre es requerido' };
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, error: 'El nombre debe tener al menos 2 caracteres' };
  }
  
  return { isValid: true };
};

/**
 * Valida un mensaje
 */
export const validateMessage = (message: string): ValidationResult => {
  if (!message || message.trim().length === 0) {
    return { isValid: false, error: 'El mensaje es requerido' };
  }
  
  if (message.trim().length < 10) {
    return { isValid: false, error: 'El mensaje debe tener al menos 10 caracteres' };
  }
  
  return { isValid: true };
};

/**
 * Formatea el número de WhatsApp para Ecuador
 */
export const formatWhatsAppNumber = (phone: string): string => {
  // Formato: 593 + número sin el 0 inicial
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  if (cleanPhone.startsWith('0')) {
    return '593' + cleanPhone.substring(1);
  }
  return '593' + cleanPhone;
};

/**
 * Genera URL de WhatsApp
 */
export const generateWhatsAppUrl = (phone: string, message?: string): string => {
  const formattedPhone = formatWhatsAppNumber(phone);
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${formattedPhone}${message ? `?text=${encodedMessage}` : ''}`;
};
