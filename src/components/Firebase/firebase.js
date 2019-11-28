import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAoRisVAR5Jr5rmO0TOXmzqacsJi6IC_RE",
  authDomain: "projectfirebase-8d17d.firebaseapp.com",
  databaseURL: "https://projectfirebase-8d17d.firebaseio.com",
  projectId: "projectfirebase-8d17d",
  storageBucket: "projectfirebase-8d17d.appspot.com",
  messagingSenderId: "319389119327",
  appId: "1:319389119327:web:af143009c4bdae18"
};

class firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
  }

  categories = index => this.db.ref(`categories/${index}`);
  getCategories = () => this.db.ref("categories");

  queryBooks = index => this.db.ref(`products/${index}`);
  books = () => this.db.ref("products");

  queryUsers = index => this.db.ref(`users/${index}`);
  users = () => this.db.ref("users");

  queryBooking = index => this.db.ref(`booking/`);
  queryBorrow = index => this.db.ref(`booking/${index}`);
  queryPay = () => this.db.ref("paying/");
}

export default firebase;
