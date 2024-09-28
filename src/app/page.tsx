"use client";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers,increment } from "./slices/userSlices";
import type { RootState, AppDispatch } from "./store/store";


export default function Home() {
  const { users, loading, value } = useSelector((state: RootState) => state.user);
  

  const dispatch = useDispatch<AppDispatch>();

 
  console.log(loading, value, users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main>
      <p>Hello</p>
      <button onClick={() => dispatch(increment())}>Click on me</button>
      <p>{value}</p>
      <hr />
      <ul>
        {users?.map((u: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </main>
  );
}