
    const inputs=document.querySelectorAll('input');
    console.log(inputs);
    function update(){
        console.log(this.name);
        var suf= this.dataset.sizing||"";//"" for color
        document.documentElement.style.setProperty(`--${this.name}`,this.value+suf);
    }
    inputs.forEach(input => input.addEventListener("change",update));
    
