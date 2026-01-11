import { motion } from 'framer-motion';
import { fadeInUp, scaleOnHover, staggerContainer } from '../utils/animations';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillCard = ({ title, skills }: SkillCategory) => (
  <motion.div 
    className="bg-[#2A1B3D] rounded-xl p-6 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
    variants={fadeInUp}
   whileHover={{ scale: 1.02 }}
  >
    <motion.h3 
      className="text-xl font-semibold mb-4 text-purple-500"
      variants={scaleOnHover}
    >
      {title}
    </motion.h3>
    <motion.div 
      className="flex flex-wrap gap-4 justify-center"
      variants={staggerContainer}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index} 
          className="group flex flex-col items-center w-24"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="w-12 h-12 rounded-lg bg-purple-900/50 p-2 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] mb-2"
            whileHover={{
              backgroundColor: "rgba(139,92,246,0.4)"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 relative z-10 object-contain"
            />
          </motion.div>
          <span className="text-xs text-gray-300 text-center">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const ExperienceCard = ({ role, company, period, achievements }: { 
  role: string; 
  company: string; 
  period: string;
  achievements: string[];
}) => (
  <motion.div 
    className="bg-[#2A1B3D] rounded-xl p-6 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
    variants={fadeInUp}
    whileHover="hover"
  >
    <motion.div 
      className="mb-4"
      variants={staggerContainer}
    >
      <motion.h3 
        className="text-xl font-semibold text-purple-500"
        variants={scaleOnHover}
      >
        {role}
      </motion.h3>
      <motion.p 
        className="text-gray-400"
        variants={fadeInUp}
      >
        {company}
      </motion.p>
      <motion.p 
        className="text-sm text-gray-500"
        variants={fadeInUp}
      >
        {period}
      </motion.p>
    </motion.div>
    <motion.ul 
      className="space-y-2"
      variants={staggerContainer}
    >
      {achievements.map((achievement, index) => (
        <motion.li 
          key={index} 
          className="flex items-start gap-2"
          variants={fadeInUp}
        >
          <span className="text-purple-500">•</span>
          <span className="text-gray-300">{achievement}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const Experience = () => {
  const skills: Record<string, Skill[]> = {
    "Programming Languages": [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "OOPs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PL/SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ],
    "Web Technologies": [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
    ],
    "Computer Science": [
      { name: "Data Structures", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "OOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Operating Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "SDLC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ],
    "Tools & Platforms": [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MS Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" }
    ],
    "Soft Skills": [
      { name: "Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/4133/4133589.png" },
      { name: "Critical Thinking", icon: "https://cdn-icons-png.flaticon.com/512/2797/2797387.png" },
      { name: "Communication", icon: "https://cdn-icons-png.flaticon.com/512/745/745205.png" },
      { name: "Attention to Detail", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149677.png" }
    ]
  };

  const experiences = [
    {
      role: "OGL Developer",
      company: "Oracle",
      period: "Dec 2025 - Present",
      achievements: [
        "OGL Developer at Oracle | Transforming User Experiences Through Guided Learning.",
        "Built step-by-step guides for complex Oracle application processes, reducing dependency on external documentation and training.",
        "Performed testing and validation of guided learning flows to ensure accuracy, usability, and seamless integration with Oracle applications.",
        "Followed best practices for digital adoption, ensuring consistency, clarity, and reusability of OGL assets."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "PointCross Life Sciences Pvt Ltd",
      period: "Oct 2023 - Feb 2024",
      achievements: [
        "Developed Java/SQL features for EData Validator client project with Azure integration.",
        "Demonstrated strong self-motivation by quickly learning new technologies independently.",
        "Contributed to production-ready software development in professional team environment."
      ]
    }
  ];

  return (
    <motion.section 
      className="py-16 px-4 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        variants={fadeInUp}
      >
        Experience & Skills
      </motion.h2>
      
      {/* Experience Section */}
      <motion.div 
        className="mb-16 space-y-6"
        variants={staggerContainer}
      >
        <motion.h3 
          className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white"
          variants={fadeInUp}
        >
          Professional Experience
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={staggerContainer}>
        <motion.h3 
          className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white"
          variants={fadeInUp}
        >
          Technical Skills
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCard key={category} title={category} skills={skillList} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;


