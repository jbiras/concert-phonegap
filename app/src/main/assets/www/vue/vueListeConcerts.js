var VueListeConcerts = function(){
	 
	 this.afficher = function(){
		var page_liste_concerts = VueListeConcerts.html;
		$("body").html(page_liste_concerts);
		var html_liste_concerts = $("#liste-concerts");
		var htmlEnConstruction = "";
		
		for(var no_concert in liste_concerts) {
			htmlEnConstruction += VueListeConcerts.html_item.replace("{ID}", liste_cadeaux[no_cadeau].id)
															.replace("{ARTISTE}", liste_cadeaux[no_cadeau].artiste);
		}
		
		html_liste_concerts.html(htmlEnConstruction);
	}
}

VueListeConcerts.html = $("#page-liste-concerts").html();
VueListeConcerts.html_item = $("#item-liste-concerts").html();