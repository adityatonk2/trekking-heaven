/**
 * Centralized contact and office configuration.
 * Update these values to change contact info site-wide.
 */

/** Primary phone number (no country code) */
export const PRIMARY_PHONE = '7668591049';
/** Secondary phone number (no country code) */
export const SECONDARY_PHONE = '7579060739';
/** Number used for WhatsApp queries (same as primary) */
export const WHATSAPP_QUERY_NUMBER = '7668591049';

/** Country code for India */
const COUNTRY_CODE = '91';

/** Full WhatsApp number for wa.me (no +) */
export const WHATSAPP_NUMBER = `${COUNTRY_CODE}${WHATSAPP_QUERY_NUMBER}`;
/** Display string for primary / WhatsApp number */
export const PRIMARY_DISPLAY = '+91 76685 91049';
/** Display string for secondary number */
export const SECONDARY_DISPLAY = '+91 75790 60739';

/** WhatsApp chat URL */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
/** Primary phone tel: link */
export const TEL_PRIMARY_URL = `tel:+${COUNTRY_CODE}${PRIMARY_PHONE}`;
/** Secondary phone tel: link */
export const TEL_SECONDARY_URL = `tel:+${COUNTRY_CODE}${SECONDARY_PHONE}`;

/** Legacy exports for backward compatibility (use primary) */
export const WHATSAPP_DISPLAY = PRIMARY_DISPLAY;
export const TEL_URL = TEL_PRIMARY_URL;

/** Office address (single source for footer, contact, Visit Our Office) */
export const OFFICE_ADDRESS = {
  line1: "Saklani's Plaza, Punshpkunj, Lane no 9, Ajabpur Kalan, Mothrowala Road",
  city: 'Dehradun',
  state: 'Uttarakhand',
  pin: '248001',
};
/** Full address string */
export const OFFICE_ADDRESS_FULL = `${OFFICE_ADDRESS.line1}, ${OFFICE_ADDRESS.city} ${OFFICE_ADDRESS.pin}`;

/** Google Maps link for "Get Directions" */
export const MAP_LINK = 'https://maps.app.goo.gl/sSH6GUPPpfU9KjRM9?g_st=ipc';
/** Google Maps embed iframe src (same link; use MAP_LINK if embed fails) */
export const MAP_EMBED_SRC = MAP_LINK;
