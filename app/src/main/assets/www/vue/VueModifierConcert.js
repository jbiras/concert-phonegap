var VueModifierConcert = function(concert){
	this.afficher = function(concert, actionAjouterConcert){
		$("body").html(VueModifierConcert.html);
		
		$("#formulaire-modifier").on("submit", $.proxy(this.modifierConcert, this));
		
		this.actionModifierConcert = actionModifierConcert;		
	}
	
	this.modifierConcert = function(){
		
		var artiste = $("#concert-artiste").val();
		
		var lieu = $("#concert-lieu").val();
		
		var date = $("#concert-date").val();
		
		var concert = new Concert(id = null, artiste, lieu, date);
		
		this.actionModifierConcert(concert);
		
		window.location.hash = "";
		event.preventDefault();
	}	
		
		
	
}
VueModifierConcert.html = $("#page-modifier-concert").html();