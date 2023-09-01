const myInput = document.getElementById('myInput');
console.log(myInput);

myInput.addEventListener('keyup', ()=>{
    let filter = myInput.value.toUpperCase();
    
     let ul = document.getElementById('myUrl');

     let li = ul.getElementsByTagName('li');

     for(var i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        let textValue = a.textContent || a.innerHTML;

        if(textValue.toUpperCase().indexOf(filter) > -1){
         li[i].style.display = '';
        }else{
         li[i].style.display = 'none';
        }
        
     }
})