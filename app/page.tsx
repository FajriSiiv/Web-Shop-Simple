// import { USERS } from "./libs/constants";

import Head from "next/head";
import Link from "next/link";
import PopularItems from "./components/popularItems";
import SaleUp from "./components/saleUp";

export async function GetTodos() {
  const response = await fetch("https://dummyjson.com/todos");
  const data = response.json();

  return data;
}

export default async function Home() {
  const { todos } = await GetTodos();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="px-8 w-full">
        <PopularItems />
        <SaleUp />
      </main>
    </>
  );
}
