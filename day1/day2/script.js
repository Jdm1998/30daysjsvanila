
        var second=document.querySelector('.second');
        var mins=document.querySelector(".minute");
        var hour=document.querySelector(".hour");
        function setDate(){
            var time=new Date();
            var sec=time.getSeconds();
           // console.log(sec);
            var secondeg=((sec/60)*360)+90;
          
            second.style.transform = `rotate(${secondeg}deg)`;
        
        //for min
        var min=time.getMinutes();
        const minsdeg= ((min / 60) * 360) + ((sec / 60) * 6) + 90;
        mins.style.transform = `rotate(${minsdeg}deg)`;
    //for hour
    var hours=time.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((min / 60) * 30) + 90;
            hour.style.transform = `rotate(${hourDegrees}deg)`;
    
    }
        setInterval(setDate,1000);
        setDate();
        
