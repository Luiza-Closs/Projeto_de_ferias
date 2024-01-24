const aplicacoes = [
    {
      titulo: "Conversor Binário",
      data: "Jan 23",
      descricao: "Essa aplicação recebe um número em sua forma decimal e o converte para sua forma binária",
      caminho: './conversor_binario/index.html'
    },
    {
        titulo: "Conversor de Temperatura",
        data: "Jan 23",
        descricao: "Conversor de uma mesma temperatura para sua versão celcius, fahrenheit ou kelvin",
        caminho: './conversor_temperatura/index.html'
    },
    {
        titulo: "Batalha naval",
        data: "Jan 24",
        descricao: "Jogo de guerra entre barcos",
        caminho: './batalha_naval/index.html'
    },
  ];
  
  const tela = document.getElementById('main');
  
  aplicacoes.forEach(aplicacao => {
    // Crie elementos HTML para cada aplicação
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col-md-4';
  
    const cardContent = `
      <div class="cardzin row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">${aplicacao.titulo}</h3>
          <div class="mb-1 text-body-secondary">${aplicacao.data}</div>
          <p class="card-text mb-auto">${aplicacao.descricao}</p>
          <a href="${aplicacao.caminho}" class="icon-link gap-1 icon-link-hover stretched-link">
            Ir para aplicação <i class="bi bi-arrow-right-circle"></i>
          </a>
        </div>
      </div>
    `;
  
    cardDiv.innerHTML = cardContent;
    tela.appendChild(cardDiv);
  });
  