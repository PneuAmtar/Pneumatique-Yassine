const lang = {
    fr: {
        btn_lang: "العربية",
        title: "Pneumatique Yassine",
        title_st: "Pneumatique ",
        title_nd: "Yassine",
        services: "Services",
        lieux: "Lieux",
        contact: "Contact",
        h2: "Vous souhaitez acheter les meilleurs pneus aux meilleurs prix ?",
        h3: "Nous offrons tout cela et bien plus encore",
        btn: "Voir les services",
        h3_Livraison: "Livraison",
        p_Livraison: "Nous pouvons vous livrer des roues partout dans la région (Tanger-Tétouan-Al Hoceima)",
        h3_Jours_Ouvrables: "Jours Ouvrables",
        p_Jours_Ouvrables: "Nous travaillons tous les jours de la semaine sauf le vendredi",
        h3_Réparations: "Réparations",
        p_Réparations: "Nous pouvons réparer complètement votre voiture de tous les problèmes",
        h3_Condition_Urgence: "Condition Urgence",
        p_Condition_Urgence: "Si votre voiture tombe en panne en traversant la route nationale 16, alors contactez-nous pour réparer votre voiture",
        lieux_info_rg: "La région",
        lieux_info_rg_st: "Tanger",
        lieux_info_rg_nd: "Tétouan",
        lieux_info_rg_rd: "Al Hoceima",
        lieux_info_nt: "La route nationale",
        contact_info_tl_title: "Téléphone",
        contact_info_mail_title: "E-mail",
    },
    ar: {
        btn_lang: "Français",
        title: "عجلات ياسين",
        title_st: "عجلات ",
        title_nd: "ياسين",
        services: "الخدمات",
        lieux: "المواقع",
        contact: "التواصل",
        h2: "هل تريد شراء أفضل الإطارات بأفضل الأسعار؟",
        h3: "نحن نقدم كل هذا وأكثر",
        btn: "أنظر إلى الخدمات",
        h3_Livraison: "التوصيل",
        p_Livraison: "يمكننا توصيل العجلات إليكم في أي مكان بجهة (طنجة-تطوان-الحسيمة)",
        h3_Jours_Ouvrables: "أيام العمل",
        p_Jours_Ouvrables: "نحن نعمل كل أيام الأسبوع ماعدا الجمعة",
        h3_Réparations: "الإصلاحات",
        p_Réparations: "يمكننا إصلاح سيارتك بالكامل من جميع المشاكل",
        h3_Condition_Urgence: "حالة الطوارئ",
        p_Condition_Urgence: "إذا تعطلت سيارتك أثناء عبورك الطريق الوطني رقم 16، تواصل معنا لإصلاح سيارتك",
        lieux_info_rg: "جهة",
        lieux_info_rg_st: "طنجة",
        lieux_info_rg_nd: "تطوان",
        lieux_info_rg_rd: "الحسيمة",
        lieux_info_nt: "الطريق الوطني",
        contact_info_tl_title: "رقم الهاتف",
        contact_info_mail_title: "البريد الإلكتروني",
    },
};

let currentLang = 'fr';

function changeLang() {
currentLang = currentLang === 'fr' ? 'ar' : 'fr';

// اختار كل العناصر اللي فيها data-key
document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang'); // ناخذ المفتاح
    el.textContent = lang[currentLang][key]; // نغير النص حسب اللغة
});

// تغيير اتجاه الصفحة
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}
const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cardsContainer');

