// Простая логика: показываем текст с плавной анимацией после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
  var heroContent = document.querySelector(".hero__content");
  if (heroContent) {
    heroContent.classList.add("hero__content--visible");
  }

  // Пример простого поведения для кнопки CTA (можно заменить на скролл к блоку с навыками)
  var skillsButton = document.getElementById("skillsButton");
  if (skillsButton) {
    skillsButton.addEventListener("click", function () {
      alert("Здесь позже будет секция с моими навыками 🙂");
    });
  }
});