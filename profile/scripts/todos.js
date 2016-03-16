/*ToDo's*/

var myStorage = localStorage;
var myToDos = [];

function getToDos () {
	/* Lee el todos del localStorage y lo convierte a formato json */
	myToDos = JSON.parse(myStorage.getItem('todos')) || [];
}

function AddToDo() {
	var todoInputEle = document.getElementById('todoInput');
	if(todoInputEle.value) {
		myToDos.push(todoInputEle.value);
		/*Almacena un item todos en el localStorage, toma el objeto y lo convierte a string*/
		myStorage.setItem('todos', JSON.stringify(myToDos));
		todoInputEle.value = '';

		getToDos();
		refreshToDoUI();
	}
}

/*
 *Limpia la lista de todos cuando se agrega uno nuevo para leerlas nuevamente del localStorage
 */
function removeOldUI() {
	var oldTodoList = document.getElementById('todoList');
	while (oldTodoList.firstChild) {
		oldTodoList.removeChild(oldTodoList.firstChild);
	}
}

function checkDone(evt) {
	var checkbox = evt.target;
	checkbox.nextElementSibling.className = checkbox.checked===true?'done':'';

}

function refreshToDoUI() {
	/*
	* NOTA: Se debe mejorar, haciendo que no sea necesario eliminar los que ya existen.
	*/
	removeOldUI();

	/*Fragment de javascript para reducir el repaint en el DOM*/
	var frag = document.createDocumentFragment();
	myToDos.forEach(function(item){

		var todoItem = document.createElement('div');
		todoItem.className = 'todoItem';

		var todoItemCheckBox = document.createElement('input');
		todoItemCheckBox.setAttribute('type','checkbox');
		todoItemCheckBox.addEventListener('click',checkDone)

		var todoItemLabel = document.createElement('label');
		todoItemLabel.textContent = item;

		todoItem.appendChild(todoItemCheckBox);
		todoItem.appendChild(todoItemLabel);
		frag.appendChild(todoItem);
	});

	document.getElementById('todoList').appendChild(frag);
}


/*Función para agregar dos TODOs en la lista para que la misma no inicie vacia
NOTA: No es necesario solo es por estetica(No ver la lista vacia)
*/
function fillToDos() {
	if(!myToDos.length) {
		myToDos.push('Finish the Web Course');
		myToDos.push('Send the homework');
	}
}


getToDos();
fillToDos();
refreshToDoUI();
