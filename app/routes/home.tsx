import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries Explorer" },
    {
      name: "Check out country data!",
      content: "Welcome to Countries Explorer!",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <div>
        <section>
          <h1>
            <span>Explore Countries with</span>
            <span>Real-Time Data</span>
          </h1>
          <p>
            Discover details about every country around the world - from
            capitals to regions!
          </p>
          <div>
            <Link to={"/countries"}>
              Explore Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to={"/about"}>Learn More</Link>
          </div>
        </section>
        <section>
          <img
            src="https://media.worldnomads.com/Explore/europe/5-things-italy.jpg"
            alt=""
          />
        </section>
      </div>
    </main>
  );
}
