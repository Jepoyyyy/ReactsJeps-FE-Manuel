function CV() {
  return (
    <div className="cv-page max-w-6xl mx-auto p-6 md:p-12">
      <header className="bg-white border-2 border-black rounded-2xl p-8 md:p-10 shadow-[6px_6px_0_0_#000] mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black shadow-[4px_4px_0_0_#000] shrink-0">
            <img
              src="https://ui-avatars.com/api/?name=Manuel+Zefanya+Pardede&size=150&background=000000&color=ffffff&bold=true"
              alt="Manuel Zefanya Pardede"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-2 font-playfair">
              Manuel Zefanya Pardede
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-playfair mb-6">
              Computer Engineering Graduate
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-cascadia mt-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg">
                <span className="text-black">manuelzefanyaaa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg">
                <span className="text-black">(+62) 82310966720</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg">
                <span className="text-black">linkedin.com/in/manuelzefanya/</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg">
                <span className="text-black">github.com/Jepoyyyy</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
            <h2 className="text-lg font-bold text-black mb-4 pb-3 border-b-2 border-black font-playfair">
              Profile Summary
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 font-cascadia">
              I am a Computer Engineering graduate from Universitas Diponegoro, completing my bachelor&apos;s degree on time in 3.8 years with a GPA of 3.55. I have a strong passion for web and mobile application development, with hands-on experience utilizing Kotlin, PHP, JavaScript, Java, HTML, CSS, and SQL, alongside frameworks such as Laravel, CodeIgniter, and React. I gained these competencies through active involvement in student organizations and academic research. I am capable of working both independently and collaboratively within a team, and I am highly motivated to continuously grow and learn in a professional environment.
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
            <h2 className="text-lg font-bold text-black mb-4 pb-3 border-b-2 border-black font-playfair">
              Education
            </h2>
            <div>
              <h4 className="font-bold text-sm text-black font-playfair">Bachelor of Science in Computer Engineering (S.T.)</h4>
              <p className="text-xs text-neutral-700 mt-1">Universitas Diponegoro</p>
              <p className="text-xs text-neutral-500 font-cascadia mt-1">August 2021 - May 2025</p>
              <p className="text-xs text-neutral-600 font-cascadia mt-2">Specialization: Web and Mobile Application Development</p>
              <p className="text-xs text-neutral-600 font-cascadia mt-1">Relevant Coursework: Web Programming, Mobile Application Development, Database Systems, Data Structures &amp; Algorithms, Object-Oriented Programming, Capstone Project</p>
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
            <h2 className="text-lg font-bold text-black mb-4 pb-3 border-b-2 border-black font-playfair">
              Technical Skills
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-bold uppercase text-neutral-600 font-cascadia mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Kotlin', 'PHP', 'JavaScript', 'Java', 'HTML5', 'CSS', 'SQL'].map((s) => (
                    <span key={s} className="border border-black bg-white text-black font-cascadia text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0_0_#000]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase text-neutral-600 font-cascadia mb-3">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Android Studio', 'Postman', 'VS Code'].map((s) => (
                    <span key={s} className="border border-black bg-white text-black font-cascadia text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0_0_#000]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase text-neutral-600 font-cascadia mb-3">Libraries &amp; Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'Retrofit', 'Jetpack Compose', 'CodeIgniter', 'Bootstrap', 'React', 'Spring Boot'].map((s) => (
                    <span key={s} className="border border-black bg-white text-black font-cascadia text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0_0_#000]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-2 space-y-6">
          <div className="bg-white border-2 border-black rounded-xl p-6 md:p-8 shadow-[4px_4px_0_0_#000]">
            <h2 className="text-2xl font-bold text-black mb-6 pb-4 border-b-2 border-black font-playfair">
              Professional Experience
            </h2>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-white rounded-full shadow-[2px_2px_0_0_#000]" />

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-black font-playfair">Full-stack Web Developer Intern</h3>
                    <span className="inline-block border border-black bg-white text-black font-cascadia text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0_0_#000] self-start">
                      September 2024 - December 2024
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-600 font-playfair">Inspektorat Kota Jambi</p>
                  <ul className="text-sm space-y-2 text-neutral-700 font-cascadia list-disc list-outside ml-4">
                    <li>Developed internal office applications deployed across web and mobile platforms.</li>
                    <li>Engaged in discussions with the Inspectorate IT team regarding application objectives and constraints, ensuring alignment with office personnel profiles.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-300 border-2 border-white rounded-full shadow-[2px_2px_0_0_#000]" />

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-black font-playfair">Full-stack Web Developer Intern</h3>
                    <span className="inline-block border border-black bg-white text-black font-cascadia text-xs px-3 py-1 rounded-lg shadow-[2px_2px_0_0_#000] self-start">
                      July 2023 - September 2023
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-600 font-playfair">PT DES Teknologi Informasi</p>
                  <ul className="text-sm space-y-2 text-neutral-700 font-cascadia list-disc list-outside ml-4">
                    <li>Collaborated with mentors to gather system requirements and implemented fixes throughout the development lifecycle.</li>
                    <li>Participated in team discussions and feedback sessions to align technical solutions with corporate business needs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-6 md:p-8 shadow-[4px_4px_0_0_#000]">
            <h2 className="text-2xl font-bold text-black mb-6 pb-4 border-b-2 border-black font-playfair">
              Key Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 border-2 border-black rounded-xl p-5 shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-all">
                <h4 className="font-bold text-base text-black mb-2 font-playfair">Internal Management System</h4>
                <p className="text-xs text-neutral-700 mb-4 leading-relaxed font-cascadia">
                  Developed a web-based management system using CodeIgniter 4 and MySQL to manage incoming mail, inventory, and employee data across departments. Implemented CRUD operations, form validation, and a responsive interface using Bootstrap for enhanced user experience.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['CodeIgniter 4', 'Bootstrap', 'MySQL'].map((tech) => (
                    <span key={tech} className="text-xs font-cascadia border border-black bg-white text-black rounded px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 border-2 border-black rounded-xl p-5 shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-all">
                <h4 className="font-bold text-base text-black mb-2 font-playfair">IKJ Information &amp; Mailing System</h4>
                <p className="text-xs text-neutral-700 mb-4 leading-relaxed font-cascadia">
                  Built a cross-platform (web and mobile) application powered by RESTful APIs to streamline mailing processes and facilitate reporting communication between employees and superiors.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['Kotlin', 'SQL', 'RESTful API', 'Laravel'].map((tech) => (
                    <span key={tech} className="text-xs font-cascadia border border-black bg-white text-black rounded px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 border-2 border-black rounded-xl p-5 shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-all">
                <h4 className="font-bold text-base text-black mb-2 font-playfair">BPKP Package Tracking System</h4>
                <p className="text-xs text-neutral-700 mb-4 leading-relaxed font-cascadia">
                  Developed a monitoring application to track package deliveries end-to-end within the BPKP office environment. Built the system using Laravel, integrated with React (Inertia.js) for a seamless front-end experience.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['SQL', 'React', 'Laravel'].map((tech) => (
                    <span key={tech} className="text-xs font-cascadia border border-black bg-white text-black rounded px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-6 md:p-8 shadow-[4px_4px_0_0_#000]">
            <h2 className="text-2xl font-bold text-black mb-6 pb-4 border-b-2 border-black font-playfair">
              Organizational Experience
            </h2>

            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-white rounded-full shadow-[2px_2px_0_0_#000]" />

                <div className="space-y-2">
                  <h4 className="font-bold text-base text-black font-playfair">Ikatan Mahasiswa Jambi</h4>
                  <p className="text-sm font-medium text-neutral-600 font-cascadia">Vice Head of Interest and Talents Division | 2025</p>
                  <ul className="text-sm space-y-1 text-neutral-700 font-cascadia list-disc list-outside ml-4">
                    <li>Planned sports activities for members and collaborated with other divisions to organize cross-regional student community events covering music and sports.</li>
                    <li>Conducted bonding sessions with community members to identify their interests and talents, ensuring future programs catered to the collective preference of the organization.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-300 border-2 border-white rounded-full shadow-[2px_2px_0_0_#000]" />

                <div className="space-y-2">
                  <h4 className="font-bold text-base text-black font-playfair">Himpunan Mahasiswa Teknik Komputer</h4>
                  <p className="text-sm font-medium text-neutral-600 font-cascadia">Vice Head of Economy and Business Division | 2024</p>
                  <ul className="text-sm space-y-1 text-neutral-700 font-cascadia list-disc list-outside ml-4">
                    <li>Designed and implemented a digital cash management system to streamline sponsorship tracking, fundraising, and financial reporting, successfully increasing transparency and reducing manual errors.</li>
                    <li>Developed leadership, communication, teamwork, and decision-making skills through hands-on experience leading a division.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-neutral-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-400 border-2 border-white rounded-full shadow-[2px_2px_0_0_#000]" />

                <div className="space-y-2">
                  <h4 className="font-bold text-base text-black font-playfair">Himpunan Mahasiswa Teknik Komputer</h4>
                  <p className="text-sm font-medium text-neutral-600 font-cascadia">Junior Staff of Economy and Business Division | 2023</p>
                  <ul className="text-sm space-y-1 text-neutral-700 font-cascadia list-disc list-outside ml-4">
                    <li>Served as the Project Officer for Entrepreneurship events aimed at fostering an entrepreneurial mindset among engineering students.</li>
                    <li>Cultivated accountability and ownership in high-stakes decision-making through successful event executions.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-neutral-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-400 border-2 border-white rounded-full shadow-[2px_2px_0_0_#000]" />

                <div className="space-y-2">
                  <h4 className="font-bold text-base text-black font-playfair">ODM FT (Faculty Orientation)</h4>
                  <p className="text-sm font-medium text-neutral-600 font-cascadia">Field Coordinator Staff | 2022</p>
                  <ul className="text-sm space-y-1 text-neutral-700 font-cascadia list-disc list-outside ml-4">
                    <li>Mapped event venues and handled technical planning, encompassing pre-event preparation to post-event execution.</li>
                    <li>Conducted briefings with external divisions to ensure a safe, organized, and conducive event environment.</li>
                    <li>Created, assembled, and prepared structural properties and decorations used throughout the orientation.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CV;
