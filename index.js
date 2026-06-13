/* ----------------------------------------------------
   Black Fitness - JavaScript
   Features: Bilingual (TH/EN) engine, Interactive Split Hero,
   Floating Gym Equipment Particles, Mobile Menu, Scroll Effects.
   ---------------------------------------------------- */

// 1. Bilingual Translation Dictionary
const translations = {
    // Nav Bar
    "nav-home": { th: "หน้าแรก", en: "Home" },
    "nav-branches": { th: "สาขาของเรา", en: "Branches" },
    "nav-pricing": { th: "แพ็กเกจ", en: "Pricing" },
    "nav-reviews": { th: "รีวิวจากลูกค้า", en: "Reviews" },
    "nav-features": { th: "ทำไมต้องเป็นเรา", en: "Why Us" },
    "nav-cta": { th: "สมัครสมาชิก", en: "Join Now" },
    
    // Hero
    "hero-badge": { th: "PREMIUM FITNESS CLUB", en: "PREMIUM FITNESS CLUB" },
    "hero-title": { th: "BLACK <span class=\"gradient-text\">FITNESS</span>", en: "BLACK <span class=\"gradient-text\">FITNESS</span>" },
    "hero-subtitle": { 
        th: "ก้าวข้ามขีดจำกัดเดิมๆ นิยามความแข็งแกร่งในแบบของคุณกับฟิตเนสระดับพรีเมียมที่เปิดให้บริการ 2 สาขาใกล้คุณ", 
        en: "Break your limits, redefine your strength with our premium fitness club open at 2 locations near you." 
    },
    "btn-explore": { th: "เลือกสาขาเพื่อดูข้อมูล", en: "Explore Branches" },
    "btn-rates": { th: "อัตราค่าบริการ", en: "Membership Rates" },
    "scroll-down": { th: "เลื่อนลงเพื่อดูสาขา", en: "Scroll down to see branches" },
    "hero-branch-left": { th: "สาขากาญจนาภิเษก", en: "Kanchanaphisek Branch" },
    "hero-branch-right": { th: "สาขาบางบอน 3", en: "Bangbon 3 Branch" },

    // Branches Section Header
    "branches-title-1": { th: "ฟิตเนสใกล้คุณ", en: "Fitness Near You" },
    "branches-title-2": { th: "2 สาขาคุณภาพ", en: "2 Premium Locations" },
    "branches-desc": { 
        th: "สัมผัสประสบการณ์การออกกำลังกายที่เหนือระดับ พร้อมการบริการที่ใส่ใจและเครื่องเล่นระดับท็อป", 
        en: "Experience next-level workouts with top-tier equipment and dedicated service." 
    },

    // Branch Cards
    "branch-status-active": { th: "เปิดให้บริการ", en: "Open Now" },
    "branch-kanch-title": { th: "Black Fitness สาขากาญจนาภิเษก", en: "Black Fitness Kanchanaphisek" },
    "branch-kanch-slogan": { th: "พื้นที่กว้างขวาง อุปกรณ์ครบครัน เดินทางสะดวกสบาย", en: "Spacious training area, fully equipped, easy access" },
    "branch-bangbon-title": { th: "Black Fitness สาขาบางบอน 3", en: "Black Fitness Bangbon 3" },
    "branch-bangbon-slogan": { th: "เครื่องเล่นแบรนด์ดังระดับโลก บรรยากาศโปร่งสบาย", en: "World-class fitness brands, bright and airy atmosphere" },
    "info-phone": { th: "เบอร์โทรศัพท์", en: "Phone" },
    "info-email": { th: "อีเมล", en: "Email" },
    "info-facebook": { th: "เฟซบุ๊กแฟนเพจ", en: "Facebook Page" },
    "btn-map": { th: "ดูแผนที่และนำทาง", en: "View Map & Directions" },
    "btn-contact-fb": { th: "ติดต่อทาง Facebook", en: "Contact on Facebook" },

    // Pricing Section Header
    "pricing-title-1": { th: "อัตราค่าบริการ", en: "Membership" },
    "pricing-title-2": { th: "และแพ็กเกจ", en: "Packages" },
    "pricing-desc": { 
        th: "เลือกแพ็กเกจที่เหมาะสมกับเป้าหมายการดูแลสุขภาพของคุณ ไม่มีข้อผูกมัดแอบแฝง", 
        en: "Choose the perfect plan for your fitness goals. No hidden contracts." 
    },

    // Pricing Plans
    "pricing-plan1-name": { th: "1 เดือน", en: "1 Month" },
    "pricing-plan1-period": { th: "/ เดือน", en: "/ Month" },
    "pricing-plan2-name": { th: "3 เดือน", en: "3 Months" },
    "pricing-plan2-period": { th: "/ 3 เดือน", en: "/ 3 Months" },
    "pricing-plan2-save": { th: "ประหยัด ฿380", en: "Save ฿380" },
    "pricing-plan3-name": { th: "6 เดือน", en: "6 Months" },
    "pricing-plan3-period": { th: "/ 6 เดือน", en: "/ 6 Months" },
    "pricing-plan3-save": { th: "ประหยัด ฿1,250", en: "Save ฿1,250" },
    "pricing-plan4-name": { th: "รายปี (12 เดือน)", en: "Yearly (12 Months)" },
    "pricing-plan4-period": { th: "/ ปี", en: "/ Year" },
    "pricing-plan4-save": { th: "ประหยัด ฿4,290", en: "Save ฿4,290" },
    "pricing-popular": { th: "ยอดนิยม 🔥", en: "Popular 🔥" },
    "pricing-best-value": { th: "คุ้มค่าที่สุด 💎", en: "Best Value 💎" },
    "btn-choose": { th: "สมัครสมาชิก", en: "Join Now" },

    // Pricing Features
    "plan-f-all-equip": { th: "เข้าใช้งานอุปกรณ์ทั้งหมด", en: "Full access to all gym equipment" },
    "plan-f-no-limit": { th: "ไม่จำกัดเวลาต่อวัน", en: "Unlimited workout time per day" },
    "plan-f-shower": { th: "ห้องอาบน้ำและห้องแต่งตัว", en: "Shower & Locker rooms" },
    "plan-f-intro-pt": { th: "ปรึกษาเทรนเนอร์เบื้องต้นฟรี", en: "Free initial trainer consultation" },
    "plan-f-multi-branch": { th: "เข้าเล่นได้ทั้งสองสาขา", en: "Full access to both gym branches" },
    "plan-f-1pt": { th: "ฟรี! 1 PT Session", en: "Free! 1 PT Session included" },
    "plan-f-2pt": { th: "ฟรี! 2 PT Sessions", en: "Free! 2 PT Sessions included" },
    "plan-f-4pt": { th: "ฟรี! 4 PT Sessions + เสื้อยืดแบรนด์", en: "Free! 4 PT Sessions + Brand T-Shirt" },

    // Features Section
    "features-title-1": { th: "ฟิตเพื่อสิ่งที่ดีกว่า", en: "Fit for a Better You" },
    "features-title-2": { th: "ที่ Black Fitness", en: "at Black Fitness" },
    "features-desc": { 
        th: "เหตุผลดีๆ ที่ลูกค้าไว้วางใจให้เราดูแลความฟิตและความแข็งแรงของร่างกาย", 
        en: "Why our members trust us to support their fitness and strength journeys." 
    },
    "feat1-title": { th: "เครื่องออกกำลังกายระดับพรีเมียม", en: "Premium Gym Equipment" },
    "feat1-desc": { 
        th: "จัดเต็มกับอุปกรณ์สร้างกล้ามเนื้อและคาร์ดิโอแบรนด์นำเข้า ปลอดพย์ ทันสมัย และตอบโจทย์ทุกกลุ่มกล้ามเนื้อ", 
        en: "Fully equipped with leading imported cardio and strength machines, safe and tailored to all muscle groups." 
    },
    "feat2-title": { th: "เทรนเนอร์มืออาชีพดูแลใกล้ชิด", en: "Professional Trainers" },
    "feat2-desc": { 
        th: "ทีมเทรนเนอร์ผู้เชี่ยวชาญพร้อมให้คำปรึกษา แนะนำการใช้อุปกรณ์ และออกแบบตารางการออกกำลังกายแบบรายบุคคล", 
        en: "Our certified personal trainers are ready to guide you, teach equipment forms, and design personal routines." 
    },
    "feat3-title": { th: "สะอาด สะดวก และปลอดภัย", en: "Clean, Convenient & Safe" },
    "feat3-desc": { 
        th: "เราทำความสะอาดอุปกรณ์ทุกชิ้นอย่างสม่ำเสมอ บรรยากาศโปร่งสบาย อากาศถ่ายเทสะดวก พร้อมห้องอาบน้ำและห้องแต่งตัวที่สะอาด", 
        en: "Regular equipment sanitation, airy atmosphere, well-ventilated areas, along with clean showers and locker rooms." 
    },
    "feat4-title": { th: "สิทธิ์เข้าใช้คุ้มค่าแบบ 2-in-1", en: "2-in-1 Dual Access Benefit" },
    "feat4-desc": { 
        th: "สมาชิกรายเดือนและรายปีสามารถเลือกใช้บริการสลับระหว่างสาขากาญจนาภิเษก และสาขาบางบอน 3 ได้อย่างไม่มีค่าใช้จ่ายเพิ่ม", 
        en: "Monthly and yearly members can seamlessly work out at both Kanchanaphisek and Bangbon 3 with zero extra fees." 
    },

    // Footer
    "footer-desc-text": { 
        th: "ยกระดับไลฟ์สไตล์การออกกำลังกายของคุณด้วยคลับฟิตเนสระดับพรีเมียม ใกล้บ้าน เดินทางสะดวก เปิดต้อนรับสมาชิกทุกวันเพื่อสุขภาพและหุ่นในฝันของคุณ", 
        en: "Elevate your fitness lifestyle at our premium clubs. Conveniently located, open daily to help you reach your health and dream physique." 
    },
    "footer-quick-links": { th: "เมนูหลัก", en: "Quick Links" },
    "footer-branches": { th: "สาขาที่ให้บริการ", en: "Locations" },
    "branch-kanch-name": { th: "สาขากาญจนาภิเษก", en: "Kanchanaphisek Branch" },
    "branch-bangbon-name": { th: "สาขาบางบอน 3", en: "Bangbon 3 Branch" },

    // Reviews Section
    "reviews-title-1": { th: "รีวิวจาก", en: "Real Member" },
    "reviews-title-2": { th: "ผู้ใช้บริการจริง", en: "Reviews" },
    "reviews-desc": { 
        th: "ความประทับใจและความเห็นจากสมาชิกของ Black Fitness ทั้งสองสาขา", 
        en: "Real testimonials and feedback from Black Fitness members across both branches." 
    },
    "reviews-branch-kanch": { th: "สาขากาญจนาภิเษก", en: "Kanchanaphisek Branch" },
    "reviews-branch-bangbon": { th: "สาขาบางบอน 3", en: "Bangbon 3 Branch" },
    "review-user-kanch-2": { th: "คุณสุรศักดิ์", en: "Surasak K." },
    "review-user-kanch-3": { th: "คุณธนพร", en: "Thanaporn T." },
    "review-user-bangbon-1": { th: "คุณวิชัย", en: "Wichai P." },
    "review-user-bangbon-2": { th: "คุณนภา", en: "Napa S." },
    "review-user-bangbon-3": { th: "คุณศิริพงษ์", en: "Siriphong T." },
    "review-kanch-1": { 
        th: "ฟิตเนสบรรยากาศดีเป็นกันเอง สะอาดมากก มีล็อคเกอร์เก็บของได้เวลามาเล่น เทรนเนอร์แนะนำดีมาก ที่จอดรถเยอะ เดินทางง่าย", 
        en: "Friendly atmosphere, clean gym. Has lockers for storing belongings. Trainers are helpful. Lots of parking space, easy to travel." 
    },
    "review-kanch-2": { 
        th: "อุปกรณ์ใหม่ครบครัน บรรยากาศพรีเมียมมากครับ เครื่องเล่นคุณภาพระดับโลก คุ้มค่าราคามาก แนะนำเลย", 
        en: "Fully equipped with new machines. High premium atmosphere. World-class quality equipment, worth every baht. Highly recommended!" 
    },
    "review-kanch-3": { 
        th: "สะอาด ปลอดภัย มีเทรนเนอร์คอยดูแลและแนะนำการใช้อุปกรณ์อย่างดี ไม่กดดันเลยค่ะ ชอบมากๆ", 
        en: "Clean, safe, with trainers constantly checking forms and guiding equipment usage. No pressure at all. Love it!" 
    },
    "review-bangbon-1": { 
        th: "ยิมกว้างขวาง บรรยากาศโปร่งสบาย เครื่องเล่นครบครันและใหม่เอี่ยม ที่สำคัญที่จอดรถสะดวกสบายมากครับ", 
        en: "Spacious gym with a bright and airy vibe. Brand new and complete equipment. Most importantly, parking is super convenient." 
    },
    "review-bangbon-2": { 
        th: "เทรนเนอร์ดูแลดีเป็นกันเอง สถานที่สะอาดสะอ้าน บรรยากาศดี เหมาะกับการออกกำลังกายมากค่ะ", 
        en: "Trainers are friendly and attentive. The place is pristine and clean, with a great atmosphere perfect for working out." 
    },
    "review-bangbon-3": { 
        th: "บริการดีมาก อุปกรณ์ครบและทันสมัยที่สุดในย่านนี้ บรรยากาศเงียบสงบเป็นส่วนตัวดีครับ", 
        en: "Excellent service. Best and most modern equipment in this area. Quiet and private atmosphere, which is great." 
    },
    "food-title-1": { th: "เติมเต็มความฟิตด้วย", en: "Fuel Your Workout with" },
    "food-title-2": { th: "บูธ Black Food อาหารสุขภาพ", en: "Black Food Healthy Dining" },
    "food-desc": {
        th: "ออกกำลังกายเสร็จแล้ว อย่าลืมดูแลโภชนาการของคุณ! เรามีบูธ Black Food เสิร์ฟอาหารเพื่อสุขภาพแสนอร่อย โปรตีนสูง ไขมันต่ำ เพื่อช่วยฟื้นฟูกล้ามเนื้อและเสริมประสิทธิภาพการออกกำลังกายให้ดีที่สุด",
        en: "Done working out? Don't forget your nutrition! Visit our Black Food booth serving delicious, high-protein, low-fat healthy meals to optimize your recovery and fitness results."
    },
    "food-btn": { th: "ดูเมนูอาหารและคาเฟ่สุขภาพ", en: "Explore Healthy Menu & Cafe" },

    // Announcement Popup
    "announcement-title": { th: "ประกาศสำคัญ", en: "Important Announcement" },
    "announcement-badge-platinum": { th: "งดรับสมาชิกแบบ Platinum (ชั่วคราว) ❗️", en: "Temporarily Suspending Platinum Memberships ❗️" },
    "announcement-subtitle": { 
        th: "เนื่องจากขณะนี้ Black Fitness “สาขาบางบอน3” ได้จำนวนสมาชิก 650 ครบ ตามที่ตั้งใจไว้แล้ว 🖤", 
        en: "As Black Fitness \"Bangbon 3 Branch\" has reached its capacity of 650 members 🖤" 
    },
    "announcement-reason-title": { th: "เพราะไม่อยากให้ 🔻", en: "To ensure the best experience and avoid 🔻" },
    "announcement-reason-1": { th: "แออัดเกินไป", en: "Overcrowding" },
    "announcement-reason-2": { th: "ต้องรอเครื่องนานเกินไป", en: "Long wait times for equipment" },
    "announcement-reason-3": { th: "ไม่มีที่จอดรถ", en: "Insufficient parking space" },
    "announcement-thankyou": { 
        th: "ขอบคุณสมาชิกทุกคนที่สนับสนุนเรา หากเปิดรับสมาชิกเพิ่ม จะรีบแจ้งให้ทุกคนทราบครับ 🙏", 
        en: "Thank you to all members for your support. We will notify you as soon as we reopen memberships 🙏" 
    },
    "announcement-badge-gold": { th: "*ยังรับสมาชิกแบบ Gold : 16 ท่าน ❗️", en: "*We are still accepting Gold memberships: 16 spots left ❗️" },
    "announcement-waiting-list": { 
        th: "🔻หลังจากนี้จะเปิดให้ Booking Waiting list. เท่านั้นครับ", 
        en: "🔻After these spots are filled, we will only open for Booking Waiting list." 
    },
    "announcement-btn-close": { th: "ปิดประกาศ", en: "Dismiss" },
    "announcement-btn-action": { th: "จองสิทธิ์ / ติดต่อเรา", en: "Book / Contact Us" }
};

