window.fbAsyncInit = function() {
    FB.init({
      appId      : '138085636546297',

      // Prevents cross-domain issues
      channelUrl: 'channel.html',

      cookie	 : true,

      xfbml      : true,

      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));