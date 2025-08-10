//-----------------variables globales---------------------
const operationSelect = document.getElementById('operation');
const orderContainer = document.getElementById('order-container');
const orderSelect = document.getElementById('order');
const submitBtn = document.querySelector('input[type="submit"]');


//----------orden de la operacion resta de vectores----------
operationSelect.addEventListener('change', () => {
    const operation = operationSelect.value;
    if (operation == "resta") {
        orderContainer.style.display = "block";
    } else {
        orderContainer.style.display = "none";
    }
});

//==============funciones de operaciones aritmeticas=================
function sumarVectores(ax, ay, bx, by) {
    return { x: ax + bx, y: ay + by };
}

function restarVectores(ax, ay, bx, by, order) {
    if (order === "a-b") {
        return { x: ax - bx, y: ay - by };
    }
    else if (order === "b-a") {
        return { x: bx - ax, y: by - ay };
    }
}

function productoEscalar(ax, ay, bx, by) {
    return (ax * bx) + (ay * by);
}

//las funciones sumar y restar vectores trabajan con propiedades x,y

//------------------------------------------------------evento click----->

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //*********************variables para las operaciones*****************
    const ax = parseFloat(document.getElementById('ax').value.trim());
    const ay = parseFloat(document.getElementById('ay').value.trim());
    const bx = parseFloat(document.getElementById('bx').value.trim());
    const by = parseFloat(document.getElementById('by').value.trim());
    const operations = operationSelect.value;
    const order = orderSelect.value;

    //--------------------validaciones campos vacios----------------
    if (isNaN(ax) || isNaN(ay) || isNaN(bx) || isNaN(by)) {
        Swal.fire({ title: "Campo vacio", text: "Ingrese un valor, por favor.", icon: "warning", position: "top", });
        return;
    }

    if (Object.is(ax, -0) || Object.is(ay, -0) || Object.is(bx, -0) || Object.is(by, -0)) {
        Swal.fire({ title: "Numero inválido", text: `El número -0 no es reconocible, intente con 0.`, icon: "warning", position: "top", });
        return;
    }

    //------------------------------result------------------------>
    let result;   //la variable result funciona como un objeto

    switch (operations) {
        case "suma":
            result = sumarVectores(ax, ay, bx, by);
            Swal.fire(`Resultado de A + B = (${result.x}, ${result.y})`);
            break;

        case "resta":
            result = restarVectores(ax, ay, bx, by, order);
            Swal.fire(`Resultado de ${order.toUpperCase()} = (${result.x}, ${result.y})`);
            break;

        case "producto":
            result = productoEscalar(ax, ay, bx, by);
            Swal.fire(`Resultado de A . B = ${result}`);
            break;
        default:
            Swal.fire({
                title: '❌ Error', text: 'Seleccione una opción, por favor.', position: 'top',
            });
    }
});









