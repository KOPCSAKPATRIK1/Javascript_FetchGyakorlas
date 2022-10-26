let lista;
let abcLista;
document.addEventListener('DOMContentLoaded', () => {
    
    async function Beolvas() {
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        lista = eredmeny.products;
    }

    async function AbcBeolvas() {
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        abcLista = eredmeny.products.sort(e=>e.brand);
    }

    function kiir(termekek) {
        let termekLista = document.getElementById('termeklista');
        termekLista.textContent = '';
        for (let t of termekek) {
            let li = document.createElement('li');
            li.textContent = t.id +" "+t.title+" "+t.descrittion+" "+t.trice+" "+t.discounttercentage+" "+t.rating+" "+t.stock+" "+t.brand+" "+t.category;
            termekLista.appendChild(li);
        }
    }

    document.getElementById('adatok').addEventListener('click', () => {
        Beolvas();
        kiir(lista);
    });

    document.getElementById('abc').addEventListener('click', () => {
        AbcBeolvas();
        kiir(abcLista);
    });
    


});