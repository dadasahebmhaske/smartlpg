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

  BaseUrl: 'http://lpg.sipl.pw/lpgapi/api/',
  authKey: '@smartlpg#2020?',
  secureKey: 'SMARTLPG14122020',
  deptId: 1006

};
