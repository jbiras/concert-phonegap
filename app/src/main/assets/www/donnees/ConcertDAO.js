var ConcertDAO = function(){
	
	this.liste_concerts = [
		{"id":1, "artiste":"System of a Down", "date","16/12/2016"},
		{"id":2, "artiste":"Eminem", "date","9/12/2016"}
	]
	
	this.listerTousLesConcerts = function(){
		return this.liste_concerts;
	}
	
};