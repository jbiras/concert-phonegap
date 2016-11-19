var VueListeConcerts = function(liste_concerts){
	 
	 this.afficher = function(){
		var page_liste_concerts = VueListeConcerts.html;
		$("body").html(page_liste_concerts);
		var html_liste_concerts = $("#liste-concerts");
		var htmlEnConstruction = "";
		
		for(var no_concert in liste_concerts) {
			htmlEnConstruction += VueListeConcerts.html_item.replace("{ID}", liste_concerts[no_concert].id)
															.replace("{ARTISTE}", liste_concerts[no_concert].artiste)
															.replace("{IDM}", liste_concerts[no_concert].id);
		}
		
		html_liste_concerts.html(htmlEnConstruction);
	}
}

VueListeConcerts.html = $("#page-liste-concerts").html();
VueListeConcerts.html_item = $("#item-liste-concerts").html();