var newBook = {
	bookName: "The Hunger Games",
	time: 25,
	desc: "The Hunger Games takes place in a nation known as Panem, established in North America after the destruction of the continent's civilization by an unknown apocalyptic event.",
	author: "Suzanne Collins",
	image: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg"
}


var source = $('#book-template').html();
var template = Handlebars.compile(source);
var newHTML = template(newBook);
$('#info-book').append(newHTML);