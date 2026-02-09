import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, BarChart3, Cloud } from 'lucide-react';

const interests = [
  { icon: Code2, label: 'Web Development' },
  { icon: BarChart3, label: 'Data Analytics' },
  { icon: Cloud, label: 'Cloud Computing' },
  { icon: GraduationCap, label: 'Artificial Intelligence' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="section-title">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="glass-card p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a dedicated Computer Information Systems student with a strong foundation in 
              both technical and analytical skills. My academic journey has equipped me with 
              comprehensive knowledge in software development, database management, and data analysis.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Currently pursuing my degree with an expected graduation in 2026, I am actively 
              developing my expertise in front-end web development while exploring the fascinating 
              world of data analytics and artificial intelligence.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
                Areas of Interest
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex flex-col items-center p-4 rounded-xl bg-background hover:bg-accent/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
