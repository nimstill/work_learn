from 

http://cnt1992.xyz/2016/08/06/summary-of-react-base-on-practice/


import React from 'react';
import safe from './Safe';
let _func = React.createElement;

React.creactElement = function (...args) {
	if (typeof args[0] === 'function' && !args[0]._isSage) {
		sage(args[0]);
	}
	return _func.apply(this);
};


import React from 'react';

export default function safe (target) {
	let p = target.prototype;
	let list = [
		'render',
		'componentWillMount'
	];
	list.forEach(name => {
		if (name in p && typeof p[name] === 'function') {
			let _function (..args) {
				try {
					return _func.apply(this.args);
				}
				catch(e) {
					// 这里捕捉到React渲染报错，你可以啥都不做
                    // 也可以将错误信息直接渲染在页面 
                    // ErrorResult是你自定义的错误展示组件 msg是你自定义的错误信息
					const error = {
						msg
					};
					return (
							<ErrorResult {error> {...this.props} />
					)
				}
			}
		}
	});
	target._isSafe = true;
}


var a = 333,
	b = a;
b = 555;
console.log(a);


var pageData = {};

loadData(1);
loadData(2);
loadData(3);

function loadData(page) {
	let promise = xxx;
	promise.then(function(res) {
		if (res.success) {
			if (!pageData.data) {
				pageData.res.data;
				renderPage(pageData);
			} else {
				Object.assign(pageData, res.data);
				updateStore(pageData);
			}
		}
	},function(err) {
		//err handle
	});
}


Object.assign(target, ...sources) 是浅拷贝的

乍看之下因为没什么问题了，But，任凭你怎么刷新页面永远都是第一次渲染出来，后面的就不管你了。

首先，犯了一个很低级的错误，关于cloneDeep的问题，翻一下 MDN文档 可以知道 Object.assign(target, ...sources) 是浅拷贝的，也就是我上面第二次请求回来的数据合并之后并不是正确的数据，因为res.data里面还有多层object，这个容易解决，写一个cloneDeep方法实现即可，这里就不再贴出代码。

合并之后的数据正确了，但是触发updateStore的时候也碰到一个问题，那就是第一次触发updateStore的时候能够正确拿到数据并且渲染第二页的数据，但是再次触发的时候就不渲染第三页的数据了。这就是提到的关于传值跟传址的问题，当第一次触发updateStore的时候传了一个object过去，后面再合并数据之后同样传了一个object过去，但这个object是基于上一个object的基础上复制的，所以导致了指向同一个指针，最简单粗暴的方法就是：

// 简单粗暴的让pageData变成值传递过去
updateStore(JSON.parse(JSON.stringify(pageData)));



function updateStpreData(Data) {
	return  {
		type: 'UPDATESTORE',
		data: data
	};
}

let updateStoreAction = function updateStoreAction(data) {
	return (dispath, getState) => {
		dispatch(uppdateStoreData(data));
	};
}

export default updateStoreAction;

let middleware = Config.actionMiddlewareList || [];
middleware.forEach(function (mv) {
	let funcName = mv.name;
	if (!funcName) {
		funcName = mv.toString().match(/^function\s*([^(]+)/)[1];
	}
	MoudularizationActions[funcName] = mv;
});

