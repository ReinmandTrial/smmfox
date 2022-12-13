(() => {
    "use strict";
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    function menuClose() {
        bodyUnlock();
        document.documentElement.classList.remove("menu-open");
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function pageNavigation() {
        document.addEventListener("click", pageNavigationAction);
        function pageNavigationAction(e) {
            if ("click" === e.type) {
                const targetElement = e.target;
                if (targetElement.closest("[data-goto]")) {
                    const gotoLink = targetElement.closest("[data-goto]");
                    const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                    const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                    const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                    const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                    gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                    e.preventDefault();
                }
            }
        }
    }
    let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
        const targetBlockElement = document.querySelector(targetBlock);
        if (targetBlockElement) {
            let headerItem = "";
            let headerItemHeight = 0;
            if (noHeader) {
                headerItem = "header.header";
                const headerElement = document.querySelector(headerItem);
                if (!headerElement.classList.contains("_header-scroll")) {
                    headerElement.style.cssText = `transition-duration: 0s;`;
                    headerElement.classList.add("_header-scroll");
                    headerItemHeight = headerElement.offsetHeight;
                    headerElement.classList.remove("_header-scroll");
                    setTimeout((() => {
                        headerElement.style.cssText = ``;
                    }), 0);
                } else headerItemHeight = headerElement.offsetHeight;
            }
            document.documentElement.classList.contains("menu-open") ? menuClose() : null;
            let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
            targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
            targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
            window.scrollTo({
                top: targetBlockElementPosition,
                behavior: "smooth"
            });
        }
    };
    const ru_namespaceObject = JSON.parse('{"header":{"nav1":"Главная","nav2":"Услуги","nav3":"Преимущества"},"home":{"title1":"Продвижение вашего аккаунта","title2":"в соцсетях"},"services":{"title":"Услуги","btn":"Подробнее","descr1":"Продолжайте снимать увлекательные видео, делайте их профессиональную обработку, а продвижение своего канала оставьте нам.","descr2":"У Вас есть свой канал в Telegram, и Вы хотите его сделать ещё более популярным? Тогда Вы понимаете, что первый шаг в этом направлении — продвижение.","descr3":"Мы проведём нужные настройки, поможем Вам найти свою целевую аудиторию, избавим от проходящих мимо зевак и бесполезных лайков.","descr4":"Мы поможем Вам быстро собрать большое количество лайков прямо после публикации. Это даст сигнал соцсети, что Ваш пост интересен аудитории.","descr5":"Оставьте ссылку на ролик, мы быстро сделаем его популярным в сети TikTok, формируя лайки реальных европейских пользователей.","descr6":"Twitter — уникальная сеть, которая живёт по своим правилам. Поэтому для эффективного продвижения в этой сети микроблогов важно понять определённую специфику."},"benefits":{"title":"Преимущества","itemTitle1":"Качество и цена 24/7","itemDescr1":"Будьте уверены, у нас самые лучшие цены на самые качественные услуги","itemTitle2":"Надежность","itemDescr2":"Полная автоматизация запуска и выполнения всех услуг на максимальной скорости","itemTitle3":"Опыт работы","itemDescr3":"Мы качаем соцсети уже более 3 лет и выполнили около 200 тысяч заказов"},"footer":{"address":"г. Киев, ул. Крещатик, 13"}}');
    const ua_namespaceObject = JSON.parse('{"header":{"nav1":"Головна","nav2":"Послуги","nav3":"Переваги"},"home":{"title1":"Просування вашого акаунту","title2":"у соцмережах"},"services":{"title":"Послуги","btn":"Докладніше","descr1":"Продовжуйте знімати захоплюючі відео, робіть їхню професійну обробку, а просування свого каналу залиште нам.","descr2":"Ви маєте свій канал у Telegram, і Ви хочете його зробити ще популярнішим? Тоді Ви розумієте, що перший крок у цьому напрямі – просування.","descr3":"Ми проведемо потрібні налаштування, допоможемо Вам знайти свою цільову аудиторію, позбавимо від роззяв, що проходять повз, і марних лайків.","descr4":"Ми допоможемо Вам швидко зібрати велику кількість лайків після публікації. Це дасть сигнал соцмережі, що Ваш пост цікавий аудиторії.","descr5":"Залиште посилання на ролик, ми швидко зробимо його популярним у мережі TikTok, формуючи лайки реальних європейських користувачів.","descr6":"Twitter - унікальна мережа, яка живе за своїми правилами. Тому для ефективного просування у цій мережі мікроблогів важливо зрозуміти певну специфіку."},"benefits":{"title":"Переваги","itemTitle1":"Якість та ціна 24/7","itemDescr1":"Будьте впевнені, у нас найкращі ціни на найякісніші послуги","itemTitle2":"Надійність","itemDescr2":"Повна автоматизація запуску та виконання всіх послуг на максимальній швидкості","itemTitle3":"Досвід роботи","itemDescr3":"Ми качаємо соцмережі вже більше 3 років та виконали близько 200 тисяч замовлень"},"footer":{"address":"м. Київ, вул. Хрещатик, 13"}}');
    function languageSwitcher() {
        const langList = document.querySelectorAll(".header__lang-item");
        langList.forEach((item => {
            item.addEventListener("click", (el => {
                if (!el.target.classList.contains("_active")) {
                    resetLang();
                    item.classList.add("_active");
                    window.localStorage.setItem("lang", item.value);
                    setLang();
                }
            }));
        }));
        function resetLang() {
            langList.forEach((item => {
                item.classList.remove("_active");
            }));
        }
    }
    function setLang() {
        let lang = window.hasOwnProperty("localStorage") && window.localStorage.getItem("lang") || "ru";
        const curLangBtnEl = document.querySelector(`[data-language= ${lang}]`);
        curLangBtnEl.classList.add("_active");
        const locales = selectLocales(lang);
        const allDataEl = document.querySelectorAll("[data-lg]");
        const allDataElPlaceholder = document.querySelectorAll("[data-lg-placeholder]");
        allDataEl.forEach((lgItem => {
            const landPath = lgItem.dataset.lg.split(".");
            const curVal = getTransfer(locales, landPath);
            lgItem.innerHTML = curVal;
        }));
        allDataElPlaceholder.forEach((lgItem => {
            const landPath = lgItem.dataset.lgPlaceholder.split(".");
            const curVal = getTransfer(locales, landPath);
            lgItem.setAttribute("placeholder", curVal);
        }));
    }
    function selectLocales(language) {
        if ("ru" === language) return ru_namespaceObject;
        if ("ua" === language) return ua_namespaceObject;
    }
    function getTransfer(obj, way) {
        let result;
        runner(obj, way);
        function runner(obj, way, n = 0) {
            if (way.length === n) return;
            result = obj[way[n]];
            runner(obj[way[n]], way, n += 1);
        }
        return result;
    }
    menuInit();
    languageSwitcher();
    setLang();
    pageNavigation();
})();