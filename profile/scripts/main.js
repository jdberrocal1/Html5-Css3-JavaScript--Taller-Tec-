
'use strict';


/*SendMail*/
/*Funcion que se llama desde el index, usa el cliente de correo local para enviar un correo*/
function sendMail(mailBody) {
    var link = 'mailto:wchavarria03@gmail.com'
             + '?cc='+ escape(document.getElementById('contactEmail').value)
             + '&subject=' + escape('Profile Information Message')
             + '&body=' + escape( 'User Name:   ' + document.getElementById('contactName').value) + '    \n'
             + escape( 'User Message:   ' + document.getElementById('contactMessag
                e').value);

    window.location.href = link;
}



/*Technologies*/
var circles = document.getElementsByClassName('circle');


function toggleSkillInfo() {
	var skillNameEle = this.firstElementChild;
	var skillPorcentageEle = skillNameEle.nextElementSibling;

    /*Operación ternaria de javascript, es utilizada para hacer toggle de la clase hide*/
	skillNameEle.className = skillNameEle.className === 'hide' ? '' : 'hide';
	skillPorcentageEle.className = skillPorcentageEle.className === 'hide' ? '' : 'hide';

	this.className = this.className === 'circle skillActive' ? 'circle': 'circle skillActive';

}
/*Agregamos al evento click la funcion toggleSkill para que cuando se clickee se muestre el porcentaje o se muestre el nombre de la skill*/
for(var i = circles.length-1; i >= 0; i--) {
	circles[i].addEventListener('click', toggleSkillInfo, false)
}




