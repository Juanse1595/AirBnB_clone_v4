const lst = {};
window.onload = function () {
  // console.log("before load places")
  checkStatus();
  loadPlaces();
  selectAmenities();
};
function selectAmenities() {
  $('input[type="checkbox"]').change(function () {
    const name = $(this).attr('data-name');
    const id = $(this).attr('data-id');
    if (this.checked) {
      lst [id] = name;
    } else {
      delete lst[id];
    }
    $('.amenities h4').text(Object.values(lst).join(', '));
  });
}
function checkStatus () {
  const url = `http://${window.location.hostname}:5001/api/v1/status/`;
  $.get(url, (data) => {
    if (data.status === "OK") {
      $("div#api_status").addClass("available");
    }
  });
};

async function loadPlaces () {
  const url = `http://${window.location.hostname}:5001/api/v1/places_search/`;
  const header = {
    "body": JSON.stringify({}),
    "headers": {
      "Content-Type": "application/json"
    },
    "method": "POST"
  };

  const response = await fetch(url, header);
    const data = await response.json();
    // console.log(data);

  for (const place of data) {
    const user = await getUser(place.user_id);
      const template = `<article>
      <div class="title_box">
        <h2>${place.name}</h2>
        <div class="price_by_night">$${place.price_by_night}</div>
      </div>
      <div class="information">
        <div class="max_guest">${place.max_guest} Guest</div>
              <div class="number_rooms">${place.number_rooms} Bedroom</div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
      </div>
      <div class="user">
              <b>Owner:</b> ${(user).first_name} ${(user).last_name }
            </div>
            <div class="description">
        ${ place.description }
            </div>
    </article>`;
      $("section.places").append(template);
    };
};

async function getUser(id) {
  const url = `http://${window.location.hostname}:5001/api/v1/users/${id}`;
  const response = await fetch(url);
  const user = await response.json();
  return user
}