import { sql } from "@vercel/postgres"
import Footer from "components/layouts/Footer";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Users({ users }: any) {
    const router = useRouter();
    return <>
        <h2>Users page</h2>
        {users?.map((user: any) => <li key={user?.personid} onClick={() => router.push(`/users/${user?.personid}`)}>
            {user?.firstname} - {user?.lastname} - {user?.city}
        </li>)}
    </>
}

export async function getServerSideProps() {
    const data = await sql`SELECT * from Persons`;
    const users = data?.rows
    return {
        props: {
            users: users
        }
    }
}

Users.getLayout = function(page: ReactNode) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
