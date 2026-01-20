function Navigation() {
  const isDark = true;

  const sections = [
    { id: 'basic', label: 'Basic Props', icon: '📦' },
    { id: 'ref', label: 'Ref Props', icon: '🔗' },
    { id: 'children', label: 'Children Props', icon: '👶' },
    { id: 'complex', label: 'Complex Props', icon: '🧩' },
    { id: 'theme', label: 'Theme Props', icon: '🎨' },
  ];
  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${isDark ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className='container mx-auto px-auto py-auto'>
        <div className='flex flex-wrap gap-2 justify-center'>
          {sections.map((section) => (
            <button
              key={section.id}
              className='px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2 transition-all hover:bg-blue-800'
            >
              <span className='mr-2'>{section.icon}</span>

              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className={`min-h-screen bg-gray-800 text-3xl text-white font-bold`}>
      <Navigation />
      <div className='container mx-auto px-4 py-8'>
        <header
          className={`text-center mb-12 transition-colors ${isDark ? 'bg-gray-800' : 'bg-white'}`}
        >
          <h1>React Props Explained</h1>
          <p>simple comprehensive guide to understanding prop in react</p>
          <div
            className={`mt-4 inline-block px-6 py-2 rounded-full ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-md`}
          >
            <span className='font-semibold'>
              Built with Bun + Vite + React + Tailwind CSS
            </span>
          </div>
        </header>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}
export default App;
