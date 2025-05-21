
$(function () {
  document.querySelectorAll('.con_top ul, .con_bottom ul').forEach(ul => {
    const items = Array.from(ul.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      ul.appendChild(clone);
    });
  });

  const boxArticle = document.querySelector('article.box');
  const tabBox = document.querySelector('.side_tab .box');
  const tabCoupon = document.querySelector('.side_tab .coupon');
  const character = document.querySelector('.side_character');

  console.log('boxArticle:', boxArticle);
  console.log('tabBox:', tabBox);
  console.log('tabCoupon:', tabCoupon);
  console.log('character:', character);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        console.log('entry:', entry);
        if (entry.isIntersecting) {
          console.log('box is visible');
          tabBox.classList.add('active');
          tabCoupon.classList.remove('active');
          character.classList.add('on');
        } else {
          console.log('box is not visible');
          tabBox.classList.remove('active');
          tabCoupon.classList.add('active');
          character.classList.remove('on');
        }
      });
    },
    {
      root: null,
      threshold: 0.4
    }
  );

  if (boxArticle) {
    console.log('Observing boxArticle');
    observer.observe(boxArticle);
  } else {
    console.warn('boxArticle not found!');
  }

  document.querySelector('.tab.coupon')?.addEventListener('click', () => {
    const target = document.querySelector('article.coupon_box');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.querySelector('.tab.box')?.addEventListener('click', () => {
    const target = document.querySelector('article.box');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  $('.con5 .button a').on('click', function (e) {
    e.preventDefault();
    $('.opinion_modal').addClass('on');
  });

  $('.cancel_btn').on('click', function (e) {
    e.preventDefault();
    $('.opinion_modal').removeClass('on');
  });
});