// ==========================================
// OMNI BAND - INTERACTIVE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interactive Order Buttons
    const orderButtons = document.querySelectorAll(".order-btn");
    
    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("شكرًا لاهتمامك بـ Omni Band! سيتم فتح صفحة الطلب قريبًا.");
        });
    });

    // 2. Interactive Feature Cards (Hover / Click Effect)
    const featureItems = document.querySelectorAll(".feature-item");

    featureItems.forEach(item => {
        item.addEventListener("click", () => {
            const title = item.querySelector("h3").innerText;
            console.log(`User clicked on feature: ${title}`);
            
            // Temporary highlight effect on click
            item.style.border = "2px solid #f00";
            setTimeout(() => {
                item.style.border = "none";
            }, 1000);
        });
    });

    // 3. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Simulated Live Vital Monitor (Bonus Feature)
    // Simulates dynamic heart rate readings for the Omni Band
    function simulateVitals() {
        const heartRateCard = Array.from(featureItems).find(item => 
            item.querySelector("h3")?.innerText.includes("نبضات القلب")
        );

        if (heartRateCard) {
            setInterval(() => {
                // Random heart rate between 70 and 85 BPM
                const randomBpm = Math.floor(Math.random() * (85 - 70 + 1)) + 70;
                const h3 = heartRateCard.querySelector("h3");
                h3.innerHTML = `قِيَاس نَبَضَات الْقَلْب <br><small style="color: #f00; font-size: 0.9rem;">(الآن: ${randomBpm} BPM)</small>`;
            }, 3000);
        }
    }

    // Start live vital simulation
    simulateVitals();
});
