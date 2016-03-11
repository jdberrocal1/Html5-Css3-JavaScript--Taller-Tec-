
'use strict';


/*SendMail*/
function sendMail(mailBody) {
    var link = 'mailto:wchavarria03@gmail.com'
             + '?cc='+ escape(document.getElementById('contactEmail').value)
             + '&subject=' + escape('Profile Information Message')
             + '&body=' + escape( 'User Name:   ' + document.getElementById('contactName').value) + '    \n'
             + escape( 'User Message:   ' + document.getElementById('contactMessage').value);

    window.location.href = link;
}



/*Technologies*/
var circles = document.getElementsByClassName('circle');


function toggleSkillInfo() {
	var skillNameEle = this.firstElementChild;
	var skillPorcentageEle = skillNameEle.nextElementSibling;
	
	skillNameEle.className = skillNameEle.className === 'hide' ? '' : 'hide';
	skillPorcentageEle.className = skillPorcentageEle.className === 'hide' ? '' : 'hide';

	this.className = this.className === 'circle skillActive' ? 'circle': 'circle skillActive';

}

for(var i = circles.length-1; i >= 0; i--) {
	circles[i].addEventListener('click', toggleSkillInfo, false)
}




