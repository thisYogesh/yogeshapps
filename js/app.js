document.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('#menu-btn');
    if(menuBtn){
        menuBtn.addEventListener('click', function(){
            const isOpen = this.dataset.isMenuOpen
            const menu = document.querySelector('#main-menu');
            const menuIcon = document.querySelector('.menu-icon')

            if(!isOpen || isOpen === 'close'){
                menu.classList.add('--open');
                menuIcon.classList.add('--menu-open');
                this.dataset.isMenuOpen = 'open';
            }else{
                menu.classList.remove('--open');
                menuIcon.classList.remove('--menu-open');
                this.dataset.isMenuOpen = 'close';
            }
            
        });
    }
})