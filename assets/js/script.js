$(document).ready(function(){
	$("button").click(function(e) {
			e.preventDefault();
			var name = $("#nombre").val();
			var message = $("#mensaje").val();
			if (name == "" && message == "") {
				alert("Debes escribir tu nombre y mensaje");
			} else {
				$("#comentarios").append('<div class="card red-text text-lighten-1 comentario col s8 offset-s2 white"><div class="card-content"><span class="card-title center-align">' + name + '</span><p class="center-align">' + message + '</p></div></div>');
			}
		});
});
