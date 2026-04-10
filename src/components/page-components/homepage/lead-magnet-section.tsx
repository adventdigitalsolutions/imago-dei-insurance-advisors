'use client';

import { useState } from 'react';
import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';

type FormState = 'idle' | 'open' | 'submitting' | 'success' | 'error';

export const LeadMagnetSection = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setFormState('open');
        return;
      }

      setFormState('success');
      // Trigger auto-download
      const link = document.createElement('a');
      link.href = '/free-guide.pdf';
      link.download = 'Imago-Dei-Free-Guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setFormState('open');
    }
  };

  const closeModal = () => {
    setFormState('idle');
    setName('');
    setEmail('');
    setErrorMsg('');
  };

  return (
    <>
      {/* Modal overlay */}
      {(formState === 'open' ||
        formState === 'submitting' ||
        formState === 'success') && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-ink hover:text-medical-navy transition-colors text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>

            {formState === 'success' ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-lora text-2xl font-bold text-medical-navy mb-3">
                  Check your inbox!
                </h3>
                <p className="text-muted-ink text-[0.95rem] leading-relaxed">
                  Your guide is on its way. Your download should also start
                  automatically — if not,{' '}
                  <a
                    href="/free-guide.pdf"
                    download="Imago-Dei-Free-Guide.pdf"
                    className="text-medical-blue underline underline-offset-2 font-semibold"
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-lora text-2xl font-bold text-medical-navy mb-2">
                  Get instant access
                </h3>
                <p className="text-muted-ink text-[0.9rem] mb-6">
                  Enter your name and email to download the free guide. No spam.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="lm-name"
                      className="text-sm font-semibold text-medical-navy"
                    >
                      Name
                    </label>
                    <input
                      id="lm-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="border border-clinical-border rounded-lg px-4 py-3 text-[0.95rem] text-medical-navy focus:outline-none focus:ring-2 focus:ring-medical-blue/40"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="lm-email"
                      className="text-sm font-semibold text-medical-navy"
                    >
                      Email
                    </label>
                    <input
                      id="lm-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="border border-clinical-border rounded-lg px-4 py-3 text-[0.95rem] text-medical-navy focus:outline-none focus:ring-2 focus:ring-medical-blue/40"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-600 text-[0.875rem]">{errorMsg}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full min-h-12 text-[1rem] mt-1"
                  >
                    {formState === 'submitting'
                      ? 'Sending…'
                      : 'Send Me the Guide'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Section */}
      <div className="bg-gradient-to-r from-navy via-medical-navy to-royal-purple py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase text-pale-blue mb-4">
            {getCopy('leadMagnetSection.eyebrow')}
          </p>
          <h2 className="font-lora text-3xl sm:text-5xl font-bold tracking-[-0.04em] text-white leading-tight mb-6">
            {getCopy('leadMagnetSection.header')}
          </h2>
          <p className="text-[1.05rem] sm:text-[1.15rem] text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            {getCopy('leadMagnetSection.body')}
          </p>
          <div>
            <Button
              variant="deepBlue"
              className="min-h-14 px-8 text-[1.05rem] border border-white/50"
              onClick={() => setFormState('open')}
            >
              {getCopy('leadMagnetSection.buttonText')}
            </Button>
            <p className="mt-3 text-white/55 text-[0.88rem]">
              {getCopy('leadMagnetSection.subNote')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
