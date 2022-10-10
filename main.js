'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let $billBoard, $firingBtn, $imgRocket, timerId = null,
    cpt = 3

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
// CallBack du btn firing
function launch() {
    // Mise en place du compte à rebours (3 sec, UPD pic rocket, décollage)
    setTimeout(() => {
        // UPD IMG Rocket
        updatePic('images/rocket3.gif')
        // Décollage
        $imgRocket.classList.add('tookOff')
    }, cpt * 1000)

    // Mise à jour de l'affichage
    timerId = setInterval(updateBillBoard, 1000)

    updateBillBoard()

    // Mise à jour de la fusée
    updatePic('images/rocket2.gif')
}

// Update picture
function updatePic(pathImg) {
    $imgRocket.src = pathImg
}

// Update billboard
function updateBillBoard() {
    // test si fini ou pas
    if (cpt === 0) {
        clearInterval(timerId)
    }

    $billBoard.innerText = cpt
    cpt--
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener('DOMContentLoaded', () => {
    // Ciblage
    $billBoard = document.querySelector('#billboard span')
    $firingBtn = document.getElementById('firing-button')
    $imgRocket = document.getElementById('rocket')

    $firingBtn.addEventListener('click', launch)
})
