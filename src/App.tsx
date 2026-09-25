import { useEffect, useState, type ReactNode } from "react";

type Dish = {
  name: string;
  description: string;
  price: string;
  badge: string;
  badgeTone: "leaf" | "chop";
};

const steps = [
  {
    title: "Choose a kitchen",
    description: "Find a local kitchen cooking something you love.",
  },
  {
    title: "Pick your meal",
    description: "Explore the menu and choose what sounds good.",
  },
  {
    title: "Enjoy your food",
    description: "Your meal is prepared fresh and brought to you.",
  },
];

const dishes: Dish[] = [
  {
    name: "Benachin",
    description: "Red rice with vegetables",
    price: "D350",
    badge: "Vegetarian",
    badgeTone: "leaf",
  },
  {
    name: "Domoda",
    description: "Peanut stew over white rice",
    price: "D400",
    badge: "Local favourite",
    badgeTone: "chop",
  },
  {
    name: "Chicken yassa",
    description: "Grilled chicken in onion sauce",
    price: "D450",
    badge: "Popular",
    badgeTone: "chop",
  },
  {
    name: "Afra",
    description: "Grilled meat with onions and mustard",
    price: "D500",
    badge: "Spicy",
    badgeTone: "chop",
  },
  {
    name: "Superkanja",
    description: "Okra stew with palm oil",
    price: "D350",
    badge: "Vegetarian",
    badgeTone: "leaf",
  },
  {
    name: "Tapalapa bread",
    description: "Fresh bread with a fried egg",
    price: "D200",
    badge: "Made fresh",
    badgeTone: "chop",
  },
];

