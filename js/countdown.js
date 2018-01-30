(function countdown(){   
   
   	var launch_date = new Date (Date.parse("Jan 12, 2018 18:00:00 GMT+8")); // MM DD YY - HH MM SS GMT
   	var now = new Date();
   	var days; var hours; var minutes; var seconds; var rest;
	
   	seconds = rest = Math.floor(((launch_date.getTime() - now.getTime()) / 1000));

   	days = zero (Math.floor(seconds / 86400));
   	seconds -= days * 86400;
			
   	hours = zero (Math.floor(seconds / 3600));
   	seconds -= hours * 3600;

   	minutes = zero (Math.floor(seconds / 60));
   	seconds -= minutes * 60;

   	seconds = zero (Math.floor(seconds));
    
   	function zero(n){
      	return (n < 10 ? '0' : false) + n;  
   	}
  
   	// Reset to 00 when the set time is reached.
   	rest <= 0 ? days = hours = minutes = seconds = '00' : setTimeout(countdown, 1000);
     
   	document.getElementById('countdown').innerHTML =

      	'<li class="c-time"><span>'+ seconds +'</span><label>Second'+ (seconds > 1 ? 's' : '') +'</label></li>' +
      	'<li class="c-time"><span>'+ minutes +'</span><label>Minute'+ (minutes > 1 ? 's' : '') +'</label></li>' +
      	'<li class="c-time"><span>'+ hours +'</span><label>Hour'+ (hours > 1 ? 's' : '') +'</label></li>' +
      	'<li class="c-time"><span>'+ days +'</span><label>Day'+ (days > 1 ? 's' : '') +'</label></li>';

})();