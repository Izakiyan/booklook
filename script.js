var fetch = function (newIsbn) {
	var _url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + newIsbn;
	$.ajax({
  method: "GET",
  url: _url,
  dataType: "json",
  success: function(data) {
    console.log(data);
    listBook(data);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
  }
}); 
}


$('.btn-primary').on('click',function (){
	var newIsbn = $('#isbn').val();
	fetch(newIsbn);
	//newIsbn = $('#txtIsbn').val('');
});

var listBook = function (data) {
	if(totalItems){
		var newBook = {
		bookName: data.items[0].volumeInfo.title,
		time: data.items[0].volumeInfo.pageCount,
		desc: data.items[0].volumeInfo.description,
		author: data.items[0].volumeInfo.authors,
		image: data.items[0].volumeInfo.imageLinks.thumbnail
	}
	var source = $('#book-template').html();
	var template = Handlebars.compile(source);
	var newHTML = template(newBook);
	$('#info-book').append(newHTML);
}
};
// var newBook = {
// 	bookName: "The Hunger Games",
// 	time: 25,
// 	desc: "The Hunger Games takes place in a nation known as Panem, established in North America after the destruction of the continent's civilization by an unknown apocalyptic event.",
// 	author: "Suzanne Collins",
// 	image: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg"
// }


// var source = $('#book-template').html();
// var template = Handlebars.compile(source);
// var newHTML = template(newBook);
// $('#info-book').append(newHTML);