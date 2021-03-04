$(document).ready(() => {
    // Activate function to fade in cards as they scrolled down
  $(window).on('load', () => {
    $(window).scroll(function () {
      const windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $('.fade').each(function () {
        /* Check the location of each desired element */
        const objectTop = $(this).offset().top;
        /* If the element is completely within bounds of the window, fade it in */
        if (objectTop + 100 < windowBottom) { // object comes into view (scrolling down)
          if ($(this).css('opacity') == 0) { $(this).fadeTo(200, 1); }
        }
      });
    }).scroll(); // invoke scroll-handler on page-load
  });
});
