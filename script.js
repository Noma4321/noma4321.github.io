var domain = "https://noma.is-a.dev/";

// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();


// Dark / Light theme

function lighttheme() {
	document.documentElement.style.setProperty('--main-header-background', '#ebe8e8');
	document.documentElement.style.setProperty('--main-background', '#f2f2f2');
	document.documentElement.style.setProperty('--main-fonts-color', '#1a1918');
	document.documentElement.style.setProperty('--active-fonts-color', '#fff');
}

function darktheme() {
	document.documentElement.style.setProperty('--main-header-background', '#21252e');
	document.documentElement.style.setProperty('--main-background', '#0b0c0f');
	document.documentElement.style.setProperty('--main-fonts-color', '#fff');
	document.documentElement.style.setProperty('--active-fonts-color', '#000');
}
