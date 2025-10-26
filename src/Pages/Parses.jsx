import React from 'react';

const TextHierarchyComponent = () => {
  return (
    <div className="bg-white min-h-screen p-8 sm:p-16 flex flex-col justify-center items-center font-['Inter']">
      <main className="max-w-4xl w-full text-center">
        {/* Title and Subtitle Section */}
        <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">
          Come Back Here
        </h2>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
          YOU'LL READ<br/>THIS FIRST
        </h1>
        <p className="text-xl italic text-gray-600 mb-8">
          and then you will read this line next
        </p>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
          <div className="border-l pl-8 border-gray-400">
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              You will go back to read this body copy if you want to know more. It takes the most effort to read because it has a lot of text in a small font in a light weight with tight line spacing. Many people will skip paragraphs like this entirely if they aren't engaged right away. This is why it’s important to draw attention to your message using visual hierarchy.
            </p>
          </div>
          <div className="text-gray-800">
            <p className="text-xl font-bold leading-snug">
              You will read this before the paragraph.
            </p>
          </div>
        </div>
      </main>

      {/* Footer / Logo Section */}
      <footer className="mt-24 text-center">
        <div className="font-['Cursive'] text-4xl text-gray-800">
          castlyn
        </div>
        <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">
          Branding &amp; Design
        </div>
      </footer>
    </div>
  );
};

export default TextHierarchyComponent;

