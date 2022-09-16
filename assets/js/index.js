const classBg = 'header-fix-bg';
document.addEventListener('DOMContentLoaded', function () {
  const counterDiv = document.getElementById('count');
  let countDone = false;
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const sticky = header.clientHeight;
    if (window.scrollY > sticky) {
      header.classList.add(classBg);
    } else {
      header.classList.contains(classBg) && header.classList.remove(classBg);
    }

    if (isInScrollView(counterDiv) && !countDone) {
      countDone = true;
    }
  });

  function isInScrollView(el) {
    const rect = el.getBoundingClientRect();
    const { top, height, bottom } = rect;
    return top >= 0 && bottom - height / 2 <= window.innerHeight;
  }
});
