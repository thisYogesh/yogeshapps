document.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('#menu-btn');
    const mc = document.querySelector('.main-container');

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

    if(mc){
        let st = 0
        const sections = document.querySelectorAll('.main-section')
        mc.addEventListener('scroll', function(e){
            const scrollTop = this.scrollTop
            const dir = this.dataset.direction;
            let direction = ''
            if(scrollTop > st){
                direction = 'down'
            }else{
                direction = 'up'
            }
            
            if(dir !== direction){
                let scrollSnapAlign;
                if(direction === 'down'){
                    scrollSnapAlign = 'start'
                    this.dataset.direction = 'down'
                }else{
                    scrollSnapAlign = 'end'
                    this.dataset.direction = 'up'
                }
                
                sections.forEach(function(section){
                    section.style.scrollSnapAlign = scrollSnapAlign
                })
            }

            // save previous scroll top value
            st = scrollTop

        })
    }
})