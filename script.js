//quando o elemento com classe "theme-switch é clicado"
$(".theme-switch").on("click", () => {
    //Adiciona ou remove a classe "ligth-theme" do elemente "body"
    $("body").toggleClass("light-theme");
});