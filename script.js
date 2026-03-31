function scrollToVolunteer(){
document.getElementById("volunteer").scrollIntoView({
behavior:"smooth"
});
}

document.getElementById("volunteerForm").addEventListener("submit", function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let interest=document.getElementById("interest").value;
let message=document.getElementById("message").value;

if(name && email && phone && interest && message){
document.getElementById("successMessage").innerText="Thank you for joining Manavya Foundation!";
document.getElementById("successMessage").style.color="green";
this.reset();
}else{
alert("Please fill all details");
}
});
