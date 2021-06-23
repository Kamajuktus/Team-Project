function randomOfNums(){
  return Math.floor(Math.random()* 4) + 1;
}

var commentOne = randomOfNums();
var commentTwo = randomOfNums();

switch(commentOne) {
  case 1: document.getElementById("firstComment").innerHTML = "If you do what you’ve always done, you’ll get what you’ve always gotten.";
    document.getElementById("nameOne").innerHTML = "Tony Robbins";
    document.getElementById("descriptionOne").innerHTML = "is an American author, coach, speaker, and philanthropist.";
    break;
  case 2: document.getElementById("fisrtComment").innerHTML = "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.";
    document.getElementById("nameOne").innerHTML = "Aristotle";
    document.getElementById("descriptionOne").innerHTML = "a Greek philosopher and polymath during the Classical period in Ancient Greece.";
    break;
  case 3: document.getElementById("fisrtComment").innerHTML = "I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.";
    document.getElementById("nameOne").innerHTML = "Albert Einstein";
    document.getElementById("descriptionOne").innerHTML = "a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time.";
    break;
  case 4: document.getElementById("fisrtComment").innerHTML = "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.";
    document.getElementById("nameOne").innerHTML = "Sheryl Sandberg";
    document.getElementById("descriptionOne").innerHTML = "an American business executive, billionaire and philanthropist.";
    break;
}

switch(commentTwo) {
  case 1: document.getElementById("secondComment").innerHTML = "You get what you settle for.";
    document.getElementById("nameTwo").innerHTML = "Thelma and Louise";
    document.getElementById("descriptionTwo").innerHTML = "a 1991 American female buddy road film directed by Ridley Scott and written by Callie Khouri.";
    break;
  case 2: document.getElementById("secondComment").innerHTML = "Only those who will risk going too far can possibly find out how far one can go.";
    document.getElementById("nameTwo").innerHTML = "T. S. Eliot";
    document.getElementById("descriptionTwo").innerHTML = "a poet, essayist, publisher, playwright, literary critic and editor.";
    break;
  case 3: document.getElementById("secondComment").innerHTML = "Only those who play to win. Only those who risk to win. History favors risk-takers. Forgets the timid. Everything else is commentary.";
    document.getElementById("nameTwo").innerHTML = "Iveta Cherneva";
    document.getElementById("descriptionTwo").innerHTML = "political scientist";
    break;
  case 4: document.getElementById("secondComment").innerHTML = "Life is being on the wire, everything else is just waiting.";
    document.getElementById("nameTwo").innerHTML = "Karl Wallenda";
    document.getElementById("descriptionTwo").innerHTML = "a German-American high wire artist and founder of The Flying Wallendas, a daredevil circus act which performed dangerous stunts, often without a safety net.";
    break;
}
