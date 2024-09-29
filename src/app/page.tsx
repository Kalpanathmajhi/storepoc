"use client";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { fetchUsers, increment } from "@/store/actions/action";
import Link from "next/link";

const Home: React.FC = () => {
  const { users, loading, value } = useSelector((state: RootState) => state.user);
  

  const dispatch = useDispatch<AppDispatch>();

 
  console.log(loading, value, users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <main>
      <p>Hello</p>
      <button onClick={() => dispatch(increment())}>Click on me</button>
      <p>{value}</p>
      <hr />
      <ul>
        {/* {users?.map((u: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <li key={u.id}>{u.name}</li>
         
        ))} */}
      </ul>
      <Link href="/user">Dashboard</Link>
    </main>
  );
}
export default Home