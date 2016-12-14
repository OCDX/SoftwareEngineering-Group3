(function () {


	toastr.options = {
	  
	  "preventDuplicates": true
	  
	}

	var snapshotRef;

	var storageRef = firebase.storage().ref();

	var searchButton = document.getElementById('searchButton');

	var ref1 = firebase.database().ref("uploads");

	$('#searchInput').val('all');

	$('#searchButton').click();

	console.log($("#searchInput").val());

	if($('#searchInput').val() == "all"){

		$("#table").empty();
		$("#table").append("<tr><th>Title</th><th>Author</th><th>Filename</th><th>Download</th></tr>");

		ref1.on("child_added", function(snapshot) {

			$("#table").append("<tr><td>"+snapshot.child("title").val()+"</td><td>"+snapshot.child("author").val()+"</td><td>"+snapshot.child("name").val()+"</td><td><a href="+snapshot.child("file").val()+" download="+snapshot.child("name").val()+">Download</a></td></tr>");

		});

	}

	searchButton.addEventListener('click', e => {

		var ref = firebase.database().ref("uploads");
		var searchKey = $("#searchInput").val();
		searchKey = searchKey.toLowerCase();

		console.log(searchKey);

		if($('#searchInput').val() == "all"){

		$("#table").empty();
		$("#table").append("<tr><th>Title</th><th>Author</th><th>Filename</th><th>Download</th></tr>");

		ref1.on("child_added", function(snapshot) {

			$("#table").append("<tr><td>"+snapshot.child("title").val()+"</td><td>"+snapshot.child("author").val()+"</td><td>"+snapshot.child("name").val()+"</td><td><a href="+snapshot.child("file").val()+" download="+snapshot.child("name").val()+">Download</a></td></tr>");

		});

		}

		if($("#titleSelected").is(':checked'))
		{

			ref.orderByChild("title").equalTo(searchKey).on("child_added", function(snapshot) {

			  //TODO handle if no results are found in this block
			  $("#table").empty();
			  $("#table").append("<tr><th>Title</th><th>Author</th><th>Filename</th><th>Download</th><th>Edit</th><th>Delete</th></tr>");
			  $("#table").append("<tr><td>"+snapshot.child("title").val()+"</td><td>"+snapshot.child("author").val()+"</td><td>"+snapshot.child("name").val()+"</td><td><a href="+snapshot.child("file").val()+" download="+snapshot.child("name").val()+">Download</a></td><td><button id='editButton'>Edit</button></td><td><button id='deleteButton'>Delete</button></td></tr>");

			  snapshotRef = snapshot;

			});
			

		}else if($("#authorSelected").is(':checked')){

			//TODO handle if no results are found in this block
			ref.orderByChild("author").equalTo(searchKey).on('child_added', function(snapshot) {
			  
			  $("#table").empty();
			  $("#table").append("<tr><th>Title</th><th>Author</th><th>Filename</th><th>Download</th><th>Edit</th><th>Delete</th></tr>");
			  $("#table").append("<tr><td>"+snapshot.child("title").val()+"</td><td>"+snapshot.child("author").val()+"</td><td>"+snapshot.child("name").val()+"</td><td><a href="+snapshot.child("file").val()+" download="+snapshot.child("name").val()+">Download</a></td><td><button id='editButton'>Edit</button></td><td><button id='deleteButton'>Delete</button></td></tr>");

			  snapshotRef = snapshot;
			});

		}

		$(document).on('click', '#editButton',function(){

			//alert('test');

			localStorage.setItem("file", snapshotRef.child("file").val());
			localStorage.setItem("name", snapshotRef.child("name").val());

			console.log(snapshotRef.child("file").val());
			console.log(snapshotRef.child("name").val());

			window.location.href = "/editJson.html";

		});

		$(document).on('click', '#deleteButton', function(){

			//remove from database
			var element = this;
			var flag = 0;
			var nameOfFile = snapshotRef.child("name").val();
			var removeKey = snapshotRef.key;
			ref.child(removeKey).remove();

			// Create a reference to the file to delete
			var fileRef = storageRef.child('manifests/'+snapshotRef.child("name").val());

			// Delete the file
			fileRef.delete().then(function() {

				console.log("success");
				flag=1;
				//remove from view so we dont need to requery db
				toastr.success("Deleted File: "+ nameOfFile,"Deleted!");

			}).catch(function(error) {
				//print errors
				toastr.error("File: "+ nameOfFile,"Failed to Delete File!");
			});


			//remove from view so we dont need to requery db
			if(flag = 1){
				$(element).parent().parent().remove();
			}
			
		});

	});

}());