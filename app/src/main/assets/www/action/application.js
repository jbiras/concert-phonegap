var applicationListeConcerts = {
	
	lancer:function(){
		this.concertDAO = new ConcertDAO();
		this.liste_concerts = this.concertDAO.listerTousLesConcerts();
		
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		
		this.naviguer();
		
	},
	
	naviguer:function(){
		var ancre = window.location.hash;
		
		if(!ancre){
			this.vueListeConcerts = new VueListeConcerts(this.liste_concerts);
			this.vueListeConcerts.afficher();
		}
		
	}
};

applicationListeConcerts.lancer();