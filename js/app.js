$(document).ready(() => {
	$("#code-editor").keyup(function () {
		var code = $(this).val();
		$("#live-preview").html(code);
	});
});
