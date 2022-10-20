export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



export const transformMsTimestampToTime = (msTimestamp) => {

    var currentDate = new Date(msTimestamp);
    // Hours part from the timestamp
    var hours = currentDate.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + currentDate.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + currentDate.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

export const transformMsTimestampToDate = (msTimestamp) => {

    const currentDate = new Date(msTimestamp);

    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const formattedDate = day + '/' + monthNames[month] + '/' + year;
    return formattedDate;
}