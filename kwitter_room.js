
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBC_dXYy7-8sG2qn1gB-i6sUbLSwthcbeY",
      authDomain: "project-42-366f9.firebaseapp.com",
      databaseURL: "https://project-42-366f9-default-rtdb.firebaseio.com",
      projectId: "project-42-366f9",
      storageBucket: "project-42-366f9.appspot.com",
      messagingSenderId: "177568641833",
      appId: "1:177568641833:web:4d1fcbc454f16e6bb93d38",
      measurementId: "G-3KQZ14VX81"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name+"!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " +Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
            //End code
      });});}
getData();
function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}