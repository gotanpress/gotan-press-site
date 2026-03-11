import Image from "next/image";

export default function Home() {
  const editions = [
    "English",
    "Español",
    "Deutsch",
    "Français",
    "Italiano",
    "Dansk",
  ];

  const sections = [
    {
      eyebrow: "Why this book",
      title: "A long-form page for a serious tango book",
      text:
        "This page is designed to feel editorial, quiet, and persuasive. It introduces the book as an interior discipline rather than a dance manual, and gives readers enough depth to understand why the book exists before asking them to buy.",
      cta: "Read the opening",
    },
    {
      eyebrow: "What it is",
      title: "Social tango as contained intensity",
      text:
        "In the repeated embrace of social Argentine tango, something is held rather than discharged: attention, desire, form, and duration. The book gives language to that experience for dancers who already sense that tango changes them over time.",
      cta: "See the argument",
    },
    {
      eyebrow: "How it works",
      title: "Idea first, transaction second",
      text:
        "The page leads with atmosphere, proposition, structure, and trust. Only then does it move toward format options, language editions, and purchase. That sequence is especially important for an intellectual niche title.",
      cta: "View editions",
    },
  ];

  const chapterBlocks = [
    {
      part: "Part I",
      title: "The Form That Holds",
      description:
        "A framing of tango as a disciplined social vessel: codes, repetition, music, and the embrace as a structure that contains rather than releases.",
    },
    {
      part: "Part II",
      title: "Pressure and Duration",
      description:
        "What sustained practice does over years: friction, refinement, waiting, frustration, sensitivity, and the slow formation of another kind of attention.",
    },
    {
      part: "Part III",
      title: "Transformation Without Escape",
      description:
        "Why tango alters people without promising transcendence: no retreat from the world, no catharsis, only relation, form, and repeated return.",
    },
  ];

  const testimonials = [
    "This finally gave words to something I had felt for years in tango.",
    "Not a dance manual — a serious reflection from inside the practice.",
    "Quiet, exact, and unusually true to the long experience of the milonga.",
    "A book for dancers who know tango is doing more than teaching steps.",
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="border-b border-stone-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-stone-400">
              Gotan Press
            </div>
            <div className="mt-1 text-lg font-semibold">A Contained Fire</div>
          </div>
          <nav className="hidden gap-8 text-sm text-stone-300 md:flex">
            <a href="#book" className="hover:text-white">Book</a>
            <a href="#structure" className="hover:text-white">Structure</a>
            <a href="#editions" className="hover:text-white">Editions</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_20%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex rounded-full border border-stone-700 px-4 py-1 text-xs uppercase tracking-[0.24em] text-stone-300">
                Gotan Press Publication
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                A Contained Fire
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                Social Argentine tango is often described as passion or connection. 
                Less often is it recognized as a discipline of containment.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
                In the dim light of the milonga, within a strict social form and a repeated embrace,
                something is held: desire without discharge, attention without distraction,
                intensity without collapse.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
                <em>A Contained Fire</em> gives language to an experience many dancers recognize
                but rarely see described.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#editions"
                  className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-amber-400"
                >
                  Buy the Book
                </a>
                <a
                  href="#book"
                  className="rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-100 transition hover:border-stone-500"
                >
                  Read the Proposition
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-800 bg-stone-900/70 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Formats</div>
                  <div className="mt-2 text-base">Paperback · Hardcover · PDF</div>
                </div>
                <div className="rounded-2xl border border-stone-800 bg-stone-900/70 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Audience</div>
                  <div className="mt-2 text-base">Dancers · Teachers · Organizers</div>
                </div>
                <div className="rounded-2xl border border-stone-800 bg-stone-900/70 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Approach</div>
                  <div className="mt-2 text-base">Reflective · International · Direct</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-[2rem] border border-stone-800 bg-gradient-to-b from-stone-900 to-black p-6 shadow-2xl shadow-black/40">
                <div className="aspect-[3/4] rounded-[1.5rem] border border-stone-800 bg-[linear-gradient(180deg,#201915_0%,#120f0d_100%)] p-8">
                  <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-amber-400/30 p-8">
                    <Image 
                      src="/contained-fire-cover.jpg" 
                      alt="A Contained Fire – Gotan Press" 
                      width={560} 
                      height={840} 
                      className="rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="border-t border-stone-900 bg-stone-950">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.28em] text-amber-400">The proposition</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Social tango is often described as passion or connection. Less often is it understood as containment.
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-300">
                In the dim light of the milonga, within a strict social form and a repeated embrace,
                something is held: desire without discharge, attention without distraction, ego without collapse.
                Nothing is resolved quickly. Nothing is transcended. The work continues — tanda after tanda,
                partner after partner, year after year.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {sections.map((section) => (
                <div key={section.title} className="rounded-3xl border border-stone-800 bg-stone-900/60 p-8">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">{section.eyebrow}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{section.title}</h3>
                  <p className="mt-4 leading-7 text-stone-300">{section.text}</p>
                  <button className="mt-6 rounded-full border border-stone-700 px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-200 hover:border-stone-500">
                    {section.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-900 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-amber-400">For the reader</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  This is not a technique manual and not a theory of dance.
                </h2>
                <p className="mt-6 text-lg leading-8 text-stone-300">
                  It is a study of what the practice does to those who stay. The tone should feel serious,
                  spacious, and international — not sensational, not internet marketer, but still commercially effective.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {testimonials.map((quote) => (
                  <div key={quote} className="rounded-3xl border border-stone-800 bg-stone-950 p-6 text-stone-200">
                    <div className="text-2xl text-amber-400">“</div>
                    <p className="leading-7">{quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="structure" className="border-t border-stone-900 bg-stone-950">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.28em] text-amber-400">Book structure</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                A page like this should reveal enough of the internal architecture to create trust.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {chapterBlocks.map((block) => (
                <div key={block.title} className="rounded-3xl border border-stone-800 bg-black/40 p-8">
                  <div className="text-sm uppercase tracking-[0.24em] text-stone-500">{block.part}</div>
                  <h3 className="mt-3 text-2xl font-semibold">{block.title}</h3>
                  <p className="mt-4 leading-7 text-stone-300">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="editions" className="border-t border-stone-900 bg-[linear-gradient(180deg,#09090b_0%,#111111_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-amber-400">Editions</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  One international page, multiple language editions.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                  This model lets you keep the brand and marketing in English while offering the actual book
                  in several languages. It keeps complexity under control without making the project feel small.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {editions.map((edition) => (
                    <span
                      key={edition}
                      className="rounded-full border border-stone-700 px-4 py-2 text-sm text-stone-200"
                    >
                      {edition}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-stone-800 bg-black/50 p-8">
                <div className="text-sm uppercase tracking-[0.24em] text-stone-500">Buy direct</div>
                <div className="mt-3 text-2xl font-semibold">Choose format and language</div>
                <div className="mt-8 space-y-4">
                  {[
                    { title: "Paperback", price: "€24", note: "Manual fulfilment" },
                    { title: "Hardcover", price: "€32", note: "Manual fulfilment" },
                    { title: "Digital PDF", price: "€14", note: "Instant delivery" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl border border-stone-800 bg-stone-950/70 px-5 py-4"
                    >
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-stone-500">{item.note}</div>
                      </div>
                      <div className="text-lg font-semibold">{item.price}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-full bg-amber-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 hover:bg-amber-400">
                  Proceed to Checkout
                </button>
                <p className="mt-4 text-sm leading-6 text-stone-500">
                  Placeholder checkout module. In production this would connect to Stripe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-stone-900 bg-black">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
            <div className="text-xs uppercase tracking-[0.28em] text-amber-400">FAQ</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Practical information
            </h2>
            <div className="mt-10 space-y-4">
              {[
                ["Do you ship internationally?", "Yes. Initial fulfilment can be handled manually with shipping zones such as EU, UK, North America, and Rest of World."],
                ["Will the site itself be multilingual?", "Not initially. A single English-based site with multilingual product options is usually the cleanest starting point for an international tango niche."],
                ["Can signed copies be offered?", "Yes. Signed copies are especially well suited to tango festivals, encuentros, and direct community sales."],
              ].map(([q, a]) => (
                <div key={q} className="rounded-3xl border border-stone-800 bg-stone-950/70 p-6">
                  <div className="text-lg font-medium">{q}</div>
                  <p className="mt-3 leading-7 text-stone-300">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-900 bg-stone-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-stone-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="font-medium text-stone-300">Gotan Press</div>
            <div className="mt-1">International books on social Argentine tango.</div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300">Instagram</a>
            <a href="#" className="hover:text-stone-300">YouTube</a>
            <a href="#" className="hover:text-stone-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}