const areas = [
  { name: "Banjul", time: "25-35 min" },
  { name: "Bakau", time: "20-30 min" },
  { name: "Fajara", time: "20-30 min" },
  { name: "Kololi", time: "25-35 min" },
  { name: "Kotu", time: "25-35 min" },
  { name: "Serrekunda", time: "30-40 min" },
];

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="group inline-flex items-center gap-2 font-semibold text-chop-dark transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
      href={href}>
      {children}
      <span
        className="inline-block transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true">
        →
      </span>
    </a>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  return (
    <>
      <header className="bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:flex-nowrap">
          <a
            className="inline-flex items-center gap-3 text-lg font-semibold text-ink"
            href="#top"
            aria-label="Chop Chop home">
            <img className="h-10 w-10" src="/assets/logo.svg" alt="" />
            <span>chop chop</span>
          </a>
          <button
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-line text-ink transition duration-200 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop sm:hidden"
            onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
            title={isMenuOpen ? "Close menu" : "Open menu"}
            type="button">
            <span
              className={`h-0.5 w-5 bg-current transition duration-200 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              aria-hidden="true"
            />
            <span
              className={`h-0.5 w-5 bg-current transition duration-200 ${isMenuOpen ? "opacity-0" : ""}`}
              aria-hidden="true"
            />
            <span
              className={`h-0.5 w-5 bg-current transition duration-200 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              aria-hidden="true"
            />
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col items-stretch gap-2 text-sm sm:flex sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2`}>
            <a
              className="border-b-2 border-transparent py-2 text-ink-3 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop sm:py-1"
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}>
              How it works
            </a>
            <a
              className="border-b-2 border-transparent py-2 text-ink-3 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop sm:py-1"
              href="#popular"
              onClick={() => setIsMenuOpen(false)}>
              Popular dishes
            </a>
            <a
              className="border-b-2 border-transparent py-2 text-ink-3 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop sm:py-1"
              href="#areas"
              onClick={() => setIsMenuOpen(false)}>
              Delivery areas
            </a>
            <a
              className="rounded-lg bg-chop px-4 py-2 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
              href="#popular"
              onClick={() => setIsMenuOpen(false)}>
              Order now
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-chop-dark">
                GOOD FOOD, RIGHT AROUND THE CORNER
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                Local kitchens. Food worth staying in for.
              </h1>
              <p className="mt-5 max-w-prose text-ink-2">
                Meet the independent kitchens of the Kombos. Find something
                delicious, order in a few taps, and enjoy it at home.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  className="rounded-lg bg-chop px-5 py-2.5 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
                  href="#popular">
                  Explore restaurants
                </a>
                <ArrowLink href="#how-it-works">How it works</ArrowLink>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <img
                className="mx-auto w-56 lg:w-72"
                src="/assets/phone.svg"
                alt="Chop Chop app showing local kitchens and meals"
              />
              <div className="absolute bottom-8 left-0 rounded-lg bg-surface px-5 py-4 lg:left-8">
                <p className="text-2xl font-semibold text-ink">30 min</p>
                <p className="text-sm text-ink-3">average delivery</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-6 bg-ink py-20 text-on-dark">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-chop-light">
                GOOD FOOD, THREE EASY STEPS
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-dark">
                From local kitchen to your door
              </h2>
              <p className="mx-auto mt-3 max-w-prose text-on-dark-soft">
                A good meal is never far away.
              </p>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {steps.map((step, index) => (
                <article className="text-center" key={step.title}>
                  <img
                    className="mx-auto h-20 w-20"
                    src={`/assets/step-${index + 1}.svg`}
                    alt=""
                  />
                  <p className="mt-6 text-sm font-semibold text-chop-light">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-on-dark">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-prose text-on-dark-soft">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <span
                className="inline-flex items-center gap-2 rounded-lg border border-dark-line px-5 py-2.5 font-semibold text-on-dark"
                aria-label="Android app download link coming soon"
                title="Download link coming soon">
                Get the Android app <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </section>

        <section id="popular" className="scroll-mt-6 bg-cream py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-chop-dark">
                A TASTE OF THE KOMBO
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                Popular on Chop Chop
              </h2>
              <p className="mx-auto mt-3 max-w-prose text-ink-2">
                Good things are cooking in your neighbourhood.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dishes.map((dish, index) => (
                <article
                  className="overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-1"
                  key={dish.name}>
                  <img
                    className="aspect-3/2 w-full object-cover"
                    src={`/assets/dish-${index + 1}.svg`}
                    alt=""
                  />
                  <div className="p-5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${dish.badgeTone === "leaf" ? "bg-leaf-soft text-leaf" : "bg-chop-soft text-chop-dark"}`}>
                      {dish.badge}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-ink">
                      {dish.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink-3">
                      {dish.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-line pt-5">
                      <p className="text-lg font-semibold text-ink">
                        {dish.price}
                      </p>
                      <span
                        className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink-2"
                        aria-hidden="true">
                        Add +
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="scroll-mt-6 bg-surface py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-chop-dark">
                DELIVERING AROUND THE KOMBO
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                Find us in your neighbourhood
              </h2>
              <p className="mx-auto mt-3 max-w-prose text-ink-2">
                Local favourites, delivered across the area.
              </p>
            </div>
            <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <li
                  className="flex items-center justify-between gap-4 rounded-lg border border-line px-5 py-4"
                  key={area.name}>
                  <span className="font-semibold text-ink">{area.name}</span>
                  <span className="text-sm text-ink-3">{area.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-12 text-on-dark">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-10 sm:flex-row">
            <div>
              <a
                className="inline-flex items-center gap-3 text-lg font-semibold text-on-dark"
                href="#top"
                aria-label="Chop Chop home">
                <img className="h-10 w-10" src="/assets/logo.svg" alt="" />
                <span>chop chop</span>
              </a>
              <p className="mt-3 text-sm text-on-dark-soft">
                Good food, from around the corner.
              </p>
            </div>
            <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              <div className="flex flex-col gap-2 text-sm">
                <p className="mb-1 font-semibold text-on-dark">Explore</p>
                <a
                  className="text-on-dark-soft transition-colors duration-200 hover:text-chop-light"
                  href="#how-it-works">
                  How it works
                </a>
                <a
                  className="text-on-dark-soft transition-colors duration-200 hover:text-chop-light"
                  href="#popular">
                  Popular dishes
                </a>
                <a
                  className="text-on-dark-soft transition-colors duration-200 hover:text-chop-light"
                  href="#areas">
                  Delivery areas
                </a>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <p className="mb-1 font-semibold text-on-dark">About</p>
                <span className="text-on-dark-soft">By Omar Jasseh</span>
                <span className="text-on-dark-soft">Course Instructor</span>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-dark-line pt-6 text-sm text-on-dark-soft">
            <p>JCC - Where Users Become Builders</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
