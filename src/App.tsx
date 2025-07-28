export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#1773DA] to-[#0A387C] text-white font-inter overflow-x-hidden">
      <header className="flex justify-between items-center p-8">
        <div className="text-xl font-bold">🌊 Ocean</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Info
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </nav>
      </header>

      <section className="text-center px-4 pt-20 pb-12">
        <p className="font-semibold tracking-widest text-lg text-white/80 mb-1">
          FASCINATING LIFE OF
        </p>
        <h1
          className="inline-block text-9xl font-bold bg-clip-text text-transparent tracking-wider mb-1"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #ffffff, #EAF5FF, #B9DDFF, #63B3FF)",
          }}
        >
          SEA TURTLES
        </h1>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
          Let's dive into the life of sea turtles, one of the ocean's most
          well-known but mysterious creatures. We'll break it down into three
          key stops—each one a crucial chapter in the sea turtle's journey.
        </p>
        <button className="bg-green-400 text-black font-bold py-2 px-6 rounded-full">
          Get started
        </button>
      </section>

      <img
        className="absolute top-40 left-5 w-24 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Starfish_icon.svg"
        alt="starfish"
      />

      <section className="relative max-w-2xl mx-auto px-4 py-20">
        <h2 className="text-5xl opacity-30">01</h2>
        <h3 className="text-2xl mt-4 mb-2 font-semibold">The first swim</h3>
        <p className="opacity-90">
          Baby sea turtles begin their lives by emerging from sandy nests and
          making their way to the sea under the cover of night, guided by the
          natural light on the horizon.
        </p>
      </section>

      <section className="relative max-w-2xl mx-auto px-4 py-20">
        <h2 className="text-5xl opacity-30">02</h2>
        <h3 className="text-2xl mt-4 mb-2 font-semibold">
          Where they hang out
        </h3>
        <p className="opacity-90">
          After reaching the ocean, turtles spend several years in the open sea,
          drifting with currents and feeding on floating organisms while
          avoiding predators.
        </p>
      </section>

      <section className="relative max-w-2xl mx-auto px-4 py-20">
        <h2 className="text-5xl opacity-30">03</h2>
        <h3 className="text-2xl mt-4 mb-2 font-semibold">Going home to nest</h3>
        <p className="opacity-90">
          Adult turtles eventually return to the very beaches where they were
          born to lay their eggs, continuing the circle of life across
          generations.
        </p>
      </section>

      <section className="text-center px-4 py-20">
        <h3 className="text-2xl mb-4 font-semibold">Explore more ocean life</h3>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
          Discover fascinating marine animals and ecosystems that make the ocean
          such an incredible place to explore and protect.
        </p>
        <button className="bg-green-400 text-black font-bold py-2 px-6 rounded-full">
          Learn more
        </button>
      </section>

      <footer className="text-center text-sm p-8 bg-black/10">
        <p className="mb-1">&copy; 2025 Ocean Life. All rights reserved.</p>
        <p className="opacity-80">Company | Resource | Help | Terms</p>
      </footer>
    </div>
  );
}