// 🛞 بيانات العجلات (بطاقات)
const wheels = [
  {
    title: "155/65/R14",
    image: "https://bonpneu.ma/wp-content/uploads/2022/09/laufenn.jpg",
    brand: "LAUFENN"
  },
  {
    title: "155/65/R14",
    image: "https://bonpneu.ma/wp-content/uploads/2022/08/laufenn-1-304x311.png",
    brand: "NEXEN"
  },
  {
    title: "155/70/R13",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "155/70/R13",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "155/70/R13",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "155/70/R13",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "155/80/R13",
    image: "Images/images.jpeg",
    brand: "GT RADIAL"
  },
  {
    title: "155/80/R13",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "155/80/R13",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "155/80/R13",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "155/R12C",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "155/R12C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "155/R12C",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "155/R13C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "155/R13C",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "165/60/R14",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "165/60/R14",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "165/60/R14",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "165/65/R14",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "165/70/R13",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "165/70/R13",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "165/70/R13",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "165/70/R13",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "165/70/R13",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "165/70/R14",
    image: "Images/images.jpeg",
    brand: "VOYAGER"
  },
  {
    title: "165/70/R14",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "165/70/R14",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "165/70/R14",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "165/70/R14C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "165/R13C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "175/55/R15",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "175/65/R14",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "175/65/R14C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "175/65/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "175/65/R15",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "175/65/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "175/65/R15",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "175/65/R15",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "175/70/R13",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "175/70/R13",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "175/70/R13",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "175/70/R13",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "175/70/R13",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "Firestone"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "175/70/R14",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "175/70/R14C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "175/70/R14C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "175/70/R14C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "175/80/R14",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "175/R13C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "185/55/R15",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "185/55/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "185/55/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "185/55/R15",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "185/55/R15",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "185/60/R14",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "185/60/R14",
    image: "Images/images.jpeg",
    brand: "VOYAGER"
  },
  {
    title: "185/60/R14",
    image: "Images/images.jpeg",
    brand: "DIPLOMAT"
  },
  {
    title: "185/60/R14",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "185/60/R15",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "185/60/R15",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "185/60/R15",
    image: "Images/images.jpeg",
    brand: "VOYAGER"
  },
  {
    title: "185/60/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "185/60/R15",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "185/60/R15",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "185/60/R15",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "DIPLOMAT"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "185/65/R14",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "185/65/R15",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "185/65/R15",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "185/65/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "185/65/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "185/65/R15",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "185/65/R15",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "185/70/R14",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "185/70/R14",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "185/70/R14",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "185/R14C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "185/R14C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "185/R15C",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "185/R15C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "185/R15C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/45/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "195/45/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "195/45/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/45/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/45/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "DIPLOMAT"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "VOYAGER"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/50/R15",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "195/50/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "195/50/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "195/50/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/55/R15",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "195/55/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "195/55/R15",
    image: "Images/images.jpeg",
    brand: "DIPLOMAT"
  },
  {
    title: "195/55/R15",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "195/55/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "195/55/R16",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "195/55/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "195/60/R15",
    image: "Images/images.jpeg",
    brand: "VOYAGER"
  },
  {
    title: "195/60/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/60/R15",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "195/60/R15",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/60/R16",
    image: "Images/images.jpeg",
    brand: "MRF"
  },
  {
    title: "195/60/R16C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "195/60/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "195/60/R16C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "195/65/R15",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "195/65/R15",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "195/65/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "195/65/R15",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "195/65/R15",
    image: "Images/images.jpeg",
    brand: "VOYAGER"
  },
  {
    title: "195/65/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/65/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/65/R16C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/70/R14",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/70/R14",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/70/R15C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/70/R15C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/70/R15C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/75/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "195/75/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "195/75/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/75/R16C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "195/R14C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/R15C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "195/R15C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/45/R17",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "205/45/R17",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "205/45/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/45/R17",
    image: "Images/images.jpeg",
    brand: "GENERAL"
  },
  {
    title: "205/45/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/45/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/45/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/50/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/50/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/50/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/50/R17",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "205/50/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/50/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/50/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/50/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "DIPLOMAT"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/55/R16",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "205/55/R17",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "205/55/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/55/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/55/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/55/R17",
    image: "Images/images.jpeg",
    brand: "apollo"
  },
  {
    title: "205/55/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/55/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "205/55/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/55/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/60/R15",
    image: "Images/images.jpeg",
    brand: "DIPLOMAT"
  },
  {
    title: "205/60/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/60/R15",
    image: "Images/images.jpeg",
    brand: "VOYAGER"
  },
  {
    title: "205/60/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/60/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/65/R15",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/65/R15C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/65/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/65/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "205/65/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/65/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/65/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/65/R16C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/65/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/65/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/65/R16C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "205/65/R16C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/70/R15C",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "205/70/R15C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/70/R15C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/70/R15C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/70/R15C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "205/75/R16C",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "205/75/R16C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/75/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "205/75/R16C",
    image: "Images/images.jpeg",
    brand: "FULDA"
  },
  {
    title: "205/75/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "205/75/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/R14C",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "205/R14C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "205/R14C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/R14C",
    image: "Images/images.jpeg",
    brand: "SEMPERIT"
  },
  {
    title: "205/R14C",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "205/R14C",
    image: "Images/images.jpeg",
    brand: "TRIANGLE"
  },
  {
    title: "205/R16",
    image: "Images/images.jpeg",
    brand: "WIDEWAY"
  },
  {
    title: "205/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "205/85/R16C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/40/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/40/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/40/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/40/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/40/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/40/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "215/40/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "215/40/R18",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "215/40/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/40/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/45/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/45/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/45/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/45/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/45/R16",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "215/45/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/45/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/45/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/45/R17",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "215/45/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/45/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/50/R17",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "215/50/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/50/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/50/R17",
    image: "Images/images.jpeg",
    brand: "SEHA"
  },
  {
    title: "215/50/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/50/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/50/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "215/50/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/50/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/50/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/55/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/55/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/55/R16",
    image: "Images/images.jpeg",
    brand: "DIPLOMAT"
  },
  {
    title: "215/55/R16",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "215/55/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/55/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/55/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/55/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "apollo"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/55/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/60/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/60/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "215/60/R17C",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "215/65/R15",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/65/R15C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/65/R15C",
    image: "Images/images.jpeg",
    brand: "MABOR"
  },
  {
    title: "215/65/R15C",
    image: "Images/images.jpeg",
    brand: "Firestone"
  },
  {
    title: "215/65/R15C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/65/R15C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/65/R16",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "215/65/R16C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/65/R17",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "215/65/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/65/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "215/65/R17",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "215/65/R17",
    image: "Images/images.jpeg",
    brand: "ARIVO"
  },
  {
    title: "215/65/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/70/R15C",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "215/70/R15C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/70/R15C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/70/R15C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/70/R15C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/70/R15C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/70/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/70/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "215/70/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/70/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/70/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/70/R16C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/70/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/75/R15",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "215/75/R15",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "215/75/R16C",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "215/75/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "215/75/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "215/75/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "215/75/R16C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "215/R14C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/35/R19",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "225/35/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "225/35/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/35/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/35/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/35/R19",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "225/35/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/40/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/40/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "225/40/R19",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/40/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/40/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/40/R19",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "225/40/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/40/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "225/40/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "225/40/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/40/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/45/R17",
    image: "Images/images.jpeg",
    brand: "WATERFALL"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/45/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/45/R19",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/45/R20",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/45/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "225/45/R20",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "225/45/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/45/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/45/R20",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/45/R20",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/50/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/50/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/50/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/50/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/55/R16",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "225/55/R16",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "225/55/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/55/R16",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/55/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/55/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/55/R19",
    image: "Images/images.jpeg",
    brand: "ARIVO"
  },
  {
    title: "225/55/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/55/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/60/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "225/60/R17",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "225/60/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/60/R18",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/65/R16C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/65/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/65/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/65/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/65/R16C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/65/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "225/65/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/65/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "225/65/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/65/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "225/70/R15C",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "225/70/R15C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/70/R15C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/70/R15C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "225/75/R16C",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "225/75/R16C",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "225/75/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "225/75/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "225/75/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/35/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/40/R18",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "235/40/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "235/40/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/40/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/40/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/40/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/40/R19",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "235/40/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/45/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/45/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/45/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/45/R17",
    image: "Images/images.jpeg",
    brand: "KELLI"
  },
  {
    title: "235/45/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/45/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/45/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/45/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/45/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/45/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/50/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/50/R18",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "235/50/R19",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "235/50/R19",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "235/50/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/50/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/50/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/50/R19",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "235/50/R19",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "235/50/R20",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "235/55/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/55/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/55/R19",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "235/60/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/60/R16",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "235/60/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/60/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/60/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/60/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/60/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/60/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "FULDA"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "Firestone"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/65/R16C",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/65/R17",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "235/65/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "235/65/R17",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "235/65/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/65/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/65/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/65/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/65/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/75/R15",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "235/75/R15",
    image: "Images/images.jpeg",
    brand: "HAIDA"
  },
  {
    title: "235/75/R15",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/85/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "235/85/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "235/85/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "235/85/R16",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "245/35/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/35/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "245/35/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/35/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/35/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "245/35/R20",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "245/35/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/35/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/35/R21",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/40/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "245/40/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "245/40/R17",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "245/40/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/40/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/40/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/40/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/40/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/40/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/40/R20",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "245/40/R20",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/40/R20",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "245/40/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/45/R17",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "245/45/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "245/45/R17",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "245/45/R17",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "245/45/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/45/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/45/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/45/R18",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/45/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "245/45/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "245/45/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/45/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/45/R19",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "245/45/R20",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "245/50/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/50/R18",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "245/50/R19",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "245/50/R19",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "245/60/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/60/R18",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "245/65/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "245/65/R17",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "245/65/R17",
    image: "Images/images.jpeg",
    brand: "apollo"
  },
  {
    title: "245/65/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/65/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/70/R16",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "245/70/R16",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "245/70/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "245/70/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/70/R16",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "245/70/R17",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "245/70/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "245/70/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/70/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "245/75/R16",
    image: "Images/images.jpeg",
    brand: "BFGoodrich"
  },
  {
    title: "245/75/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "245/75/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "245/75/R16",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "255/35/R18",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "255/35/R18",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "255/35/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "255/35/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "255/35/R19",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "255/35/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "255/35/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/35/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "255/35/R19",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "255/35/R20",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/35/R20",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "255/35/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/35/R20",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "255/35/R20",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "255/35/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/35/R21",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "255/40/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "DEBICA"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/40/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/40/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "255/40/R21",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "255/40/R21",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "255/40/R21",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/40/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/40/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/45/R18",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/45/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/45/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/45/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/45/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/45/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "255/45/R19",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "255/45/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "255/45/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/45/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/50/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/50/R19",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "255/50/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/50/R19",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "255/50/R19",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "255/50/R19",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "255/50/R19",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "255/55/R18",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/55/R18",
    image: "Images/images.jpeg",
    brand: "Firestone"
  },
  {
    title: "255/55/R18",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "255/55/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/55/R18",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "255/55/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "255/55/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/55/R19",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "255/55/R19",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "255/55/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/55/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "255/55/R19",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "255/55/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/55/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "255/60/R17",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "255/60/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "255/60/R17",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "255/60/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/60/R18",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "255/60/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/60/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "255/65/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "255/70/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "255/70/R18",
    image: "Images/images.jpeg",
    brand: "WIDEWAY"
  },
  {
    title: "255/70/R18",
    image: "Images/images.jpeg",
    brand: "Firestone"
  },
  {
    title: "265/30/R19",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "265/30/R19",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "265/30/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "265/30/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/30/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "265/35/R22",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/40/R20",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "265/40/R21",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "265/40/R21",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "265/40/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "265/40/R21",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "265/40/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/40/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/40/R22",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "265/40/R22",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/45/R20",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "265/45/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "265/45/R20",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "265/45/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "265/45/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/45/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/50/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "265/50/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "265/50/R20",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "265/50/R20",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "265/50/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/50/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/55/R19",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "265/60/R18",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "265/60/R18",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/60/R18",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/60/R18",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "265/65/R17",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "265/65/R17",
    image: "Images/images.jpeg",
    brand: "BF Goodrich"
  },
  {
    title: "265/65/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "265/65/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/65/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "265/70/R15",
    image: "Images/images.jpeg",
    brand: "ARIVO"
  },
  {
    title: "265/70/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "265/70/R16",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/70/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/70/R16",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "265/70/R17",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "265/70/R17",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "265/70/R17",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "265/70/R17",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "265/70/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "265/75/R16",
    image: "Images/images.jpeg",
    brand: "JOURNEY"
  },
  {
    title: "265/75/R16",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/30/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/35/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "275/35/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/35/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/35/R20",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "275/35/R20",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "275/35/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/35/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/35/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/35/R21",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "275/35/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/35/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/35/R22",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "275/35/R22",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/40/R19",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "275/40/R19",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/40/R19",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/40/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/40/R19",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "275/40/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/40/R20",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "275/40/R20",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "275/40/R20",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "275/40/R20",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "275/40/R21",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "275/40/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/40/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/40/R21",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "275/40/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/40/R21",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "275/40/R22",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "275/40/R22",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "275/40/R22",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/40/R22",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "275/40/R22",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "275/40/R22",
    image: "Images/images.jpeg",
    brand: "MILEKING"
  },
  {
    title: "275/45/R20",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "275/45/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/45/R20",
    image: "Images/images.jpeg",
    brand: "LAUFENN"
  },
  {
    title: "275/45/R20",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "275/45/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/45/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/45/R21",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "275/45/R21",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "275/45/R21",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "275/45/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "275/45/R21",
    image: "Images/images.jpeg",
    brand: "Firestone"
  },
  {
    title: "275/45/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/45/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/50/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "275/50/R20",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "275/50/R20",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "275/50/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "275/50/R22",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "275/55/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "285/30/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "285/30/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "285/30/R22",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "285/30/R22",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "285/30/R22",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "285/30/R22",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "285/35/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "285/35/R22",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "285/35/R22",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "285/35/R22",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "285/40/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "285/40/R20",
    image: "Images/images.jpeg",
    brand: "DUNLOP"
  },
  {
    title: "285/40/R20",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "285/40/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "285/40/R21",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "285/40/R21",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "285/40/R21",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "285/40/R21",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "285/40/R21",
    image: "Images/images.jpeg",
    brand: "BRIDGESTONE"
  },
  {
    title: "285/40/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "285/40/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "285/40/R22",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "285/40/R22",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "285/40/R22",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "285/40/R22",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "285/45/R19",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "285/45/R19",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "285/45/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "285/45/R21",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "285/45/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "285/45/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "285/60/R18",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "295/35/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "MICHELIN"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "SAVA"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "Gislaved"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "295/35/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "295/40/R22",
    image: "Images/images.jpeg",
    brand: "GOOD YEAR"
  },
  {
    title: "295/40/R22",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "305/40/R20",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "315/30/R22",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "315/35/R20",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "315/35/R20",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "315/35/R20",
    image: "Images/images.jpeg",
    brand: "TRACMAX"
  },
  {
    title: "315/35/R21",
    image: "Images/images.jpeg",
    brand: "PIRELLI"
  },
  {
    title: "315/35/R21",
    image: "Images/images.jpeg",
    brand: "HANKOOK"
  },
  {
    title: "315/35/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "315/35/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "315/35/R21",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "315/40/R21",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  },
  {
    title: "315/40/R21",
    image: "Images/images.jpeg",
    brand: "NEXEN"
  },
  {
    title: "315/70/R17",
    image: "Images/images.jpeg",
    brand: "DURUN"
  },
  {
    title: "325/30/R21",
    image: "Images/images.jpeg",
    brand: "KAPSEN"
  },
  {
    title: "325/30/R21",
    image: "Images/images.jpeg",
    brand: "HABILEAD"
  },
  {
    title: "325/35/R22",
    image: "Images/images.jpeg",
    brand: "CONTINENTAL"
  }
];
const cardsPerPage = 20; // عدد البطاقات في كل صفحة
let currentPage = 1;     // الصفحة الحالية
let filteredWheels = []; // نتائج البحث بعد التصفية

