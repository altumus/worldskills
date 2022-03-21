let lists = ['wok', 'sushi', 'rolls', 'all'];

let current = '';

function products(link){
    if(current != ''){
        document.getElementById('only-' + current).style.display = 'none'
    }
    current = link.target.id;
    console.log(current);
    for(let i = 0; i < lists.length - 1; i++){
        if(current == lists[i]){
            document.getElementById('only-' + current).style.display = 'flex';
        }else{
            document.getElementById('only-' + lists[i]).style.display = 'none';
        }
    }
}