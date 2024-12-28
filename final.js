document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-reviews');
  const popupTitle = document.getElementById('popup-title');
  const closeBtn = document.querySelector('.close-btn');
  const reviewForm = document.querySelector('.review-form');
  const reviewList = document.getElementById('review-list');

  const reviews = {
      Сказка: ['Очень вкусные пирожки! ⭐⭐⭐⭐⭐'],
      Мечта: ['Потрясающие круассаны! ⭐⭐⭐⭐']
  };

  document.querySelectorAll('.btn-secondary').forEach(button => {
      button.addEventListener('click', () => {
          const bakery = button.dataset.bakery;
          popupTitle.textContent = `Отзывы: ${bakery}`;
          popupContent.innerHTML = reviews[bakery].map(r => `<p>${r}</p>`).join('');
          popup.style.display = 'flex';
      });
  });

  closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  reviewForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = reviewForm.querySelector('input').value;
      const text = reviewForm.querySelector('textarea').value;
      const rating = reviewForm.querySelector('select').value;

      const newReview = `${name}: ${text} ⭐`.repeat(rating);
      reviewList.innerHTML += `<p>${newReview}</p>`;

      reviewForm.reset();
  });
});
