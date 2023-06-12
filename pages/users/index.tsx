// static site + JSON data

import { useRouter } from "next/router";

type UsersProps = {
    userTest: User[]
}

export default function Users({ userTest }: UsersProps) {
    const router = useRouter();
  return (
    <>
      <h1>Users page</h1>
      {userTest?.map((user: User) => (
        <div key={user?.id} onClick={() => router.push(`/users/${user?.id}`)}>
          <h2>
            {user?.id} - {user?.name}
          </h2>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/users");
  const users = await response.json();

  return {
    props: {
      userTest: users,
    },
  };
}
