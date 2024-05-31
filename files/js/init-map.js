function initMap() {
   var uluru = {
      lat: 48.8923014,
      lng: -24.7507157
   };

   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
   });
   var marker = new google.maps.Marker({
      position: uluru,
      map: map
   });
}