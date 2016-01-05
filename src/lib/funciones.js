/**
 * Created by Pablo on 14/10/14.
 */
function initTour() {

    var tour = new Tour({
        steps: [

            {
                element: ".1",
                title: "Direcciones",
                content: "En este menú podrá seleccionar la dirección a la cual pertenece el teléfono que desea localizar"


            },
            {
                element: ".2",
                title: "Resultados",
                content: "Aqui encontrará los resultados deseados. NOTA: Si el resultado está en blanco revise el buscador.",
                placement: "top"



            },
            {
                element: ".form-control",
                title: "Filtrando los resultados",
                content: "Con este buscador podrá filtrar los resultados por cualquiera de los campos devueltos. ej 20185830, 315,...etc",
                next: 0

            }
        ],
        backdrop: true,
        storage: false,
        template: "<div class='popover tour'>" +
            "<div class='arrow'></div>" +
            "<h3 class='popover-title'></h3>" +
            " <div class='popover-content'></div> " +
            "<div class='popover-navigation'>" +
            "<button class='btn btn-default' data-role='prev'>« Anterior</button>" +
            "<span data-role='separator'>  </span>" +
            "<button class='btn btn-default' data-role='next'>Siguiente »</button>" +

            "<button class='btn btn-default' data-role='end'>Fin</button></div></div>"
    });


    tour.init();
    tour.start();

}

initTour();
