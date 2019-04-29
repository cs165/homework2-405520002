// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});
var x=1;
var content=document.querySelectorAll('.tweet');
const url = chrome.runtime.getURL('images/rose-cursor.gif');
const url2 = chrome.runtime.getURL('images/sparkle.gif');
function onMessage(gardeningInProgress) {
 for(i=0;i<content.length;i++){ 
  if(content[i].style.cursor=='url("chrome-extension://hjnhcpclleglldfbhebfpkoamjekehmm/images/rose-cursor.gif") 4 12, auto'){
    content[i].style.cursor='';
    content[i].style.backgroundImage='';
    event.stopPropagation();
    console.log(content[i].style.cursor);
    console.log(content[i].style.backgroundImage+'1');
    console.log('IF');
    console.log(x);
    x=0;

  }

  else if(content[i].style.cursor=='') {
     content[i].style.cursor='url(' + url + ') 4 12, auto';
      content[i].style.backgroundImage='url(' + url2 + ') ';
      content[i].style.backgroundImage.opacity=0.6;
      console.log('else');
      console.log(content[i].style.cursor);
      console.log(content[i].style.backgroundImage+'2');
      console.log(content[i].nodeName);
      event.stopPropagation();
    }

    
  
}





 
    
 // else if(content.style.backgroundColor='black'){content.style.backgroundColor='white'; 
  //console.log('ELSE');}
 // content.removeEventListener('mouseover',onMessage);


  // TODO(you): Implement this function for extra credit! Add helper functions
  // as needed.

  // NOTE: This extension is EXTRA CREDIT and is not required for HW2.

  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
}
addEventListener('mouseover',onMessage);
addEventListener('mouseout',onMessage);

console.log('Evil extension loaded!');
console.log('Extension updated');
