var ConcertDAO = function(){
	
	this.liste_concerts = [
		{"id":1, "artiste":"System of a Down", "lieu":"Cegep de Matane" ,"date":"16/12/2016"},
		{"id":2, "artiste":"Eminem", "lieu":"Cegep de Matane" ,"date":"9/12/2016"}
	]
	
	this.listerTousLesConcerts = function(){
		return this.liste_concerts;
	}
	
	this.trouverCadeauParId = function(id_concert){
		for(var no_concert in this.liste_concerts) {
			if(this.liste_concerts[no_concert].id == id_concert){
				return this.liste_concerts[no_concert];
			}
			
		}
	}
	
	this.ajouterConcert = function(concert){
		this.liste_concerts[this.liste_concerts.length] = 
			{"id":this.liste_concerts.length+1,
			 "artiste":concert.artiste,
			 "lieu":concert.lieu,
			 "date":concert.date};
	}
};