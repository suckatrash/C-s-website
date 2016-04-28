var cowsayQuote = function(){
  $.ajax({
      method: "POST",
      async: false,
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Accept' : 'application/json',
        'X-Mashape-Key' : 'MQESq9XzHcmshnvbU6B7F91dVS6np108eMCjsnE2TRQunpOFqK'
      }
    }).then(function(response){
      var responseObj = JSON.parse(response);
      var quote = responseObj.quote + " - " + responseObj.author;
      var twitterShare = "http://twitter.com/intent/tweet?url=none&via=tek9k&text=" + encodeURIComponent(quote);
    $("#twitter-link").attr("href", twitterShare);
      
      return $.ajax({
      url: "https://helloacm.com/api/cowsay/?msg=" + quote + "&f=stimpy"
    })
    }).then(function(quote){
      $("#quote").append(quote);
    });
};

$(function(){
  cowsayQuote();
  $("#new-quote").on('click', function(e){
    e.preventDefault();
    $('#quote').html('');
    cowsayQuote();
  });
});
