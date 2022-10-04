const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
 
 
}



btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



//Botao voltar ao topo
 
// if (document.getElementById('btn-top')) {
//     var btnTop = document.getElementById('btn-top');
//     btnTop.addEventListener('click', function () {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
// }

 