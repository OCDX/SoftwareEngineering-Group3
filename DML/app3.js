(function () {

    //init firebase
    /*var config = {
    apiKey: "AIzaSyDhctdgHv0NFpEVrvF9FyFkmLHr2z_bajg",
    authDomain: "software2016-9e4fa.firebaseapp.com",
    databaseURL: "https://software2016-9e4fa.firebaseio.com",
    storageBucket: "software2016-9e4fa.appspot.com",
    messagingSenderId: "971715155403"
  };
  firebase.initializeApp(config);
  */

  var fileBtn = document.getElementById('fileUploadButton'); //put the button id here

  var uploadButton = document.getElementById('fileSubmit');

  var file;

    //logout event

	fileBtn.addEventListener('change', e => {
        
		//get file

		file = e.target.files[0];

		console.log(file.name);

	});

	uploadButton.addEventListener('click', e => {

		//storage ref

		var storageRef = firebase.storage().ref('manifests/' + file.name);

		//upload file

		var task = storageRef.put(file);


	});

}());