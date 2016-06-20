$(document).ready(function() {
	$('#ProcessPageEdit:not(.ProcessPageShowSettingsContent)').WireTabs({
		items: $("#ProcessPageEdit > .Inputfields > .InputfieldWrapper"), 
		id: 'PageEditTabs',
		skipRememberTabIDs: ['ProcessPageShowSettingsDelete']
	});
});

