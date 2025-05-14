document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    if (!noBtn || !yesBtn) {
        console.error("Buttons not found!");
        return;
    }

    // "No" button mouseover hone par move kare
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // "Yes" button click hone par 2 pages open honge aur naye page par bhi open rahenge
    yesBtn.addEventListener("click", function () {
        console.log("Yes button clicked!");

        // Pehle ek page open karein
        let firstTab = window.open("hugging.html", "_blank");

        if (!firstTab) {
            alert("Popup blocked! Please allow pop-ups for this site.");
            return;
        }

        // 1 second ke delay se doosra page bhi naye tab me open karein
        setTimeout(() => {
            window.open("teddy.html", "_blank");
        }, 1000);

        // 2 second ke delay ke baad current page ko naye page par redirect karein
        setTimeout(() => {
            window.location.href = "hugging.html"; // ✅ Space hata diya
        }, 2000);
    });
});
