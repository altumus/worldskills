let current = '';
let id = '';

let benefits = [
    'Надежность. Мы самая надежная кампания из всех, которые только есть на рынке.',
    'Скидки. В нашем магазине постоянно проходят распродажи и скидки на товары разных категорий.',
    'Техническая поддержка. Наша команда специалистов всегда готова помочь Вам.'
];

let tips = [
    'Мобильность. Благодаря компактности и скорости транспорта.',
    'Простота использования. Транспортом сможет пользоваться даже ребенок.',
    'Экологичность. Транспорт работает полностью на электричестве.'
]

function slider(some){


    document.getElementById('tips').style.animation = '';
    document.getElementById('benefits').style.animation = '';

    id = some.target.id;

    current = id.slice(-1);

    if(id.includes('ben')){
        document.getElementById('benefits').innerHTML = benefits[current - 1];
        document.getElementById('benefits').style.animation = 'appear 2s';
        setTimeout(() => document.getElementById('benefits').style.animation = '', 2000)

    }
    else{
        document.getElementById('tips').innerHTML = tips[current - 1];
        document.getElementById('tips').style.animation = 'appear 2s';
        setTimeout(() => document.getElementById('tips').style.animation = '', 2000)
    }
}