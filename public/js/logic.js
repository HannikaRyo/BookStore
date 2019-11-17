$(function () {
    $('#reset').click(function () {
        $(':input', '#bookCreate')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
    });
});