import { motion } from 'motion/react';
import {  FileText, Eye } from 'lucide-react';
import { GradientText } from '../atoms/GradientText';

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
    title: 'Meta React Developer Certification',
    description: 'Verified completion of React fundamentals, component patterns, and modern frontend best practices.',
    fileName: 'Meta-React-Developer.pdf',
    fileType: 'application/pdf',
    fileUrl: '/images/js.png',
  },
  {
    id: 2,
    title: 'Full-Stack Web Development Certificate',
    description: 'Demonstrated expertise in building responsive applications using React, Node.js, and modern tooling.',
    fileName: 'fullstack-web-dev.pdf',
    fileType: 'application/pdf',
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
      {
    id: 4,
    title: 'Network Security Certificate',
    description: 'Demonstrated expertise in building responsive applications using React, Node.js, and modern tooling.',
    fileName: 'network-security.pdf',
    fileType: 'application/pdf',
    fileUrl: '/images/cisco.pdf',
  }
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
    <section id="certificates" className="py-24 px-6 bg-[#F8F9FB] relative overflow-hidden">
      <div className="absolute top-0 left-10 w-72 h-72 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gradient-to-br from-[#059669]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates <GradientText variant="emerald-teal">Showcase</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated list of my earned certifications with title, description, and quick access to view each credential.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-[#E0E7FF] px-4 py-3 text-sm font-semibold text-[#4338CA]">
                    <FileText className="w-5 h-5" />
                    <span>{certificate.fileName}</span>
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-3xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10">
                    {certificate.fileType.startsWith('image/') ? (
                      <img src={certificate.fileUrl} alt={certificate.title} className="w-full h-full object-cover rounded-3xl" />
                    ) : (
                      <FileText className="w-6 h-6 text-[#2563EB]" />
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{certificate.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{certificate.description}</p>

                <button
                  type="button"
                  onClick={() => openCertificate(certificate)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1E40AF] transition"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
