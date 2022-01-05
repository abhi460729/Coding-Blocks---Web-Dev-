$(function(){

    let productName=$("#productName")

    let productManufaturer=$("#productManufacturer")

    let productPrice=$("#productPrice")

    $("#btnProductAdd").click(function(){
        addProduct(productName.val(),productManufaturer.val(),productPrice.val(),
         function(addedProduct){
             window.alert(addedProduct.name + " added to database!  ")
        })
    })
})