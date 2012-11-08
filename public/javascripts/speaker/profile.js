(function() {
	var langs = ['JavaScript', 'Lua', 'Erlang', 'C#', 'Ruby', 'Java', 'PHP', 'Visual Basic', 'Pascal'];

	$('#bio').kendoEditor();
	$('#birthday').kendoDatePicker();
	$('#preferredSessionTime').kendoTimePicker();
	$('#languages').kendoComboBox({
		dataSource: langs
	})

	// (kd8) Add click-handler for RTL button
	$('#toggleRTL').on('click', function(event) {
		var form = $('#speakerForm');

		if (form.hasClass('k-rtl')) {
			form.removeClass('k-rtl')
		} else {
			form.addClass('k-rtl');
		}		
	});
})();