/* Функция ymaps.ready() будет вызвана, когда
загрузятся все компоненты API, а также когда будет готово DOM-дерево. */
ymaps.ready(init);
function init(){
// Создание карты.
    var myMap = new ymaps.Map("Mymap1", {
// Координаты центра карты.
// Порядок по умолчанию: «широта, долгота».
// Чтобы не определять координаты центра карты вручную,
// воспользуйтесь инструментом Определение координат.
    center: [48.856663, 2.351556],
// Уровень масштабирования. Допустимые значения:
// от 0 (весь мир) до 19.
    zoom: 12
});

var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/location.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
});

// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
}