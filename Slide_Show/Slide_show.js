var main = function () {
	"use strict";
	//Теги
	var tag="dogs";	
	//URL, откуда берём картинки
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
				"tags="+tag+"&format=json&jsoncallback=?";
	//Индикатор таймера слайд-шоу
	var tmImg;	
	//Формируем строку для ввода тега
	var $tagInput=$("<input/>",
						{
							type:"text",
							class:"tags",
						});
	var $tagLabel=$("<p/>",
						{
							text:"Теги",							
						});
	var $tagName=$("<p/>",
						{
							class:"tagName",
						});
	//Формируем кнопку для просмотра картинок по тегам
	var $button=$("<button/>",
							{
							text:"+",
							click: function(){
								if ($tagInput.val()!=="" ) {
									//Формируем новый URL, откуда берём изображения
									tag=$tagInput.val();
									$("main .tag .tagName").empty();
									$("main .tag .tagName").append($tagInput.val());
									url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
											"tags="+tag+"&format=json&jsoncallback=?";
									$tagInput.val("");
									//Если уже идёт слайд шоу, то останавливаем его таймер
									if(tmImg!=="")
										{clearTimeout(tmImg);}
									//перезапускаем слайд шоу
									slideshow();
								}
							}
						});
	//Добавляем элементы на страницу
	$("main .tag").append($tagLabel).append($tagInput).append($button).append($tagName);
	var slideshow = function (){
		//получаем новые изображения
	$.getJSON(url,function (flickrResponse){
		var displayImg=function (imgIndex){
			//создаем картинку
			var $image=$("<img>",
						{	//прописывем ссылку на изображение из JSON
							src:flickrResponse.items[imgIndex].media.m,
							class:"active",
						});
			//Скрываем её
			$image.hide();
			//Убираем старую
			$("main .photos").empty();
			//Показываем новую
			$("main .photos").append($image);
			$image.fadeIn();
				//По интервалу из массива берём следующую для отображения
				tmImg=setTimeout(function(){
					imgIndex=imgIndex+1;
					if(imgIndex===3){
						imgIndex=0;
					}
					displayImg(imgIndex);				
				},3000);			
		};
		displayImg(0);
			
		});
	};
	
}
	
$(document).ready(main);