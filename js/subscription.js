
$(function () {
  document.querySelectorAll('.con_top ul, .con_bottom ul').forEach(ul => {
    const items = Array.from(ul.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      ul.appendChild(clone);
    });
  });

});