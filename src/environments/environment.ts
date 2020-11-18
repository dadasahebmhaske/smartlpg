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
  // BaseUrl: 'http://192.168.1.198/AEGISAdmin/api/',
  // BaseUrlDist: 'http://192.168.1.175:8081/distributorapi/api/',
  // ImageUrl: 'http://192.168.1.198/AEGISAdmin/Documents/',
  // authKey: 'Aegis:Aegis@12345?',
  // secureKey: 'AEGIS11223344556',
  // deptId: 1012



  // BaseUrl: 'http://cms.sipl.pw/api/api/',
  // authKey: 'CMSYS:CMSYS@12345?',
  // secureKey: 'CMSYS11223344556',
  // deptId: 1006

  BaseUrl: 'http://cms.pushpamgroup.co.in/api/api/',
  authKey: 'CMSYS:CMSYS@12345?',
  secureKey: 'CMSYS11223344556',
  deptId: 1006

};