// SVG templates for floating background items (Gold/Orange colored fitness elements)
const equipmentSVGs = [
    // Dumbbell
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4h2v16H6zm10 0h2v16h-2zM2 8h4v8H2zm16 0h4v8h-4zM6 12h12"/></svg>`,
    // Kettlebell
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a5 5 0 0 0-5 5v3h10V7a5 5 0 0 0-5-5zM5 10h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"/><circle cx="12" cy="16" r="2"/></svg>`,
    // Weight plate
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v7M12 15v7M2 12h7M15 12h7"/></svg>`,
    // Heart/Pulse (Cardio)
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    // Runner (Active)
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m17 3-3.5 3.5M10 8.5 7 11.5M19 10v7M5 8v10M9.5 13.5l5 5M2 22h20"/></svg>`,
    // Muscle arm (Gym)
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 14a5 5 0 0 0-5-5H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4m0-6V7a2 2 0 0 1 4 0v1.5M15 14c.2 1.3 1.2 2 2.5 2s2.5-.7 2.5-2V9a3 3 0 0 0-6 0v5"/></svg>`
];

// Force scroll to top on refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Document State
let currentLang = localStorage.getItem("black_fitness_lang") || "th";

document.addEventListener("DOMContentLoaded", () => {
    // Force scroll to top immediately on DOM load
    window.scrollTo(0, 0);

    // A. Init language selection
    setupLanguageSelector();
    applyLanguage(currentLang);
    
    // B. Setup floating background elements
    createFloatingBackground();
    
    // C. Setup interactive split screen
    setupInteractiveSplit();
    
    // D. Navbar scroll effect
    setupNavbarScroll();
    
    // E. Mobile Navigation Menu
    setupMobileMenu();
    
    // F. Smooth scroll hash navigation
    setupHashNavigation();

    // G. Initialize Lucide Icons
    lucide.createIcons();

    // H. Setup branch card image sliders
    setupBranchSliders();

    // I. Setup announcement popup modal
    setupAnnouncementModal();
});

