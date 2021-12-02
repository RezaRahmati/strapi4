module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '20b45bd1acf1f6093a9938f66fc96646'),
  },
});
