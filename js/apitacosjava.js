
	$("#getRandom").on("click", function(){

	$.ajax({
	  url: "https://developers.zomato.com/api/v2.1/cities?q=Boston&user-key68ccc8f12a9815213fdc3fc36f9026c1",
	  // Work with the response
	  success:function( response ) {
	    console.log( response ); // server response
	  },
	  error: function(error){
	    console.log(error)
	  }
	  });
});


// 68ccc8f12a9815213fdc3fc36f9026c1
