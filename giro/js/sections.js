let lists = ['all-list', 'giro-list', 'siegway-list', 'samokats-list']
let list = '';


function section(link){
    list = link.target.id + '-list';

    document.getElementById(list).style.display = 'flex';

    for(let i = 0; i < lists.length; i++){
        if(lists[i] != list){
            document.getElementById(lists[i]).style.display = 'none';
        }
    }
}