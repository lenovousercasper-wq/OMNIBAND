document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. TRANSLATION DICTIONARY ---
    const translations = {
        ar: {
            nav_features: "الْمُمَيِّزَات",
            nav_about: "حَوْل",
            btn_order: "اطْلُب الآن",
            hero_subtitle: "(دعم وكيلك الذكي)",
            hero_desc: "مرحبًا بكم في عصر جديد من حلول الرعاية والسلامة الذكية. اكتشفوا فوائد Omni Band.",
            btn_explore: "اكْتَشِف الْمَزِيد",
            features_title: "مُمَيِّزَات السوار (Wristband Features)",
            f_airtag: "لِتَحْدِيد الْمَوْقِع Air Tag",
            f_sos: "نِدَاء اسْتِغَاثَة SOS",
            f_water: "تَذْكِير بِشُرْب الْمَاء",
            f_temp: "قِيَاس دَرَجَة حَرَارَة الْجِسْم",
            f_heart: "قِيَاس نَبَضَات الْقَلْب",
            f_oxygen: "قِيَاس نِسْبَة الْأُوكْسِجِين",
            modal_title: "تعديل الملف الشخصي",
            label_name: "الاسم:",
            label_photo: "رابط الصورة الشخصية (URL):",
            btn_save: "حفظ التغييرات"
        },
        en: {
            nav_features: "Features",
            nav_about: "About",
            btn_order: "Order Now",
            hero_subtitle: "(Smart Agent Support)",
            hero_desc: "Welcome to a new era of smart safety and care solutions. Discover the benefits of Omni Band.",
            btn_explore: "Explore More",
            features_title: "Wristband Features",
            f_airtag: "Air Tag Location Tracking",
            f_sos: "SOS Emergency Alert",
            f_water: "Water Drink Reminder",
            f_temp: "Body Temperature Measurement",
            f_heart: "Heart Rate Monitor",
            f_oxygen: "Blood Oxygen Sensor",
            modal_title: "Edit Profile",
            label_name: "Name:",
            label_photo: "Profile Picture URL:",
            btn_save: "Save Changes"
        }
    };

    // --- 2. LANGUAGE SWITCHING LOGIC ---
    const langSelect = document.getElementById("langSelect");
    const htmlTag = document.getElementById("htmlTag");

    langSelect.addEventListener("change", (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
    });

    function setLanguage(lang) {
        // Change text direction and html lang attribute
        htmlTag.setAttribute("lang", lang);
        htmlTag.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

        // Update all elements with data-i18n attribute
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
    }

    // --- 3. PROFILE MODAL LOGIC ---
    const profileBtn = document.getElementById("profileBtn");
    const profileModal = document.getElementById("profileModal");
    const closeModal = document.getElementById("closeModal");
    const profileForm = document.getElementById("profileForm");

    const navUsername = document.getElementById("navUsername");
    const navAvatar = document.getElementById("navAvatar");

    const userNameInput = document.getElementById("userNameInput");
    const userAvatarInput = document.getElementById("userAvatarInput");

    // Open Modal
    profileBtn.addEventListener("click", () => {
        profileModal.style.display = "flex";
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        profileModal.style.display = "none";
    });

    // Close Modal when clicking outside content
    window.addEventListener("click", (e) => {
        if (e.target === profileModal) {
            profileModal.style.display = "none";
        }
    });

    // Update Profile Info
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newName = userNameInput.value.trim();
        const newAvatar = userAvatarInput.value.trim();

        if (newName) navUsername.innerText = newName;
        if (newAvatar) navAvatar.src = newAvatar;

        profileModal.style.display = "none";
    });
});
