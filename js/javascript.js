window.addEventListener('load', function() {
    const gato = document.getElementById('gato');
    const like = document.getElementById('like');


    gato.addEventListener('dblclick', function() { 
     /*   like.style.opacity = "1";*/
        setTimeout(() => {
            
            setTimeout(()=> { 
                like.classList.add("hidden");
                
            }, 2000);
            like.classList.remove('hidden');
        }, 200);

       

        const cont = document.getElementById('cont');

        let curtidas = parseInt(cont.value); 
        curtidas++;
        cont.value = curtidas;

    });

});
