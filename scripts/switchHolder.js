//.--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. .
//  .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. .
//javascript/html/css switch with options to do something else if clicked again. Applying changes via event;;;
//  .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. .
//.--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. . / .--. . .- -.-. .

  var oPage = {
      switchall:false
  };

  function innit(){
    //console.log(document,'<<doc window::',window);
    setinitial();
    return true;
  };

document.addEventListener('click',function (event) {
  var evtar = event.target;
  if (evtar.className.includes('switchall')){
    if (evtar.className.includes('switchall_in')){
      evtar = event.target.parentElement;
    };
    if (oPage.switchall){
      alert('boooom');
      return false;
    }else{
      const otherel =  evtar.parentElement.childNodes[3];
      const messbox = evtar.parentElement.parentElement.childNodes[1];
      otherel.classList.remove('clickedclass');//remove the other
      messbox.innerHTML = 'view all';
      oPage.switchall = true;
      evtar.classList.add('clickedclass');
      //  console.log(evtar,otherel,oPage.switchall,'<<in view all:::',messbox);
      return;
    }
  };
  if (evtar.className.includes('switchmess')){
    if (evtar.className.includes('switchmess_in')){
      evtar = event.target.parentElement;
    };
    if (!oPage.switchall){
        alert('do something else!');
        return false;
      }else{
      const otherel = evtar.parentElement.childNodes[1];
      const messbox = evtar.parentElement.parentElement.childNodes[1];
      otherel.classList.remove('clickedclass');//remove the other
      messbox.innerHTML = 'with messages';
      oPage.switchall = false;
      evtar.classList.add('clickedclass');
      //  console.log(evtar,otherel,oPage.switchall,'<<in view mess:::',messbox);
      return;
    };
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

  window.load = innit();
