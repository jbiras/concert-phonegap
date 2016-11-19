var VueAjouterConcert = function(concert){
	this.afficher = function(actionAjouterConcert){
		$("body").html(VueAjouterConcert.html);
		
		$("#formulaire-ajouter").on("submit", $.proxy(this.ajouterConcert, this));
		
		this.actionAjouterConcert = actionAjouterConcert;		
	}
	
	this.ajouterConcert = function(){
		
		var artiste = $("#concert-artiste").val();
		
		var lieu = $("#concert-lieu").val();
		
		var date = $("#concert-date").val();
		
		var concert = new Concert(id = null, artiste, lieu, date);
		
		this.actionAjouterConcert(concert);
		
		window.location.hash = "";
		event.preventDefault();
	}	
		
		
	
}
VueAjouterConcert.html = $("#page-ajouter-concert").html();