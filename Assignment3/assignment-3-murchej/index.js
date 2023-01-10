/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Joseph Murche
 * Email: murchej@oregonstate.edu
 */


var textInput = document.getElementById('twit-text-input');
var authorInput = document.getElementById('twit-attribution-input');

var searchButton = document.getElementById('navbar-search-button');
var searchBarInput = document.getElementById("navbar-search-input");

var modalCloseButton = document.getElementsByClassName('modal-close-button');
var modalCancelButton = document.getElementsByClassName('modal-cancel-button');
var modalAcceptButton = document.getElementsByClassName('modal-accept-button');
var twitButton = document.getElementById('create-twit-button');

var twitsArray = document.querySelectorAll(".twit")
var twitTextArray = document.getElementsByClassName("twit-text");
var twitAuthorArray = document.getElementsByClassName("twit-author");
/*--------------------------------------------------------------------------*/



var modalToggle = function(){

    var modalToggle = document.querySelectorAll('#modal-backdrop, #create-twit-modal');
    
    modalToggle.forEach((element) => {element.classList.toggle("hidden")});
}



function clearText(){
    
    textInput.value="";
    authorInput.value ="";
  }



twitButton.addEventListener('click', function(){

    document.getElementById("navbar-search-input").value = "";
    document.getElementById("twit-text-input").value = "";
    document.getElementById("twit-attribution-input").value = "";
    
    removeTwits();

    addTwits();

    modalToggle();

    document.querySelector(".modal-accept-button").onclick = function() {
   

    if(textInput.value == "" || authorInput.value == ""){
            
        alert("Error: You must complete the required fields.");
    }
        else {
            insertTwit(textInput, authorInput);
            
            modalToggle();
        }
    }

});



modalCloseButton[0].addEventListener('click', function(){

    modalToggle();
    clearText();
});



modalCancelButton[0].addEventListener('click', function(){

    modalToggle();
    clearText();
});



searchBarInput.addEventListener("input", function(){

    removeTwits();
        
    searchBarInput = document.getElementById("navbar-search-input").value;
     
    var userInput = searchBarInput;

    userInput = searchBarInput.toLowerCase();

    var container = document.querySelector(".twit-container");
    
   for(var i = twitsArray.length-1; i >=0; i--)
        
         textInput = twitsArray.querySelector(".twit-text").textContent;

         textInput = textInput.toLowerCase();
        
         authorInput = twitsArray.querySelector(".twit-author").textContent;

         authorInput = authorInput.toLowerCase();
 
       if ((textInput.includes(userInput) == false) && (authorInput.includes(userInput) == false)) {
          
        twitsArray[i].remove();
       }
       
    });



function insertTwit(textInput, authorInput){


        
        var twitDivIcon = document.createElement('div');
        twitDivIcon.classList.add("twit-icon");
        newTwit.appendChild(twitDivIcon);
        
        var bullhorn = document.createElement('i');
        bullhorn.classList.add("fa");
        bullhorn.classList.add("fa-bullhorn");
        twitDivIcon.appendChild(bullhorn);

        var twitDivContent = document.createElement('div');
        twitDivContent.classList.add("twit-content");
        twitDivContent.appendChild(twitDivContent);

        var newTwit = document.createElement('article');
        newTwit.classList.add("twit");
        newTwit.appendChild(bullhorn);
        newTwit.appendChild(twitDivContent)

        var twitText = document.createElement('p');
        twitText.classList.add("twit-text");
        var userInput = document.createTextNode(textInput.value);
        twitText.appendChild(userInput);
        twitDivContent.appendChild(twitText);

        var twitAuthor = document.createElement('p');
        twitAuthor.classList.add("twit-author");
        var authorText = document.createTextNode(authorInput.value);
        twitAuthor.appendChild(authorText);
        twitDivContent.appendChild(twitAuthor);
        var aLink = document.createElement('a');
        aLink.appendChild(authorText);
        aLink.href = "#";
        twitAuthor.appendChild(aLink);

        var container = document.querySelector(".twit-container")
        container.appendChild(twit)
        twitsArray = document.querySelectorAll(".twit")

    }


    var addTwits = function() {
        
        removeTwits();
        
        let container = document.querySelector(".twit-container");

        let curr = document.querySelectorAll(".twit");
        
    
        for(let i = curr.length - 1; i >= 0; i--){
            
        container.appendChild(newTwit);
        
        }

    }

    var removeTwits = function() {
        
        let container = document.querySelector(".twit-container");
        
        let curr = document.querySelectorAll(".twit");
        
        for(let i = curr.length - 1; i >= 0; i--) {
            
            container.removeChild(curr[i]);
        }
    }



    


    
