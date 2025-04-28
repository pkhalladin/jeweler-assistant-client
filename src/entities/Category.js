export default class Category {
    static createWithId(id, name, description) {
        const category = this.createWithoutId(name, description);
        category.id = id;
        return category;
    }

    static createWithoutId(name, description) {
        const category = new Category();
        category.name = name;
        category.description = description;
        return category;
    }
}
