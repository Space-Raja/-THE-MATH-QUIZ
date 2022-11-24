
	//Get "player1_name" using localStorage.getItem() function and assign it to player1_name
	//Get "player2_name" using localStorage.getItem() function and assign it to player2_name

	player1_name = localStorage.getItem("Player_1");
	player2_name = localStorage.getItem("Player_2");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player1_name + " : ";
document.getElementById("player2_name").innerHTML= player2_name + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML= "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn - " + player2_name;

function send(){
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log(word);

	second_letter = word.charAt(1);
	middle_position = Math.floor(word.length/2);
	middle_letter = word.charAt(middle_position);
	last_position = word.length-1;
	last_letter = word.charAt(last_position);

	replace_1 = word.replace(second_letter,"_");
	replace_2 = replace_1.replace(middle_letter,"_");
	replace_3 = replace_2.replace(last_letter,"_");

	question = "<h4 id='questions'> Q."+replace_3+"</h4>";
	input_box = "<br>Answer :  <input id='input_number' placeholder='Enter the answer'>";
	check_button = "<br> <button onclick='check()'> Check </button>";
	row = question + input_box + check_button;
	document.getElementById("output").innerHTML+=row;
	document.getElementById("")

}

function check(){

}