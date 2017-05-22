$(document).ready(function(){

	$('#inputText').keypress(function(ev){
		if(ev.which === 13){
			if( !$(this).val() ){
				alert("Enter a zip code with up to 5 numbers");
			} else {
				validator();
			}
		}
	});

	function validator(){

		var temp = { code: $('#inputText').val() }
		$.ajax({
			method: "POST",
			url: "/validate",
			data: temp,
			dataType: "json",
			success: function(data){
				if (data.answer == false) {

					alert("Zip code entered is invalid");
					$('#inputText').val('');

				} else {
					
					alert("Zip code entered is valid");

				}
			}
		});
	}

	$('#go').on("click", function() {
		if(!$(this).val()){
			alert("Enter a zip code with up to 5 numbers");
		} else {
			validator();
		}
	});

});
