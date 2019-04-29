const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};
var array=[];

function transformTextNodes(node) {
  var content2=document.querySelector('body').innerHTML.split(/\s+/);
  console.log(content2);
 
 
 
  
for(let i =0;i<content2.length;i++){
  for(let j=0;j<=8;j++){
    if(content2[i]===(Object.keys( MATCH_LIST )[j])){
    content2[i]=content2[i].replace((Object.keys( MATCH_LIST )[j]),Object.values( MATCH_LIST )[j]);
    break;
    
  }
    else{content2[i]=content2[i].replace(content2[i],content2[i]);
    console.log(Object.keys( MATCH_LIST )[j]);
    console.log(content2[i]);}

    }
   }

   console.log(content2);
   document.querySelector('body').innerHTML=content2.join('  ');
  
   
    
    

    //console.log(content);

  

  // TODO(you): Implement this function! See HW spec for details.
}


transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
