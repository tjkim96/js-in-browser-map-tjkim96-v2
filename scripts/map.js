document.addEventListener('DOMContentLoaded', function () {
    /* data for map */
    let smithPlayground = [42.36369483201355, -71.13176246756493];
    let harvardStadium = [42.3667274548932, -71.12674310221674];
    let wbz = [42.364976209388985, -71.1333766658824];
    let centerView = [42.36552293632939, -71.13088987977652];

    let zoomLevel = 17;

    /* create Leaflet map object, 
        place in container, 
        and set initial center and zoom */
    let map = L.map('map_container').setView(centerView, zoomLevel);

    /* required attribution */
    let attributionHtml = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    /* create tile layer with attribution */
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: attributionHtml }).addTo(map);

    /* create marker, info popup, and add to map */
    L.marker(smithPlayground).bindPopup("Smith Playground - <a href='https://www.boston.gov/news/smith-playground-allston-reopened'>Renovated in 2019,</a> there are amenities for many sports, including 2 basketball courts, 2 softball fields, a skateboarding track, a street hockey and roller skating/rollerblading rink, an athletic track, and plenty of open field space for soccer and other activities.").addTo(map);

    L.marker(harvardStadium).bindPopup("Harvard Stadium - Where the Harvard football team plays. For a grueling workout, try the <a href='https://medium.com/@michaelwoodfitness/one-of-the-best-workouts-you-can-do-stadium-stair-running-or-walking-3d86c4a245c3'>'tour de stade'</a>, where participants ascend and descend the stairs in each seating section (for a total of ~1,150 steps).").addTo(map);

    L.marker(wbz).bindPopup("WBZ Boston - Home of the WBZ-TV/CBS Studio. There is a <a href='https://www.bostonplans.org/projects/development-projects/1170-soldiers-field-road'>plan</a> to redevelop the vicinity to include three buildings designed for office and life science research uses and one 85-unit residential building.").addTo(map);

})