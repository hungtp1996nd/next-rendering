// static site + JSON data + dynamic route

import { useRouter } from "next/router";

type UserDetailProps = {
  userDetail: User;
};

export default function UserDetail({ userDetail }: UserDetailProps) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>  
  return (
    <div>
      <h2>User detail page</h2>
      <h1>
        {userDetail?.id} - {userDetail?.name} - {userDetail?.email}
      </h1>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          userId: "1",
        },
      },
      {
        params: {
          userId: "2",
        },
      },
      {
        params: {
          userId: "3",
        },
      },
      {
        params: {
          userId: "4",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/users/${params?.userId}`);
  const userDetail = await res.json();
  return {
    props: {
      userDetail,
    },
  };
}
