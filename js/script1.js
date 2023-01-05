function tabOpen(e , tabName) {
  let tabContent = document.getElementsByClassName('tabcont');
  for (i=0; i<tabContent.length; i++){
    tabContent[i].style.display = 'none';
  }

  document.getElementById(tabName).style.display = "block";

  let tabL = document.getElementsByClassName('tablink');
  for (i=0; i<tabL.length; i++){
    tabL[i].className = tabL[i].className.replace(' active','');
  }

  e.currentTarget.className += ' active'
}