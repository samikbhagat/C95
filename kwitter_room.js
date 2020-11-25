//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBIR0U7iKeBN8MvR76rvvlxGeNRJzHZ7r4",
      authDomain: "social-website-b581a.firebaseapp.com",
      databaseURL: "https://social-website-b581a.firebaseio.com",
      projectId: "social-website-b581a",
      storageBucket: "social-website-b581a.appspot.com",
      messagingSenderId: "1065688368511",
      appId: "1:1065688368511:web:5bcdad1938dc7b17bbc64a"
};

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'  >#" + Room_names + "</div><hr>";
                  documen.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();