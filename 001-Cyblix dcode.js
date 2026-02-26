const search = document.getElementById('search');
const items = document.querySelectorAll('#item-list li')
search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase();
    items.forEach(item => {
        if(item.textContent.toLowerCase().
    includes(term)) {
        item.classList.remove('hidden');
         } else {
            item.classList.add('hidden')
         }
    })
})
