(function () {

	//get local storage and put in text area;

	var file = localStorage.getItem("file");
	var name = localStorage.getItem("name");
/*
	$.ajax({

		url: file,
		dataType: "text",
		success: function(data){

			//console.log(data);

			$('#textArea').val(data);
			
		}
	});*/

	btnUpdate.addEventListener('click', e => {

		console.log('Update');

		function blobToFile(theBlob, fileName){
		    //A Blob() is almost a File() - it's just missing the two properties below which we will add
		    theBlob.lastModifiedDate = new Date();
		    theBlob.name = fileName;
		    return theBlob;
		}

		function saveTextAsFile() {

			//SETTING UP FOR FILE DOWNLOAD AND SAVING TO DB
			var textToWrite = document.getElementById('textArea').value;
			var textFileAsBlob = new Blob([textToWrite], {
			type: 'application/json'
			});
			var fileNameToSaveAs = name;
			console.log(fileNameToSaveAs);
			var downloadLink = document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.innerHTML = "Download File";
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);

			console.log(downloadLink.href);

			//DOWNLOADING FILE
			downloadLink.click();

			//UPLOADING FILE
			var user = firebase.auth().currentUser;

			var userString = user.email;

			var userName = userString.split('@');

			//getting the username for the filepath
			userName = userName[0];

			textFileAsBlob.lastModifiedDate = new Date();
			textFileAsBlob.name = fileNameToSaveAs;

			console.log(textFileAsBlob);

			console.log(textFileAsBlob.name);

			console.log(textFileAsBlob.lastModifiedDate);

			console.log(userName);

			//storage ref

			var storageRef = firebase.storage().ref('manifests/' + fileNameToSaveAs);

			var task = storageRef.put(textFileAsBlob);
			//should be checking for the file to exist in the sotrage before uploading it. TODO

			/*storageRef.getDownloadURL().then(function(url) {

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
				});*/
		}

		saveTextAsFile();

    });
    

}());