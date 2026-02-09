import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-12">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto">
              I'm currently looking for internship opportunities. Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a
                href="mailto:lama.alshehrii3i@gmail.com"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-background hover:bg-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Email Me</span>
              </a>

              <a
                href="https://x.com/lama2090400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-background hover:bg-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Twitter className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Twitter / X</span>
              </a>
            </div>

            <p className="text-muted-foreground mb-6">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

                  </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
