import * as firebase from 'firebase';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
// production: false,
export const firebaseConfig = {
  production:false,
  apiKey: "AIzaSyCstD8X2VwqX0lKz5EXwouK9Q9Nskcg5jk",
  authDomain: "billing-system-6e144.firebaseapp.com",
  databaseURL: "https://billing-system-6e144.firebaseio.com",
  projectId: "billing-system-6e144",
  storageBucket: "billing-system-6e144.appspot.com",
  messagingSenderId: "408572533347",
  appId: "1:408572533347:web:2cd8fb810345010c16b656"
};
firebase.initializeApp(firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
