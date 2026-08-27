import { motion } from 'motion/react';
import { FileText, Eye } from 'lucide-react';
import { GradientText } from '../atoms/GradientText';
import { HudLabel } from '../atoms/HudLabel';
import { SceneFrame } from '../molecules/SceneFrame';

interface Certificate {
  id: number;
  title: string;
  description: string;
  fileName: string;
  fileType: string;
  fileUrl: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'JS Developer Certification',
    description: 'Verified completion of Js fundamentals, component patterns, and modern frontend best practices.',
    fileName: 'Js-Developer.png',
    fileType: 'image/png',
    fileUrl: '/images/js.png',
  },
  {
    id: 2,
    title: 'Full-Stack Web Development Certificate',
    description: 'Demonstrated expertise in building responsive applications using React, Python and modern tooling.',
    fileName: 'fullstack-web-dev.png',
    fileType: 'image/png',
    fileUrl: '/images/fullstack.png',
  },
  {
    id: 3,
    title: 'Network Security Certificate',
    description: 'Demonstrated expertise in building responsive applications using React, Node.js, and modern tooling.',
    fileName: 'network-security.pdf',
    fileType: 'application/pdf',
    fileUrl: '/images/cisco.pdf',
  },
];

export function Certificates() {
  const openCertificate = (certificate: Certificate) => {
    window.open(
      certificate.fileUrl,
      'certificatePopup',
      'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700'
    );
  };

  return (
    <SceneFrame id="certificates" className="py-24 px-6 bg-secondary/30 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HudLabel align="center" className="mb-4">
            Credentials
          </HudLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates <GradientText variant="emerald-teal">Showcase</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated list of my earned certifications with title, description, and quick access to view each credential.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((certificate, index) => {
            const featured = index === 0;
            return (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative bg-card rounded-3xl border shadow-lg overflow-hidden hover:border-primary/30 transition-colors ${
                  featured ? 'md:col-span-2 border-primary/20 shadow-glow' : 'border-border'
                }`}
              >
                {featured && (
                  <div
                    className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary via-gold to-accent"
                    aria-hidden="true"
                  />
                )}
                <div className={`p-6 md:p-8 ${featured ? 'sm:flex sm:items-center sm:gap-8 pl-8 md:pl-10' : ''}`}>
                  <div
                    className={`flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden shrink-0 mb-4 sm:mb-0 ${
                      featured ? 'w-24 h-24' : 'w-14 h-14'
                    }`}
                  >
                    {certificate.fileType.startsWith('image/') ? (
                      <img src={certificate.fileUrl} alt={certificate.title} className="w-full h-full object-cover" />
                    ) : (
                      <FileText className={featured ? 'w-10 h-10 text-primary' : 'w-6 h-6 text-primary'} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground mb-3">
                      <FileText className="w-3.5 h-3.5 text-primary" />
                      <span>{certificate.fileName}</span>
                    </div>

                    <h3 className={`font-semibold text-foreground mb-3 ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                      {certificate.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{certificate.description}</p>

                    <button
                      type="button"
                      onClick={() => openCertificate(certificate)}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary-dark hover:shadow-glow transition"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
}
