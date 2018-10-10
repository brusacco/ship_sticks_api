$(document).ready(function() {
	$('form').on('ajax:success', function(event) {
		var detail = event.detail;
		var data = detail[0], status = detail[1],  xhr = detail[2];
		console.log(data);
		$('#results-container').text(data.name);
		$('#result').text(data.name);
		$('#results-container').show();

		var timer = setTimeout(function() {
			$('#exampleModal').modal('hide');   
		}, 5000);
	});
});