// 2. Bilingual engine functions
function setupLanguageSelector() {
    const btn = document.getElementById("langToggle");
    const labelTh = document.getElementById("lang-th");
    const labelEn = document.getElementById("lang-en");

    if (btn) {
        btn.addEventListener("click", () => {
            currentLang = currentLang === "th" ? "en" : "th";
            localStorage.setItem("black_fitness_lang", currentLang);
            applyLanguage(currentLang);
        });
    }
}

function applyLanguage(lang) {
    // Toggle active classes on language selector buttons
    const labelTh = document.getElementById("lang-th");
    const labelEn = document.getElementById("lang-en");
    if (labelTh && labelEn) {
        if (lang === "th") {
            labelTh.classList.add("active");
            labelEn.classList.remove("active");
            document.documentElement.lang = "th";
        } else {
            labelTh.classList.remove("active");
            labelEn.classList.add("active");
            document.documentElement.lang = "en";
        }
    }

    // Set page title
    document.title = lang === "th" 
        ? "Black Fitness - คลับฟิตเนสระดับพรีเมียม กาญจนาภิเษก & บางบอน 3" 
        : "Black Fitness - Premium Gym Club Kanchanaphisek & Bangbon 3";

    // Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            const translation = translations[key][lang];
            // If the element has children that are tags (e.g. <span> or <i>), keep them or handle appropriately
            // Here, we use innerHTML if the text contains html tags, otherwise textContent
            if (translation.includes("<") && translation.includes(">")) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Re-initialize Lucide Icons after translations are loaded
    lucide.createIcons();
}

