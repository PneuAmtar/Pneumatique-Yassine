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