function TailwindTest() {
  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">
      
      {/* Test custom colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Custom Colors Test:</h2>
        <div className="bg-yellow text-black p-4 rounded-lg">
          Yellow background (custom color)
        </div>
        <div className="bg-white-100 text-black p-4 rounded-lg">
          White-100 background (custom color)
        </div>
      </div>

      {/* Test custom fonts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Custom Fonts Test:</h2>
        <p className="font-sans text-lg">Mona Sans font (custom)</p>
        <p className="font-serif text-lg">DM Serif Text font (custom)</p>
        <p className="font-modern-negra text-lg">Modern Negra font (custom)</p>
      </div>

      {/* Test custom border radius */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Custom Border Radius Test:</h2>
        <div className="bg-yellow text-black p-6 rounded-4xl">
          Custom 4xl border radius (2rem)
        </div>
      </div>

      {/* Test hover effects with custom colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Hover Effects Test:</h2>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-yellow hover:text-black transition-colors">
          Hover me (should turn yellow)
        </button>
        <button className="border-2 border-white px-6 py-3 rounded-lg hover:border-yellow hover:text-yellow transition-colors">
          Hover for yellow border
        </button>
      </div>

      {/* Test custom utility classes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Custom Utilities Test:</h2>
        <div className="h-32 bg-gray-800 flex-center rounded-lg">
          flex-center utility class
        </div>
        <div className="h-32 bg-gray-800 col-center rounded-lg">
          <span>col-center</span>
          <span>utility class</span>
        </div>
        <div className="relative h-32 bg-gray-800 rounded-lg">
          <div className="abs-center bg-yellow text-black px-4 py-2 rounded">
            abs-center utility
          </div>
        </div>
      </div>

      {/* Test text gradient */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Text Gradient Test:</h2>
        <h3 className="text-gradient text-4xl font-bold">
          Gradient Text Effect
        </h3>
      </div>

    </div>
  );
}

export default TailwindTest;