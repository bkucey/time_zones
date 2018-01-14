

/**
 * Different timezones as described in https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
const time_zones: string[] = [
    "America/Los_Angeles",
    "America/New_York",
    "Europe/London"
];

function dateTimeFormatter(time_zone: string): Intl.DateTimeFormatOptions {
    return { timeZone: time_zone };
};

var outputTime = () => {
    var d: Date = new Date();
    for (let time_zone of time_zones) {
        const time_zone_options: Intl.DateTimeFormatOptions = dateTimeFormatter(time_zone);
        const time_zone_string: string = d.toLocaleString([], time_zone_options);
        console.log(time_zone_string);
        document.getElementById("app").innerHTML = time_zone + " " + time_zone_string;
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    window.setInterval(outputTime,1000);
});