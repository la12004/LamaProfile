import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Code, Sparkles, BarChart3 } from 'lucide-react';
import certMicrosoft from '@/assets/cert-microsoft.jpg';
import certFrontend from '@/assets/cert-frontend.jpg';
import certAiHackathon from '@/assets/cert-ai-hackathon.jpg';
import certPowerbi from '@/assets/cert-powerbi.jpg';
import certAsirHackathon from '@/assets/cert-asir-hackathon.jpg';

const trainings = [
  {
    title: 'Microsoft Office Specialist Training',
    description: '30 hours professional certification program covering Excel, Word, and PowerPoint mastery.',
    icon: Award,
    image: certMicrosoft,
  },
  {
    title: 'Front-End Development Training',
    description: '120 hours intensive training program in HTML, CSS, JavaScript, and modern frameworks.',
    icon: Code,
    image: certFrontend,
  },
  {
    title: 'AI & Cloud Computing Hackathon',
    description: '2024 National innovation event participant, developing AI-powered solutions.',
    icon: Sparkles,
    image: certAiHackathon,
  },
  {
    title: 'Power BI Fundamentals Training',
    description: 'Data visualization and analytics certification for business intelligence.',
    icon: BarChart3,
    image: certPowerbi,
  },
  {
    title: 'Asir Hackathon',
    description: 'Regional tech competition participant, collaborating on innovative solutions.',
    icon: Trophy,
    image: certAsirHackathon,
  },
];

const TrainingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="training" className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Training & Hackathons</h2>
            <p className="section-subtitle mx-auto">
              Professional development and competition participation
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group rounded-xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={training.image}
                    alt={training.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <training.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground leading-tight">
                      {training.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-12">
                    {training.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
