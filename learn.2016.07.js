var d = new Dialog({
	content: 'neirong'
});

$('document').on('click', '.selector', dunction(){
	d.activeTrigger = $(this);
	d.show();
});

new Select({
	trigger: ''
}).on('change', function(target, prev) {
	console.log(target.html());
})


.on('disabledChange', function(target, status) {
	console.log(target.html());
})

var overlay = new Overlay({
	template: '<div class="overlay"></div>',
	width: 500,
	height: 200,
	zIndex: 99,
	style: 'border:1px solid red; color:green;',
	parentNode: '#c',
	align: {
		selfXY: ['-100%', 0],
		baseElement: '#a',
		baseXY: [0,0]
	}
});

overlay.show();
overlay.set('style', {
	backgroundColor: 'red',
	border: '1px solid green'
});

overlay.set('width', 500);
overlay.set('className', 'myclass');



var Overlay = require('overlay');
var Dialog = Overlay.extend({
	attrs: {
		trigger: null,
		triggerType: 'click',
		hasMask: false,
		onComfirm: function() {},
		onClose: function() {}
	},

	setup: function() {
		Dialog.superclass.setup.call(this);
	},
	show: function() {
		Dialog.superclass.show.call(this);
	}
});


var mask = require('mask');
mask.show();

mask.set({backgroundColor: 'red', opacity: 0.5 }).show();

setup: function() {
	Popup.superclass.setup.call(this);
	this._blurhide([this.get('trigger')]);
},




//Templatable
var Templatable = require('templatable');

var MyWidget = Widget.extend({
	Implements: Templatable
});

var MyWidget = new MyWidget({
	templatable: '<div><h3>{{title}}</h3><ol>{{#each list}}<li>{{item}}</li>{{/each}}</div>',
	model: {
		'title': 'biaoti',
		'list': [
			{ 'item': 'wezhangyi'},
			{ 'item': "wehzuanger"}
		]
	},
	parentNode: '#demo'
});

myWidget.render();

//*/*/*/*/*/*/*//////////////*/*/*/*/**/*/*/**/*/*/*/*/*/*/*/*/**/


renderPartial.renderPartial(selector)
this.set('model', {
	title: 'xingbiaotui'
});

this.renderPartial('h3');

///	Cookie

define(function() {
	var Cookie = require('cookie');

	document.cookie = 'foo=1';
	document.cookie = 'bar=2';
	Cookie.get('foo');
	Cookie.get('bar', function(s) {return parseInt(s); } );
});

define(function() {
	var Cookie = require('cookie');

	Cookie.set('foo', 3);
	cookie.set('bar', 4, {
		domain: 'example.com',
		path: '/',
		expires:30
	});
});


define(function() {
	var Cookie = require('cookie');

	Cookie.remove('foo');

	Cookie.remove('bar', {
		domain: 'example.com',
		path: '/'
	});
});



pin position.pin(pinObject, [baseObject])

var cal = new Calendar({..attributes..});
cal.on('..event..',function(param){
	//
})

.on('selectDate', function(date) {

})


seajs.use(['widget','$'],function(Widget,$) {
	$(function() {
		Widget.autoRenderAll();
	});
});


var WidgetA = Widget.extend({
	attrs: {
		a: 1
	},

	method: function() {
		console.log(this.get('a'));
	}
});

var widget = new WidgetA({
	a: 2
}).render();
widget.method();


.initAttrs() // 初始化属性，将实例化时的数据和默认属性做混合
.parseElement() // 模板解析
.initProps() // 提供给用户处理属性
.delegateEvents() // 事件代理，将事件代理到 `this.element` 上
.setup() // 实例化最后一步，用户自定义操作，提供给子类继承。

var MyWidget = Widget.extend({
	events: {
		"dblclick": "open",
		"click .icon.doc": "select",
		"mouseover .date": "showTooltip"
	},
	open: function() {
		...
	},
	select: function() {
		...
	},
	...
});


///qrcode   

<script src='dist/arale-qrcode/3.0.2/lib/index.js'></script>
<script> 
    new AraleQRCode({...});
</script>


var uploader = new uploader({
	trigger: '#upload-icon',
	name: 'image',
	action: '/upload',
	data: {'xsrf': 'hash'}
}).success(function(response) {
	alert(response);
}).error(function(file) {
	alert(file);
});

$('#submit').click(function() {
	uploader.submit();
});



var uploader = new Uploader({
    trigger: '#upload-icon',
    name: 'image',
    action: '/upload',
    data: {'xsrf': 'hash'},
    progress: function(e, position, total, percent, files) {
      $('#progress').text('Uploading ... ' + percent + '%');
    }
}).change(function(files) {
    // before submit
    $('#progress').text('Uploading ...');
    this.submit();
}).success(function(response) {
    $('#progress').text('Success');
    alert(response);
});


