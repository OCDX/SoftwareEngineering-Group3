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

  var database = firebase.database();

  var file;

    //logout event

	fileBtn.addEventListener('change', e => {
        
		//get file

		file = e.target.files[0];

		var fileString = file.name;

		var fileExt = fileString.split('.');

		if(fileExt[1] != "json"){

			toastr.warning('Incorrect File Format for File:' + file.name);
		}

		console.log(fileString);

		//if()

		//console.log(file.name);

	});

	uploadButton.addEventListener('click', e => {

		//check if user folder exists
		var user = firebase.auth().currentUser;

		var userString = user.email;

		var userName = userString.split('@');

		//getting the username for the filepath
		userName = userName[0];

		//storage ref

		var storageRef = firebase.storage().ref('manifests/' + file.name);

		var task = storageRef.put(file);
		console.log("this is the file that gets sent: "+file);
		//should be checking for the file to exist in the sotrage before uploading it. TODO

		storageRef.getDownloadURL().then(function(url) {

			var author = $('#author').val();
			var title = $('#title').val();
			author = author.toLowerCase();
			title = title.toLowerCase();
			writeNewUserData(userName, author, title, url, file.name);

			console.log("new instance created");

			}).catch(function(error) {
			  switch (error.code) {
			    case 'storage/object_not_found':
			      // File doesn't exist
			      break;

			    case 'storage/unauthorized':
			      // User doesn't have permission to access the object
			      break;

			    case 'storage/canceled':
			      // User canceled the upload
			      break;

			    case 'storage/unknown':
			      // Unknown error occurred, inspect the server response
			      break;
			  }

			//writeUserData(firebaseUser.email, $('#author').val(), $('#title').val(), )
			});
		
	});

	function writeNewUserData(userId, writer, uploadName, locationURL, fileName) {
		console.log("in new");
		var firebaseDBRef = firebase.database().ref('uploads/');
		var newStoreRef = firebaseDBRef.push();
  		newStoreRef.set({
		    name: fileName,
		    title: uploadName,
		    author: writer,
	    	file : locationURL
		  });

	  // Display a success toast, with a title
		toastr.success('Successfully uploaded ' + fileName);
	}

}());