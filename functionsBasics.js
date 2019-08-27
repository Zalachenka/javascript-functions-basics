/*const username = prompt("What is your name ?");
alert(username);*/
function askName() {
	const username = prompt("What is your name ?");
		alert("Your name is "+username+".");
};
function askHowOld() {
	const age = prompt("How old are you ?")
	alert("You are "+age+".");
		if (age >= 18) {
			alert("You are of lawful age.")
		}
		else { 
			alert("You are a minor.") };
};
askName();
askHowOld();