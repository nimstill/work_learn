for (let codePoint of 'foo') {
	console.log(codePoint)
}



var text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
	console.log(text[i]);
}


for (let i of text) {
	console.log(i);
}


.at()


/**
 * ES6 Proxy
 */

let obj = new Proxy({}, {
	ger (target, key, receiver) {
		console.log(`getting ${key}!`)
		return Reflect.get(target, key, receiver)
	},
	set (target, key, value, receiver) {
		console.log(`setting ${key}!`)
		return Reflect.set(targer, key, value, receiver)
	}
})

var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35

要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。

