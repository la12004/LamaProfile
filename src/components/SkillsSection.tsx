import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Code, 
  Database, 
  BarChart2, 
  Palette,
  FileCode,
  Braces,
  Server,
  LineChart,
  PieChart,
  Figma,
  Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Palette },
      { name: 'JavaScript', icon: Braces },
      { name: 'React', icon: Code },
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    skills: [
      { name: 'Python', icon: Code },
      { name: 'Java', icon: Braces },
      { name: 'C++', icon: FileCode },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'MySQL', icon: Server },
      { name: 'Oracle', icon: Database },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart2,
    skills: [
      { name: 'Power BI', icon: PieChart },
      { name: 'Tableau', icon: LineChart },
      { name: 'Excel', icon: BarChart2 },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: [
      { name: 'Figma', icon: Figma },
      { name: 'Canva', icon: Layers },
      { name: 'UI/UX', icon: Palette },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle mx-auto">
              Technical skills I've developed through academic studies and personal projects
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="glass-card p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors group"
                    >
                      <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
