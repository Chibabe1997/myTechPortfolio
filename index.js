function updateUTCTime() {
    const now = new Date();
    const utcString = now.toUTCString();
    document.getElementsByClassName("currentTimeUTC").textContent = "Current UTC Time: " + utcString;
}

