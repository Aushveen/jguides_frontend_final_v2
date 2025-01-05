// $('.book-slider').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   dots:false,
//   arrows:true
// });

$('.book-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // For devices with a width of 1024px or less
      settings: {
        slidesToShow: 3, // Show 3 slides
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768, // For devices with a width of 768px or less
      settings: {
        slidesToShow: 2, // Show 2 slides
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, // For devices with a width of 480px or less
      settings: {
        slidesToShow: 1, // Show 1 slide
        slidesToScroll: 1
      }
    }
  ]
});



$('.tesi-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:false,
  arrows:true
});

  
  function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
