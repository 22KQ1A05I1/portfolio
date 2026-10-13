import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onCopyEmail: () => void;
  onCopyPhone: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, onCopyPhone }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmailLocal, setCopiedEmailLocal] = useState(false);
  const [copiedPhoneLocal, setCopiedPhoneLocal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Pavan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    onCopyEmail();
    setCopiedEmailLocal(true);
    setTimeout(() => setCopiedEmailLocal(false), 2000);
  };

  const handleCopyPhone = () => {
    onCopyPhone();
    setCopiedPhoneLocal(true);
    setTimeout(() => setCopiedPhoneLocal(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Discuss Opportunities
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            I am currently open to full-time Java Developer, Spring Boot, and Full Stack software engineering opportunities. Reach out via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Availability Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Methods */}
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact Details
              </h3>

              <div className="space-y-4 text-xs">
                {/* Email card */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-500 dark:text-slate-400">Direct Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmailLocal ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-500 dark:text-slate-400">Mobile Phone</div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-mono"
                      >
                        {personalInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhoneLocal ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location card */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 dark:text-slate-400">Current Location</div>
                    <div className="font-medium text-slate-900 dark:text-slate-200 text-sm">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Professional Networks
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between transition-colors text-xs text-slate-800 dark:text-slate-200 group"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>

                  <a
                    href={personalInfo.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between transition-colors text-xs text-slate-800 dark:text-slate-200 group"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-emerald-800 dark:text-emerald-300">
                  Ready for Immediate Placement
                </div>
                <div className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Available for full-time Java Developer, backend Spring Boot engineer, and full-stack software development roles across Bengaluru and remote setups.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xs">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your details below to compose an inquiry or interview invitation.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Your message was prepared and redirected to your system email client. You can also reach out directly to <strong className="text-slate-900 dark:text-white">{personalInfo.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-slate-700 dark:text-slate-300 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="priya@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-slate-700 dark:text-slate-300 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Collaboration / Interview"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-slate-700 dark:text-slate-300 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, job requirements, or project details..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-600/30 cursor-pointer text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Pavan</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