var Base = require('base');

var Pig = Base.extend({
	attrs: {
		name: ''
	},
	talk: function() {
		alert('woshi' + this.get('name'));
	}
});

module.exports = Pig;










define(id?, dependencies?, factory)

dependencies 是一个字符串 Array，表示该模块依赖的其他所有模块标识，模块依赖必须在真正执行具体的 factory 方法前解决，
这些依赖对象加载执行以后的返回值，可以以默认的顺序作为 factory 方法的参数。dependencies 也是可选参数，当用户不提供该参数时，
实现 AMD 的框架应提供默认值为 [“require”，”exports”，“module”]。

factory 是一个用于执行改模块的方法，它可以使用前面 dependencies 里声明的其他依赖模块的返回值作为参数，
若该方法有返回值，当该模块被其他模块依赖时，返回值就是该模块的输出。

<script src="./js/require.js"></script>

<script>
require(["./js/a.js", "./js/b.js"], function() {
	myFunctionA();
	myFunctionB();
});
</script>

 <script src="./js/require.js"></script> 
	 <script> 
    require(["domReady!", "./js/a.js", "./js/b.js"], function() { 
	    	 myFunctionA(); 
	    	 myFunctionB(); 
	    }); 
	 </script>


define(function(){ 
 return { 
    createStudent: function(name, gender){ 
    	 return { 
    		 name: name, 
    		 gender: gender 
    	 }; 
    } 
 }; 
});

define(function() { 
var allStudents = []; 
    return { 
        classID: "001", 
        department: "computer", 
        addToClass: function(student) { 
        allStudents.push(student); 
        }, 
        getClassSize: function() { 
        return allStudents.length; 
        } 
    }; 
 } 
);

/*
require(["js/student", "js/class"], function(student, clz) { 
clz.addToClass(student.createStudent("Jack", "male")); 
clz.addToClass(student.createStudent("Rose", "female")); 
console.log(clz.getClassSize());  // 输出 2 
});

define(["js/student", "js/class"], function(student, clz){ 
return { 
addNewStudent: function(name, gender){ 
clz.addToClass(student.createStudent(name, gender)); 
}, 
getMyClassSize: function(){ 
return clz.getClassSize(); 
} 
}; 
});

require(["js/manager"], function(manager) { 
manager.addNewStudent("Jack", "male"); 
manager.addNewStudent("Rose", "female"); 
console.log(manager.getMyClassSize());// 输出 2 
});
*/


 尽量不要提供模块的 ID，如 AMD 规范所述，这个 ID 是可选项，如果提供了，在 RequireJS 的实现中会影响模块的可迁移性，文件位置变化会导致需要手动修改该 ID。
每个 JavaScript 文件只定义一个模块，模块名称和文件路径的查找算法决定了这种方式是最优的，多个的模块和文件会被优化器进行优化。
避免模块的循环依赖，如果实在避免不了，可以模块中加上对”require”模块的依赖，在代码中直接用 require(”dependencyModuleName”)。

require(["js/student", "js/class"], function(student,clz) {
	clz.addToClass(student.createStudent("Jack", "male"));
	clz.addToClass(student.createStudent("Rose", "female"));
	console.log(clz.getClassSize());
});

define(["js/student", "js/class"], function(student, clz){
	return {
		addNewStudent: function(name, gender){
			clz.addToClass(student.createStudent(name, gender));
		},
		getMyClassSize: function() {
			return clz.getClassSize();
		}
	}
});

require(["js/manager"], function(manager) {
	manager.addNewStudent("Jack", "male");
	manager.addNewStudent("Rose", "female");
	console.log(manager.getMyClassSize());
})



Handlebars.registerHelper('link', function(text, url) {
	text = Handlebars.Utils.escapeExpression(text);
	url = Handlebars.Utils.escapeExpression(url);

	var result = '<a href="' + url + '">' + text + '</a>';

	return new Handlebars.Safetring(result);
});


{{#list people}}{{firstName}} {{lastName}}{{/list}}

{
	people: [
	{firstName: "Yehuda", lastName: "Katz"},
	{firstName: "Carl", lastName: "Lerche"},
	{firstName: "Alan", lastName: "johnson"}
	]
}

Handlebars.registerHelper('list', function(items, options) {
	var out = "<ul>";

	for(var i = 0, l=items.length; i<l; i++) {
		out = out + "<li>" + options.fn(irems[i]) + "<li>";
	}

	return out + "</ul>";
})


