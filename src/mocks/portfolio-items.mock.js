import { getRandomNumber } from "../utils/numbers-manipulator";

export const getPortfolioItems = () => {
    const portfolioItems = [];
    Array.from({length:10},(v,k)=>k+1).forEach(value=>{
        portfolioItems.push ({
            id: value,
            title: `Item ${value}`, 
            price: getRandomNumber(50,150) , 
            description: `Some Description of item #${value} :)`, 
            imageUrl: `https://www.gstatic.com/webp/gallery/${value % 5 + 1}.jpg`
        })
    })
    return portfolioItems;
}
