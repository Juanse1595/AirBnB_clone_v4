const checkStatus = () => {
  const request = require('request');
  const url = `http://${window.location.hostname}:5001/api/v1/status/`;
  request.get(url).on('response', (response) => {
    if (response.statusCode === 200) {
      $("div#api_status").addClass("available")
    } else {
      $("div#api_status").removeClass("available")
    }
  });
}

$(document).ready(function () {
  checkStatus();
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
    $("div.amenities h4").css("width", "200px");
    $("div.amenities h4").css("height", "17px");
    $("div.amenities h4").css("overflow", "hidden");
    $("div.amenities h4").css("white-space", "nowrap");
    $("div.amenities h4").css("text-overflow", "ellipsis");
    $("div.amenities h4").text(lst.join(", "));
  });
});
