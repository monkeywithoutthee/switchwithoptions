//.--. . .- -.-. .


var oPage = {
    switchall:false

};
document.addEventListener('click',function (event) {

  if (event.target.className.includes('switchall')){
    var evtar = event.target;
    //remove the other
    if (evtar.className.includes('switchall_in')){
      evtar = event.target.parentElement;
    };
    if (oPage.switchall){
      alert('boooom');
      return false;
    }else{
      const otherel =  evtar.parentElement.childNodes[3];
      const messbox = evtar.parentElement.parentElement.childNodes[1];
      otherel.classList.remove('clickedclass');
      messbox.innerHTML = 'view all';
      oPage.switchall = true;
      evtar.classList.add('clickedclass');
      //  console.log(evtar,otherel,oPage.switchall,'<<in view all:::',messbox);
      return;
    }
  };
  if (event.target.className.includes('switchmess')){
    var evtar = event.target;
    //remove the other
    if (evtar.className.includes('switchmess_in')){
      evtar = event.target.parentElement;
    };
    const otherel = evtar.parentElement.childNodes[1];
    const messbox = evtar.parentElement.parentElement.childNodes[1];
    otherel.classList.remove('clickedclass');
    messbox.innerHTML = 'with messages';
    oPage.switchall = false;
    evtar.classList.add('clickedclass');
    //  console.log(evtar,otherel,oPage.switchall,'<<in view mess:::',messbox);
    return;
  };
  return;
});


const setinitial = (()=>{

  const em = document.querySelector('.switchtop');
    if (!oPage.switchall){
        const el = document.querySelector('.switchmess');
        if (el){el.classList.add('clickedclass');em.innerHTML = 'with messages';}
    }else{
      const el = document.querySelector('.switchall');
      if (el){el.classList.add('clickedclass');em.innerHTML = 'view all';}
    };
});


  window.load = setinitial();
