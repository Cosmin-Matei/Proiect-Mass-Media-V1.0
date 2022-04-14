function animatie() {
    const plic = document.querySelector('.plic');
    const capac1 = document.querySelector('.inchis');
    const capac2 = document.querySelector('.deschis');
    const invitatie = document.querySelector('.invitatie');
    const invelitoare =document.querySelector('.invelitoare');

//de adugat functionalitara cu imaginea
        plic.addEventListener('click', () => {
            //partea 1 (se deschide plicul)
            capac1.classList.toggle('toggle');
            capac2.classList.toggle('toggle');
            invitatie.classList.toggle('toggle');
            invelitoare.classList.toggle('toggle');
            //partea 2 (dispare plicul)
            capac1.classList.toggle('opac');
            capac2.classList.toggle('opac');
            plic.classList.toggle('opac');
            invelitoare.classList.toggle('opac');

            //apare invitatia cu informatii
            invitatie.classList.toggle('marire');
        });
}
animatie();