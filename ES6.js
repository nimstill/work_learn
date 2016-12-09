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


