import { fetchBookDetail } from "lib/api/books";
import request from "lib/api/request";

export default function BookDetail({ book }: any) {

    return (
        <>
            <h2>Book detail page</h2>
            <div>{book?.name}</div>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps(ctx: any) {
    const bookId = ctx.params?.bookId
    const res = await request.get(`/books/${bookId}`)
    return {
        props: {
            book: res?.data
        }
    }
}