var ConcertDAO = function(){
	
	this.liste_concerts = [];
	
	this.initialiser = function(){
		
		this.baseDeDonnees = window.openDatabase("ListeConcert", "1.0", "Liste des concerts", 200000);
		
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_CREATION = "CREATE TABLE IF NOT EXISTS concert(id INTEGER PRIMARY KEY AUTOINCREMENT, artiste VARCHAR(50), lieu VARCHAR(50), date VARCHAR(10))";				
				
				operation.executeSql(SQL_CREATION);
				
			},
			this.reagirErreur,
			this.reagirSucces
		
		);
	}
	
	this.ajouterConcert = function(concert){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_AJOUT = "INSERT INTO concert (artiste, lieu, date) VALUES (?,?,?)";
				var parametres = [concert.artiste, concert.lieu, concert.date];
				operation.executeSql(SQL_AJOUT, parametres);				
			},
			this.reagirErreur,
			this.reagirSucces
		
		);
	}
	
	this.modifierConcert = function(concert){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_MODIFICATION = "UPDATE concert SET artiste = ?, lieu = ?, date = ? WHERE id = ?";
				var parametres = [concert.artiste, concert.lieu, concert.date, concert.id];
				operation.executeSql(SQL_MODIFICATION, parametres);
			},
			this.reagirErreur,
			this.reagirSucces			
		);
	}
	
	this.listerTousLesConcerts = function(finalisation){
		var self = this;
		
		self.baseDeDonnees.transaction(
			function(operation){
				var SQL_SELECTION = "SELECT * FROM concert";
				operation.executeSql(SQL_SELECTION, [], function(operation, resultat){
					self.liste_concerts = [];
					for(var position = 0; position<resultat.rows.length; position++){
						var enregistrementConcert = resultat.rows.item(position);
						var concert = new Concert(
							enregistrementConcert.id,
							enregistrementConcert.artiste,
							enregistrementConcert.lieu,
							enregistrementConcert.date
						);
						self.liste_concerts[self.liste_concerts.length] = concert;
					}
					
				});
				
				
			},
			this.reagirErreur,
			function(){
				finalisation(self.liste_concerts);
			}		
		);
	}
	
	
	this.reagirErreur = function(erreur){
		console.log("ERREUR:SQL: "+ erreur.code + " : "+erreur.message);
	}
	
	this.reagirSucces = function(){
		console.log("SUCCES SQL YOLO");
	}
	
	this.initialiser();
	
	this.trouverCadeauParId = function(id_concert){
		for(var no_concert in this.liste_concerts) {
			if(this.liste_concerts[no_concert].id == id_concert){
				return this.liste_concerts[no_concert];
			}
			
		}
	}
};