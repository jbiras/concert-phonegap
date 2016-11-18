var VueAjouterConcert = function(){
	this.afficher = function(){
		$("body").html(VueAjouterConcert.html);
	}	
}
VueAjouterConcert.html = $("#page-ajouter-concert").html();