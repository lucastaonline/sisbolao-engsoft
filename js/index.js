(function ($) {

    //Assim que iniciarmos a pagina index.php inciaremos este script.

    //Instanciar o objeto de form handling
    var formHandling = new FormHandling();

    //Realizar requisição http para chamar a página de cadastro
    $(document).on("click", "#cadastro", function () {
        formHandling.cadastrarUsuario();
    });



    /*==================================================================
        [ Validate ]*/

    $(document).on('submit', '.validate-form', function (e) {
        formHandling.validarFormulario(e);
    });

    $(document).on("focus", '.validate-form .input100', function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);
