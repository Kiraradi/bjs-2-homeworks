// task 1 

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(variable) {
        if (variable < 0) {
            this._state = 0;
        } else if (variable > 100) {
            this._state = 100;
        } else {
            this._state = variable;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state, "magazine");        
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type = "book") {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state, "novel");
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state, "fantastic");
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state, "detective");
    }
}

// task 2 

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }          
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex >= 0) {
            let deletedBook = this.books[bookIndex];
            this.books.splice(bookIndex, 1);
            return deletedBook;
        }

        /*for (let book of this.books) {
            if (book.name === bookName) {
                let diveBook = book;
                let indexDiveBooks = this.books.indexOf(book);
                this.books.splice(indexDiveBooks, 1);
                return diveBook;
            }   
        }*/
        
        return null;
    }

}

// task 3 
class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = [];
    }

    addMark(mark, subjectName) {
        let subject = this.subjects.find(subject => subject.name === subjectName);
        if (subject) {
            subject.addMark(mark);
        } else {
            let newSubject = new Subject(subjectName);
            newSubject.addMark(mark);
            this.subjects.push(newSubject);
        }
    }
    getAverageBySubject(subjectName) {
        let subject = this.subjects.find(subject => subject.name === subjectName);
        if (subject) {
           return subject.getAverage();
        } 

        return null;
    }

    getAverage() {
        let averages = this.subjects.map(subject => subject.getAverage());
        return averages.reduce((sum, currentAverage) => sum + currentAverage, 0) / averages.length;
    }
}

class Subject {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(mark) {
        if (mark >= 1 && mark <= 5) {
            this.marks.push(mark); 
        } else {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }
    }

    getAverage() {
        return this.marks.reduce((sum, currentMark) => sum + currentMark, 0) / this.marks.length;
    }
}