// $(function() {
// 	function labelfocusout () {
// 		alert("hih");
// 	}
// });


$(document).on("focusout", "textarea", function(){

	if ($(this).val() == "") {
		$(this).val("Bitte Inhalte des Coachings kurz und knapp beschreiben.");
	}
})

$(document).on("focusin", "textarea", function(){

	if ($(this).val() == "Bitte Inhalte des Coachings kurz und knapp beschreiben.") {
		$(this).val("");
	}

	// if (($(this).val() === "") && ($(this).next().hasClass("normalinput"))) {
	// 	$(this).next().css({"top": "-75px",
	// 					"font-size": "1.5em",
	// 					"transition": "all .2s",
	// 					"font-style": "italic",
	// 					"color": "black"});
	// }
})

