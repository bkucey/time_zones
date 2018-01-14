/**
 * Different timezones as described in https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
var time_zones = [
    "America/Los_Angeles",
    "America/New_York",
    "Europe/London"
];
function dateTimeFormatter(time_zone) {
    return { timeZone: time_zone };
}
;
var outputTime = function () {
    var d = new Date();
    for (var _i = 0, time_zones_1 = time_zones; _i < time_zones_1.length; _i++) {
        var time_zone = time_zones_1[_i];
        var time_zone_options = dateTimeFormatter(time_zone);
        var time_zone_string = d.toLocaleString([], time_zone_options);
        console.log(time_zone_string);
        document.getElementById("app").innerHTML = time_zone + " " + time_zone_string;
    }
};
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    window.setInterval(outputTime, 1000);
});
