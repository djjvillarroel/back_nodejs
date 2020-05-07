async function getAllItems(body) {
  try {
    //let listItem = await storage.getList(body);
    console.log("[./controller/getAllItems]=> list.size: ", listItem.length);
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllItems };
