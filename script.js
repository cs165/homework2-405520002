// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.


var x1=0
var x2=0
var x3=0
var array=[];
var array1=[];
var array2=[];
var total=['','','']
var z1="Your derpy exterior belies the keen bloodhound within, and you have a powerful nose, both for sniffing out people's desires and for finding delicious food. You laugh when you're confused and tilt your head when things are funny. In works of fiction, your favorite characters are the ones who have complex stories, and you enjoy winding subplots. However, you like short sentences. You have always wanted to start a garden. Unfortunately, plants are not as easy to understand as humans, and the last time you took care of a flower, it didn't turn out so well. However, you take very good care of your friends, and they are lucky to have you.";
var z2="In this picture, you are chomping on a cloth toy, and it would take a hundred tug-of-war experts to wrest it from your bite. Similarly, you are more likely to influence the people around you than be influenced by them. The quality of your work is very important to you. You are a visual thinker, and you are good at finding analogies between two disparate topics. You also enjoy sharing jokes and memes with your friends. You are picky about what you eat, but you will also try every new dish once. You believe that contradiction is the start of your soul. Sometimes you don't realize it, but many people look up to you.";
var z3="You are warm and good at making anyone's day better. Secretly, you like the idea of being a rebel, but most of the rebelling goes on in your head. You like making flowcharts. You get a rush from finishing everything you have to do for the day, and when you are focused, it takes a lot to break your concentration. Your favorite color has changed many times over the course of your life. It is important to you to have creative outlets and personal independence. Even though much of society values “not trying too hard,” you actually really enjoy people who try very hard. You are highly driven, which is often inspiring to others.";
var z4="Bark bark bark bark! Kidding! Of course you can speak English. You like hiking, running, sprinting, walking, jogging, strolling and riding unicycles. Kidding! Unicycles are not for dogs! Your AIM username was \"L0LxXXxNawt_4_daag_96\". You occasionally add a smiley face next to your credit card signature. Sometimes you tell people to look \"under there\". You secretly wear a gold chain with a boxing gloves charm and a dog-tag with the name \"Rocky\". However, when you are alone, you ponder the increasing commercialization of human creative capability and enjoy reciting Marx while walking in the forest. Your Club Penguin password is the hexadecimal representation of the Chinese character for \"strength.\"";
var z5="You are optimistic and are confident in your ability to change something for the better, whether that is a group, a process, or yourself. It is difficult to label you as an introvert or an extrovert. You have many books that you have been meaning to read, and next week you will start one. When you wake up in the morning, It is hard for you to remember what you dreamed about. You like the sound of rain but do not enjoy getting wet. You are more fearless than the average person, especially in terms of sharing who you are. At the same time, you tend to be very aware of how your actions affect others. You fear that you are not doing enough, but to everyone else, you are!";
var z6="You are the Harry Potter Pup. The pup chosen to right the wrongs in the world and bring harmony back to Middle Earth. You enjoy free-range chicken, reading historical biographies and retaking the Myers Briggs Personality test to reaffirm that your personality type is as rare as a snowflake landing on a jaguar's backside. You have magic powers, but I would highly recommend not putting that on your resume, since (1) people might not agree and (2) you are a dog and seeking traditional employment might already be difficult.";
var z7="You are a very thoughtful person, both when it comes to thinking of others and thinking about ideas. You enjoy nature, particularly the way light filters through leaves. In a group, you are almost never the first person to talk, but when you do, people always want you to keep talking. You value the future over the past. You dislike puns and enjoy handwritten notes; handwritten puns are acceptable. It is important to you to try something new each week. Though you are afraid of heights, you sometimes google pictures of tall cliffs just to scare yourself a little. You're not afraid to take on a challenge, and that is very cool.";
var z8="You are very energized about the many things you find important, and this picture was stolen during a brief moment of relaxation. The ability to take risks is important to you, and you get restless when you feel like you haven't changed in a while. You are good at articulating your ideas. Clocks are one of your least favorite things. You always get separated from your group when exploring a new place, so thank goodness you have an excellent sense of direction. The answer to your security question is always your library card number (\"What is the name of your elementary school?\" \"0074117796323\"). You have a hidden talent that few know about, but since I already gave away your security question, I'll keep that a secret.";
var z9="You call it \"meditation\", but it's more like \"closing your eyes between hitting snooze\". You call it \"lifting weights\", but it's more like \"a good excuse to drink Gatorade\". You describe yourself as \"C-type\" -- \"C for chill\". Your jokes are often well timed and enjoyed by all. You transcend difficulties in life, by smoothly flowing around them. You eat fortune cookies, but never look at the fortune because of your deep internal confidence. Napping is a skill you practice often, but man oh man, once your internal engine gets going you focus 100%. Maybe even 110%. It's like a lot of focus. So much focus. Buckets of Focus. A whole Ford Focus. But right now, you're snoozing and that's cool. You'll solve P=NP a little later.";







//pickdog:
function character(key1,st,sc){
    if(maxname(total).key==key1){
    document.getElementById('title').textContent=st;
    document.getElementById('contents').textContent=sc;}
}

function score(){
    if(x1+x2+x3==3){
       console.log( maxname(total).key);
        console.log(total)
        restart();
        appear();
        character('blep','You got:Excellent judge of character',z1)
        character('burger','You got:Steadfast and determined', z2)
        character('cart','You got:Perfectionist with a soft side', z3)
        character('dopey','You got:Silly with a reflective side', z4)
        character('happy','You got:A positive force in the world', z5)
        character('nerd','You got:Open-minded and big-hearted', z6)
        character('shy','You got:Sometimes shy, but secretly adventurous', z7)
        character('sleeping','You got:Independent and free', z8)
        character('sleepy','You got:Stronger than you know.', z9)
}
}

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
    };


function push_array(c,item,array,index){
    if(x1+x2+x3!=3){
    if(document.getElementById(c).getAttribute('src')=="images/checked.png"){
        array.push(item);
        
        
    }
    else if(document.getElementById(c).getAttribute('src')=="images/unchecked.png"){
        array.remove(item);
       
    }
    document.getElementById(c).onchange=function(){ 
        if(document.getElementById(c).getAttribute('src')=="images/unchecked.png"){
            array.remove(item); 
        }
    }
    total[index]=array[array.length-1];

    console.log(array);
}
}


function restart(){
    document.getElementById('restartbutton').style.display='flex';
    console.log('ok');
}

function appear(){
    document.getElementById('appear').style.display='block';
    console.log('ok');
    console.log(total);
}


function maxname(arr) {
	const obj = {}
	const newObj = {
		max: 0,
		key: 0
	}
	for(let i = 0; i < arr.length; i++) {
		obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
	}
	for(const i in obj) {
		if(obj[i] > newObj.max) {
			newObj.max = obj[i]
			newObj.key = i
		}
	}
	return newObj
}








document.getElementById("restartbutton").onclick=
function(){
document.getElementById("dog1c").src= "images/unchecked.png";
document.getElementById("dog2c").src= "images/unchecked.png";
document.getElementById("dog3c").src= "images/unchecked.png";
document.getElementById("dog4c").src= "images/unchecked.png";
document.getElementById("dog5c").src= "images/unchecked.png";
document.getElementById("dog6c").src= "images/unchecked.png";
document.getElementById("dog7c").src= "images/unchecked.png";
document.getElementById("dog8c").src= "images/unchecked.png";
document.getElementById("dog9c").src= "images/unchecked.png";
document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
document.getElementById('dog1').style.opacity=1;
document.getElementById('dog2').style.opacity=1;
document.getElementById('dog3').style.opacity=1;
document.getElementById('dog4').style.opacity=1;
document.getElementById('dog5').style.opacity=1;
document.getElementById('dog6').style.opacity=1;
document.getElementById('dog7').style.opacity=1;
document.getElementById('dog8').style.opacity=1;
document.getElementById('dog9').style.opacity=1;
document.getElementById('dog1').addEventListener('click',clickdog1);
document.getElementById('dog2').addEventListener('click',clickdog2);
document.getElementById('dog3').addEventListener('click',clickdog3);
document.getElementById('dog4').addEventListener('click',clickdog4);
document.getElementById('dog5').addEventListener('click',clickdog5);
document.getElementById('dog6').addEventListener('click',clickdog6);
document.getElementById('dog7').addEventListener('click',clickdog7);
document.getElementById('dog8').addEventListener('click',clickdog8);
document.getElementById('dog9').addEventListener('click',clickdog9);

document.getElementById("bed1c").src= "images/unchecked.png";
document.getElementById("bed2c").src= "images/unchecked.png";
document.getElementById("bed3c").src= "images/unchecked.png";
document.getElementById("bed4c").src= "images/unchecked.png";
document.getElementById("bed5c").src= "images/unchecked.png";
document.getElementById("bed6c").src= "images/unchecked.png";
document.getElementById("bed7c").src= "images/unchecked.png";
document.getElementById("bed8c").src= "images/unchecked.png";
document.getElementById("bed9c").src= "images/unchecked.png";
document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
document.getElementById('bed1').style.opacity=1;
document.getElementById('bed2').style.opacity=1;
document.getElementById('bed3').style.opacity=1;
document.getElementById('bed4').style.opacity=1;
document.getElementById('bed5').style.opacity=1;
document.getElementById('bed6').style.opacity=1;
document.getElementById('bed7').style.opacity=1;
document.getElementById('bed8').style.opacity=1;
document.getElementById('bed9').style.opacity=1;
document.getElementById('bed1').addEventListener('click',clickbed1);
document.getElementById('bed2').addEventListener('click',clickbed2);
document.getElementById('bed3').addEventListener('click',clickbed3);
document.getElementById('bed4').addEventListener('click',clickbed4);
document.getElementById('bed5').addEventListener('click',clickbed5);
document.getElementById('bed6').addEventListener('click',clickbed6);
document.getElementById('bed7').addEventListener('click',clickbed7);
document.getElementById('bed8').addEventListener('click',clickbed8);
document.getElementById('bed9').addEventListener('click',clickbed9);

document.getElementById("toy1c").src= "images/unchecked.png";
document.getElementById("toy2c").src= "images/unchecked.png";
document.getElementById("toy3c").src= "images/unchecked.png";
document.getElementById("toy4c").src= "images/unchecked.png";
document.getElementById("toy5c").src= "images/unchecked.png";
document.getElementById("toy6c").src= "images/unchecked.png";
document.getElementById("toy7c").src= "images/unchecked.png";
document.getElementById("toy8c").src= "images/unchecked.png";
document.getElementById("toy9c").src= "images/unchecked.png";
document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
document.getElementById('toy1').style.opacity=1;
document.getElementById('toy2').style.opacity=1;
document.getElementById('toy3').style.opacity=1;
document.getElementById('toy4').style.opacity=1;
document.getElementById('toy5').style.opacity=1;
document.getElementById('toy6').style.opacity=1;
document.getElementById('toy7').style.opacity=1;
document.getElementById('toy8').style.opacity=1;
document.getElementById('toy9').style.opacity=1;
document.getElementById('toy1').addEventListener('click',clicktoy1);
document.getElementById('toy2').addEventListener('click',clicktoy2);
document.getElementById('toy3').addEventListener('click',clicktoy3);
document.getElementById('toy4').addEventListener('click',clicktoy4);
document.getElementById('toy5').addEventListener('click',clicktoy5);
document.getElementById('toy6').addEventListener('click',clicktoy6);
document.getElementById('toy7').addEventListener('click',clicktoy7);
document.getElementById('toy8').addEventListener('click',clicktoy8);
document.getElementById('toy9').addEventListener('click',clicktoy9);
x1=0;
x2=0;
x3=0;
onScrollIntoView ();
}


function onScrollIntoView () { 
    var element = document.getElementById("pup"); 
    element.scrollIntoView();
console.log('eeeeee'); }




function clickdog1(){


    if(document.getElementById("dog1c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/checked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#cfe3ff ';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog1').style.opacity=1;
    document.getElementById('dog2').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog1c','blep',array,0);
    x1=1;
    console.log(x1+x2+x3);
    score();

    
    
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog1);
 

}

    else{
        document.getElementById("dog1c").src= "images/unchecked.png";
        document.getElementById("dog1").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;
        

    }

    
    console.log('click');
   
    
   
   
}
document.getElementById("dog1").addEventListener("click",clickdog1) ;





function clickdog2(){
    if(document.getElementById("dog2c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/checked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog2").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog2').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog2c','happy',array,0);
    x1=1;
    score();
    
    }

    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog2);}

    else{
        document.getElementById("dog2c").src= "images/unchecked.png";
        document.getElementById("dog2").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;
        

    }

    console.log('click');
    
}
document.getElementById("dog2").addEventListener("click",clickdog2) ;


function clickdog3(){
    if(document.getElementById("dog3c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog3c").src= "images/checked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog3").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog3').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog2').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog3c','sleeping',array,0);
    x1=1;
    score();
    
    }

    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog3);}
    else{
        document.getElementById("dog3c").src= "images/unchecked.png";
        document.getElementById("dog3").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;       

    }

    console.log('click');
}
document.getElementById("dog3").addEventListener("click",clickdog3) ;



function clickdog4(){
    if(document.getElementById("dog4c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/checked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog4").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog4').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog2').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog4c','dopey',array,0);
    x1=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog4);}
    else{
        document.getElementById("dog4c").src= "images/unchecked.png";
        document.getElementById("dog4").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;
    }

    console.log('click');
}
document.getElementById("dog4").addEventListener("click",clickdog4) ;



function clickdog5(){
    if(document.getElementById("dog5c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/checked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog5').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog2').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog5c','burger',array,0);
    x1=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog5);}
    else{
        document.getElementById("dog5c").src= "images/unchecked.png";
        document.getElementById("dog5").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;
    }

    
}
document.getElementById("dog5").addEventListener("click",clickdog5) ;



function clickdog6(){
    if(document.getElementById("dog6c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/checked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog6').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog2').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog6c','cart',array,0);
    x1=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog6);}
    else{
        document.getElementById("dog6c").src= "images/unchecked.png";
        document.getElementById("dog6").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        
x1=0;
    }

    
}
document.getElementById("dog6").addEventListener("click",clickdog6) ;



function clickdog7(){
    if(document.getElementById("dog7c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/checked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog7').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog2').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog7c','nerd',array,0);
    x1=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog7);}
    else{
        document.getElementById("dog7c").src= "images/unchecked.png";
        document.getElementById("dog7").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;
    }

    
}
document.getElementById("dog7").addEventListener("click",clickdog7) ;



function clickdog8(){
    if(document.getElementById("dog8c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/checked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog8').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog2').style.opacity=0.6;
    document.getElementById('dog9').style.opacity=0.6;
    push_array('dog8c','shy',array,0);
    x1=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog8);}
    else{
        document.getElementById("dog8c").src= "images/unchecked.png";
        document.getElementById("dog8").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;
    }

    
}
document.getElementById("dog8").addEventListener("click",clickdog8) ;



function clickdog9(){
    if(document.getElementById("dog9c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("dog1c").src= "images/unchecked.png";
    document.getElementById("dog9c").src= "images/checked.png";
    document.getElementById("dog3c").src= "images/unchecked.png";
    document.getElementById("dog4c").src= "images/unchecked.png";
    document.getElementById("dog5c").src= "images/unchecked.png";
    document.getElementById("dog6c").src= "images/unchecked.png";
    document.getElementById("dog7c").src= "images/unchecked.png";
    document.getElementById("dog8c").src= "images/unchecked.png";
    document.getElementById("dog2c").src= "images/unchecked.png";
    document.getElementById("dog1").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog9").style.backgroundColor = '#cfe3ff';
    document.getElementById("dog3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("dog4").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog5").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog6").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog7").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog8").style.backgroundColor = '#f4f4f4';
    document.getElementById("dog2").style.backgroundColor = '#f4f4f4';
    document.getElementById('dog9').style.opacity=1;
    document.getElementById('dog1').style.opacity=0.6;
    document.getElementById('dog3').style.opacity=0.6;
    document.getElementById('dog4').style.opacity=0.6;
    document.getElementById('dog5').style.opacity=0.6;
    document.getElementById('dog6').style.opacity=0.6;
    document.getElementById('dog7').style.opacity=0.6;
    document.getElementById('dog8').style.opacity=0.6;
    document.getElementById('dog2').style.opacity=0.6;
    push_array('dog9c','sleepy',array,0);
    x1=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickdog9);}
    else{
        document.getElementById("dog9c").src= "images/unchecked.png";
        document.getElementById("dog9").style.backgroundColor = '#f4f4f4 '
        document.getElementById('dog1').style.opacity=1;
        document.getElementById('dog2').style.opacity=1;
        document.getElementById('dog3').style.opacity=1;
        document.getElementById('dog4').style.opacity=1;
        document.getElementById('dog5').style.opacity=1;
        document.getElementById('dog6').style.opacity=1;
        document.getElementById('dog7').style.opacity=1;
        document.getElementById('dog8').style.opacity=1;
        document.getElementById('dog9').style.opacity=1;
        x1=0;
    }

   
}
document.getElementById("dog9").addEventListener("click",clickdog9) ;


