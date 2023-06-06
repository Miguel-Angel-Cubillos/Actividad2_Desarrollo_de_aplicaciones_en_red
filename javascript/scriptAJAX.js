function loadContent() {
    const urlInput = document.getElementById('url-input');
    const statusDiv = document.getElementById('status');
    const headersDiv = document.getElementById('headers');
    const responseCodeDiv = document.getElementById('response-code');
    const contentDiv = document.getElementById('content');
  
    const url = urlInput.value;
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        statusDiv.textContent = 'Estado de la petición: completada' ;
        headersDiv.textContent = 'Cabeceras HTTP de la respuesta del servidor: ' + xhr.getAllResponseHeaders();
        responseCodeDiv.textContent = 'Código de estado: ' + xhr.status +' '+ xhr.statusText;
        contentDiv.textContent = 'Contenidos: ' + xhr.responseText;
      } else {
        statusDiv.textContent = 'Estado de la petición: Cargando...';
        headersDiv.textContent = 'Cabeceras HTTP de la respuesta del servidor:';
        responseCodeDiv.textContent = 'Código de estado:';
        contentDiv.textContent = 'Contenidos:';
      }
    };
  
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  window.onload = function () {
    const urlInput = document.getElementById('url-input');
    urlInput.value = window.location.href;
  };
  