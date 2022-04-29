function DarkLight() {
    c++;
    var element = document.body;
    element.classList.toggle("LightMode");
    const txt = document.querySelector('button');
    if (c%2==0){
      txt.innerHTML='Light';
    }else{
      txt.innerHTML='Dark';
    }
    
  }
  var c = 0;