export default class Item {
    
    static createWithId(id, itemDescriptionId, price) {
        const item = this.createWithoutId(itemDescriptionId, price);
        item.id = id;
        return item;
    }

    static createWithoutId(itemDescriptionId, price, notice) {
        const item = new Item();
        item.itemDescriptionId = itemDescriptionId;
        item.price = price;
        item.notice = notice;
        return item;
    }
}
