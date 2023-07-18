import { json } from "@remix-run/cloudflare";
import { createUser, getUser } from "../lib/db.server";
import { useLoaderData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/cloudflare";

export const loader = async () => {
  const user = await getUser();
  return json({ user });
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  // データベースに新しいユーザーを登録する
  const user = await createUser(formData.get("name") as string);

  return json({ user });
};

export default function NineteenNinetyEight() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Welcome to 1998</h1>
      {data.user && <p>こんにちは、{data.user.name}さん!</p>}
      <form method="post">
        <label htmlFor="name">名前</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}