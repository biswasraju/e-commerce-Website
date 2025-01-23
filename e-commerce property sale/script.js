const scriptURL = 'https://script.google.com/macros/s/AKfycbxuqXE0WRMhOEUTOJEVN75-bk7CG9rtMMAhm8WhIzoNiFrWzc5EC1S_tv9s2LJETOnTxg/exec'
        const form = document.forms['submit-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })