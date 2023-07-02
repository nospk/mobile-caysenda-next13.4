"use client";

import { useGetUsersQuery } from "@/redux/test/userApi";
import { decrement, increment, reset } from "@/redux/test/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <div className="m-auto">
      <div className="mb-[4rem] text-center">
        <h4 className="mb-[16px]">{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((user: any) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                height={180}
                width={180}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
