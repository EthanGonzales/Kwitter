function logIn()
{
    Name=document.getElementById("user_name").value;
    localStorage.setItem("username", Name);
    window.location="kwitter_room.html";
}