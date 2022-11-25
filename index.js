// Initialize and add the map
function initMap() {
    // The location of india
    const india = { lat: -71.060982, lng: 42.35725 };
    // The map, centered at india
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: india,
    });
    // The marker, positioned at india
    const marker = new google.maps.Marker({
      position: india,
      map: map,
    });
  }

window.initMap = initMap;