// 3. Interactive Split Screen Background (Hero)
function setupInteractiveSplit() {
    const hero = document.getElementById("hero");
    const panelKanch = document.getElementById("panelKanchanaphisek");
    const panelBangbon = document.getElementById("panelBangbon");

    if (!hero || !panelKanch || !panelBangbon) return;

    // Hover Left Panel
    panelKanch.addEventListener("mouseenter", () => {
        hero.classList.add("left-panel-active");
        hero.classList.remove("right-panel-active");
    });
    panelKanch.addEventListener("mouseleave", () => {
        hero.classList.remove("left-panel-active");
    });

    // Hover Right Panel
    panelBangbon.addEventListener("mouseenter", () => {
        hero.classList.add("right-panel-active");
        hero.classList.remove("left-panel-active");
    });
    panelBangbon.addEventListener("mouseleave", () => {
        hero.classList.remove("right-panel-active");
    });

    // Click panels to scroll to details
    panelKanch.addEventListener("click", () => {
        scrollToSection("card-kanchanaphisek");
    });
    panelBangbon.addEventListener("click", () => {
        scrollToSection("card-bangbon3");
    });
}

// 4. Create Floating Gym Equipment Particles (DOM Particles)
function createFloatingBackground() {
    const bgContainer = document.getElementById("floating-bg");
    if (!bgContainer) return;

    const numberOfParticles = window.innerWidth < 768 ? 10 : 18;
    
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("floating-item");
        
        // Randomly pick a gym equipment icon
        const svgString = equipmentSVGs[Math.floor(Math.random() * equipmentSVGs.length)];
        particle.innerHTML = svgString;

        // Randomly color the particles (mostly gold and orange tints)
        const isGold = Math.random() > 0.5;
        const color = isGold ? "rgba(212, 175, 55, 0.45)" : "rgba(255, 107, 0, 0.45)";
        particle.style.color = color;

        // Generate random placements and falling trajectories
        const xPos = Math.random() * 95; // Horizontal position (0% to 95% of viewport width)
        const sway = Math.random() * 100 - 50; // Sway amplitude (-50px to 50px)

        const size = Math.floor(Math.random() * 45) + 25; // 25px to 70px
        const opacity = (Math.random() * 0.10 + 0.04).toFixed(3); // keep very subtle (4% to 14% opacity)
        const duration = Math.floor(Math.random() * 20) + 18; // 18s to 38s
        const delay = -(Math.random() * duration).toFixed(2); // negative delay so they start pre-filled on the screen

        const rotateStart = Math.floor(Math.random() * 360);
        const rotateMid = rotateStart + Math.floor(Math.random() * 180) - 90;
        const rotateEnd = rotateStart + Math.floor(Math.random() * 360) - 180;

        // Set CSS variables and inline styles
        particle.style.left = `${xPos}vw`;
        particle.style.setProperty("--sway", `${sway}px`);
        particle.style.setProperty("--size", `${size}px`);
        particle.style.setProperty("--opacity", opacity);
        particle.style.setProperty("--duration", `${duration}s`);
        particle.style.setProperty("--delay", `${delay}s`);

        particle.style.setProperty("--rotate-start", `${rotateStart}deg`);
        particle.style.setProperty("--rotate-mid", `${rotateMid}deg`);
        particle.style.setProperty("--rotate-end", `${rotateEnd}deg`);

        bgContainer.appendChild(particle);
    }
}

