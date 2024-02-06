/* Функция ymaps.ready() будет вызвана, когда
загрузятся все компоненты API, а также когда будет готово DOM-дерево. */
ymaps.ready(init);
function init(){
// Создание карты.
    var mapElem = document.querySelector("#map");
    var myMap = new ymaps.Map("map", {
// Координаты центра карты.
// Порядок по умолчанию: «широта, долгота».
// Чтобы не определять координаты центра карты вручную,
// воспользуйтесь инструментом Определение координат.
    center: [55.75846806898367, 37.60108849999989],
// Уровень масштабирования. Допустимые значения:
// от 0 (весь мир) до 19.
    zoom: 14,
    controls: ["geolocationControl", "zoomControl"]
  },


  // отвечает за активности слева на карте-масштаб/поиск и тд
  {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "300px", right: "20px" },
    geolocationControlFloat: "none",
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "200px", right: "20px" }
  }
  );


// точка расположения
var myPlacemark = new ymaps.Placemark([55.76048628921842, 37.6150372910766], {}, {
    iconLayout: "default#image",
    iconImageHref: './img/Mymap.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-20, -40]
});

myMap.behaviors.disable("scrollZoom");

// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
myMap.container.fitToViewport();
}
