var applicationListeConcerts = {
	
	lancer:function(){
		
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		
		if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)){
			$(document).on("deviceready", null, $.proxy(this.initialiserPourDonnees,this), false);
		}else{
			this.initialiserPourDonnees();
		}
		
			
	},
	
	initialiserPourDonnees:function(){
		this.concertDAO = new ConcertDAO();
		this.naviguer();
	},
	
	naviguer:function(){
		var ancre = window.location.hash;
		
		if(!ancre){
			this.concertDAO.listerTousLesConcerts($.proxy(this.afficherLesConcerts, this));
		}
		else if(ancre.match(/^#ajouter-concert/)){
			
			this.vueAjouterConcert = new VueAjouterConcert();
			this.vueAjouterConcert.afficher($.proxy(this.sauvegarderNouveauConcert, this));
		}
		else if(ancre.match(/^#modifier\/([0-9]+)/)){
			var trouvailles = ancre.match(/^#modifier\/([0-9]+)/);
			var id_concert = trouvailles[1];
			var concert = this.concertDAO.trouverCadeauParId(id_concert);
			this.vueModifierConcert = new VueModifierConcert(concert);
			this.vueModifierConcert.afficher(concert, $.proxy(this.modifierUnConcert, this));
			
		}
		else{
			var trouvailles = ancre.match(/^#concert\/([0-9]+)/);
			var id_concert = trouvailles[1];
			var concert = this.concertDAO.trouverCadeauParId(id_concert);
			this.vueDetailsConcert = new VueDetailsConcert(concert);
			this.vueDetailsConcert.afficher();
		}
		
	},
	
	afficherLesConcerts:function(liste_concerts){
		this.vueListeConcerts = new VueListeConcerts(liste_concerts);
		this.vueListeConcerts.afficher();
	},
	
	sauvegarderNouveauConcert:function(concert){
		this.concertDAO.ajouterConcert(concert);
	},
	
	modifierUnConcert:function(concert){
		this.concertDAO.modifierConcert(concert);
	}
};

applicationListeConcerts.lancer();