import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Zap, BarChart3, TreePalm, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Forest Fire Detection System',
    description: 'AI-based fire detection model using YOLO and computer vision technology for early wildfire prediction and prevention.',
    icon: Flame,
    tags: ['YOLO', 'Computer Vision', 'AI', 'Python','Drone'],
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'VoltPath – Smart Energy Model',
    description: 'Mini project for generating electricity using pressure sensors and piezo systems, exploring sustainable energy solutions.',
    icon: Zap,
    tags: ['IoT', 'Hardware', 'Sensors', 'Energy'],
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    title: 'Obesity Data Analysis Dashboard',
    description: 'Interactive Tableau dashboard analyzing lifestyle and health factors affecting obesity patterns in populations.',
    icon: BarChart3,
    tags: ['Tableau', 'Data Analysis', 'Visualization'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Palm Tree Issue Detection',
    description: 'AI-powered solution for detecting palm tree diseases and providing treatment recommendations using image classification.',
    icon: TreePalm,
    tags: ['AI', 'Image Classification','Drone', 'Agriculture'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto">
              A selection of projects I've worked on during my studies and hackathons
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full card-hover border-border/50 overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="font-display text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
