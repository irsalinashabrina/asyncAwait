let books = [];
class Books {
    constructor (code,title,publisher,publicationYear,author) {
        this.code = code;
        this.title = title;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.author = author;
    }
}

class InventoryService {
    add(book) {
        books.push(book);
    }
    getAll() {
        if (books.length != 0) {
            console.log('semua data buku ada ');
            return new Response(books, null);
        }
        return new Response(null, 'buku tidak ada atau kosong');
    }
    searchByTitle(title) {
        return books.filter((val)=>val.title === title);
    }
    deleteData(id) {
        let index = books.filter((val) => val.code !== id);
        books = [...index];
    }
}

class Response {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
    toString() {
        return `data ${this.data} ${this.error}`;
    }
}

function main() {
    const inventoryService = new InventoryService();
    inventoryService.add(new Books('M001', 'Boba', 'Gramedoa', 2021, 'gajah duduk'));
    inventoryService.add(new Books('M002', 'Bobi', 'Gramedoi', 2021, 'gajah duduk'));
    inventoryService.add(new Books('M003', 'Bobo', 'Gramedou', 2022, 'gajah duduk'));
    let books = inventoryService.getAll();
    console.log(books);
    // const delet = inventoryService.deleteData('M002');
    // console.log(books);
    // books = inventoryService.getAll();
    // console.log(books);
}

main();