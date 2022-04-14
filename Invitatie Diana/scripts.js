function animatie() {
    const wrapper = document.querySelector('.plic');
    const capac1 = document.querySelector('.unu');
    const capac2 = document.querySelector('.doi');
    const invitatie = document.querySelector('.invitatie');
    
    

    wrapper.addEventListener('click', () => {
        capac1.classList.toggle('toggle');
        capac2.classList.toggle('toggle');
        invitatie.classList.toggle('toggle');
    });
}
animatie();