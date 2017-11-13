
//Pętla nie działa, tylko nie mam pojęcia dlaczego?

console.log(document);

var withButtonClass = document.getElementsByClassName('button');

console.log(withButtonClass);

var numberOfElements = document.getElementsByClassName('button').length;
console.log(numberOfElements);

for ( var x = 0 ; x < numberOfElements ; x++ ) { 
	console.log(withButtonClass[x].innerText);
}
