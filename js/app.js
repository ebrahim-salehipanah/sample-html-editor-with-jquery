$(document).ready(() => {
	var code = $("#code-editor").val();
	$("#code-editor").focus(function () {
		$("#live-preview").html(code);
	});
});
