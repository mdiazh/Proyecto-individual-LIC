$(document).ready(function() {
    $("#tabs").tabs();
    $(".contact_form").submit(function(event) {
        contacto_send(event);
    });
    $(".reset").click(function(event) {
        contacto_limpiar(event);
    });
    //Uso de objetos
    var obj = new cargar_info();




});
function cargar_info() {
    var mensaje = new Array();
    Array.prototype.count = function() {
        return this.length;
    };
    mensaje.push('<h2>Sobre mi!</h2>'
            + '<p>Soy Monica Diaz, tengo 18 años de edad, vivo en San Salvador con mis padres Eduardo Díaz y Sara de Díaz, y con mi única hermana Adriana Michelle Díaz de 20 años. Estoy realizando mis estudios en el Instituto Técnico Ricaldone llevando el programa de integración de estudios técnicos(PILET), lo que más me gusta de mi carrera es la programación. </p>');

    for (var i = 0; i < mensaje.count(); i++) {
        $("#about-me").html(mensaje[i]);
    }
    ;
}

function contacto_limpiar(event) {
    var conf = confirm("¿Esta seguro que desea limpiar los campos?");
    switch (conf.toString())
    {
        case "true":
            alert("Los campos fueron vaciados");
            break;
        case "false":
            event.preventDefault();
            break;
        default:

    }

}


function contacto_send(event) {
    event.preventDefault();
    var num = Math.floor((Math.random() * 100) + 1);
    var captcha = prompt("Introduzca el siguiente codigo de seguridad: \n" + num);

    if (num == captcha) {
        var p = document.createElement('p');
        var t = document.createTextNode("Su mensaje ha sido enviado!");
        p.appendChild(t);
        p.style.color = "green";
        p.style.marginLeft = "10%";
        p.style.fontWeight = "bold";
        $(".message_contact").html(p);
        $(".form_contact>input[name=name]").val("");
        $(".form_contact>input[name=email]").val("");
        $(".form_contact>textarea").val("");

    } else {
        var p = document.createElement('p');
        var t = document.createTextNode("Ha ocurrido un error al enviar su mensaje.");
        p.appendChild(t);
        p.style.color = "red";
        p.style.marginLeft = "10%";
        p.style.fontWeight = "bold";
        $(".message_contact").html(p);
        window.alert("Ha ocurrido un error al enviar su mensaje!");
    }

}