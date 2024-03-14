isEnoughCapacity(products, containerSize) {
    let totalPrice = 0;
    for (const product of Object.values(products)) {
        totalPrice += product;
    }
    return totalPrice <= containerSize;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
