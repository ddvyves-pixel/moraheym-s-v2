
const translations = {

    fr: {
        // NAVIGATION
        actualites: "Actualités",
        groupe: "Le groupe",
        expertise: "Expertise",
        vision: "Vision",
        projets: "Projets",
        contact: "Contact",

        // HERO
        hero_kicker: "Développement · Construction · Éducation",
        hero_title: "Construire l'Afrique de demain.",
        hero_text: "Le GROUPE MORAHEYM'S développe des projets immobiliers, des infrastructures et des initiatives d'éducation internationale pour contribuer au développement durable et au renforcement des compétences en Afrique.",
        hero_btn_1: "Découvrir le groupe",
        hero_btn_2: "Prendre contact",

        // DOMAINES
        domaines_label: "Nos expertises",
        domaines_title: "Des domaines d'action au service du développement.",
        immobilier: "Promotion immobilière",
        construction: "Construction & infrastructures",
        education: "Éducation internationale",
        recherche: "Recherche & capacités",

        // ÉQUIPE
        equipe_label: "Notre équipe",
        equipe_title: "Des femmes et des hommes engagés.",

        dg_role: "Directeur Général de MORAHEYM’S",
        dga_role: "DGA & Coordonnateur des projets MORAHEYM’S",

        // FOOTER
        navigation: "Navigation",
        nos_domaines: "Nos domaines",
        nos_partenaires: "Nos partenaires",
        adresse: "Adresse",
        excellence: "Excellence, innovation et impact."
    },

    en: {
        // NAVIGATION
        actualites: "News",
        groupe: "The Group",
        expertise: "Expertise",
        vision: "Vision",
        projets: "Projects",
        contact: "Contact",

        // HERO
        hero_kicker: "Development · Construction · Education",
        hero_title: "Building the Africa of tomorrow.",
        hero_text: "GROUPE MORAHEYM'S develops real estate projects, infrastructure and international education initiatives to contribute to sustainable development and strengthen skills across Africa.",
        hero_btn_1: "Discover the Group",
        hero_btn_2: "Get in touch",

        // DOMAINES
        domaines_label: "Our expertise",
        domaines_title: "Fields of action serving development.",
        immobilier: "Real Estate Development",
        construction: "Construction & Infrastructure",
        education: "International Education",
        recherche: "Research & Capacity Building",

        // ÉQUIPE
        equipe_label: "Our team",
        equipe_title: "Committed women and men.",

        dg_role: "Chief Executive Officer of MORAHEYM’S",
        dga_role: "Deputy CEO & MORAHEYM’S Project Coordinator",

        // FOOTER
        navigation: "Navigation",
        nos_domaines: "Our Fields",
        nos_partenaires: "Our Partners",
        adresse: "Address",
        excellence: "Excellence, innovation and impact."
    },

    ru: {
        // НАВИГАЦИЯ
        actualites: "Новости",
        groupe: "Группа",
        expertise: "Экспертиза",
        vision: "Видение",
        projets: "Проекты",
        contact: "Контакты",

        // ГЛАВНЫЙ ЭКРАН
        hero_kicker: "Развитие · Строительство · Образование",
        hero_title: "Создаём Африку завтрашнего дня.",
        hero_text: "GROUPE MORAHEYM'S реализует проекты в сфере недвижимости, инфраструктуры и международного образования, способствуя устойчивому развитию и укреплению профессиональных компетенций в Африке.",
        hero_btn_1: "Открыть страницу группы",
        hero_btn_2: "Связаться с нами",

        // НАПРАВЛЕНИЯ
        domaines_label: "Наши компетенции",
        domaines_title: "Направления деятельности на благо развития.",
        immobilier: "Развитие недвижимости",
        construction: "Строительство и инфраструктура",
        education: "Международное образование",
        recherche: "Исследования и развитие компетенций",

        // КОМАНДА
        equipe_label: "Наша команда",
        equipe_title: "Преданные своему делу специалисты.",

        dg_role: "Генеральный директор MORAHEYM’S",
        dga_role: "Заместитель генерального директора и координатор проектов MORAHEYM’S",

        // FOOTER
        navigation: "Навигация",
        nos_domaines: "Наши направления",
        nos_partenaires: "Наши партнёры",
        adresse: "Адрес",
        excellence: "Совершенство, инновации и влияние."
    }

};


// =====================================================
// SYSTÈME DE TRADUCTION
// =====================================================

(function () {

    const LANGUAGE_KEY = "moraheyms-language";

    function applyLanguage(language) {

        if (!translations[language]) {
            language = "fr";
        }

        // Langue du document
        document.documentElement.setAttribute("lang", language);

        // Traduction des textes
        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }

        });

        // Traduction HTML lorsque nécessaire
        document.querySelectorAll("[data-i18n-html]").forEach(element => {

            const key = element.dataset.i18nHtml;

            if (translations[language][key]) {
                element.innerHTML = translations[language][key];
            }

        });

        // Traduction des attributs
        document.querySelectorAll("[data-i18n-attr]").forEach(element => {

            const data = element.dataset.i18nAttr;

            if (!data) return;

            data.split(";").forEach(item => {

                const parts = item.split(":");

                if (parts.length !== 2) return;

                const attribute = parts[0].trim();
                const key = parts[1].trim();

                if (translations[language][key]) {
                    element.setAttribute(
                        attribute,
                        translations[language][key]
                    );
                }

            });

        });

        // Mémorisation
        try {
            localStorage.setItem(
                LANGUAGE_KEY,
                language
            );
        } catch (e) {}

        // Mise à jour du bouton FR / EN / RU
        const currentButton =
            document.getElementById("languageCurrent");

        if (currentButton) {
            currentButton.textContent =
                language.toUpperCase();
        }

        // État actif des options
        document.querySelectorAll(".language-option").forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.lang === language
            );

        });

    }


    // Fonction utilisable par le sélecteur de langue
    window.applyMoraheymLanguage = applyLanguage;


    // Récupération de la langue sauvegardée
    let savedLanguage = "fr";

    try {

        const stored =
            localStorage.getItem(LANGUAGE_KEY);

        if (
            stored === "fr" ||
            stored === "en" ||
            stored === "ru"
        ) {
            savedLanguage = stored;
        }

    } catch (e) {}


    // Appliquer automatiquement la langue
    applyLanguage(savedLanguage);

})();
