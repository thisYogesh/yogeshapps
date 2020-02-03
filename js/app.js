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

            if(scrollTop > previousSctollTop){
                cs++;
            }else{
                cs--;
            }
            
            top = sectionList[cs].offsetTop
            this.dataset.currentSection = cs;
            this.scrollTo({ top: top, left: 0,behavior: 'smooth' })
            previousSctollTop = scrollTop
        })
    }
})