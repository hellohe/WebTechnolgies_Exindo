// JavaScript Document
//refresh the stars and text values
function set_votes(widget, isPresent, ratingStar) {
	var votes = $(widget).data('fsr').number_votes;
	var exact = $(widget).data('fsr').dec_avg;
	var avg = Math.round(exact);
	
	//window.console && console.log('and now in set_votes, it thinks the fsr is ' + $(widget).data('fsr').number_votes);
	
	$(widget).find('.star_' + avg).prevAll().andSelf().addClass('ratings_vote');
	$(widget).find('.star_' + avg).nextAll().removeClass('ratings_vote'); 
	$(widget).find('.total_votes').text(votes + " votes recorded (" + exact + " rating)" );
	if(isPresent){
		$(widget).find('.prev_vote').text("You had voted " + $(widget).data("fsr").widget_id + " with " + ratingStar + " stars");
	}
}