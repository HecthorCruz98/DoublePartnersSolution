// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiReclamations: `${location.origin}/MetilifeReclamaciones/api`,
  apiTerminosyCondiciones:`${location.origin}/ms-Metlife-TC`,
  apiConvertPdf:`${location.origin}/ms-Metlife-TC`,
  apiNotification:`${location.origin}/ms-Metlife-TC`,

  realms: [
    {
      host:'localhost:4200',
      url: 'https://keycloak-sbx.thomasgreg.com/auth',
      realm: 'MET-LIFE',
      clientId: 'MET-LIFE-RECLAMOS'
    },
    {
      host:'127.0.0.1:9005',
      url: 'http://localhost:8080/auth',
      realm: 'Banco',
      clientId: 'spa-angular'
    }
  ],
};








/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
