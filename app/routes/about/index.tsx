const AboutPage = () => {
    return ( 
        <>
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
            <div className="flex flex-col md:flex-row md:item-start items-center gap-10 mb-12">
                <img src="/images/Profile2.jpeg" alt="profile" className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md" />
                <div>
                    <h1 className="text-4xl font-bold">Hey, I'm Priyanshu</h1>
                    <p className="text-gray-300 text-lg">
                        I am a passionate software developer master data structure and algorithm, contributing to betterment of society with my skill and passion.
                    </p>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                   My Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    I am a passionate software developer with a strong focus on backend development.
                    My expertise lies in building efficient, scalable systems and solving complex problems.
                    I have a solid understanding of data structures and algorithms, which helps me design optimized solutions.
                    With a keen interest in clean code and best practices, I aim to deliver reliable, maintainable software.
                    I enjoy exploring new technologies and continuously sharpening my skills.
                    Driven by curiosity and a sense of purpose, I strive to use technology to make a meaningful impact on society.
                </p>
            </div>
            <div className="mb-4">

            <h2 className="text-2xl font-semibold text-white mb-4">
                Languages I Use
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                    'Python',
                    'C++',
                    'C',
                    'Java',
                    'TypeScript',
                    'JavaScript',
                    'SQL',
                    'HTML',
                    'CSS'
                    
                ].map((tech)=>(
                    <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
                ))}
            </ul>
            </div>

            <div className="mb-4">

            <h2 className="text-2xl font-semibold text-white mb-4">
                Tools & Technologies I Use
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                    'Node',
                    'npm',
                    'REST API'
                    
                ].map((tech)=>(
                    <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
                ))}
            </ul>
            </div>
            
            <div className="mb-4">

            <h2 className="text-2xl font-semibold text-white mb-4">
                Frameworks & Libraries I Use
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                    'Django',
                    'Flask',
                    'FastAPI',
                    'React',
                    'Tailwind',
                    'Express',
                    'NumPy',
                    'Pandas'
                    
                ].map((tech)=>(
                    <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
                ))}
            </ul>
            </div>


        </div>
        </>
     );
}
 
export default AboutPage;