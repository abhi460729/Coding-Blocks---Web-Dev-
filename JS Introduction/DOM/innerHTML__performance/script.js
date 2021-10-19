window.onload=function(){
    let num=document.getElementById('num')
    let list=document.getElementById('list')
    let print=document.getElementById('print')


    print.onclick=function(){
        let N =parseInt(num.value)
        let listHTML=''
        for(let i=1;i<=N;i++){
            listHTML+='<li>'+i+'</li>'
            //list.innerHTML='<li>'+i+'</li>'
        }
        //Do not invoke innerHTML always as it is a very expensive operation
        list.innerHTML=listHTML
        //If still it has to be done inside a for loop then use the below approach without innerHTML
        /*for(let i=1;i<=N;i++){
            let item=document.createElement('li')
            item.innerText=i;
            list.appendChild(item)
        }*/
        console.log(new Date().getTime()-start)
    }
}