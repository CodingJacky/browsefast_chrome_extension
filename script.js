//extracting all webpage link dom elements in an array
let eles = document.querySelectorAll(`.LC20lb.MBeuO.MMgsKf,
          .LC20lb.MBeuO.DKV0Md:not(div.MBtdbb .LC20lb.MBeuO.DKV0Md),
          .fc9yUc.tNxQIb.ynAwRc.OSrXXb,
          .lSegpf.tNxQIb.ynAwRc`);

//index in eles that signifies current active hyperlink
let current = -1;


if(eles) { //if we are in a google search page..

     document.addEventListener(
          "keypress",
          (event) => {
               
               //actions should not be taken when input is being given in webpage
               if(document.activeElement.tagName == 'INPUT') return; 
                    
               if(event.key == 'a') {
                    history.go(-1);
               }
                    
               else if(event.key == 'd') {
                    history.go(1);
               }
                    
               else if (event.key == "s") {
                    if(current  == eles.length - 1) return;
                    if (current >= 0) eles[current].style.textDecoration = null; //remove underline 
                    current++;
                    eles[current].style.textDecoration = "underline";
                    eles[current].tabIndex = -1;  //tab wont affect the focus
                    eles[current].focus();
               }
                    
               else if(event.key == "w") {
                    if(current==0) return;
                    if(current==-1) current = 1;
                    else if (current > 0) eles[current].style.textDecoration = null;
                    current--;
                    eles[current].style.textDecoration = "underline";
                    eles[current].tabIndex = -1;
                    eles[current].focus();
               }
                    
               else if(event.key == "Enter") {
                    eles[current].click();
               }
                    
          },
             
          false //event capture does not take place
     );
}
