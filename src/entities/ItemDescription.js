export default class ItemDescription {

    static createWithId(id, category_id, name, description, price, photos) {
        const itemDescription = this.createWithoutId(category_id, name, description, price, photos);
        itemDescription.id = id;
        return itemDescription;
    }

    static createWithoutId(category_id, name, description, price, photos) {
        const itemDescription = new ItemDescription();
        itemDescription.category_id = category_id;
        itemDescription.name = name;
        itemDescription.description = description;
        itemDescription.price = price;
        itemDescription.photos = photos;
        return itemDescription;
    }
}
