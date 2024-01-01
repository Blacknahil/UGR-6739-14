document.getElementById("toggle-menu").addEventListener('change',function(){
    document.querySelector('.nav-list').classList.toggle('hidden',!this.checked);
    });