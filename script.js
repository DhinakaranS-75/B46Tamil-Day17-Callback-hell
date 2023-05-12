const countdown = document.getElementById('countdown');

function count(num, callback) {
	if (num === 0) {
		callback();
	} else {
		countdown.innerHTML = num;
		setTimeout(function() {
			count(num - 1, callback);
		}, 1000);
	}
}

count(10, function() {
	countdown.innerHTML = "Happy Independence Day";
});

