function stage() {
    var msg = "0. You are standing on Stage in Paris with over 75,000 fans screaming your name.";
    showScore();
    displayMessage(msg);
}
function screaming() {
    var msg = "1. The screaming gets louder.";
    showScore();
    displayMessage(msg);
}
function firstSong() {
    var msg = "2. You start and finish your first song.";
    showScore();
    displayMessage(msg);
}
function secondSong() {
    var msg = "3. You perform another song.";
    showScore();
    displayMessage(msg);
}
function crying() {
    var msg = "4. Fans start to cry. Oh no!";
    showScore();
    displayMessage(msg);
}
function costume() {
    var msg = "5. Costume change!";
    showScore();
    displayMessage(msg);
}
function bracelet() {
	if(taken_bracelet===false){
    	var msg = "6. You contribute to Make a Wish by singing to a fan in the audience. The fan gives you a bracelet.";
    } else {
        var msg = "6. You contribute to Make a Wish by singing to a fan in the audience. ";
    }
    showScore();
    displayMessage(msg);
}
function loveXO() {
	if(taken_love===false){
    var msg = "7. Your love is like XO, you perform the XO song and feel overwhelmed with love from your fans.";
    } else {
        var msg = "7. You perform another song.";
	}
    showScore();
    displayMessage(msg);
}
function autographs() {
    var msg = "8. You sign autographs for fans in between songs."
    showScore();
    displayMessage(msg);
}
function flowers() {
	if(taken_flowers===false){
    var msg = "9. You receive flowers from a generous fan and notice something that shines in the bouquet...it's the ring!";
    } else {
        var msg = "9. You perform more songs with Jay-Z.";
    }
    showScore();
    displayMessage(msg);
}
function errorMsg(){
    displayMessage("You can not go this way.");
}