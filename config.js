const config = {
  TITLE: import.meta.env.VITE_TITLE,
  DESCRIPTION: import.meta.env.VITE_DESCRIPTION,
  OG_IMAGE: import.meta.env.VITE_OG_IMAGE,
  OG_URL: import.meta.env.VITE_OG_URL,
  CANONICAL_URL: import.meta.env.VITE_CANONICAL_URL,
  SITENAME: import.meta.env.VITE_SITENAME,
  SITE_URL : import.meta.env.VITE_SITE_URL,


  ADMIN_EMAIL : import.meta.env.VITE_ADMIN_EMAIL,

  SERVER_ADDRESS : import.meta.env.VITE_SERVER_ADDRESS,
  DATA_ENCRYPTION_KEY : import.meta.env.VITE_DATA_ENCRYPTION_KEY,
};

export default config;
