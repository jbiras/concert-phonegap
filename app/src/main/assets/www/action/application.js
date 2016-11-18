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
		else if(ancre.match(/^#ajouter-concert/)){
			
			this.vueAjouterConcert = new VueAjouterConcert();
			this.vueAjouterConcert.afficher();
		}
		else{
			var trouvailles = ancre.match(/^#concert\/([0-9]+)/);
			var id_concert = trouvailles[1];
			var concert = this.concertDAO.trouverCadeauParId(id_concert);
			this.vueDetailsConcert = new VueDetailsConcert(concert);
			this.vueDetailsConcert.afficher();
		}
		
	}
};

applicationListeConcerts.lancer();