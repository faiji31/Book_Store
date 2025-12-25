import React from 'react';

const ABout = () => {
    return (
        <div className="max-w-7xl mx-auto my-12 px-4">
            {/* Hero Section */}
            <div className="bg-base-200 p-12 rounded-2xl text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">About <span className="text-[#23BE0A]">Book Vibe</span></h1>
                <p className="text-lg white max-w-2xl mx-auto">
                    We believe that books have the power to change lives. Our platform is designed to help readers track their progress, discover new worlds, and organize their literary journey.
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img 
                        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000" 
                        alt="Library" 
                        className="rounded-2xl shadow-xl"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Our Story</h2>
                    <p className="text-white leading-relaxed">
                        Started by a group of passionate bibliophiles, Book Vibe was created to solve a simple problem: keeping track of what we've read versus what we want to read next. What began as a simple list has evolved into a comprehensive tool for readers everywhere.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-[#23BE0A]/20 rounded-xl bg-[#23BE0A]/5">
                            <h3 className="font-bold text-[#23BE0A] text-xl">10k+</h3>
                            <p className="text-sm">Books Cataloged</p>
                        </div>
                        <div className="p-4 border border-[#23BE0A]/20 rounded-xl bg-[#23BE0A]/5">
                            <h3 className="font-bold text-[#23BE0A] text-xl">5k+</h3>
                            <p className="text-sm">Happy Readers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card bg-white shadow-md p-6 border border-gray-100">
                        <div className="w-12 h-12 bg-[#23BE0A]/10 flex items-center justify-center rounded-full mb-4">
                            📚
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-black">Curiosity</h3>
                        <p className="text-black">We never stop learning and exploring new genres and perspectives.</p>
                    </div>
                    <div className="card bg-white shadow-md p-6 border border-gray-100">
                        <div className="w-12 h-12 bg-[#23BE0A]/10 flex items-center justify-center rounded-full mb-4">
                            🤝
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-black">Community</h3>
                        <p className="text-black">Connecting readers across the globe through the shared love of literature.</p>
                    </div>
                    <div className="card bg-white shadow-md p-6 border border-gray-100">
                        <div className="w-12 h-12 bg-[#23BE0A]/10 flex items-center justify-center rounded-full mb-4">
                            🎯
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-black">Simplicity</h3>
                        <p className="text-black">Making it effortless for you to manage your reading habits.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ABout;