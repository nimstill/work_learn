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



