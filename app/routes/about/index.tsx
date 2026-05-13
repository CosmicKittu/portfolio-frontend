const AboutPage = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900 min-h-screen">

                {/* Hero Section */}
                <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-16">

                    <img
                        src="/images/Profile2.jpeg"
                        alt="Priyanshu Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                    />

                    <div>

                        {/* Warning Banner */}
                        <div className="text-red-400 bg-red-950/40 border border-red-500 px-4 py-3 rounded-lg mb-5">
                            <p className="font-semibold">
                                ⚠️ Other pages may take a few seconds to load because the backend server sleeps when inactive.
                            </p>
                        </div>

                        <h1 className="text-4xl font-bold text-white mb-4">
                            Hey, I'm Priyanshu
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                            I am a passionate software developer focused on backend engineering,
                            scalable systems, and solving complex problems using data structures
                            and algorithms. I enjoy building impactful products, exploring new
                            technologies, and continuously improving my skills.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mb-14">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        My Mission
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-base">
                        My goal is to build efficient, scalable, and meaningful software
                        solutions that create real impact. I enjoy backend development,
                        system design, and creating applications that solve practical problems.
                        I constantly explore modern technologies, clean architecture, and
                        best practices to improve both performance and user experience.
                        Through technology, I aim to contribute positively to society while
                        continuously growing as an engineer.
                    </p>
                </div>

                {/* Languages */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Languages
                    </h2>

                    <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                        {[
                            'TypeScript',
                            'JavaScript',
                            'Python',
                            'C++',
                            'C',
                            'Java',
                            'SQL',
                            'HTML',
                            'CSS'
                        ].map((tech) => (
                            <li
                                key={tech}
                                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-lg border border-gray-700"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Frameworks */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Frameworks & Libraries
                    </h2>

                    <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                        {[
                            'React',
                            'Node.js',
                            'Express',
                            'FastAPI',
                            'Django',
                            'Socket.IO',
                            'Prisma',
                            'Tailwind CSS',
                            'NumPy',
                            'Pandas'
                        ].map((tech) => (
                            <li
                                key={tech}
                                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-lg border border-gray-700"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Databases & Cloud */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Databases & Cloud
                    </h2>

                    <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                        {[
                            'PostgreSQL',
                            'MongoDB',
                            'AWS',
                            'DigitalOcean',
                            'Vercel',
                            'NeonDB',
                            'MongoDB Atlas'
                        ].map((tech) => (
                            <li
                                key={tech}
                                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-lg border border-gray-700"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Developer Tools */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Developer Tools
                    </h2>

                    <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                        {[
                            'Git',
                            'GitHub',
                            'Docker',
                            'Linux',
                            'REST APIs',
                            'Postman',
                            'VS Code',
                            'npm'
                        ].map((tech) => (
                            <li
                                key={tech}
                                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-lg border border-gray-700"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default AboutPage;
