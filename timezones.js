function getLocalTime(timezone) {
    return fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
    .then(response => response.json())
    .then(data => {
        const datetime = data.datetime;
        const date = datetime.slice(0, 10);
        const time = datetime.slice(11, 19);
        return `${date} T ${time}`;
    }); 
}

/* API Endpoints
timezone/Europe/Amsterdam
timezone/America/Toronto
timezone/Asia/Manila
*/ 

getLocalTime("Europe/Amsterdam").then(time => {
    const amsterdamInput = document.getElementById("ams-time");
    amsterdamInput.value = time; 
})


// Toronto has the same timezone as Montreal. There was no endpoint for Montreal.
getLocalTime("America/Toronto").then(time => {
    const montrealInput = document.getElementById("montreal-time"); 
    montrealInput.value = time; 
})

getLocalTime("Asia/Manila").then(time => {
    const manilaInput = document.getElementById("manilla-time");
    manilaInput.value = time;
})


// Update the clocks every second
setInterval(function() {
    const amsterdamInput = document.getElementById("ams-time");
    const montrealInput = document.getElementById("montreal-time"); 
    const manilaInput = document.getElementById("manilla-time");

    getLocalTime("Europe/Amsterdam").then(time => {
        amsterdamInput.value = time;
    });

    getLocalTime("America/Toronto").then(time => {
        montrealInput.value = time;
    });

    getLocalTime("Asia/Manila").then(time => {
        manilaInput.value = time;
    });

}, 1000);


