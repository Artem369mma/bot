var config = {};

// Администраторы бота:
config.admin_list = [395701818, 963460308] // ID админов бота
config.admin_username = 'HowardDuckOfficially'; // Юзернейм админа (рекламного менеджера)
config.payeer_account = 'P1068564431';
config.you_account = '4100117714554103';
config.card_account = '5599 0020 1251 1020';

// Системные параметры бота:
config.proxy = null;//'http://@36.66.98.232:52851'; // Прокси для соединения с серверами Telegram http://HohrVp:6H8BY2@81.4.108.157:35357
config.qiwi = ''; // API ключ QIWI кошелька (первые 3 галочки доступа)
//config.mongodb = "mongodb://c52302_scroohhhhge_bot:XaNmuBoqxiyiw33@mongo1.c52302.h2,mongo2.c52302.h2,mongo3.c52302.h2/c52302_scroohhhhge_bot?replicaSet=MongoReplica"; // URL MongoDB базы
config.mongodb = "mongodb://127.0.0.1:27017"
config.token = "5145635709:AAGBQoBz4CdeM5F0QuGbiozlCyh3k2wsLlk"; // API ключ бота
config.bot_id = 5145635709; // ID бота (первая часть API ключа)
config.bot_username='HowardDuckBot'; // Юзернейм бота
config.bot_chat='HowardDuck_ChatV2'; // Юзернейм чата бота

config.otziv = 'Howard_Reviews';

config.pay = 'Howard_Target'; // Выплаты + задания

config.bot_views_channel = 'Howard_Views'; // Юзернейм канала с просмотрами (бот должен быть в админах!)
config.bonus_channel = "zaymi_onlineTop" // Канал, на который необходимо подписаться для получения ежедневного бонуса
config.bot_start_timestamp = 1643805192 // Таймстемп запуска бота в UNIX формате
config.qiwi_update = 30000; // Частота проверки на новые транзакции QIWI
config.antispam_interval = 0.3; // Интервал антиспама (с)
config.mm_interval = 75; // Интервал между сообщениями при рассылке
config.stats_update = 60; // Частота обновления статистики (с)
config.voucher_res = 8; // Количество символов в чеке

// Ценовые параметры бота:
config.bonusadv_sum = 50; // Стоимость рекламы в разделе бонуса
config.massmailing_kf = 0.01 // Стоимость 1-го пользователя при рассылке
config.pin_kf = 0.02 // Стоимость 1ого подписчика канала с просмотрами

config.bonus = 0.05;

config.buyautoreferal = 50 // стоимость автореферала

config.view_cost = 0.03; // Стомость 1 просмотра
config.view_pay = 0.02; // Выплата за 1 посмотр

config.autoview_cost = 0.04; // Стомость 1 автопросмотра

config.member_cost = 0.4; // Стоимость 1 подписчика
config.member_pay = 0.3; // Выплата за 1 подписчика

config.bot_cost = 0.2; // Стоимость 1 пользователя бота
config.bot_pay = 0.15; // Выплата за 1 пользователя бота

config.group_cost = 0.2
config.group_pay = 0.15

config.task_comm = 0.2

config.exit_fee = -1; // Штраф за выход из канала

config.ref1_percent = 0.20; // % партнёрских отчислений 1ого уровня
config.ref2_percent = 0.10; // % партнёрских отчислений 2ого уровня

config.ref1_pay = 0.3; // Выплата за реферала на 1ой линии
config.ref2_pay = 0.1; // Выплата за реферала на 2ой линии

config.min_subs = 10; // Минимальный заказ подписчиков
config.min_views = 10; // Минимальный заказ просмотров
config.min_bot = 10; // Минимальный заказ переходов на бот
config.min_group = 10
config.min_payout = 15; // Минимальный размер выплаты

config.min_subs_time = 7;

config.ref_msg_cost = 5;
config.payeer_account = "P1068564431";
config.payeer_apiId = "1632726472";
config.payeer_apiPass = "XhPoy3MU0tX1lbKw";
config.payeer_enabled = false;
// Платёжные системы
config.qiwi_state = false; // Вкл/откл авто начисления QIWI
config.qiwi_num = '+79944105304'; // Номер QIWI

config.about_text = '🚀 <b>Добро пожаловать!</b>'

module.exports = config;
