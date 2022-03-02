// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  emulator: true,
  firebaseConfig: {
    host: 'localhost:4200',
    ssl: false,
    apiKey: "AIzaSyC7m2XOQQ7r1vFrgAfq7tLHq8ZBANs8ER0",
    authDomain: "elden-ring-gear-project.firebaseapp.com",
    databaseURL: "localhost:8081?ns=elden-ring-gear-project",
    projectId: "elden-ring-gear-project",
    storageBucket: "elden-ring-gear-project.appspot.com",
    messagingSenderId: "121972688077",
    appId: "1:121972688077:web:3aae19a1003945abb01584",
    measurementId: "G-JS611PDDYM"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
