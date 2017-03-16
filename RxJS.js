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


