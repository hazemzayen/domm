document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".tshirt");
    var totalPriceElement = document.getElementById("total-price");

    let total = 0;

    items.forEach(() => {
        var itemprice = parseFloat(item.querySelector(".item-price").textContent.slice(1));
        var quantityElement = item.querySelector(".quantity");
        var addButton = item.querySelector(".add");
        var removeButton = item.querySelector(".remove");
        var deleteButton = item.querySelector(".delete");
        var likeButton = item.querySelector(".like");

        let quantity = parseInt(quantityElement.textContent);

        addButton.addEventListener("click", () => {
            quantity++;
            quantityElement.textContent = quantity;
            total += itemprice;
            updateTotalPrice();
        });

        removeButton.addEventListener("click", () => {
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                total -= itemprice;
                updateTotalPrice();
            }
        });

        deleteButton.addEventListener("click", () => {
            total -= itemprice * quantity;
            tshirt.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("text-danger");
        });
    });

    function updateTotalPrice() {
        totalPriceElement.textContent = total.toFixed(2);
    }
});
