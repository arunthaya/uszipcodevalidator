$(document).ready(function(){

	$('#inputText').keypress(function(ev){
		if(ev.which === 13){
			validator();
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
					alert("ZIP Code doesn't exist");
				} else {
					alert("Zip code does exist");
				}
			}
		});
	}

	$('#go').on("click", validator);

});