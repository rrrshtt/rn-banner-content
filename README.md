При обращении по ссылке http://click-safety.com/test_task/test_do_not_run.php?id=lover веб-сервер выдает ответ в формате json, в котором содержится булева переменная getBannerContent. 

Нужно создать экран с произвольным цветом бэкграунда и кнопкой ОК в центре. Нажатие на кнопку обрабатывать по следующей логике

- если значение getBannerContent - true, открывать следующий экран webview, в котором в качестве урла использовать значение urlToDisplay из json

- если знаение getBannerContent - false, выводить в нижней части экрана Toast "Sorry we need to stay safe"
