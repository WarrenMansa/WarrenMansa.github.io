$(document).on("ready", function(){
    var activitySource   = $("#blog-template").html();
    var activityTemplate = Handlebars.compile(activitySource);


  
  $.get("posts.json", function(data){
      console.log(data)
      for(var i = 0, len = data.length; i < len; i++){
          $("#posts").html(activityTemplate(data[i]));
      }
  });
  
   $("form").on("submit" , function(event){
       event.preventDefault();
       
       var newActivity = {
           start: $('input[name=start]').val(),
           end: $('input[name=end]').val(),
           activity: $('input[name=actvity]').val()
       }
       

       $("#activities").html(activityTemplate(newActivity))
       $.post("posts", newActivity);
   });
});