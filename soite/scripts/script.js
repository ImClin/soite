function shareResult() {
    const form = document.getElementById('inputForm');
    const formData = new FormData(form);
    let baseUrl = 'https://sekki-minions.com/Jerry?';
    formData.forEach((value, key) => {
      baseUrl += `${key}=${encodeURIComponent(value)}&`;
    });
    const generatedUrl = baseUrl.slice(0, -1);
    const tempInput = document.createElement('input');
    tempInput.value = generatedUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('URL copied to clipboard: ' + generatedUrl);
  }

  function getQueryParameters() {
    const queryParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of queryParams) {
      if (params[key]) {
        if (Array.isArray(params[key])) {params[key].push(value);}
        else {params[key] = [params[key], value];}
      } 
      else {params[key] = value;}
    }
    return params;
  }

  function fillFormFields() {
    const urlParams = getQueryParameters();
    document.querySelector('input[name="data1"]').value = urlParams['data1'] || '';
    document.querySelector('input[name="data2"]').value = urlParams['data2'] || '';
    document.querySelector('input[name="data3"]').value = urlParams['data3'] || '';
    document.querySelector('input[name="data4"]').value = urlParams['data4'] || '';
    document.querySelector('input[name="data5"]').value = urlParams['data5'] || '';
    document.querySelector('input[name="data6"]').value = urlParams['data6'] || '';
    document.querySelector('input[name="data7"]').value = urlParams['data7'] || '';
    document.querySelector('input[name="data8"]').value = urlParams['data8'] || '';
    document.querySelector('input[name="data9"]').value = urlParams['data9'] || '';
  }

  function fillCheckboxes() {
    const urlParams = getQueryParameters();
    const checkboxSets = ['set1', 'set2', 'set3', 'set4', 'set5', 'set6'];
    checkboxSets.forEach(setName => {
      const checkboxes = document.querySelectorAll(`input[name="${setName}"]`);
      checkboxes.forEach(checkbox => {
        if (checkbox.type === 'checkbox') {
          const value = urlParams[setName];
          if (value === checkbox.value || (value && value.includes(checkbox.value))) {checkbox.checked = true;} 
          else {checkbox.checked = false;}
        }
      });
    });
  }

  window.onload = function() {
    fillFormFields();
    fillCheckboxes();
  };