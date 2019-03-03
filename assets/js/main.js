$(document).ready(function() {  
   $(".slick-container").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true

    var scrollLink = $(".scrollTo");

    scrollLink.click(function(e) {
      e.preventDefault();
      $("body,html").animate({
          scrollTop: $(this.hash).offset().top
        }, 3000);
    });
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top - 300;

        if (sectionOffset <= scrollbarLocation) {
          $(this)
            .parent()
            .addClass("active");
          $(this)
            .parent()
            .siblings()
            .removeClass("active");
        }
      });
    });
  }); 

  $(".show-modal").click(function() {
    $(".modal-overlay").addClass("active");
    $(document.body).addClass("modal-opened");
    var top = $(document).scrollTop();
    $(".modal-overlay").css("top", top);
  });
  $("[data-close]").click(function() {
    $(".modal-overlay").removeClass("active");
    $(document.body).removeClass("modal-opened");
  });
  $(".modal-body").click(function(event) {
    event.stopPropagation();
    event.preventDefault();
  });
});
