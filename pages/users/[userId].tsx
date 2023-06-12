import { sql } from '@vercel/postgres'
export default function UserDetail({ user }: any) {
    return <>
    <h2>User detail page</h2>
    <h3>{user?.firstname} -  {user?.lastname}</h3>
    </>
}

export async function getServerSideProps(ctx: any) {
    const { params } = ctx;
    const userId = params?.userId;
    const { rows: user } = await sql`SELECT * from Persons where Personid=${userId}`
    return {
        props: {
            user: user[0]
        }
    }
}