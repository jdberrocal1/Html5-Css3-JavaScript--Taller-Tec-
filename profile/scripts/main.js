
'use strict';

function sendMail(mailBody) {
    var link = 'mailto:wchavarria03@gmail.com'
             + '?cc='+ escape(document.getElementById('contactEmail').value)
             + '&subject=' + escape('Profile Information Message')
             + '&body=' + escape( 'User Name:   ' + document.getElementById('contactName').value) + '    \n'
             + escape( 'User Message:   ' + document.getElementById('contactMessage').value);

    window.location.href = link;
}

