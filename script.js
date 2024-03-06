//Create accs
document.querySelector('#generate-form').onsubmit = (ev)=>{
    ev.preventDefault();
    createAccs(parseInt(ev.target.children[0].value));
}
function createAccs(count){
    const dataLength = 7;
    const chars = 'abcdefghijklmonpqrstuvwxyz1234567890';
    let data='';
    let data_b = [];

    for(let i=0; i<count*2;i++){
        //Create 1 login
        for(let l=0;l<dataLength;l++){
            data+= chars.charAt(Math.floor(Math.random()*chars.length));
        }
        data_b.push(data);
        data = '';
    }
    createForms(count, data_b);
}
//Create forms
function createForms(count,data){
    //How much form's elements
    for(let i=0; i<count; i++){
        field_group = document.createElement('div');
        field_group.className = 'account-fields';
        
        
        document.querySelector('.accounts').appendChild(field_group);
    }
    document.querySelectorAll('.account-fields').forEach((el,index)=>{
        let par = document.createElement('p');
        par.innerHTML = `Формат вывода логин/пароль`;
        el.appendChild(par);
        for(let i=0; i<2; i++){
            let input = document.createElement('input');
            input.type = 'text';
            input.value = data[i];
            el.appendChild(input);
        }
    });
}
//Print
function PrintAccs(){
    window.print();
}
//Remove child fields
function remCh(){
    document.querySelector('.accounts').innerHTML = '';
}