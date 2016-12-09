DOM就绪和渲染结束。

DOM就绪是指浏览器已经接收到整个HTML并且DOM解析完成；
渲染结束是指浏览器已经接收到HTML中引用的所有样式文件、图片文件、以及Iframe等资源并渲染结束。

trigger() 方法触发被选元素的指定事件类型。

one() 方法为被选元素附加一个或多个事件处理程序，并规定当事件发生时运行的函数。
当使用 one() 方法时，每个元素只能运行一次事件处理器函数。



逻辑与 (&&)	expr1 && expr2	如果expr1 能转换成false则返回expr1,否则返回expr2. 
因此, 在Boolean环境中使用时, 两个操作结果都为true时返回true,否则返回false.

IE8parentNode bug

 ['$(\'', partId, '\').style.display=\'\';', '$(\'', allId, '\').style.display=\'none\''].join('');

 