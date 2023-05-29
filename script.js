
function switchLanguage(language) {
    // Get elements to be translated
    const mainHeading = document.getElementById('main-heading');
    const mainDescription = document.getElementById('main-description');
  
    // Update content based on language
    if (language === 'en') {
      mainHeading.textContent = 'Welcome to Your Food Delivery Service';
      mainDescription.textContent = 'Delicious food delivered to your doorstep!';
    } else if (language === 'ko') {
      mainHeading.textContent = '당신의 음식 배달 서비스에 오신 것을 환영합니다';
      mainDescription.textContent = '맛있는 음식을 문 앞으로 배달합니다!';
    }
  }
