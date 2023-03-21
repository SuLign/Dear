setInterval(()=>{
    var time = new Date();
    var startTime = new Date("2023/02/14 00:00");
    var st = time - startTime;
    document.getElementById("timenow").innerText = 
     "我们相爱了" + parseInt(st / 1000 / 60 / 60 / 24+1).toString() + "天呐~~";
},500);