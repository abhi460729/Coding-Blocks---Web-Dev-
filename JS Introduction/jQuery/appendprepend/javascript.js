/*window.onload=function(){

}*/
// The above function works only if the window object loads and no line written before this window object works
//console.log($('#list'))

/*$(()=>{
    console.log('inside $ fn')
    console.log($('#list'))
})*/

/*$(()=>{
    $('#prepend').click(()=>{
        console.log($('#item').val('kjkjkjhg'))
    })
})*/
// If the value is 0 inside the function then keep the data or if the value is 1 then edit the data

// When the script is executed the body is not yet loaded.
// The $ function ensures that the script is going to run only if the window is ready.

$(()=>{
    let item=$('#item')
    let list=$('#list')

    $('#prepend').click(()=>{
        let text=item.val()
        list.prepend($(`<li>${text}</li>`))
    })

    $('#append').click(()=>{
        let text=item.val()
        list.append($(`<li>${text}</li>`))
    })
})