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