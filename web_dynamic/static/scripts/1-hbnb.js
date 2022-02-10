$(document).ready(function () {
  lst = [];
  $('input[type="checkbox"]').click(function () {
    if (this.checked) {
      lst.push($(this).attr("data-name"));
    } else {
      let toRemove = $(this).attr("data-name");
      lst = lst.filter(function (item) {
        return item !== toRemove;
      });
    }
    $("div.amenities h4").text(lst.join(", "));
  });
});
