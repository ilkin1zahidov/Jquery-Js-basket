let basketBtns = document.querySelectorAll("#products .card a");

let products = [];

if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"))
}

basketBtns.forEach(basketBtn => {
    basketBtn.addEventListener("click", function(e) {
        e.preventDefault();

        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.previousElementSibling.innerText;
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

   
        let existProduct = products.find(m => m.id == productId);


        if(existProduct != undefined) {
            existProduct.count += 1;
        }else{

            products.push({
                id:productId,
                name: productName,
                image: productImage,
                desc: productDesc,
                count: 1
            })
        }

        
        localStorage.setItem("products", JSON.stringify(products));
        document.querySelector("sup").innerText = getProductsCount(products);
    })
});


document.querySelector("sup").innerText = getProductsCount(products);

function getProductsCount(items){
    resultCount = 0;
    for (const item of items) {
        resultCount += item.count
    }

    return resultCount;
}