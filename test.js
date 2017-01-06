var data = {
	sId: 85,
	ldYear: "2017",
	ldMonth: "1",
	ldValue: {
		"breakfast": 1,
		"lunch": 2,
		"dinner": 3
	}
}
$.ajax({
	url: "webserver/student/setleavedays",
	type: "POST",
	data: JSON.stringify(data),
	contentType: "application/json",
	dataType: "json",
	success: function(res) {
		console.log(res);
	},
	error:function(data){
		alert(JSON.parse(data.responseText).msg);
	}
})

// test1 dev on jamaster -1.0