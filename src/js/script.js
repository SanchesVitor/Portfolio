function escrevendoLetra() {
  function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
  
  const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);
}
escrevendoLetra();

function menuMobol() {

  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .navegacao-primaria');
  
  ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  });
}
menuMobol();

function sobreMim() {

  const divExperiencia = document.querySelectorAll('.experience-content div');
  const liExperiencia = document.querySelectorAll('.experience-content ul li');
  const divEducation = document.querySelectorAll('.education-content div');
  const liEducation = document.querySelectorAll('.education-content ul li');

  divExperiencia[0].classList.add('ativo');
  liExperiencia[0].classList.add('ativo');
  divEducation[0].classList.add('ativo');
  liEducation[0].classList.add('ativo');

  function slideShow(index) {
    divExperiencia.forEach((div) => {
      div.classList.remove('ativo');
    });

    liExperiencia.forEach((botao) => {
      botao.classList.remove('ativo');
    });

    divExperiencia[index].classList.add('ativo');
    liExperiencia[index].classList.add('ativo');
  }

  function slideShow2(index) {
    divEducation.forEach((div) => {
      div.classList.remove('ativo');
    });

    liEducation.forEach((botao) => {
      botao.classList.remove('ativo');
    });

    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
  }

  liExperiencia.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow(index);
    });
  });

  liEducation.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow2(index);
    });
  });
}

sobreMim();

const listaALL = document.querySelectorAll('.projects-armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects-models ul li');
const buttonAll = document.querySelectorAll('.projects-models .all');

function removeClick(index) {
  buttonGeral.forEach((item) => {
    item.classList.remove('ativo');
  });
  buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((event, index) => {
  event.addEventListener('click', () => {
    removeClick(index);
  });
});

function showLista(lista, button = 'all') {
  lista.forEach((item) => {
    item.classList.remove('ativo');
  });
  if (button == 'design') {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
  }

  if (button == 'graphic') {
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
  }

  if (button == 'website') {
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }

  if (button == 'all') {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }
}

buttonGeral.forEach((item) => {
  item.addEventListener('click', (e) => {
    let currentButton = e.target;
    if(currentButton.classList.contains('all')) {
      showLista(listaALL);
    }

    if(currentButton.classList.contains('design')) {
      showLista(listaALL, 'design');
    }

    if(currentButton.classList.contains('graphic')) {
      showLista(listaALL, 'graphic');
    }

    if(currentButton.classList.contains('website')) {
      showLista(listaALL, 'website');
    }

    if(currentButton.classList.contains('all')) {
      showLista(listaALL, 'all');
    }

  });
});