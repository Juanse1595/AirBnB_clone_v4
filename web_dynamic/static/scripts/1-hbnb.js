$(function () {
  let amenities = document.querySelector('input[type="checkbox"]');
  lst = []
  amenities.addEventListener(change, function (e) {
    if (amenities.checked) {
      lst.push(this.name);
    } else {
      $(this)
    }
  })
})