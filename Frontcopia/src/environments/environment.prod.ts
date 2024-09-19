export const environment = {
  production: true,
  apiReclamations: `${location.origin}/MetilifeReclamaciones/api`,
  apiNotification: `${location.origin}/ms-Metlife-TC`,
  apiConvertPdf: `${location.origin}/ms-Metlife-TC`,
  apiTerminosyCondiciones:`${location.origin}/ms-Metlife-TC`,
  apiCreateUser:`https://keycloak-sbx.thomasgreg.com/auth/admin/realms/MET-LIFE`,


  
    realms: [
    {
      host:'localhost:4200',
      url: 'http://localhost:8080/auth',
      realm: 'InitialProyect',
      clientId: 'THOMAS-MTI'
    },
    {
      host:'127.0.0.1:9005',
      url: 'http://localhost:8080/auth',
      realm: 'Banco',
      clientId: 'spa-angular'
    }
  ],
};
