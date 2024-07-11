window.addEventListener("scroll", function () {
  var header = document.getElementById("navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
})

document.getElementById('btn-faq').addEventListener('click', function () {
  $('.accordion .collapse').collapse('show');
});

document.getElementById('btn-faq').addEventListener('click', function () {
  $('.accordion .collapse').collapse('hide');
});

