function fetchCatalog(){
    $.ajax({
        type: 'GET',
        url:'/catalog/allProperties',
        success: res=>{
            console.log(res);

        },
        error: details =>{
            console.log("Error",details)
        }
    });
}
function init(){
    console.log("Catalog page!");
    fetchCatalog();
}
window.onload = init;