//pick a bed

function clickbed1(){
    if(document.getElementById("bed1c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed1c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed1").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed1').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    push_array('bed1c','blep',array1,1);
    x2=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed1);}
    else{
        document.getElementById("bed1c").src= "images/unchecked.png";
        document.getElementById("bed1").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
        x2=0;
    }

    console.log('click');

}
document.getElementById("bed1").addEventListener("click",clickbed1) ;


function clickbed2(){
    if(document.getElementById("bed2c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed2c").src= "images/checked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed2").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed2').style.opacity=1;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    push_array('bed2c','happy',array1,1);
    x2=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed2);}
    else{
        document.getElementById("bed2c").src= "images/unchecked.png";
        document.getElementById("bed2").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
    x2=0;
    }

    console.log('click');
    
}
document.getElementById("bed2").addEventListener("click",clickbed2) ;

function clickbed3(){
    if(document.getElementById("bed3c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed3c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed3").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed3').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    push_array('bed3c','sleeping',array1,1);
    x2=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed3);}
    else{
        document.getElementById("bed3c").src= "images/unchecked.png";
        document.getElementById("bed3").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
        x2=0;
    }

    console.log('click');
}
document.getElementById("bed3").addEventListener("click",clickbed3) ;


function clickbed4(){
    if(document.getElementById("bed4c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed4c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed4").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed4').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    push_array('bed4c','dopey',array1,1);
    x2=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed4);}
    else{
        document.getElementById("bed4c").src= "images/unchecked.png";
        document.getElementById("bed4").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
    x2=0;
    }

    console.log('click');
}
document.getElementById("bed4").addEventListener("click",clickbed4) ;


function clickbed5(){
    if(document.getElementById("bed5c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed5c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed5").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed5').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    push_array('bed5c','burger',array1,1);
    x2=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed5);}
    else{
        document.getElementById("bed5c").src= "images/unchecked.png";
        document.getElementById("bed5").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
        x2=0;
        

    }

    console.log('click');
}
document.getElementById("bed5").addEventListener("click",clickbed5) ;


function clickbed9(){
    if(document.getElementById("bed9c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed9c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed9").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed9').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    push_array('bed9c','sleepy',array1,1);
    x2=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed9);}
    else{
        document.getElementById("bed9c").src= "images/unchecked.png";
        document.getElementById("bed9").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
        x2=0;

    }

    console.log('click');
}
document.getElementById("bed9").addEventListener("click",clickbed9) ;


function clickbed6(){
    if(document.getElementById("bed6c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed6c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed6").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed6').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    push_array('bed6c','cart',array1,1);
    x2=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed6);}
    else{
        document.getElementById("bed6c").src= "images/unchecked.png";
        document.getElementById("bed6").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
        x2=0;

    }

    console.log('click');
}
document.getElementById("bed6").addEventListener("click",clickbed6) ;


function clickbed7(){
    if(document.getElementById("bed7c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed7c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed8c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed7").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed8").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed7').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed8').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    push_array('bed7c','nerd',array1,1);
    x2=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed7);}
    else{
        document.getElementById("bed7c").src= "images/unchecked.png";
        document.getElementById("bed7").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
        x2=0;

    }

   console.log('click');
}
document.getElementById("bed7").addEventListener("click",clickbed7) ;


