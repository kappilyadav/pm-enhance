
export const getDiscoutedPricePercentage = (originalPrice, discountedPrice) => {

    const discount = originalPrice - discountedPrice;

    const discoutPercentage = (discount / originalPrice) * 100;

    return discoutPercentage.toFixed();
}