/* =========================================================
   Acadium — i18n (uz / ru / en)
   Matnlar HTML'da data-i18n="kalit" orqali belgilanadi:
     data-i18n              -> element.textContent
     data-i18n-placeholder  -> input placeholder
     data-i18n-aria-label   -> aria-label
     data-i18n-content      -> <meta content="...">
   ========================================================= */
(function () {
  "use strict";

  const DICT = {
    /* ================= O'ZBEKCHA ================= */
    uz: {
      "meta.title": "Acadium — ta’lim muassasalari va maktablar uchun yagona tizim",
      "meta.description": "Acadium: Maktablar, o‘quv markazlari va ta’lim muassasalari uchun CRM, davomat, homework va ota-ona monitoringi bitta platformada.",

      "nav.features": "Xususiyatlar",
      "nav.how": "Qanday ishlaydi",
      "nav.pricing": "Narxlar",
      "nav.contact": "Aloqa",
      "nav.cta": "Bepul boshlash",
      "nav.ariaHome": "Acadium bosh sahifa",
      "nav.ariaNav": "Asosiy navigatsiya",
      "nav.ariaLang": "Til tanlash",
      "nav.ariaMenuOpen": "Menyuni ochish",
      "nav.ariaMenuClose": "Menyuni yopish",

      "hero.tag": "Ta’lim muassasalari va zamonaviy maktablar uchun operatsion tizim",
      "hero.title": "Ta’lim muassasangiz uchun yagona tizim",
      "hero.lead": "O‘quv markazlari bilan birga maktablarda ham to‘liq ishlaydi: davomat, darslar, baholar, to‘lovlar va ota-ona nazorati — Telegram va qog‘oz jurnallar o‘rniga bitta platformada.",
      "hero.demo": "Demo so‘rash",
      "hero.more": "Ko‘proq bilish",
      "hero.p1": "Admin paneli",
      "hero.p2": "O‘quvchi ilovasi",
      "hero.p3": "Ota-ona ilovasi",

      "dash.title": "Bugungi davomat",
      "dash.present": "Kelgan",
      "dash.late": "Kechikkan",
      "dash.absent": "Kelmagan",
      "dash.row1": "Ingliz tili, B1",
      "dash.row2": "Matematika, 9-sinf",
      "dash.row3": "Python asoslari",

      "phone.head": "Ota-ona",
      "phone.child": "Aziz, 9-sinf",
      "phone.n1t": "Muassasaga keldi",
      "phone.n1s": "14:02, Chilonzor filiali",
      "phone.n2t": "Yangi homework",
      "phone.n2s": "Matematika, ertaga 18:00 gacha",
      "phone.n3t": "Baho qo‘yildi: 5",
      "phone.n3s": "Ingliz tili, nazorat ishi",

      "problem.h2": "Bugungi muammo",
      "problem.lead": "Ma’lumotlar to‘rt xil joyda yotadi — va ta’lim muassasasi oddiy savolga javob bera olmaydi: o‘quvchi hozir qayerda va o‘qishi qanday ketyapti?",
      "problem.c1t": "Telegram guruhlar",
      "problem.c1p": "Homework va e’lonlar chat ichida yo‘qolib ketadi. Kim ko‘rdi, kim topshirdi — noma’lum.",
      "problem.c2t": "Excel jadvallar",
      "problem.c2p": "To‘lovlar va guruhlar qo‘lda yangilanadi. Har bir admin o‘z faylini yuritadi.",
      "problem.c3t": "Qog‘oz davomat",
      "problem.c3p": "Jurnal sinfda qoladi. Statistika yig‘ish uchun soatlab qayta yozish kerak.",
      "problem.c4t": "Ota-onaning qo‘ng‘iroqlari",
      "problem.c4p": "“Farzandim bugun keldimi?” degan savolga javob berish uchun admin har safar qidiradi.",

      "features.h2": "Ta’lim muassasalari va maktablar uchun kerakli barcha imkoniyatlar",
      "features.lead": "Maktablar va markazlar talabiga mos 6 ta integrallashgan modul: davomat belgilanishi bilan ota-ona xabar oladi, homework baholanishi bilan o‘quvchi XP oladi.",
      "features.f1t": "Avtomatik davomat",
      "features.f1p": "Geofence orqali o‘quvchi maktab yoki muassasa hududiga kirganda davomat avtomatik belgilanadi. O‘qituvchi faqat tekshiradi.",
      "features.f2t": "Ota-ona monitoringi",
      "features.f2p": "Farzand darsga keldi yoki kelmadi, homework berildi, baho qo‘yildi — ota-ona darhol bildirishnoma oladi.",
      "features.f3t": "Homework tizimi",
      "features.f3p": "Topshiriq berish, muddat qo‘yish, ilovadan topshirish va baholash — bitta oqimda.",
      "features.f4t": "Arena va XP",
      "features.f4p": "O‘quvchilar davomat va topshiriqlar uchun XP yig‘adi, guruh va sinf reytingida o‘z o‘rnini ko‘radi.",
      "features.f5t": "O‘qituvchi paneli",
      "features.f5p": "Sinflar, guruhlar, dars jadvali va davomat bitta ekranda. Dars tugashi bilan hamma narsa saqlangan.",
      "features.f6t": "Analitika va hisobotlar",
      "features.f6p": "Davomat, o‘zlashtirish, to‘lovlar va o‘qituvchilar samaradorligi bo‘yicha to‘liq statistika.",

      "how.h2": "Qanday ishlaydi",
      "how.lead": "Ta’lim muassasasidan ota-onagacha — ma’lumot bir marta kiritiladi va butun tizimga tezkor yetib boradi.",
      "how.s1t": "Muassasa o‘quvchi qo‘shadi",
      "how.s1p": "Admin yoki sinf rahbari o‘quvchini sinf/guruhga biriktiradi, ota-onaning telefon raqamini kiritadi.",
      "how.s2t": "O‘qituvchi darsni o‘tkazadi",
      "how.s2p": "Jadval bo‘yicha dars boshlanadi, o‘qituvchi panelda guruh yoki sinfni ochadi.",
      "how.s3t": "Davomat va homework qayd etiladi",
      "how.s3p": "Geofence davomatni belgilaydi, o‘qituvchi topshiriq va baholarni qo‘shadi.",
      "how.s4t": "Ota-ona real vaqtda ko‘radi",
      "how.s4p": "Ilovaga bildirishnoma keladi: keldi, topshiriq oldi, baho oldi.",

      "roles.h2": "Har bir rol uchun o‘z ekrani",
      "roles.lead": "Bitta ma’lumotlar bazasi, uch xil ko‘rinish.",
      "roles.ariaTabs": "Foydalanuvchi rollari",
      "roles.tab1": "Ta’lim muassasasi va o‘qituvchi",
      "roles.tab2": "O‘quvchi",
      "roles.tab3": "Ota-ona",
      "roles.a_h3": "Veb-panel: ta’lim muassasasini to‘liq boshqarish",
      "roles.a_p": "Maktab ma’muriyati, markaz adminlari va o‘qituvchilar barcha o‘quvchilar, sinflar, jadval, davomat va to‘lovlarni bitta joyda yuritadi.",
      "roles.a_c1": "O‘quvchi, sinf va guruhlar ro‘yxati",
      "roles.a_c2": "Dars jadvali va xonalar",
      "roles.a_c3": "Davomat va homework nazorati",
      "roles.a_c4": "To‘lovlar va qarzdorlik",
      "roles.s_h3": "Mobil ilova: o‘qishni o‘yinga aylantirish",
      "roles.s_p": "O‘quvchi o‘z jadvali, topshiriqlari va baholarini ko‘radi, Arena’da XP yig‘ib reytingda ko‘tariladi.",
      "roles.s_c1": "Bugungi darslar va muddatlar",
      "roles.s_c2": "Homework’ni ilovadan topshirish",
      "roles.s_c3": "Baholar va progress grafigi",
      "roles.s_c4": "Arena reytingi va XP",
      "roles.s_you": "Siz",
      "roles.p_h3": "Mobil ilova: xotirjamlik",
      "roles.p_p": "Ota-ona maktab yoki markazga qo‘ng‘iroq qilmasdan farzandining davomati, topshiriqlari va natijalarini kuzatadi.",
      "roles.p_c1": "Keldi va ketdi bildirishnomalari",
      "roles.p_c2": "Berilgan va topshirilgan homework",
      "roles.p_c3": "Baholar va oylik progress",
      "roles.p_c4": "To‘lov eslatmalari",
      "roles.month": "Sentyabr davomati: 88%",

      "stats.s1": "o‘quvchi",
      "stats.s2": "o‘qituvchi",
      "stats.s3": "ta’lim muassasasi",
      "stats.s4": "davomat avtomatik belgilanadi",
      "stats.note": "Narxlar muassasa va maktab hajmiga qarab belgilanadi — demo davomida hisoblab beramiz.",

      "cta.h2": "Ta’lim muassasangizni raqamlashtiring",
      "cta.lead": "Ma’lumotlaringizni qoldiring — 24 soat ichida bog‘lanib, platformani maktabingiz yoki markazingiz misolida ko‘rsatamiz.",
      "cta.name": "Ismingiz",
      "cta.namePh": "Masalan, Dilshod",
      "cta.phone": "Telefon raqam",
      "cta.center": "Muassasa yoki maktab nomi",
      "cta.centerPh": "Masalan, Bilim Maktabi yoki Target",
      "cta.submit": "Demo so‘rash",
      "cta.sending": "Yuborilmoqda…",
      "cta.invalid": "Barcha maydonlarni to‘ldiring: telefon raqam kamida 9 ta raqamdan iborat bo‘lsin.",
      "cta.success": "Rahmat, {name}! So‘rovingiz qabul qilindi — tez orada bog‘lanamiz.",
      "cta.error": "Kechirasiz, so‘rov yuborilmadi. Iltimos, qayta urinib ko‘ring yoki Telegram orqali yozing.",
      "cta.subject": "Acadium — yangi demo so‘rovi",

      "footer.desc": "Ta’lim muassasalari, maktablar va o‘quv markazlari uchun CRM, davomat, homework va monitoring — bitta platformada.",
      "footer.ariaLinks": "Huquqiy havolalar",
      "footer.privacy": "Maxfiylik siyosati",
      "footer.terms": "Foydalanish shartlari",
      "footer.contact": "Aloqa",
      "footer.rights": "Barcha huquqlar himoyalangan.",

      "nav.download": "Ilova",
      "hero.download": "Ilovani yuklab olish",
      "dl.tag": "Android ilova",
      "dl.h2": "O‘quvchi ilovasini yuklab oling",
      "dl.lead": "Dars jadvali, homework, baholar va Arena reytingi — hammasi telefoningizda. Yuklab oling va o‘quv markazingiz bergan login bilan kiring.",
      "dl.btnSmall": "Android uchun",
      "dl.btn": "APK yuklab olish",
      "dl.version": "Versiya",
      "dl.size": "Hajmi",
      "dl.req": "Talab",
      "dl.s1t": "Yuklab oling",
      "dl.s1p": "Tugmani bosing — Acadium.apk telefoningizga tushadi.",
      "dl.s2t": "Ruxsat bering",
      "dl.s2p": "Faylni oching va “Noma’lum manbalardan o‘rnatish”ga ruxsat bering.",
      "dl.s3t": "O‘rnating va kiring",
      "dl.s3p": "“O‘rnatish”ni bosing, so‘ng login va parolingiz bilan kiring.",
      "dl.note": "Hozircha faqat Android uchun. iPhone versiyasi tez orada.",
      "dl.appSub": "O‘quvchi ilovasi",
      "dl.status": "O‘rnatilmoqda…",
      "dl.qr": "Telefon kamerasi bilan skanerlang"
    },

    /* ================= РУССКИЙ ================= */
    ru: {
      "meta.title": "Acadium — единая система для образовательных учреждений и школ",
      "meta.description": "Acadium: CRM, посещаемость, домашние задания, успеваемость и мониторинг для школ и учебных центров на одной платформе.",

      "nav.features": "Возможности",
      "nav.how": "Как это работает",
      "nav.pricing": "Цены",
      "nav.contact": "Контакты",
      "nav.cta": "Начать бесплатно",
      "nav.ariaHome": "Acadium — на главную",
      "nav.ariaNav": "Основная навигация",
      "nav.ariaLang": "Выбор языка",
      "nav.ariaMenuOpen": "Открыть меню",
      "nav.ariaMenuClose": "Закрыть меню",

      "hero.tag": "Операционная система для школ и образовательных учреждений",
      "hero.title": "Единая система для вашего образовательного учреждения",
      "hero.lead": "Идеально подходит как для учебных центров, так и для современных школ: посещаемость, домашние задания, оценки, платежи и связь с родителями — всё на одной платформе.",
      "hero.demo": "Запросить демо",
      "hero.more": "Узнать больше",
      "hero.p1": "Админ-панель",
      "hero.p2": "Приложение для ученика",
      "hero.p3": "Приложение для родителя",

      "dash.title": "Посещаемость сегодня",
      "dash.present": "Пришли",
      "dash.late": "Опоздали",
      "dash.absent": "Отсутствуют",
      "dash.row1": "Английский, B1",
      "dash.row2": "Математика, 9 класс",
      "dash.row3": "Основы Python",

      "phone.head": "Родитель",
      "phone.child": "Азиз, 9 класс",
      "phone.n1t": "Пришёл в учреждение",
      "phone.n1s": "14:02, филиал Чиланзар",
      "phone.n2t": "Новое домашнее задание",
      "phone.n2s": "Математика, до завтра 18:00",
      "phone.n3t": "Выставлена оценка: 5",
      "phone.n3s": "Английский, контрольная работа",

      "problem.h2": "Проблема сегодня",
      "problem.lead": "Данные лежат в разных местах — и школа или учебный центр не могут ответить на простой вопрос: где сейчас ученик и как он учится?",
      "problem.c1t": "Telegram-группы",
      "problem.c1p": "Задания и объявления теряются в чате. Кто прочитал, кто сдал — неизвестно.",
      "problem.c2t": "Excel-таблицы",
      "problem.c2p": "Платежи и группы обновляются вручную. У каждого администратора свой файл.",
      "problem.c3t": "Бумажный журнал",
      "problem.c3p": "Журнал остаётся в аудитории. Чтобы собрать статистику, нужно часами всё переписывать.",
      "problem.c4t": "Звонки родителей",
      "problem.c4p": "Чтобы ответить на вопрос «мой ребёнок сегодня пришёл?», администратор каждый раз ищет вручную.",

      "features.h2": "Всё необходимое для школ и образовательных учреждений",
      "features.lead": "Шесть модулей, адаптированных для школ и центров: отметили посещаемость — родитель уведомлен, оценили задание — ученик получил XP.",
      "features.f1t": "Автоматическая посещаемость",
      "features.f1p": "Геозона автоматически отмечает посещаемость при входе в школу или учреждение. Преподавателю остаётся только проверить.",
      "features.f2t": "Мониторинг для родителей",
      "features.f2p": "Пришёл ребёнок на урок или нет, выдано задание, поставлена оценка — родитель сразу получает уведомление.",
      "features.f3t": "Система домашних заданий",
      "features.f3p": "Выдача заданий, дедлайны, сдача через приложение и оценивание — в одном потоке.",
      "features.f4t": "Арена и XP",
      "features.f4p": "Ученики набирают XP за посещаемость и задания и видят своё место в рейтинге класса и группы.",
      "features.f5t": "Панель преподавателя",
      "features.f5p": "Классы, группы, расписание и посещаемость на одном экране. Урок закончился — всё уже сохранено.",
      "features.f6t": "Аналитика и отчёты",
      "features.f6p": "Полная статистика по посещаемости, успеваемости, платежам и эффективности преподавателей.",

      "how.h2": "Как это работает",
      "how.lead": "От учреждения до родителя — данные вводятся один раз и автоматически синхронизируются для всех.",
      "how.s1t": "Учреждение добавляет ученика",
      "how.s1p": "Администратор или куратор прикрепляет ученика к классу или группе и вводит контакты родителя.",
      "how.s2t": "Преподаватель ведёт урок",
      "how.s2p": "Урок начинается по расписанию, преподаватель открывает класс или группу в панели.",
      "how.s3t": "Посещаемость и задания фиксируются",
      "how.s3p": "Геозона отмечает посещаемость, преподаватель добавляет задания и оценки.",
      "how.s4t": "Родитель видит в реальном времени",
      "how.s4p": "В приложение приходит уведомление: пришёл, получил задание, получил оценку.",

      "roles.h2": "Свой экран для каждой роли",
      "roles.lead": "Одна база данных, три разных представления.",
      "roles.ariaTabs": "Роли пользователей",
      "roles.tab1": "Учреждение и преподаватель",
      "roles.tab2": "Ученик",
      "roles.tab3": "Родитель",
      "roles.a_h3": "Веб-панель: полное управление учебным процессом",
      "roles.a_p": "Администрация школы и учебных центров ведёт классы, группы, расписание, посещаемость, задания и платежи в одном окне.",
      "roles.a_c1": "Списки учеников, классов и групп",
      "roles.a_c2": "Расписание и аудитории",
      "roles.a_c3": "Контроль посещаемости и заданий",
      "roles.a_c4": "Платежи и задолженности",
      "roles.s_h3": "Мобильное приложение: учёба как игра",
      "roles.s_p": "Ученик видит своё расписание, задания и оценки, набирает XP на Арене и поднимается в рейтинге.",
      "roles.s_c1": "Сегодняшние уроки и дедлайны",
      "roles.s_c2": "Сдача заданий прямо в приложении",
      "roles.s_c3": "Оценки и график прогресса",
      "roles.s_c4": "Рейтинг Арены и XP",
      "roles.s_you": "Вы",
      "roles.p_h3": "Мобильное приложение: спокойствие",
      "roles.p_p": "Родитель следит за посещаемостью, заданиями и результатами ребёнка прямо в приложении, не отвлекая звонками.",
      "roles.p_c1": "Уведомления о приходе и уходе",
      "roles.p_c2": "Выданные и сданные задания",
      "roles.p_c3": "Оценки и прогресс за месяц",
      "roles.p_c4": "Напоминания об оплате",
      "roles.month": "Посещаемость за сентябрь: 88%",

      "stats.s1": "учеников",
      "stats.s2": "преподавателей",
      "stats.s3": "образовательных учреждений",
      "stats.s4": "посещаемости отмечается автоматически",
      "stats.note": "Тарифы рассчитываются исходя из масштаба вашей школы или центра — покажем на бесплатном демо.",

      "cta.h2": "Оцифруйте ваше образовательное учреждение",
      "cta.lead": "Оставьте свои данные — свяжемся в течение 24 часов и покажем платформу на примере вашей школы или центра.",
      "cta.name": "Ваше имя",
      "cta.namePh": "Например, Дильшод",
      "cta.phone": "Номер телефона",
      "cta.center": "Название учреждения или школы",
      "cta.centerPh": "Например, Smart School или Bilim Plus",
      "cta.submit": "Запросить демо",
      "cta.sending": "Отправляем…",
      "cta.invalid": "Заполните все поля: номер телефона должен содержать минимум 9 цифр.",
      "cta.success": "Спасибо, {name}! Заявка принята — скоро свяжемся.",
      "cta.error": "Извините, заявка не отправилась. Попробуйте ещё раз или напишите нам в Telegram.",
      "cta.subject": "Acadium — новая заявка на демо",

      "footer.desc": "CRM, посещаемость, домашние задания и мониторинг для школ и образовательных учреждений — всё на одной платформе.",
      "footer.ariaLinks": "Правовые ссылки",
      "footer.privacy": "Политика конфиденциальности",
      "footer.terms": "Условия использования",
      "footer.contact": "Контакты",
      "footer.rights": "Все права защищены.",

      "nav.download": "Приложение",
      "hero.download": "Скачать приложение",
      "dl.tag": "Приложение для Android",
      "dl.h2": "Скачайте приложение для учеников",
      "dl.lead": "Расписание, домашние задания, оценки и рейтинг Arena — всё в вашем телефоне. Скачайте и войдите с логином, который выдал ваш учебный центр.",
      "dl.btnSmall": "Для Android",
      "dl.btn": "Скачать APK",
      "dl.version": "Версия",
      "dl.size": "Размер",
      "dl.req": "Требуется",
      "dl.s1t": "Скачайте",
      "dl.s1p": "Нажмите кнопку — файл Acadium.apk загрузится на телефон.",
      "dl.s2t": "Разрешите установку",
      "dl.s2p": "Откройте файл и разрешите «Установку из неизвестных источников».",
      "dl.s3t": "Установите и войдите",
      "dl.s3p": "Нажмите «Установить», затем войдите с логином и паролем.",
      "dl.note": "Пока только для Android. Версия для iPhone скоро.",
      "dl.appSub": "Приложение ученика",
      "dl.status": "Установка…",
      "dl.qr": "Отсканируйте камерой телефона"
    },

    /* ================= ENGLISH ================= */
    en: {
      "meta.title": "Acadium — unified system for educational institutions and schools",
      "meta.description": "Acadium: CRM, attendance, homework, student progress and parent monitoring for schools and learning centers.",

      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.pricing": "Pricing",
      "nav.contact": "Contact",
      "nav.cta": "Start for free",
      "nav.ariaHome": "Acadium home",
      "nav.ariaNav": "Main navigation",
      "nav.ariaLang": "Choose language",
      "nav.ariaMenuOpen": "Open menu",
      "nav.ariaMenuClose": "Close menu",

      "hero.tag": "The operating system for modern educational institutions & schools",
      "hero.title": "Unified system for your educational institution",
      "hero.lead": "Engineered for learning centers and modern schools alike: attendance, homework, grades, billing, and parent communication — all in one unified platform.",
      "hero.demo": "Request a demo",
      "hero.more": "Learn more",
      "hero.p1": "Admin panel",
      "hero.p2": "Student app",
      "hero.p3": "Parent app",

      "dash.title": "Today's attendance",
      "dash.present": "Present",
      "dash.late": "Late",
      "dash.absent": "Absent",
      "dash.row1": "English, B1",
      "dash.row2": "Math, grade 9",
      "dash.row3": "Python basics",

      "phone.head": "Parent",
      "phone.child": "Aziz, grade 9",
      "phone.n1t": "Arrived at institution",
      "phone.n1s": "2:02 PM, Chilanzar branch",
      "phone.n2t": "New homework",
      "phone.n2s": "Math, due tomorrow 6:00 PM",
      "phone.n3t": "Grade posted: 5",
      "phone.n3s": "English, test paper",

      "problem.h2": "The problem today",
      "problem.lead": "Data lives in four different places — and the institution cannot answer a simple question: where is the student right now and how are they doing?",
      "problem.c1t": "Telegram groups",
      "problem.c1p": "Homework and announcements get lost in the chat. Who saw it, who submitted — nobody knows.",
      "problem.c2t": "Excel spreadsheets",
      "problem.c2p": "Payments and groups are updated by hand. Every admin keeps their own file.",
      "problem.c3t": "Paper attendance",
      "problem.c3p": "The register stays in the classroom. Collecting statistics means hours of re-typing.",
      "problem.c4t": "Calls from parents",
      "problem.c4p": "To answer “did my child come today?”, the admin has to look it up every single time.",

      "features.h2": "Everything educational institutions & schools need",
      "features.lead": "Six connected modules tailored for schools and learning centers: automated attendance alerts parents, while graded homework rewards students with XP.",
      "features.f1t": "Automatic attendance",
      "features.f1p": "Geofencing marks attendance automatically when a student enters the school or institution. Teachers simply confirm.",
      "features.f2t": "Parent monitoring",
      "features.f2p": "Arrived or not, homework assigned, grade posted — the parent gets a notification right away.",
      "features.f3t": "Homework system",
      "features.f3p": "Assigning, deadlines, in-app submission and grading — all in one flow.",
      "features.f4t": "Arena and XP",
      "features.f4p": "Students earn XP for attendance and assignments and see their place in the group and class ranking.",
      "features.f5t": "Teacher panel",
      "features.f5p": "Classes, groups, schedule and attendance on one screen. When the lesson ends, everything is already saved.",
      "features.f6t": "Analytics and reports",
      "features.f6p": "Full statistics on attendance, performance, payments and teacher effectiveness.",

      "how.h2": "How it works",
      "how.lead": "From the institution to parents — data is entered once and reaches everyone on its own.",
      "how.s1t": "The institution adds a student",
      "how.s1p": "Admins or class teachers assign the student to a class or group and enter the parent's phone number.",
      "how.s2t": "The teacher runs the lesson",
      "how.s2p": "The lesson starts on schedule and the teacher opens the group or class in the panel.",
      "how.s3t": "Attendance and homework are recorded",
      "how.s3p": "Geofencing marks attendance; the teacher adds assignments and grades.",
      "how.s4t": "The parent sees it in real time",
      "how.s4p": "A notification lands in the app: arrived, homework assigned, grade received.",

      "roles.h2": "A screen for every role",
      "roles.lead": "One database, three different views.",
      "roles.ariaTabs": "User roles",
      "roles.tab1": "Institution and teacher",
      "roles.tab2": "Student",
      "roles.tab3": "Parent",
      "roles.a_h3": "Web panel: full control of the institution",
      "roles.a_p": "School administration and learning center teams manage students, classes, schedule, attendance, homework and payments in one place.",
      "roles.a_c1": "Student, class and group lists",
      "roles.a_c2": "Lesson schedule and rooms",
      "roles.a_c3": "Attendance and homework control",
      "roles.a_c4": "Payments and outstanding debts",
      "roles.s_h3": "Mobile app: learning turned into a game",
      "roles.s_p": "Students see their schedule, assignments and grades, collect XP in the Arena and climb the ranking.",
      "roles.s_c1": "Today's lessons and deadlines",
      "roles.s_c2": "Submitting homework from the app",
      "roles.s_c3": "Grades and progress chart",
      "roles.s_c4": "Arena ranking and XP",
      "roles.s_you": "You",
      "roles.p_h3": "Mobile app: peace of mind",
      "roles.p_p": "Parents follow their child's attendance, assignments and results without calling the institution.",
      "roles.p_c1": "Arrival and departure notifications",
      "roles.p_c2": "Assigned and submitted homework",
      "roles.p_c3": "Grades and monthly progress",
      "roles.p_c4": "Payment reminders",
      "roles.month": "September attendance: 88%",

      "stats.s1": "students",
      "stats.s2": "teachers",
      "stats.s3": "educational institutions",
      "stats.s4": "of attendance marked automatically",
      "stats.note": "Pricing depends on the size of your school or institution — we will calculate it during the demo.",

      "cta.h2": "Digitize your educational institution",
      "cta.lead": "Leave your details — we will get in touch within 24 hours and show the platform tailored to your school or center.",
      "cta.name": "Your name",
      "cta.namePh": "e.g. Dilshod",
      "cta.phone": "Phone number",
      "cta.center": "Institution or school name",
      "cta.centerPh": "e.g. Bilim Academy or Target School",
      "cta.submit": "Request a demo",
      "cta.sending": "Sending…",
      "cta.invalid": "Please fill in every field: the phone number needs at least 9 digits.",
      "cta.success": "Thank you, {name}! Your request has been received — we will contact you shortly.",
      "cta.error": "Sorry, the request was not sent. Please try again or write to us on Telegram.",
      "cta.subject": "Acadium — new demo request",

      "footer.desc": "CRM, attendance, homework and parent monitoring for schools and educational institutions — on a single platform.",
      "footer.ariaLinks": "Legal links",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms of use",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",

      "nav.download": "App",
      "hero.download": "Download the app",
      "dl.tag": "Android app",
      "dl.h2": "Get the student app",
      "dl.lead": "Schedule, homework, grades and the Arena leaderboard — all on your phone. Download it and sign in with the login your school gave you.",
      "dl.btnSmall": "For Android",
      "dl.btn": "Download APK",
      "dl.version": "Version",
      "dl.size": "Size",
      "dl.req": "Requires",
      "dl.s1t": "Download",
      "dl.s1p": "Tap the button — Acadium.apk will be saved to your phone.",
      "dl.s2t": "Allow install",
      "dl.s2p": "Open the file and allow “Install from unknown sources”.",
      "dl.s3t": "Install and sign in",
      "dl.s3p": "Tap “Install”, then sign in with your login and password.",
      "dl.note": "Android only for now. iPhone version coming soon.",
      "dl.appSub": "Student app",
      "dl.status": "Installing…",
      "dl.qr": "Scan with your phone camera"
    }
  };

  const SUPPORTED = Object.keys(DICT);   // ["uz", "ru", "en"]
  const DEFAULT_LANG = "uz";
  const STORAGE_KEY = "acadium-lang";

  let current = DEFAULT_LANG;

  /* ---------- Tarjima olish: t("cta.success", { name: "Dilshod" }) ---------- */
  function t(key, vars) {
    const str = (DICT[current] && DICT[current][key]) || DICT[DEFAULT_LANG][key] || key;
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? vars[name] : m));
  }

  /* ---------- Boshlang'ich tilni aniqlash ---------- */
  function detectLang() {
    // 1) URL: ?lang=ru
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && SUPPORTED.includes(fromUrl.toLowerCase())) return fromUrl.toLowerCase();

    // 2) Oldin tanlangan til
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* localStorage o'chiq bo'lishi mumkin */ }

    // 3) Brauzer tili
    const nav = (navigator.languages || [navigator.language || ""])
      .map((l) => String(l).slice(0, 2).toLowerCase())
      .find((l) => SUPPORTED.includes(l));

    return nav || DEFAULT_LANG;
  }

  /* ---------- Sahifadagi barcha matnlarni almashtirish ---------- */
  function apply(lang) {
    current = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;

    document.documentElement.lang = current;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      el.setAttribute("content", t(el.dataset.i18nContent));
    });

    // Custom select holati: tugmadagi matn va ro'yxatdagi belgilangan variant
    document.querySelectorAll(".lang-option").forEach((opt) => {
      const active = opt.dataset.lang === current;
      opt.classList.toggle("is-active", active);
      opt.setAttribute("aria-selected", String(active));
      if (active) {
        const code = document.getElementById("langCode");
        const name = document.getElementById("langName");
        if (code) code.textContent = opt.dataset.code || current.toUpperCase();
        if (name) name.textContent = opt.querySelector(".lang-label").textContent;
      }
    });

    // Formaning email sarlavhasi va til belgisi
    const subject = document.querySelector('input[name="_subject"]');
    if (subject) subject.value = t("cta.subject");
    const leadLang = document.getElementById("leadLang");
    if (leadLang) leadLang.value = current;

    // Boshqa skriptlar uchun signal (masalan, burger aria-label yoki forma xabari)
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang) || lang === current) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply(lang);
  }

  /* ---------- Custom select (dropdown) ---------- */
  function initDropdown() {
    const root = document.getElementById("langSelect");
    if (!root) return;

    const trigger = document.getElementById("langTrigger");
    const list = document.getElementById("langList");
    const options = Array.from(list.querySelectorAll(".lang-option"));

    const isOpen = () => root.classList.contains("is-open");

    function open() {
      root.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      const active = options.find((o) => o.dataset.lang === current) || options[0];
      active.focus();
    }

    function close(focusTrigger) {
      root.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      if (focusTrigger) trigger.focus();
    }

    function choose(opt) {
      setLang(opt.dataset.lang);
      close(true);
    }

    // Faqat fokusdagi variantni almashtirish (hali tanlanmaydi)
    function move(from, step) {
      const i = options.indexOf(from);
      options[(i + step + options.length) % options.length].focus();
    }

    trigger.addEventListener("click", () => (isOpen() ? close(false) : open()));

    trigger.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });

    options.forEach((opt) => {
      opt.addEventListener("click", () => choose(opt));
      opt.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "ArrowDown": e.preventDefault(); move(opt, 1); break;
          case "ArrowUp":   e.preventDefault(); move(opt, -1); break;
          case "Home":      e.preventDefault(); options[0].focus(); break;
          case "End":       e.preventDefault(); options[options.length - 1].focus(); break;
          case "Enter":
          case " ":         e.preventDefault(); choose(opt); break;
          case "Escape":    e.preventDefault(); close(true); break;
          case "Tab":       close(false); break;
        }
      });
    });

    // Tashqariga bosilsa yoki fokus chiqib ketsa — yopamiz
    document.addEventListener("click", (e) => {
      if (isOpen() && !root.contains(e.target)) close(false);
    });
    document.addEventListener("focusin", (e) => {
      if (isOpen() && !root.contains(e.target)) close(false);
    });
    window.addEventListener("scroll", () => { if (isOpen()) close(false); }, { passive: true });
  }

  function init() {
    initDropdown();
    apply(detectLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Tashqi API — scripts.js shu orqali tarjima oladi
  window.I18N = { t, setLang, get lang() { return current; }, supported: SUPPORTED };
})();