function clickbed8(){
    if(document.getElementById("bed8c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("bed8c").src= "images/checked.png";
    document.getElementById("bed2c").src= "images/unchecked.png";
    document.getElementById("bed3c").src= "images/unchecked.png";
    document.getElementById("bed4c").src= "images/unchecked.png";
    document.getElementById("bed5c").src= "images/unchecked.png";
    document.getElementById("bed6c").src= "images/unchecked.png";
    document.getElementById("bed7c").src= "images/unchecked.png";
    document.getElementById("bed1c").src= "images/unchecked.png";
    document.getElementById("bed9c").src= "images/unchecked.png";
    document.getElementById("bed8").style.backgroundColor = '#cfe3ff ';
    document.getElementById("bed2").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("bed4").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed5").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed6").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed7").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed1").style.backgroundColor = '#f4f4f4';
    document.getElementById("bed9").style.backgroundColor = '#f4f4f4';
    document.getElementById('bed8').style.opacity=1;
    document.getElementById('bed2').style.opacity=0.6;
    document.getElementById('bed3').style.opacity=0.6;
    document.getElementById('bed4').style.opacity=0.6;
    document.getElementById('bed5').style.opacity=0.6;
    document.getElementById('bed6').style.opacity=0.6;
    document.getElementById('bed7').style.opacity=0.6;
    document.getElementById('bed1').style.opacity=0.6;
    document.getElementById('bed9').style.opacity=0.6;
    
    x2=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clickbed8);}
    else{
        document.getElementById("bed8c").src= "images/unchecked.png";
        document.getElementById("bed8").style.backgroundColor = '#f4f4f4 '
        document.getElementById('bed1').style.opacity=1;
        document.getElementById('bed2').style.opacity=1;
        document.getElementById('bed3').style.opacity=1;
        document.getElementById('bed4').style.opacity=1;
        document.getElementById('bed5').style.opacity=1;
        document.getElementById('bed6').style.opacity=1;
        document.getElementById('bed7').style.opacity=1;
        document.getElementById('bed8').style.opacity=1;
        document.getElementById('bed9').style.opacity=1;
        x2=0;

    }

    console.log('click');
}
document.getElementById("bed8").addEventListener("click",clickbed8) ;



//pick a toy

function clicktoy1(){
    if(document.getElementById("toy1c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy1c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy1").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy1').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy1c','blep',array2,2);
    x3=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy1);}
    else{
        document.getElementById("toy1c").src= "images/unchecked.png";
        document.getElementById("toy1").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
        x3=0;
    }

    console.log('click');
}
document.getElementById("toy1").addEventListener("click",clicktoy1) ;


function clicktoy2(){
    if(document.getElementById("toy2c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy2c").src= "images/checked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy2").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy2').style.opacity=1;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy2c','happy',array2,2);
    x3=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy2);}
    else{
        document.getElementById("toy2c").src= "images/unchecked.png";
        document.getElementById("toy2").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
    x3=0;
    }

    console.log('click');
    push_array('toy2c','happy',array2,2);
}
document.getElementById("toy2").addEventListener("click",clicktoy2) ;

function clicktoy3(){
    if(document.getElementById("toy3c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy3c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy3").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy3').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy3c','sleeping',array2,2);
    x3=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy3);}
    else{
        document.getElementById("toy3c").src= "images/unchecked.png";
        document.getElementById("toy3").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
        x3=0;
    }

    console.log('click');
}
document.getElementById("toy3").addEventListener("click",clicktoy3) ;


function clicktoy4(){
    if(document.getElementById("toy4c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy4c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy4").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy4').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy4c','dopey',array2,2);
    x3=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy4);}
    else{
        document.getElementById("toy4c").src= "images/unchecked.png";
        document.getElementById("toy4").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
    x3=0;
    }

    console.log('click');
}
document.getElementById("toy4").addEventListener("click",clicktoy4) ;


