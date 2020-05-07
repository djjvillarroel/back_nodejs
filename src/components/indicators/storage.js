const model = require("./model");

async function addItem(item) {
  try {
    const myItem = new model(item);
    const itemSaved = await myItem.save();
    return itemSaved;
  } catch (error) {
    throw error;
  }
}

async function getItems(filter) {
  try {
    const items = await model.find(filter);
    return items;
  } catch (error) {
    throw error;
  }
}

async function deleteItem(itemDelete) {
  try {
    const itemDeleted = await model.deleteOne({
      _id: itemDelete.id,
    });
    return itemDeleted;
  } catch (error) {
    throw error;
  }
}

async function updateItemById(itemUpdate) {
  try {
    const itemFound = await model.findOne({
      _id: itemUpdate.id,
    });
    itemFound.item = itemUpdate.item;
    itemFound.date = itemUpdate.date;
    const newItem = await itemFound.save();
    return newItem;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  add: addItem,
  getList: getItems,
  update: updateItemById,
  delete: deleteItem,
};
