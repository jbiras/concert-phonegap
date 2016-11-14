var VueDetailsConcert = function(concert){
	this.afficher = function(){
		var htmlEnConstruction = 
		VueDetailsConcert.html
		.replace("{ARTISTE}", concert.artiste)
		.replace("{LIEU}", concert.lieu)
		.replace("{DATE}",concert.date);
		
		$("body").html(htmlEnConstruction);
		
		
	}
}

VueDetailsConcert.html = $("#page-concert").html();