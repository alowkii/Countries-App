import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries Explorer" },
    { name: "Check out country data!", content: "Welcome to Countries Explorer!" },
  ];
}

export default function Home() {
  return (
  <main>
    <div>
      <div>
          <h1>Countries Explorer</h1>
          <p>Welcome to Countries Explorer!</p>
          <p>Check out country data!</p>
          <div>
            <a href="/countries">Go to countries</a>
          </div>
      </div>
    </div>
  </main>
  );
}
