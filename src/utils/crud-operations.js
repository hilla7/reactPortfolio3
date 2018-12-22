const getItemByIdFromCollection = (id, collection) => {
    if (!collection || !collection.length) {
        return;
    }

    return collection.find(item => item.id === id);
}


const deleteFromCollection = (item, collection) => {
    const selectedPosition = getItemIndex(item, collection);
    if (selectedPosition > -1) {
        collection.splice(selectedPosition , 1);
    }
    return collection;
}

const getItemIndex = (item, collection) => {
    return collection.findIndex((foundItem) => foundItem.id === item.id);
}

export default {
    getItemByIdFromCollection,
    deleteFromCollection,
    getItemIndex,
}
