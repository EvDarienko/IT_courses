<<<<<<< Updated upstream
=======
var user = [  {    name: 'Panda Vasya',    url: 'https://cutt.ly/Hn90ez7',
    description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'  },
  {    name: 'Panda Petya',
    url: 'https://polit.ru/media/photolib/2020/12/09/ps_36518216101_11ca953831_h_1607499081.jpg',
    description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'  },
  {    name: 'Panda Fedya',
    url: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/2F39/production/_103498021_gettyimages-475636556.jpg',
    description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'  }]

user.forEach(function(item, index) {
    var h1 = document.createElement("h1");
    var img = document.createElement("img");
    var paragraph = document.createElement("p");

    h1.innerHTML = item.name;
    img.src = item.url;
    paragraph.innerHTML = item.description;

    document.body.style.textAlign = "center";

    document.body.append(h1, img, paragraph);

    (index < user.length - 1) && paragraph.after(document.createElement("hr"));
})
>>>>>>> Stashed changes
