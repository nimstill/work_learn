<input id = 'text'></input>
<script>
    var text = document.querySelector('#text'),
    timer = null;
    text.addEventListener('keyup', (e) => {
    	clearTimeout(timer);
    	timer = setTimeout(() => {
    		console.log('loa');
    	}, 250)
    })
</script>

<input id="text"></input>
<script >
	
	var text = document.querySelector('#text'),
		timer = null,
		currentSearch = '';

	text.addEventListener('keyup', (e) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			currentSearch = 'book';
			var searchText = e.target.value;
			$.ajax({
				url: ``,
				success: date => {
					if (date.search === currentSearch) {
						render(date);
					} else {
						//
					}
				}
			})
		}, 250)
	})


</script>

var text = document.querySelector('#text');
var inputStream = Rx.Observable.fromEvent(text, 'keyup')
					.debounceTime(250)
					.pluck('target', 'value')
					.switchMap(url => Http.get(url))
					.subscribe(date => render(date));


订阅：Observer 通过 Observable 提供的 subscribe() 方法订阅 Observable。
发布：Observable 通过回调 next 方法向 Observer 发布事件。


Rx.Observable.of(2)
			 .map(v => v*2)
			 .subscribe(v => console.log(v));


var text = document.querySelector('#text');
Rx.Observable.fromEvent(text, 'keyup')
			 .debounceTime(250)
			 .pluck('target', 'value')
			 .switchMap(url => Http.get(url))
			 .subscribe(data => render(data))


http://www.alloyteam.com/2016/12/learn-rxjs/