// 5. Navbar scroll logic
function setupNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        // Highlight correct nav link based on scroll position
        highlightNavLink();
    });
}

function highlightNavLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let currentSectionId = "hero";
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            currentSectionId = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

// 6. Mobile Navigation Menu Toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    const mobileLinks = document.querySelectorAll(".mobile-link, .btn-mobile-cta");
    const toggleIcon = menuToggle ? menuToggle.querySelector("i") : null;

    if (!menuToggle || !mobileNav) return;

    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
        
        // Toggle lucide icon between menu and close
        if (mobileNav.classList.contains("open")) {
            menuToggle.innerHTML = `<i data-lucide="x"></i>`;
        } else {
            menuToggle.innerHTML = `<i data-lucide="menu"></i>`;
        }
        lucide.createIcons();
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
            menuToggle.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
        });
    });
}

// 7. General Navigation Utilities
function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;
    
    const offset = 80; // height of navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const targetRect = target.getBoundingClientRect().top;
    const targetPosition = targetRect - bodyRect;
    const offsetPosition = targetPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function setupHashNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            if (id === "") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                // Reset active highlights in navbar
                const navLinks = document.querySelectorAll(".nav-link");
                navLinks.forEach(link => link.classList.remove("active"));
                const homeLink = document.querySelector('.nav-link[href="#hero"]');
                if (homeLink) homeLink.classList.add("active");
                return;
            }
            scrollToSection(id);
        });
    });
}

