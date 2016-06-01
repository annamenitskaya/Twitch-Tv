var accounts = ["freecodecamp", "moonducktv", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "Starladder1", "Sing_sing", "Homicidal_Queen"]
  /* $.getJSON('https://api.twitch.tv/kraken/streams/Starladder1?callback=?', function(data) {
  console.log(data);
}); */
 

accounts.forEach(function(account) {
      return $.getJSON('https://api.twitch.tv/kraken/channels/' + account + "/?callback=?", function(data) { 
        $.getJSON('https://api.twitch.tv/kraken/streams/' + account + "/?callback=?", function(data1) {
         
           if(data.logo==null) {
             data.logo = 'http://www.dreveterinary.com/lib/img/placeholder_large.png';
           
   }
          var userUrl=  'http://twitch.tv/' + account; 
        
           
          if(data1.stream==null) {
            data.status = "offline"; 
                 
         
         
           
         $('#offline').append('<div id="block">' + '<img src="' + data.logo + '"></img>' + '<span id="name">' + '<a href=' + userUrl +'>' +  data.display_name + '</a>' + '</span>'+  '<span id="status">' + data.status  + '</span>' +  '</div>');
           
          }
          
          else {
             $('#online').append('<div id="block">' + '<img src="' + data.logo + '"></img>' + '<span id="name">' + '<a href=' + userUrl +'>' +  data.display_name + '</a>' + '</span>'+  '<span id="status">' + data.status  + '</span>' +  '</div>');
            
          }
             
   $('#player').append('<div id="block">' + '<img src="' + data.logo + '"></img>' + '<span id="name">' + '<a href=' + userUrl +'>' +  data.display_name + '</a>' + '</span>'+  '<span id="status">' + data.status  + '</span>' +  '</div>');                                                        
        });
}); 
}) 

  
    