// 🔍 وظيفة البحث
function searchWheels() {
    const query = searchInput.value.replace(/\s+/g, '').toLowerCase();
    filteredWheels = wheels.filter(w => {
        // استخراج الأرقام فقط من العنوان
        const titleNumbers = w.title.replace(/\D+/g, '');
        // البحث في الأرقام فقط
        return titleNumbers.includes(query);
    });
    currentPage = 1; // العودة للصفحة الأولى عند أي بحث جديد
    renderCards();
    renderPagination();
}

// 🧱 عرض البطاقات مع التقسيم للصفحات
function renderCards() {
    cardsContainer.innerHTML = '';

    if (filteredWheels.length === 0) {
        cardsContainer.innerHTML = "<p>❌ لا توجد نتائج مطابقة.</p>";
        return;
    }

    // حساب البطاقات للصفحة الحالية
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, filteredWheels.length);
    const pageWheels = filteredWheels.slice(startIndex, endIndex);

    pageWheels.forEach(wheel => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-body">
                <img src="${wheel.image}" alt="${wheel.title}">
                <div class="card-title">${wheel.title}</div>
                <div class="card-info">${wheel.brand}</div>
            </div>
        `;

        cardsContainer.appendChild(card);
    });
}

// 🔢 إنشاء أزرار الصفحات
function renderPagination() {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(filteredWheels.length / cardsPerPage);

    if (totalPages <= 1) return; // لا تظهر إذا كانت صفحة واحدة

    // زر الصفحة السابقة
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = '«';
        prevButton.addEventListener('click', () => {
            currentPage--;
            renderCards();
            renderPagination();
        });
        paginationContainer.appendChild(prevButton);
    }

    // أزرار الصفحات
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderCards();
            renderPagination();
        });
        paginationContainer.appendChild(pageButton);
    }

    // زر الصفحة التالية
    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.textContent = '»';
        nextButton.addEventListener('click', () => {
            currentPage++;
            renderCards();
            renderPagination();
        });
        paginationContainer.appendChild(nextButton);
    }
}

// 🎯 تهيئة أولية
searchInput.addEventListener('input', searchWheels);
filteredWheels = [...wheels]; // نسخ جميع البطاقات في البداية
renderCards();
renderPagination();
