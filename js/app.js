// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 4000
    })
  });

//scrollbar

        (function($){
      $(window).load(function(){
        $("#content_1").mCustomScrollbar({
          scrollButtons:{
            enable:true
          }
        });
        //ajax demo fn
        $("a[rel='load-content']").click(function(e){
          e.preventDefault();
          var $this=$(this),
            url=$this.attr("href");
          $this.addClass("loading");
          $.get(url,function(data){
            $this.removeClass("loading");
            $("#content_1 .mCSB_container").html(data); //load new content inside .mCSB_container
            $("#content_1").mCustomScrollbar("update"); //update scrollbar according to newly loaded content
            $("#content_1").mCustomScrollbar("scrollTo","top",{scrollInertia:200}); //scroll to top
          });
        });
        $("a[rel='append-content']").click(function(e){
          e.preventDefault();
          var $this=$(this),
            url=$this.attr("href");
          $this.addClass("loading");
          $.get(url,function(data){
            $this.removeClass("loading");
            $("#content_1 .mCSB_container").append(data); //append new content inside .mCSB_container
            $("#content_1").mCustomScrollbar("update"); //update scrollbar according to newly appended content
            $("#content_1").mCustomScrollbar("scrollTo","h2:last",{scrollInertia:2500,scrollEasing:Power3.easeInOut}); //scroll to appended content
          });
        });
      });
    })(jQuery);