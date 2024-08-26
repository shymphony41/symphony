function toggleInfo(infoId) {
    const info = document.getElementById(infoId);
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}
