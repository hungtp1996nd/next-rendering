import { sql } from "@vercel/postgres"
import { useRouter } from "next/router";

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

