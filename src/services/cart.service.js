import crud from '../utils/crud-operations';
import userService from "./user.service";

let cartItems = [];

const addItem = (item) => {
    if (!userService.checkIfUserIsAuthenticated()) return;
    const itemInCart = crud.getItemByIdFromCollection(item.id, cartItems);
    if (itemInCart) {
        return;
    }
    cartItems.push(item);
    return item;
}

const getItems = () => {
    return cartItems;
}

const deleteItem = item => {
    return crud.deleteFromCollection(item, cartItems);
}

export default {
    addItem,
    getItems,
    deleteItem
}