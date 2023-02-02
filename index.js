// function toggle1() {
//   var dots1 = document.getElementById("dots1");
//   var moreText1 = document.getElementById("more1");
//   var btnText1 = document.getElementById("myBtn1");

//   if (dots1.style.display === "none") {
//     dots1.style.display = "inline";
//     btnText1.innerHTML = "read more";
//     moreText1.style.display = "none";
//   } else {
//     dots1.style.display = "none";
//     btnText1.innerHTML = "read less";
//     moreText1.style.display = "inline";
//   }
// }

// function toggle2() {
//   var dots2 = document.getElementById("dots2");
//   var moreText2 = document.getElementById("more2");
//   var btnText2 = document.getElementById("myBtn2");

//   if (dots2.style.display === "none") {
//     dots2.style.display = "inline";
//     btnText2.innerHTML = "read more";
//     moreText2.style.display = "none";
//   } else {
//     dots2.style.display = "none";
//     btnText2.innerHTML = "read less";
//     moreText2.style.display = "inline";
//   }
// }

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
