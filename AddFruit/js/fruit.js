var fruits = ['banana','orange','apple','pear'];
function loadFruits() {
	// body...
	document.getElementById('fruits').innerHTML = fruits;
}

function myFunction() {
	// body...
	var fruit = prompt("what is your fav?");
	fruits[fruits.length] = fruit;
	document.getElementById('fruits').innerHTML = fruits;
}

function deleteFruit() {
	// body...
	fruits.pop();
	document.getElementById('fruits').innerHTML = fruits;
}