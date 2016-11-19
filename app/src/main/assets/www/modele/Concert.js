var Concert = function(id, artiste, lieu, date){
	
	this.construire = function(){
		this.id = id;
		this.artiste = artiste;
		this.lieu = lieu;
		this.date = date;
	}
	
	this.construire();
}