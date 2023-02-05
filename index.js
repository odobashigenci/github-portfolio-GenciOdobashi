// 

function toggle3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "read less";
    moreText3.style.display = "inline";
  }
}

$(document).ready(function() {
    $(window).scroll( function(){
        $('.contactCard').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
});
