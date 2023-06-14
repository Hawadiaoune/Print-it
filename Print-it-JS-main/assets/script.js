const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Initialisation de l'index du slide
let slideIndex = 1;

// Appeler lors du déplacement des slides avec les flèches //
function plusSlides(n) {
  if (slideIndex + n > 0 && slideIndex + n <= slides.length) {
    showSlides(slideIndex += n);
  }
  if (slideIndex + n > 4){
	showSlides(slideIndex = 0);
  }
  if (slideIndex + n < 1){
	showSlides(slideIndex = 4);
  }
}

// Affichage de la slide
function showSlides(slideIndex) {
  const slideDiv = document.getElementById('banner');

  // Update de l'image
  const imgSlideDiv = slideDiv.getElementsByClassName("banner-img")[0];
  imgSlideDiv.src = "./assets/images/slideshow/" + slides[slideIndex - 1].image;

  // Update du text de la div
  const textSlideDiv = slideDiv.getElementsByTagName('p')[0];
  textSlideDiv.innerHTML = slides[slideIndex - 1].tagLine;

  let dots = slideDiv.getElementsByClassName('dot');
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' dot_selected', '');
  }

  dots[slideIndex - 1].className += ' dot_selected';
}