import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAKDxr0S3hP33kWYV-nUsA7aXT0q3ZMx4U",
  authDomain: "goalcoach-1ea57.firebaseapp.com",
  databaseURL: "https://goalcoach-1ea57.firebaseio.com",
  projectId: "goalcoach-1ea57",
  storageBucket: "goalcoach-1ea57.appspot.com",
  messagingSenderId: "15063857229"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalsRef = firebase.database().ref('completeGoals');