function clicktoy5(){
    if(document.getElementById("toy5c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy5c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy5").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy5').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy5c','burger',array2,2);
    x3=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy5);}
    else{
        document.getElementById("toy5c").src= "images/unchecked.png";
        document.getElementById("toy5").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
        x3=0;
        

    }

    console.log('click');
}
document.getElementById("toy5").addEventListener("click",clicktoy5) ;


function clicktoy9(){
    if(document.getElementById("toy9c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy9c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy9").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy9').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    push_array('toy9c','sleepy',array2,2);
    x3=1;
    score();
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy9);}
    else{
        document.getElementById("toy9c").src= "images/unchecked.png";
        document.getElementById("toy9").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
        x3=0;

    }

    console.log('click');
}
document.getElementById("toy9").addEventListener("click",clicktoy9) ;


function clicktoy6(){
    if(document.getElementById("toy6c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy6c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy6").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy6').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy6c','cart',array2,2);
    x3=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy6);}
    else{
        document.getElementById("toy6c").src= "images/unchecked.png";
        document.getElementById("toy6").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
        x3=0;

    }

    console.log('click');
}
document.getElementById("toy6").addEventListener("click",clicktoy6) ;


function clicktoy7(){
    if(document.getElementById("toy7c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy7c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy8c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy7").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy8").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy7').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy8').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy7c','nerd',array2,2);
    x3=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy7);}
    else{
        document.getElementById("toy7c").src= "images/unchecked.png";
        document.getElementById("toy7").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
        x3=0;

    }

   console.log('click');
}
document.getElementById("toy7").addEventListener("click",clicktoy7) ;


function clicktoy8(){
    if(document.getElementById("toy8c").getAttribute("src") == "images/unchecked.png"&& (x1+x2+x3!=3)){
    document.getElementById("toy8c").src= "images/checked.png";
    document.getElementById("toy2c").src= "images/unchecked.png";
    document.getElementById("toy3c").src= "images/unchecked.png";
    document.getElementById("toy4c").src= "images/unchecked.png";
    document.getElementById("toy5c").src= "images/unchecked.png";
    document.getElementById("toy6c").src= "images/unchecked.png";
    document.getElementById("toy7c").src= "images/unchecked.png";
    document.getElementById("toy1c").src= "images/unchecked.png";
    document.getElementById("toy9c").src= "images/unchecked.png";
    document.getElementById("toy8").style.backgroundColor = '#cfe3ff ';
    document.getElementById("toy2").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy3").style.backgroundColor = '#f4f4f4 ';
    document.getElementById("toy4").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy5").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy6").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy7").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy1").style.backgroundColor = '#f4f4f4';
    document.getElementById("toy9").style.backgroundColor = '#f4f4f4';
    document.getElementById('toy8').style.opacity=1;
    document.getElementById('toy2').style.opacity=0.6;
    document.getElementById('toy3').style.opacity=0.6;
    document.getElementById('toy4').style.opacity=0.6;
    document.getElementById('toy5').style.opacity=0.6;
    document.getElementById('toy6').style.opacity=0.6;
    document.getElementById('toy7').style.opacity=0.6;
    document.getElementById('toy1').style.opacity=0.6;
    document.getElementById('toy9').style.opacity=0.6;
    push_array('toy8c','shy',array2,2);
    x3=1;
    score();
    
    }
    else if(x1+x2+x3==3){ document.removeEventListener('click',clicktoy8);}
    else{
        document.getElementById("toy8c").src= "images/unchecked.png";
        document.getElementById("toy8").style.backgroundColor = '#f4f4f4 '
        document.getElementById('toy1').style.opacity=1;
        document.getElementById('toy2').style.opacity=1;
        document.getElementById('toy3').style.opacity=1;
        document.getElementById('toy4').style.opacity=1;
        document.getElementById('toy5').style.opacity=1;
        document.getElementById('toy6').style.opacity=1;
        document.getElementById('toy7').style.opacity=1;
        document.getElementById('toy8').style.opacity=1;
        document.getElementById('toy9').style.opacity=1;
        x3=0;

    }

    console.log('click');
}
document.getElementById("toy8").addEventListener("click",clicktoy8) ;






    
    
    














    

