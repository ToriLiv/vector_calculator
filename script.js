const operationSelect = document.getElementById('operation');
const orderContainer = document.getElementById('order-container');
const orderSelect = document.getElementById('order');
const submitBtn = document.querySelector('input[type="submit"]');


//select order operation resta
operationSelect.addEventListener('change', () => {
    const operation = operationSelect.value;
    if (operation == "resta") {
        orderContainer.style.display = "block";
    } else {
        orderContainer.style.display = "none";
    }
});

//=====================functions============================
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

//-------------------------------------------------------------

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();


    //variables
    const ax = parseFloat(document.getElementById('ax').value);
    const ay = parseFloat(document.getElementById('ay').value);
    const bx = parseFloat(document.getElementById('bx').value);
    const by = parseFloat(document.getElementById('by').value);
    const operations = operationSelect.value;
    const order = orderSelect.value;


    //result
    let result;
    
    switch (operations) {
        case "suma":
            result = sumarVectores(ax, ay, bx, by);
            Swal.fire(`Resultado de A + B = (${result.x}, ${result.y})`);
            break;

        case "resta":
            result = restarVectores(ax, ay, bx, by,order);
            Swal.fire(`Resultado de ${order.toUpperCase()} = (${result.x}, ${result.y})`);
            break;

        case "producto":
            result = productoEscalar(ax, ay, bx, by);
              Swal.fire(`Resultado de A . B = ${result}`);
                break;
            default: 
            Swal.fire({title: '❌ Error',text: 'Intentelo de nuevo, por favor.',position: 'top',
      });
    }
});









