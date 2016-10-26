var small = {x: 0.005, y: 0.005, z: 0.005}
var large = {x: 0.01, y: 0.01, z: 0.01}
var none = {x: 0, y: 0, z: 0};

// var categories = {
//     shoes:{
//         1: {},
//         2: {}
//     },
//     dummys:{
//         1: {},
//         2: {}
//     }
// }

var cart = [];

function toggleSize(event){
    event.getAttribute('scale') === small ? event.setAttribute('scale', large) : event.setAttribute('scale', small);
}

function hide(objectModel){
    objectModel.setAttribute('scale', none);
}

function show(objectModel){
    objectModel.setAttribute('scale', small);
}

function toggleVisibility(objectModel){
    objectModel.getAttribute('visible') ? objectModel.setAttribute('visible', false) + hide(objectModel): objectModel.setAttribute('visible', true) + show(objectModel);
}

function toggleCategory(id){
    var elements = document.getElementsByClassName('category' + id);
    for(let i = 0; i < elements.length; i++){
        toggleVisibility(elements[i]);
    }
}

function addToCart(object){
	cart.push(object);
	console.log(cart);
    toggleBuyLabel();
    document.getElementById("cart-label").setAttribute('bmfont-text', 'text: ' + cart.length + ' items in cart!')
}

function toggleBuyLabel(){
    document.getElementById("cart-added-label").setAttribute('scale', '1 1 1');
    setTimeout(function() {
        document.getElementById("cart-added-label").setAttribute('scale', '0 0 0')
    }, 2000);
}