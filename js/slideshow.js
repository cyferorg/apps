var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
var dotId = ["dot1", "dot2", "dot3"]
var autoNexttimer;
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
autoNexttimer=setTimeout(autoNext, 2000);

function autoNext() {
	plusSlides(1, 0);
	plusSlides(1, 1);
	plusSlides(1, 2);
	clearTimeout(autoNexttimer);
	autoNexttimer=setTimeout(autoNext, 4000);
}

function pause()
{
//	if (autoNexttimer!=-1) {
//		clearTimeout(autoNexttimer);
//		autoNexttimer=-1;
//		console.log("pause");
//	}
//	else {
//		autoNexttimer=setTimeout(autoNext, 2000);
//		console.log("unpause");	
//	}
	
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
  clearTimeout(autoNexttimer);
  autoNexttimer=setTimeout(autoNext, 20000);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  if (n > x.length) {slideIndex[no] = 1;}    
  if (n < 1) {slideIndex[no] = x.length;}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex[no]-1].className += " active";
}