import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Networking Sample" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix Networking Sample</h1>
      <ul>
        <li>
          <Link prefetch="intent" to="/1998">1998</Link>（with native <code>&lt;form&gt;</code>）
        </li>
        <li>
          <Link prefetch="render" to="/2023">2023</Link>（with remix <code>&lt;Form&gt;</code>）
        </li>
      </ul>
    </div>
  );
}
