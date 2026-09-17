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
      "meta.title": "Acadium — o‘quv markazlari uchun yagona tizim",
      "meta.description": "Acadium: CRM, davomat, homework, o‘quvchi progressi va ota-ona monitoringi bitta platformada.",

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

      "hero.tag": "Zamonaviy o‘quv markazlari uchun operatsion tizim",
      "hero.title": "O‘quv markazingiz uchun yagona tizim",
      "hero.lead": "Davomat, homework, baholar, to‘lovlar va ota-ona bilan aloqa — Telegram, Excel va qog‘oz o‘rniga bitta platformada. Har bir o‘quvchining holatini real vaqtda ko‘ring.",
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
      "phone.n1t": "Markazga keldi",
      "phone.n1s": "14:02, Chilonzor filiali",
      "phone.n2t": "Yangi homework",
      "phone.n2s": "Matematika, ertaga 18:00 gacha",
      "phone.n3t": "Baho qo‘yildi: 5",
      "phone.n3s": "Ingliz tili, nazorat ishi",

      "problem.h2": "Bugungi muammo",
      "problem.lead": "Ma’lumotlar to‘rt xil joyda yotadi — va markaz oddiy savolga javob bera olmaydi: o‘quvchi hozir qayerda va o‘qishi qanday ketyapti?",
      "problem.c1t": "Telegram guruhlar",
      "problem.c1p": "Homework va e’lonlar chat ichida yo‘qolib ketadi. Kim ko‘rdi, kim topshirdi — noma’lum.",
      "problem.c2t": "Excel jadvallar",
      "problem.c2p": "To‘lovlar va guruhlar qo‘lda yangilanadi. Har bir admin o‘z faylini yuritadi.",
      "problem.c3t": "Qog‘oz davomat",
      "problem.c3p": "Jurnal sinfda qoladi. Statistika yig‘ish uchun soatlab qayta yozish kerak.",
      "problem.c4t": "Ota-onaning qo‘ng‘iroqlari",
      "problem.c4p": "“Farzandim bugun keldimi?” degan savolga javob berish uchun admin har safar qidiradi.",

      "features.h2": "Markaz uchun kerak bo‘lgan hamma narsa",
      "features.lead": "Olti modul bir-biri bilan bog‘langan: davomat belgilanishi bilan ota-ona xabar oladi, homework baholanishi bilan o‘quvchi XP oladi.",
      "features.f1t": "Avtomatik davomat",
      "features.f1p": "Geofence orqali o‘quvchi markaz hududiga kirganda davomat o‘zi belgilanadi. O‘qituvchi faqat tekshiradi.",
      "features.f2t": "Ota-ona monitoringi",
      "features.f2p": "Farzand darsga keldi yoki kelmadi, homework berildi, baho qo‘yildi — ota-ona darhol bildirishnoma oladi.",
      "features.f3t": "Homework tizimi",
      "features.f3p": "Topshiriq berish, muddat qo‘yish, ilovadan topshirish va baholash — bitta oqimda.",
      "features.f4t": "Arena va XP",
      "features.f4p": "O‘quvchilar davomat va topshiriqlar uchun XP yig‘adi, guruh reytingida o‘z o‘rnini ko‘radi.",
      "features.f5t": "O‘qituvchi paneli",
      "features.f5p": "Guruhlar, dars jadvali va davomat bitta ekranda. Dars tugashi bilan hamma narsa saqlangan.",
      "features.f6t": "Analitika va hisobotlar",
      "features.f6p": "Davomat, o‘zlashtirish, to‘lovlar va o‘qituvchilar samaradorligi bo‘yicha to‘liq statistika.",

      "how.h2": "Qanday ishlaydi",
      "how.lead": "Markazdan ota-onagacha — ma’lumot bir marta kiritiladi va hamma joyga o‘zi yetib boradi.",
      "how.s1t": "Markaz o‘quvchi qo‘shadi",
      "how.s1p": "Admin o‘quvchini guruhga biriktiradi, ota-onaning telefon raqamini kiritadi.",
      "how.s2t": "O‘qituvchi darsni o‘tkazadi",
      "how.s2p": "Jadval bo‘yicha dars boshlanadi, o‘qituvchi panelda guruhni ochadi.",
      "how.s3t": "Davomat va homework qayd etiladi",
      "how.s3p": "Geofence davomatni belgilaydi, o‘qituvchi topshiriq va baholarni qo‘shadi.",
      "how.s4t": "Ota-ona real vaqtda ko‘radi",
      "how.s4p": "Ilovaga bildirishnoma keladi: keldi, topshiriq oldi, baho oldi.",

      "roles.h2": "Har bir rol uchun o‘z ekrani",
      "roles.lead": "Bitta ma’lumotlar bazasi, uch xil ko‘rinish.",
      "roles.ariaTabs": "Foydalanuvchi rollari",
      "roles.tab1": "Markaz va o‘qituvchi",
      "roles.tab2": "O‘quvchi",
      "roles.tab3": "Ota-ona",
      "roles.a_h3": "Veb-panel: markazni to‘liq boshqarish",
      "roles.a_p": "Admin va o‘qituvchilar o‘quvchilar, guruhlar, jadval, davomat, homework va to‘lovlarni bitta joyda yuritadi.",
      "roles.a_c1": "O‘quvchi va guruhlar ro‘yxati",
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
      "roles.p_p": "Ota-ona markazga qo‘ng‘iroq qilmasdan farzandining davomati, topshiriqlari va natijalarini kuzatadi.",
      "roles.p_c1": "Keldi va ketdi bildirishnomalari",
      "roles.p_c2": "Berilgan va topshirilgan homework",
      "roles.p_c3": "Baholar va oylik progress",
      "roles.p_c4": "To‘lov eslatmalari",
      "roles.month": "Sentyabr davomati: 88%",

      "stats.s1": "o‘quvchi",
      "stats.s2": "o‘qituvchi",
      "stats.s3": "o‘quv markazi",
      "stats.s4": "davomat avtomatik belgilanadi",
      "stats.note": "Narxlar markaz hajmiga qarab belgilanadi — demo davomida hisoblab beramiz.",

      "cta.h2": "Markazingizni raqamlashtiring",
      "cta.lead": "Ma’lumotlaringizni qoldiring — 24 soat ichida bog‘lanib, platformani markazingiz misolida ko‘rsatamiz.",
      "cta.name": "Ismingiz",
      "cta.namePh": "Masalan, Dilshod",
      "cta.phone": "Telefon raqam",
      "cta.center": "Markaz nomi",
      "cta.centerPh": "Masalan, Bilim Plus",
      "cta.submit": "Demo so‘rash",
      "cta.sending": "Yuborilmoqda…",
      "cta.invalid": "Barcha maydonlarni to‘ldiring: telefon raqam kamida 9 ta raqamdan iborat bo‘lsin.",
      "cta.success": "Rahmat, {name}! So‘rovingiz qabul qilindi — tez orada bog‘lanamiz.",
      "cta.error": "Kechirasiz, so‘rov yuborilmadi. Iltimos, qayta urinib ko‘ring yoki Telegram orqali yozing.",
      "cta.subject": "Acadium — yangi demo so‘rovi",

      "footer.desc": "O‘quv markazlari uchun CRM, davomat, homework va ota-ona monitoringi — bitta platformada.",
      "footer.ariaLinks": "Huquqiy havolalar",
      "footer.privacy": "Maxfiylik siyosati",
      "footer.terms": "Foydalanish shartlari",
      "footer.contact": "Aloqa",
      "footer.rights": "Barcha huquqlar himoyalangan."
    },

    /* ================= РУССКИЙ ================= */
    ru: {
      "meta.title": "Acadium — единая система для учебных центров",
      "meta.description": "Acadium: CRM, посещаемость, домашние задания, прогресс ученика и мониторинг для родителей на одной платформе.",

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

      "hero.tag": "Операционная система для современных учебных центров",
      "hero.title": "Единая система для вашего учебного центра",
      "hero.lead": "Посещаемость, домашние задания, оценки, платежи и связь с родителями — вместо Telegram, Excel и бумаги всё в одной платформе. Видите состояние каждого ученика в реальном времени.",
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
      "phone.n1t": "Пришёл в центр",
      "phone.n1s": "14:02, филиал Чиланзар",
      "phone.n2t": "Новое домашнее задание",
      "phone.n2s": "Математика, до завтра 18:00",
      "phone.n3t": "Выставлена оценка: 5",
      "phone.n3s": "Английский, контрольная работа",

      "problem.h2": "Проблема сегодня",
      "problem.lead": "Данные лежат в четырёх разных местах — и центр не может ответить на простой вопрос: где сейчас ученик и как он учится?",
      "problem.c1t": "Telegram-группы",
      "problem.c1p": "Задания и объявления теряются в чате. Кто прочитал, кто сдал — неизвестно.",
      "problem.c2t": "Excel-таблицы",
      "problem.c2p": "Платежи и группы обновляются вручную. У каждого администратора свой файл.",
      "problem.c3t": "Бумажный журнал",
      "problem.c3p": "Журнал остаётся в аудитории. Чтобы собрать статистику, нужно часами всё переписывать.",
      "problem.c4t": "Звонки родителей",
      "problem.c4p": "Чтобы ответить на вопрос «мой ребёнок сегодня пришёл?», администратор каждый раз ищет вручную.",

      "features.h2": "Всё, что нужно учебному центру",
      "features.lead": "Шесть модулей связаны между собой: отметили посещаемость — родитель получил уведомление, оценили задание — ученик получил XP.",
      "features.f1t": "Автоматическая посещаемость",
      "features.f1p": "Геозона отмечает посещаемость сама, когда ученик заходит на территорию центра. Преподавателю остаётся только проверить.",
      "features.f2t": "Мониторинг для родителей",
      "features.f2p": "Пришёл ребёнок на урок или нет, выдано задание, поставлена оценка — родитель сразу получает уведомление.",
      "features.f3t": "Система домашних заданий",
      "features.f3p": "Выдача заданий, дедлайны, сдача через приложение и оценивание — в одном потоке.",
      "features.f4t": "Арена и XP",
      "features.f4p": "Ученики набирают XP за посещаемость и задания и видят своё место в рейтинге группы.",
      "features.f5t": "Панель преподавателя",
      "features.f5p": "Группы, расписание и посещаемость на одном экране. Урок закончился — всё уже сохранено.",
      "features.f6t": "Аналитика и отчёты",
      "features.f6p": "Полная статистика по посещаемости, успеваемости, платежам и эффективности преподавателей.",

      "how.h2": "Как это работает",
      "how.lead": "От центра до родителя — данные вводятся один раз и сами доходят до всех.",
      "how.s1t": "Центр добавляет ученика",
      "how.s1p": "Администратор прикрепляет ученика к группе и вводит номер телефона родителя.",
      "how.s2t": "Преподаватель ведёт урок",
      "how.s2p": "Урок начинается по расписанию, преподаватель открывает группу в панели.",
      "how.s3t": "Посещаемость и задания фиксируются",
      "how.s3p": "Геозона отмечает посещаемость, преподаватель добавляет задания и оценки.",
      "how.s4t": "Родитель видит в реальном времени",
      "how.s4p": "В приложение приходит уведомление: пришёл, получил задание, получил оценку.",

      "roles.h2": "Свой экран для каждой роли",
      "roles.lead": "Одна база данных, три разных представления.",
      "roles.ariaTabs": "Роли пользователей",
      "roles.tab1": "Центр и преподаватель",
      "roles.tab2": "Ученик",
      "roles.tab3": "Родитель",
      "roles.a_h3": "Веб-панель: полное управление центром",
      "roles.a_p": "Администраторы и преподаватели ведут учеников, группы, расписание, посещаемость, задания и платежи в одном месте.",
      "roles.a_c1": "Списки учеников и групп",
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
      "roles.p_p": "Родитель следит за посещаемостью, заданиями и результатами ребёнка, не звоня в центр.",
      "roles.p_c1": "Уведомления о приходе и уходе",
      "roles.p_c2": "Выданные и сданные задания",
      "roles.p_c3": "Оценки и прогресс за месяц",
      "roles.p_c4": "Напоминания об оплате",
      "roles.month": "Посещаемость за сентябрь: 88%",

      "stats.s1": "учеников",
      "stats.s2": "преподавателей",
      "stats.s3": "учебных центров",
      "stats.s4": "посещаемости отмечается автоматически",
      "stats.note": "Цены зависят от размера центра — рассчитаем во время демо.",

      "cta.h2": "Оцифруйте свой центр",
      "cta.lead": "Оставьте свои данные — свяжемся в течение 24 часов и покажем платформу на примере вашего центра.",
      "cta.name": "Ваше имя",
      "cta.namePh": "Например, Дильшод",
      "cta.phone": "Номер телефона",
      "cta.center": "Название центра",
      "cta.centerPh": "Например, Bilim Plus",
      "cta.submit": "Запросить демо",
      "cta.sending": "Отправляем…",
      "cta.invalid": "Заполните все поля: номер телефона должен содержать минимум 9 цифр.",
      "cta.success": "Спасибо, {name}! Заявка принята — скоро свяжемся.",
      "cta.error": "Извините, заявка не отправилась. Попробуйте ещё раз или напишите нам в Telegram.",
      "cta.subject": "Acadium — новая заявка на демо",

      "footer.desc": "CRM, посещаемость, домашние задания и мониторинг для родителей — всё для учебного центра на одной платформе.",
      "footer.ariaLinks": "Правовые ссылки",
      "footer.privacy": "Политика конфиденциальности",
      "footer.terms": "Условия использования",
      "footer.contact": "Контакты",
      "footer.rights": "Все права защищены."
    },

    /* ================= ENGLISH ================= */
    en: {
      "meta.title": "Acadium — one system for learning centers",
      "meta.description": "Acadium: CRM, attendance, homework, student progress and parent monitoring on a single platform.",

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

      "hero.tag": "The operating system for modern learning centers",
      "hero.title": "One system for your learning center",
      "hero.lead": "Attendance, homework, grades, payments and parent communication — one platform instead of Telegram, Excel and paper. See every student's status in real time.",
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
      "phone.n1t": "Arrived at the center",
      "phone.n1s": "2:02 PM, Chilanzar branch",
      "phone.n2t": "New homework",
      "phone.n2s": "Math, due tomorrow 6:00 PM",
      "phone.n3t": "Grade posted: 5",
      "phone.n3s": "English, test paper",

      "problem.h2": "The problem today",
      "problem.lead": "Data lives in four different places — and the center cannot answer a simple question: where is the student right now and how are they doing?",
      "problem.c1t": "Telegram groups",
      "problem.c1p": "Homework and announcements get lost in the chat. Who saw it, who submitted — nobody knows.",
      "problem.c2t": "Excel spreadsheets",
      "problem.c2p": "Payments and groups are updated by hand. Every admin keeps their own file.",
      "problem.c3t": "Paper attendance",
      "problem.c3p": "The register stays in the classroom. Collecting statistics means hours of re-typing.",
      "problem.c4t": "Calls from parents",
      "problem.c4p": "To answer “did my child come today?”, the admin has to look it up every single time.",

      "features.h2": "Everything a learning center needs",
      "features.lead": "Six modules connected to each other: mark attendance and the parent is notified, grade homework and the student earns XP.",
      "features.f1t": "Automatic attendance",
      "features.f1p": "Geofencing marks attendance on its own when a student enters the center. The teacher only confirms it.",
      "features.f2t": "Parent monitoring",
      "features.f2p": "Arrived or not, homework assigned, grade posted — the parent gets a notification right away.",
      "features.f3t": "Homework system",
      "features.f3p": "Assigning, deadlines, in-app submission and grading — all in one flow.",
      "features.f4t": "Arena and XP",
      "features.f4p": "Students earn XP for attendance and assignments and see their place in the group ranking.",
      "features.f5t": "Teacher panel",
      "features.f5p": "Groups, schedule and attendance on one screen. When the lesson ends, everything is already saved.",
      "features.f6t": "Analytics and reports",
      "features.f6p": "Full statistics on attendance, performance, payments and teacher effectiveness.",

      "how.h2": "How it works",
      "how.lead": "From the center to the parent — data is entered once and reaches everyone on its own.",
      "how.s1t": "The center adds a student",
      "how.s1p": "The admin assigns the student to a group and enters the parent's phone number.",
      "how.s2t": "The teacher runs the lesson",
      "how.s2p": "The lesson starts on schedule and the teacher opens the group in the panel.",
      "how.s3t": "Attendance and homework are recorded",
      "how.s3p": "Geofencing marks attendance; the teacher adds assignments and grades.",
      "how.s4t": "The parent sees it in real time",
      "how.s4p": "A notification lands in the app: arrived, homework assigned, grade received.",

      "roles.h2": "A screen for every role",
      "roles.lead": "One database, three different views.",
      "roles.ariaTabs": "User roles",
      "roles.tab1": "Center and teacher",
      "roles.tab2": "Student",
      "roles.tab3": "Parent",
      "roles.a_h3": "Web panel: full control of the center",
      "roles.a_p": "Admins and teachers manage students, groups, schedule, attendance, homework and payments in one place.",
      "roles.a_c1": "Student and group lists",
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
      "roles.p_p": "Parents follow their child's attendance, assignments and results without calling the center.",
      "roles.p_c1": "Arrival and departure notifications",
      "roles.p_c2": "Assigned and submitted homework",
      "roles.p_c3": "Grades and monthly progress",
      "roles.p_c4": "Payment reminders",
      "roles.month": "September attendance: 88%",

      "stats.s1": "students",
      "stats.s2": "teachers",
      "stats.s3": "learning centers",
      "stats.s4": "of attendance marked automatically",
      "stats.note": "Pricing depends on the size of your center — we will calculate it during the demo.",

      "cta.h2": "Digitize your center",
      "cta.lead": "Leave your details — we will get in touch within 24 hours and show the platform using your center as the example.",
      "cta.name": "Your name",
      "cta.namePh": "e.g. Dilshod",
      "cta.phone": "Phone number",
      "cta.center": "Center name",
      "cta.centerPh": "e.g. Bilim Plus",
      "cta.submit": "Request a demo",
      "cta.sending": "Sending…",
      "cta.invalid": "Please fill in every field: the phone number needs at least 9 digits.",
      "cta.success": "Thank you, {name}! Your request has been received — we will contact you shortly.",
      "cta.error": "Sorry, the request was not sent. Please try again or write to us on Telegram.",
      "cta.subject": "Acadium — new demo request",

      "footer.desc": "CRM, attendance, homework and parent monitoring for learning centers — on a single platform.",
      "footer.ariaLinks": "Legal links",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms of use",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved."
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
