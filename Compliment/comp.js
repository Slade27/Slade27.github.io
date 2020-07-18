var script = document.createElement('script');
{/* <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script> */}
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var compliments = [
    'You look nice today',
    'You are loved',
    'Have you been working out?',
    'I feel the need to impress you.',
    'You could probably lead a rebellion.',
    'My mom always asks me why I can\'t be more like you',
    'Glorious things are waiting for you.',
    'Your eyes are disarming',
    'You have a great sense of humor',
    'You\'re that “Nothing” when people ask me what I\'m thinking about.',
    'I bet you make babies smile.',
    'On a scale from 1 to 10, you’re an 11.',
    'You’re someone’s reason to smile.',
    'Somehow you make time stop and fly at the same time.',
    'Is that your picture next to "charming" in the dictionary?',
    'You\'re great at figuring stuff out.',
    'You are a light shining in darkness',
    'I can\'t take my eys off you',
    'You are stronger than you think',
    'Anyone would be lucky to have you',
    'You have a great smile.',
]

var colors = ['#16a085', '#27ae60', '#2c3e50', 
'#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', 
"#472E32", "#BDBB99", "#77B1A9", "#73A857", "#2ab7ca", 
'#f4b6c2', '#005b96', '#851e3e', '#dec3c3', '#f6cd61',
'#feb2a8', '#ee4035'];

//generate random number[1-19]
function rand(len){
var randomNumber = Math.floor(Math.random() * len.length); 
return randomNumber;
}

function generate(){
    console.log("Generating");
    // $("#compliment").fadeOut(3000);
    
    document.getElementById('compliment').innerHTML = compliments[rand(compliments)];
    // $("#compliment").fadeIn(3000);
}

function color(){
    document.body.style.backgroundColor = colors[rand(colors)]; //color background
    document.getElementById("compliment").style.color = document.body.style.backgroundColor; //color text
}

// document.onload = generate(); //load first compliment
document.onload = color(); // load first color

/*Grabs new quote on button press */
document.getElementById("new-comp").addEventListener('click', function(){
    $("#compliment").fadeOut(1);
    color();
    generate();
    $("#compliment").fadeIn(2500);
});