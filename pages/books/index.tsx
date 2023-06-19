import { fetchAddBook, fetchBookList, fetchDeleteBook } from 'lib/api/books';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

export default function Books() {

    const router = useRouter()

    const [bookName, setBookName] = useState('')

    const handleAddBook = async () => {
        await fetchAddBook(bookName);
        await fetchBookList();
        setBookName('')
    }

    const handleDeleteBook = async (bookId: string) => {
        await fetchDeleteBook(bookId);
        await fetchBookList();
    }

    const { data: books, isLoading } = useSWR('getBooks', fetchBookList)

    if (isLoading) return <div>Loading...</div>

    return (
        <>
            <h2>Books list page</h2>
            <input placeholder='Please add book name' value={bookName} onChange={e => setBookName(e.target.value)} />
            <button onClick={() => handleAddBook()}>Add book</button>
            {books?.data?.map((book: Book) => (
                <div key={book?.id}>
                    <p onClick={() => router.push(`/books/${book?.id}`)}>{book.name}</p>
                    <button onClick={() => handleDeleteBook(`${book?.id}`)}>Delete book</button>
                    <hr />
                </div>
            ))}
        </>
    )
}