import React from "react";

const App: React.FC = () => {
  // A new, mathematically correct SVG path for a perfectly tileable honeycomb mesh.
  // This path draws a central hexagon and the necessary connecting lines to its neighbors,
  // ensuring a seamless pattern when repeated.
  const honeycombSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"><path fill="none" stroke="rgba(55, 65, 81, 0.2)" stroke-width="1" d="M14 0 L0 8 V24 L14 32 L28 24 V8 Z M14 32 V48 M0 24 L-14 32 V48 L0 56 M28 24 L42 32 V48 L28 56"></path></svg>`;
  const encodedHoneycomb = `data:image/svg+xml;base64,${btoa(honeycombSvg)}`;

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: "#000",
    backgroundImage: `
      linear-gradient(45deg, transparent 70%, black),
      url("${encodedHoneycomb}")
    `,
    // The background size is scaled to the new SVG's aspect ratio for a larger, clearer pattern.
    backgroundSize: "auto, 42px 73.5px",
    backgroundAttachment: "fixed", // Keeps the pattern stationary on scroll
  };

  return (
    // Main container now uses the dynamic style object for the background.
    <div
      style={backgroundStyle}
      className="text-gray-200 min-h-screen font-sans antialiased"
    >
      <main className="container mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
            {/* Monochromatic gradient for a sleek, modern look */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-gray-400">
              Seon
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            The AI Companion that Extends Your Potential.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            A revolutionary AI that understands your world, anticipates your
            needs, and extends your potential.
          </p>
          <a
            href="https://github.com/BCusack/Seon/blob/main/Whitepaper.md"
            target="_blank"
            rel="noopener noreferrer"
            // High-contrast, minimalist button
            className="inline-block bg-white text-black font-medium py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Read the Whitepaper
          </a>
        </header>

        {/* Feature Section 1: Hyper-Personalization */}
        <section className="py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="md:pr-12">
            <h3 className="text-base font-semibold tracking-wider text-gray-500 uppercase">
              Hyper-Personalized
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
              A True Extension of You
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Seon moves beyond surface-level preferences. It builds a deep,
              dynamic understanding of your cognitive style, communication
              patterns, and long-term goals. By learning how you think and work,
              it doesn't just respond to commands—it becomes a seamless
              cognitive partner, your second brain.
            </p>
          </div>
          <div className="flex items-center justify-center p-8 border border-neutral-800 rounded-lg bg-neutral-950/50">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.4829 4.04702 16.7356 5.69134 18.3087M12 21V18M12 21H15M5.69134 18.3087C6.90385 17.0962 8.3615 16.5 10.5 16.5H13.5C14.8807 16.5 16 15.3807 16 14C16 12.6193 14.8807 11.5 13.5 11.5H10.5C8.3615 11.5 6.90385 10.9038 5.69134 9.69134C4.04702 8.26444 3 6.01712 3 4M5.69134 18.3087L3 21M9 3V6M15 3V6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

        {/* Feature Section 2: Context-Aware */}
        <section className="py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center p-8 border border-neutral-800 rounded-lg bg-neutral-950/50 md:order-last">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 12V22M9 19L15 19M3.5 14.5L7 12M20.5 14.5L17 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="md:pl-12">
            <h3 className="text-base font-semibold tracking-wider text-gray-500 uppercase">
              Context-Aware
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
              Understands Your World
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              True assistance requires understanding the full picture. Seon
              synthesizes your schedule, location, communications, and digital
              environment to grasp the "why" behind your current situation. This
              allows it to provide relevant, timely, and impactful support that
              feels intuitive, not intrusive.
            </p>
          </div>
        </section>

        {/* Feature Section 3: Proactive Assistant */}
        <section className="py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="md:pr-12">
            <h3 className="text-base font-semibold tracking-wider text-gray-500 uppercase">
              Proactive Assistant
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
              Always a Step Ahead
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Seon transitions you from a reactive to a proactive workflow. It
              anticipates needs by identifying patterns and upcoming events.
              Imagine arriving at a meeting with a pre-drafted summary of
              relevant documents and key talking points already prepared—that's
              the power of proactive augmentation.
            </p>
          </div>
          <div className="flex items-center justify-center p-8 border border-neutral-800 rounded-lg bg-neutral-950/50">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <path
                d="M12 3V12M12 12L15 9M12 12L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.3536 14.6464L14.6464 20.3536C13.2783 21.7217 11.0697 21.7217 9.64645 20.3536L3.64645 14.3536C2.27829 12.9854 2.27829 10.7768 3.64645 9.35355L9.35355 3.64645C10.7217 2.27829 12.9303 2.27829 14.3536 3.64645L20.3536 9.64645C21.7217 11.0146 21.7217 13.2783 20.3536 14.6464Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </section>

        {/* Feature Section 4: Unyielding Privacy */}
        <section className="py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center p-8 border border-neutral-800 rounded-lg bg-neutral-950/50 md:order-last">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <path
                d="M12 11.125V15.375M12 21.375C16.9706 21.375 21 17.3462 21 12.375C21 7.40381 16.9706 3.375 12 3.375C7.02944 3.375 3 7.40381 3 12.375C3 17.3462 7.02944 21.375 12 21.375Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8.625H12.009"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="md:pl-12">
            <h3 className="text-base font-semibold tracking-wider text-gray-500 uppercase">
              Unyielding Privacy
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
              Your Data is Yours. Full Stop.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Trust is not a feature; it's the foundation. Seon is built on a
              privacy-by-design architecture. Sensitive data is processed
              on-device whenever possible, and you have transparent, granular
              control over your information. We believe that for AI to be truly
              personal, its security must be absolute.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="text-center max-w-3xl mx-auto my-24 md:my-32">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-400">
            We believe in creating AI that acts as a true extension of the
            individual, augmenting human potential in harmony with our values.
            Seon is our first step towards a future where technology empowers,
            understands, and inspires.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 border-t border-neutral-800 pt-8">
          <p>The Seon Project - An exploration into the future of AI.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
