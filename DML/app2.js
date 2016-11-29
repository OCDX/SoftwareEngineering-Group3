(function () {

    //init firebase
    var config = {
    apiKey: "AIzaSyDhctdgHv0NFpEVrvF9FyFkmLHr2z_bajg",
    authDomain: "software2016-9e4fa.firebaseapp.com",
    databaseURL: "https://software2016-9e4fa.firebaseio.com",
    storageBucket: "software2016-9e4fa.appspot.com",
    messagingSenderId: "971715155403"
  };
  firebase.initializeApp(config);

  //TODO make if statement to check for user authentication. If not auth use window.location.href = 'index.html';

  var user = firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
    window.location.href = 'index.html';
  }
});

  console.log()

    //logout event
    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.href = 'index.html';
    });
    //realtime listener for state change

}());