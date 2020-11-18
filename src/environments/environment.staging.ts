// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {},


  debug: true,
  log: {
    auth: false,
    store: false,
  },

  smartadmin: {
    api: null,
    db: 'smartadmin-angular'
  },
  BaseUrl: 'http://cms.sipl.pw/api/api/',
  BaseUrlDist: 'http://apk.sipl.pw/AegisDistributorApi/api1/',
  ImageUrl: 'http://apk.sipl.pw/AEGISAdminApi/Documents/',
 // ImageUrlDist: 'http://apk.sipl.pw/AegisDistributorApi/Expenses/',
  authKey: 'CMSYS:CMSYS@12345?',
  secureKey: 'CMSYS11223344556',

};
