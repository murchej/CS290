/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.  This is not required for your grade on this
 * assignment, but it'll allow you to have the full experience of the site
 * as we've implemented it so far.
 */


var newTwit = document.getElementById('create-twit-modal');
var modal = document.getElementById('modal-backdrop');

var textInput = document.getElementById('twit-text-input');
var authorInput = document.getElementById('twit-attribution-input')

var searchTwits = document.getElementById('navbar-search-input');
var searchButton = document.getElementById('navbar-search-button');

var modalCloseButton = document.getElementByClassName('modal-close-button');
var modalCancelButton = document.getElementByClassName('modal-cancel-button');
var modalAcceptButton = document.getElementByClassName('modal-accept-button');

var originalList;
var listLength;
var twitArray = [];
var authorArray = [];
/*--------------------------------------------------------------------------*/


function toggleTwitActivity(){
    
    modal.classList.toggle("hidden");
    newTwit.classList.toggle("hidden");

  
    textInput.value = "";
    authorInput.value = "";
}


modalCloseButton[0].addEventListener('click', toggleTwitActivity);
modalCancelButton[0].addEventListener('click', toggleTwitActivity);
modalAcceptButton[0].addEventListener('click', createTwit);

searchInput[0].addEventListener('input', searchTwits);
searchButton[0].addEventListener('click', searchTwits);



function saveOriginalTwits(){
    
    originalList = document.getElementsByClassName("twit");
    listLength = originalList.length;

    var tempTwits = document.getElementsByClassName("twit-text");
    var tempAuthors = document.getElementsByClassName("twit-author");

    
    twitArray = [];
    authorArray = [];

    for(var i = 0; i < listLength; i++){
        
        twitArray.push(tempTwits[i].innerText.toString());
        authorArray.push(tempAuthors[i].innerText.toString());
    }

  
}


function createTwit(text, author){

    if(text === "" || author === ""){

        alert("Please enter values for all boxes before continuing.");
    }

    else{

        var twitContainer = document.getElementsByClassName('twit-container');
        var twitArticle = document.createElement('article');
        var twitDivIcon = document.createElement('div');
        var twitIICon = document.createElement('i');
        var twitDivContent = document.createElement('div');
        var twitText = document.createElement('p');
        var twitAuthor = document.createElement('p');
        var twitAuthorA = document.createElement('a');

        /*---------------------------------------------*/

        twitArticle.appendChild(twitDivIcon);
        twitArticle.appendChild(twitDivContent);
        twitDivIcon.appendChild(twitIICon);
        twitDivContent.appendChild(twitText);
        twitDivContent.appendChild(twitAuthor);
        twitAuthor.appendChild(twitAuthorA);
        twitContainer[0].appendChild(twitArticle);
        twitText.appendChild(document.createTextNode(tweet));
        twitAuthorA.appendChild(document.createTextNode(author));

        /*---------------------------------------------*/

        twitArticle.classList.add("twit");
        twitDivIcon.classList.add("twit-icon");
        twitIICon.classList.add("fas");
        twitIICon.classList.add("fa-bullhorn");
        twitDivContent.classList.add("twit-content");
        twitText.classList.add("twit-text");
        twitAuthor.classList.add("twit-author");
        twitAuthorA.href = '#';
    

    }

    saveOriginalTwits();
    toggleTwitActivity();

}



function searchTwits(){
    
    var searchValue = searchInput.value.toLowerCase();
    
    if(search !== ""){
        
        console.log("...searching...");
        
    for(var i = listLength-1; i > -1; i--){
            
    if(!(twitArray[i].toLowerCase().includes(searchValue) || authorArray[i].toLowerCase().includes(searchValue))){
                
            originalList[i].remove();
        }
    }
}
}


function searchReset(){

    var twitContainer = document.getElementsByClassName('twit-container');

    for(var i = 0; i < tempTwits.length; i++){

        twitContainer[0].append(tempTwits[i]);
    }

    tempTwits = [];
}

alert('JS successfully loaded.');
