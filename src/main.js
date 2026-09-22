/* ==========================================
   INITIALIZE LUCIDE ICONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

});


/* ==========================================
   SIDEBAR NAVIGATION
========================================== */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", function (event) {

        // Logout va dropdown linklarini alohida qoldiramiz
        if (
            this.classList.contains("logout") ||
            this.classList.contains("dropdown-logout")
        ) {
            return;
        }

        event.preventDefault();

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ==========================================
   MOBILE SIDEBAR
========================================== */

const mobileMenu = document.getElementById("mobileMenu");
const sidebar = document.getElementById("sidebar");

if (mobileMenu) {

    mobileMenu.addEventListener("click", () => {

        sidebar.classList.toggle("open");

    });

}


/* ==========================================
   PROFILE DROPDOWN
========================================== */

const profile = document.getElementById("profile");

if (profile) {

    profile.addEventListener("click", (event) => {

        event.stopPropagation();

        profile.classList.toggle("open");

    });

}


/* Click outside profile */

document.addEventListener("click", (event) => {

    if (
        profile &&
        !profile.contains(event.target)
    ) {

        profile.classList.remove("open");

    }

});


/* ==========================================
   NOTIFICATION
========================================== */

const notificationBtn =
    document.getElementById("notificationBtn");

if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

        const count =
            document.querySelector(".notification-count");

        if (count) {

            count.style.transform = "scale(1.2)";

            setTimeout(() => {
                count.style.transform = "scale(1)";
            }, 150);

        }

    });

}


/* ==========================================
   SEARCH
========================================== */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const value =
            this.value.toLowerCase().trim();

        const cards =
            document.querySelectorAll(".stat-card");

        cards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            if (value === "" || text.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* ==========================================
   NUMBER COUNTER ANIMATION
========================================== */

function animateCounter(element) {

    const target =
        Number(element.dataset.target);

    const duration = 1000;

    const startTime = performance.now();


    function update(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(elapsed / duration, 1);


        // Smooth animation
        const ease =
            1 - Math.pow(1 - progress, 3);

        const current =
            Math.floor(target * ease);


        element.textContent =
            current.toLocaleString();


        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            element.textContent =
                target.toLocaleString();

        }

    }


    requestAnimationFrame(update);

}


/* Run counters */

document.querySelectorAll(".counter").forEach(counter => {

    animateCounter(counter);

});


/* ==========================================
   CARD CLICK EFFECT
========================================== */

const statCards =
    document.querySelectorAll(".stat-card");

statCards.forEach(card => {

    card.addEventListener("click", () => {

        card.animate(
            [
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(0.98)"
                },
                {
                    transform: "scale(1)"
                }
            ],
            {
                duration: 200
            }
        );

    });

});


/* ==========================================
   CLOSE SIDEBAR ON MOBILE
========================================== */

document.addEventListener("click", (event) => {

    if (
        window.innerWidth <= 800 &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        !mobileMenu.contains(event.target)
    ) {

        sidebar.classList.remove("open");

    }

});

