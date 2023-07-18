import type { ActionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { createUser, getUser } from "../lib/db.server";
import { Form, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const user = await getUser();
  return json({ user });
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  // データベースに新しいユーザーを登録する
  await createUser(formData.get("name") as string);

  // loaderからは得られないデータがあれば、ここでレスポンスに含める
  return null;
};

export default function SubmitSample() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Submit Sample</h1>
      <p>こんにちは、{data.user.name}さん!</p>
      <Form method="post">
        <label htmlFor="name">名前</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}