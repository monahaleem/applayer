function myFunction() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block" ) {
      x.style.display = "none";
    } else {
      x.style.display = "block";    
      x.style.borderTop="1px white solid ";

      }
  }
  // onkeydown="keydownFunction()" onkeyup="keyupFunction()"
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('nav#site-navigation').addClass('fixed');
        $("a.marker.active:contains(Home)").addClass('item-2');        
        $("a.marker.active:contains(SERVICES)").addClass('item-3');
        $("a.marker.active:contains(PORTFOLIO)").addClass('item-4');
        $("a.marker.active:contains(PRICING)").addClass('item-5');
        $("a.marker.active:contains(TEAM)").addClass('item-6');
    } else {
        $('nav#site-navigation').removeClass('fixed');        
    }
}); 