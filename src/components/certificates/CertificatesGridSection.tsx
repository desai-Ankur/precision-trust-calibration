import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  FileText,
  ScrollText,
  Eye,
  Download,
  X,
  Calendar,
  MapPin,
  Hash,
  Building,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const certificates = [
  {
    icon: Award,
    title: "ISO/IEC 17025:2017 Accreditation",
    description:
      "International standard accreditation certifying our laboratory competence for calibration testing.",
    color: "primary",
    details: [
      { icon: Building, label: "Organization", value: "IQCL Instrument Quality Calibration LLP" },
      { icon: ScrollText, label: "Standard", value: "ISO/IEC 17025:2017" },
      { icon: MapPin, label: "Location", value: "416 Maruti Plaza, Sardar Chowk, Krushnanagar, Naroda, Ahmedabad" },
      { icon: FileText, label: "Field", value: "Calibration" },
      { icon: Hash, label: "Certificate No.", value: "CC-2683" },
      { icon: Calendar, label: "Issue Date", value: "02/11/2024" },
    ],
    pdfUrl:
      "https://drive.google.com/file/d/1BI-kfrC5wJftLigowHU91WYQpgiZ9LDU/preview",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1BI-kfrC5wJftLigowHU91WYQpgiZ9LDU",
  },
  {
    icon: FileText,
    title: "GST Certificate",
    description:
      "Goods & Services Tax registration certificate validating our legal business operations.",
    color: "accent",
    details: [
      { icon: Hash, label: "GST Number", value: "24AAKFI4315G1ZM" },
      { icon: ScrollText, label: "Registration Type", value: "GST Registered Entity" },
      { icon: CheckCircle, label: "Status", value: "Active" },
    ],
    pdfUrl:
      "https://drive.google.com/file/d/1BI-kfrC5wJftLigowHU91WYQpgiZ9LDU/preview",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1BI-kfrC5wJftLigowHU91WYQpgiZ9LDU",
  },
  {
    icon: ScrollText,
    title: "Scope of Accreditation",
    description:
      "Detailed scope document outlining our comprehensive calibration capabilities and parameters.",
    color: "success",
    details: [
      { icon: ScrollText, label: "Standard", value: "ISO/IEC 17025:2017" },
      { icon: Hash, label: "Certificate No.", value: "CC-2683" },
      { icon: FileText, label: "Scope", value: "Comprehensive calibration services" },
      { icon: Calendar, label: "Validity", value: "As per accreditation body" },
    ],
    pdfUrl:
      "https://drive.google.com/file/d/1BI-kfrC5wJftLigowHU91WYQpgiZ9LDU/preview",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1BI-kfrC5wJftLigowHU91WYQpgiZ9LDU",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    glow: "group-hover:shadow-[0_8px_40px_-8px_hsl(210_70%_35%_/_0.25)]",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    glow: "group-hover:shadow-[0_8px_40px_-8px_hsl(195_85%_45%_/_0.25)]",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    border: "border-success/20",
    glow: "group-hover:shadow-[0_8px_40px_-8px_hsl(155_70%_40%_/_0.25)]",
  },
};

export const CertificatesGridSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [viewPdf, setViewPdf] = useState<string | null>(null);
  const [viewTitle, setViewTitle] = useState("");

  return (
    <>
      <section className="py-20 lg:py-28 bg-background relative" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => {
              const colors = colorMap[cert.color];
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`group relative rounded-2xl border ${colors.border} bg-card p-8 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated ${colors.glow}`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <cert.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Title & desc */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>

                  {/* Details list */}
                  <div className="space-y-3 flex-1">
                    {cert.details.map((d) => (
                      <div key={d.label} className="flex items-start gap-3">
                        <d.icon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {d.label}
                          </span>
                          <p className="text-sm text-foreground font-medium break-words">{d.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        setViewTitle(cert.title);
                        setViewPdf(cert.pdfUrl);
                      }}
                    >
                      <Eye className="w-4 h-4" /> View PDF
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" /> Download
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      <Dialog open={!!viewPdf} onOpenChange={() => setViewPdf(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="font-display text-lg">{viewTitle}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 p-4 pt-2 h-full">
            {viewPdf && (
              <motion.iframe
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={viewPdf}
                className="w-full h-[calc(85vh-80px)] rounded-lg border border-border"
                allow="autoplay"
                title="PDF Preview"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
