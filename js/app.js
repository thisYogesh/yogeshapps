document.addEventListener('DOMContentLoaded', function(){
    //
    const mc = document.querySelector('.main-container')
    if(mc){
        const sectionList = mc.querySelectorAll('.main-section')
        let previousSctollTop = 0
        let aip = false
        mc.dataset.currentSection = 0;
        mc.addEventListener('scroll', function(e){
            const scrollTop = this.scrollTop
            if(aip){
                previousSctollTop = scrollTop
                return;
            }else{
                aip = true
                setTimeout(function(){ aip = false }, 1000)
            }

            let cs = Number(this.dataset.currentSection)
            let top = 0;
            let update = false

            if(scrollTop > previousSctollTop && sectionList[cs + 1]){
                cs++;
                update = true
            }else if(sectionList[cs - 1]){
                cs--;
                update = true
            }

            if(update){
                top = sectionList[cs].offsetTop
                this.dataset.currentSection = cs;
                this.scrollTo({ top: top, left: 0,behavior: 'smooth' })
                previousSctollTop = scrollTop
            }
        })
    }


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