import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();

exports.updateStats = functions.firestore
  .document('simulations/{simulationId}')
  .onWrite((event: any) => {
    return admin.firestore().collection('simulations')
      .get()
      .then((querySnapshot: any) => {
        const simulationsCount = querySnapshot.size;
        let oobCount = 0;
        let collisionCount = 0;
        let roverCount = 0;

        querySnapshot.forEach((doc: any) => {
          const data: any = doc.data();
          oobCount += data.oobCount;
          collisionCount += data.collisionCount;
          roverCount += data.rovers.length;
        });

        const body = {simulationsCount, collisionCount, oobCount, roverCount};
        return admin.firestore().collection('analytics').doc('QpvZjF3lQuUwDPcLS7Wl').update(body);
      });
  });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
