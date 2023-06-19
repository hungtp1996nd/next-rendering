import request from "../request"

// get book list fetcher function
export const fetchBookList = async () => {
    return request.get('/books')
}

export const fetchAddBook = async (newBook: string) => {
    return request.post('/books', {
        newBook,
    })
}

export const fetchBookDetail = async (bookId: string) => {
    return request.get(`/books/${bookId}`)
}

export const fetchDeleteBook = async (bookId: string) => {
    return request.delete(`/books/${bookId}`)
}