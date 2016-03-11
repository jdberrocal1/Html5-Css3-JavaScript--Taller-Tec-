
/*ToDo's*/

var myStorage = localStorage;
var myToDos = [];

function getToDos () {
	myToDos = JSON.parse(myStorage.getItem('todos')) || [];
}

function AddToDo() {
	var todoInputEle = document.getElementById('todoInput');
	if(todoInputEle.value) {
		myToDos.push(todoInputEle.value);
		myStorage.setItem('todos', JSON.stringify(myToDos));
		todoInputEle.value = '';

		getToDos();
		refreshToDoUI();
	}
}

function removeOldUI() {
	var oldTodoList = document.getElementById('todoList');
	while (oldTodoList.firstChild) {
		oldTodoList.removeChild(oldTodoList.firstChild);
	}
}

function refreshToDoUI() {
	removeOldUI();

	var frag = document.createDocumentFragment();
	myToDos.forEach(function(item){
		
		var todoItem = document.createElement('div');
		todoItem.className = 'todoItem';

		var todoItemCheckBox = document.createElement('input');
		todoItemCheckBox.setAttribute('type','checkbox');

		var todoItemLabel = document.createElement('label');
		todoItemLabel.textContent = item;

		todoItem.appendChild(todoItemCheckBox);
		todoItem.appendChild(todoItemLabel);
		frag.appendChild(todoItem);
	});

	document.getElementById('todoList').appendChild(frag);
}


function completeToDo() {

}

function fillToDos() {
	if(!myToDos.length) {
		myToDos.push('Finish the Web Course');
		myToDos.push('Send the homework');
	}
}


getToDos();
fillToDos();
refreshToDoUI();
