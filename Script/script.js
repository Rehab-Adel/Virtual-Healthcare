function toggleServicesSection() {
    var servicesSection = document.querySelector('.Services-Content');
    servicesSection.classList.toggle('hidden');
  }
  
  
  var learnMoreLink = document.querySelector('.centered-link a');
  learnMoreLink.addEventListener('click', toggleServicesSection);
  
  
  function changeTitleFontSizeOnHover() {
    var title = document.querySelector('.text-content h1');
    title.addEventListener('mouseover', function () {
      title.style.fontSize = '52px';
    });
  
    title.addEventListener('mouseout', function () {
      title.style.fontSize = '48px';
    });
  }
  
  
  changeTitleFontSizeOnHover();