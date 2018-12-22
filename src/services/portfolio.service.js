import { getPortfolioItems } from "../mocks/portfolio-items.mock";
import crud from '../utils/crud-operations';

let items = getPortfolioItems();;
let newId = 20;

const addNewItem = (newItem) => {
    if (!items) {
        items = [];
    }
    newItem.id = newId++;
    items.push(newItem);
}

const getItems = () => {
    if (!items) {
        items = getPortfolioItems();
    }

    return items;
}

const getItemById = id => {
    return crud.getItemByIdFromCollection(+id, items);
}

const editItem = item => {
    const selectedPosition = crud.getItemIndex(item, items);
    if (selectedPosition > -1) {
        items[selectedPosition] = item;
    }
}

const deleteItem = item => {
    return crud.deleteFromCollection(item, items);
}

export default {
    addNewItem,
    getItems,
    getItemById,
    editItem,
    deleteItem,
}