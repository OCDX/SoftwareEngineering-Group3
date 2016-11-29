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

  console.log("in here");

    //getting elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    //const btnLogOut = document.getElementById("btnLogOut");

    //login event
    btnLogin.addEventListener('click', e => {
        //get email and pass

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // sign in

        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => document.getElementById("userMessage").innerHTML = e.message);



    });

    //signup event
    btnSignUp.addEventListener('click', e => {
        //get email and pass

        //TODO: Check to make sure email is vaild...

        var x = txtEmail.value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            document.getElementById("userMessage").innerHTML = "Please enter a vaild email";
            return false;
        }

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // sign in

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));

        document.getElementById("userMessage").innerHTML = "user registered as: " + email + " Press login to navigate to the home page";

    });

    //realtime listener for state change
    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {

            console.log(firebaseUser.email);

            //btnLogOut.classList.remove('hide');

            /*$('.loginContainer').remove();

            $('body').append('<div id="mainContainer"></div>');
            $('#mainContainer').append('<div id="navContainer"></div>');

            $('#navContainer').load('Main/LoadedHTML/sideBarNav.html');

            $('head').append('<script src="/Main/loadTabContent.js"></script>'); //loads the ajax that will handle button clicks

            $('#mainContainer').append("<div id='tabContentContainer'></div>");
			*/
            //$('link[rel=stylesheet][href~="Login/authPageStyle.css"]').remove();
            //$('body').load("/Main/mainPage.html")
            //$('head').append('<link rel="stylesheet" href="/Main/app.css" type="text/css" />');
            //$('body').append('<button id="btnLogOut" class="btn btn-action logout hide">Log Out</button>');

            //document.getElementById("userMessage").innerHTML = "Logged in as: " + firebaseUser.email;

            //this will need to be changed when we move away from github hosting!!!
            window.location.href = 'http://ec2-35-163-197-29.us-west-2.compute.amazonaws.com/home.html';
        } else {
            //TODO: code to display "Not logged in!" here
            console.log("Not logged in");
            //btnLogOut.classList.add('hide');
        }

    });

}());