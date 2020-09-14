function Property(title, price, image, bedrooms, baths, location, sqrFeet, desc){
    this.title = title;
    this.price = parseFloat(price);
    this.imageUrl = image;
    this.bedRooms = parseInt(bedrooms);
    this.baths = parseInt(baths);
    this.location = location;
    this.SqrFeet = parseInt(sqrFeet);
    this.Description = desc;
}


function register() {
    console.log("Getting from data");
    var title = $("#title").val();
    var price = $("#price").val();
    var image = $("#image").val();
    var bedRooms = $("#bedrooms").val();
    var baths = $("#baths").val();
    var location = $("#location").val();
    var sqrFeet = $("#SqrFeet").val();
    var desc = $("#description").val();

    var property = new Property(title, price, image, bedrooms, baths, location, sqrFeet, desc);

    console.log(property);
    $.ajax({
        url: "/catalog/registerProperty",
        type: "Post",
        data: JSON.stringify(property),
        contentType: "application/json",
        success: function(res){
            console.log("Server Responded", res);
        },

        error: function(details){
            console.log("Error", details);
        }
    });
 
}
 

function init() {
    console.log("Register page");

    // events
    $("#btnSave").click(register);

}



window.onload = init;