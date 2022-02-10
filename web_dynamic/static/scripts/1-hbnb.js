$(function () {
  $('input[type="checkbox"]').click(function () {
  alert('click on checkbox')
})
})
/*$(function () {
  let amenities = document.querySelector('input[type="checkbox"]');
  lst = []
  amenities.addEventListener('change', function () {
    if (amenities.checked) {
      lst.push($(this).attr('data-name'));
      alert('push')
      alert($(this).attr('data-name'))
    } else {
      let toRemove = $(this).attr('data-name')
      lst = lst.filter(function(item) {
        return item !== toRemove
    });
    }
    $('div.amenities h4').text(lst.join(', '))
  })
})*/