/*Utilizzare l’API: https://www.boolean.careers/api/array/basket?n=numberPlayers
Chiedere all’utente quanti giocatori vuole generare. Chiedere all’API i giocatori e stampare a schermo una card per ogni giocatore attraverso handlebars.
Inizialmente chiamate l'API con un numero fisso stabilito da voi, in modo da interrogare l'API nel modo corretto e stilare le card.
Poi aggiungete la richiesta del numero dei giocatori all'utente*/

var domandaUtente = parseInt(prompt("Quanti giocatori vuoi generare da 1 a 100?"));
$.ajax({
  "url":"https://www.boolean.careers/api/array/basket?n=numberPlayers",
  "data": {
  "n": domandaUtente
  },
  "method": 'GET',
  "success": function(data){
    var ajax = data.response;
    console.log(ajax);

    for (var i = 0; i < ajax.length; i++) {

      var casella = $(".list-template .container").clone();
      var codiceGiocatore = ajax[i].playerCode;
    }
      console.log(codiceGiocatore);
})