function setupBranchSliders() {
    const sliders = document.querySelectorAll('.branch-slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev-arrow');
        const nextBtn = slider.querySelector('.next-arrow');
        const dots = slider.querySelectorAll('.dot');
        let currentIdx = 0;

        function updateSlider(index) {
            if (index >= slides.length) currentIdx = 0;
            else if (index < 0) currentIdx = slides.length - 1;
            else currentIdx = index;

            slides.forEach((slide, idx) => {
                if (idx === currentIdx) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            dots.forEach((dot, idx) => {
                if (idx === currentIdx) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateSlider(currentIdx + 1);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateSlider(currentIdx - 1);
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                updateSlider(idx);
            });
        });
        
        // Auto slide every 5 seconds for visual atmosphere
        let autoSlideInterval = setInterval(() => {
            updateSlider(currentIdx + 1);
        }, 5000);
        
        // Pause auto-slide on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        slider.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                updateSlider(currentIdx + 1);
            }, 5000);
        });
    });
}

// 8. Announcement Popup Modal & Floating Button Logic
function setupAnnouncementModal() {
    const modal = document.getElementById("announcementModal");
    const closeBtn = document.getElementById("announcementClose");
    const dismissBtn = document.getElementById("announcementDismissBtn");
    const triggerBtn = document.getElementById("announcementBtn");
    const badgeDot = document.getElementById("announcementDot");

    if (!modal) return;

    // Show modal function
    function openModal() {
        modal.classList.add("open");
        document.body.classList.add("announcement-modal-open");
        // Hide notification dot when user opens the modal
        if (badgeDot) {
            badgeDot.style.display = "none";
        }
    }

    // Hide modal function
    function closeModal() {
        modal.classList.remove("open");
        document.body.classList.remove("announcement-modal-open");
        sessionStorage.setItem("black_fitness_news_dismissed", "true");
    }

    // Bind triggers
    if (triggerBtn) {
        triggerBtn.addEventListener("click", openModal);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    if (dismissBtn) {
        dismissBtn.addEventListener("click", closeModal);
    }

    // Close when clicking outside of the card
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Auto-open modal on first page load per session
    const isDismissed = sessionStorage.getItem("black_fitness_news_dismissed");
    if (!isDismissed) {
        // Add a slight delay for aesthetic page entry
        setTimeout(() => {
            openModal();
        }, 1200);
    } else {
        // Hide dot if they already read it in this session
        if (badgeDot) {
            badgeDot.style.display = "none";
        }
    }
}
