var VueModifierConcert = function(){
	this.afficher = function(concert, actionModifierConcert){
		$("body").html(VueModifierConcert.html);
		
		$("#concert-artiste").val(concert.artiste);
		
		$("#concert-lieu").val(concert.lieu);
		
		$("#concert-date").val(concert.date);
		
		$("#formulaire-modifier").on("submit", $.proxy(this.modifierConcert, this));
		
		this.actionModifierConcert = actionModifierConcert;		
		
		this.concert = concert;
	}
	
	this.modifierConcert = function(){
		
		var artiste = $("#concert-artiste").val();
		
		var lieu = $("#concert-lieu").val();
		
		var date = $("#concert-date").val();
		
		var concert = new Concert(id = this.concert.id, artiste, lieu, date);
		
		this.actionModifierConcert(concert);
		
		window.location.hash = "";
		event.preventDefault();
	}	
		
		
	
}
VueModifierConcert.html = $("#page-modifier-concert").html();