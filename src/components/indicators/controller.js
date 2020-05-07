const storage = require("./storage");

async function addItems(body) {
  try {
    if (!bodyIsValidate(body)) {
      return "Body invalid";
    } else {
      let item = {
        ...body,
        date: new Date(),
      };
      let itemSaved = await storage.add(item);
      console.log("[./controller/addItems]=> saved: ", itemSaved);
      return itemSaved;
    }
  } catch (error) {
    throw error;
  }
}

async function getAllItems(body) {
  try {
    let listItem = await storage.getList(body);
    console.log("[./controller/getAllItems]=> list.size: ", listItem.length);
    return listItem;
  } catch (error) {
    throw error;
  }
}

async function updateItem(body) {
  try {
    if (!bodyIsValidate(body)) {
      return "Body invalid";
    } else {
      let item = {
        ...body,
        date: new Date(),
      };
      let itemUpdated = await storage.update(item);
      console.log("[./controller/updateItem]=> updated: ", itemUpdated);
      return itemUpdated;
    }
  } catch (error) {
    throw error;
  }
}

async function deleteItem(body) {
  try {
    let itemDelete = await storage.delete(body);
    console.log(
      "[./controller/deleteItem]=> deleteItem.size: ",
      itemDelete.deletedCount
    );
    return true;
  } catch (error) {
    throw error;
  }
}

// validate body from request
function bodyIsValidate(body) {
  let { indicator, item, user } = body;
  if (indicator === undefined) return false;
  if (item === undefined) return false;
  if (user === undefined) return false;
  return true;
}

module.exports = { addItems, getAllItems, updateItem, deleteItem };
