import React, { useState } from 'react';
import Button from '../components/common/Button';
import { ReferralFormData } from '../types';
import ChatBot from '../components/ChatBot';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ReferFriendPage: React.FC = () => {
  const initialFormState: ReferralFormData = {
    candidateName: '',
    candidateEmail: '',
    jobPosition: '',
    referralName: '',
  };

  const [formData, setFormData] = useState<ReferralFormData>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<ReferralFormData>>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<ReferralFormData> = {};
    if (!formData.candidateName.trim()) newErrors.candidateName = 'Candidate Name is required';
    if (!formData.candidateEmail.trim()) {
      newErrors.candidateEmail = 'Candidate Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.candidateEmail)) {
      newErrors.candidateEmail = 'Candidate Email is invalid';
    }
    if (!formData.jobPosition.trim()) newErrors.jobPosition = 'Job Position is required';
    if (!formData.referralName.trim()) newErrors.referralName = 'Your Name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof ReferralFormData]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    if (apiError) setApiError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/referafriend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = `API Error: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (_) {}
        throw new Error(errorMessage);
      }

      console.log('Referral data submitted successfully:', formData);
      setIsSubmitted(true);
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      console.error('Failed to submit referral:', error);
      setApiError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReferAnother = () => {
    setIsSubmitted(false);
    setApiError(null);
    setFormData(initialFormState);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="py-12 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Referral Submitted!</h1>
        <p className="text-lg text-slate-300 mb-8">
          Thank you for referring a candidate. We appreciate your help in growing our team.
        </p>
        <Button onClick={handleReferAnother} variant="primary" size="lg">
          Refer Another Candidate
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Refer a <span className="text-blue-500">Friend</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          Know someone who would be a great fit for our team? Let us know!
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-slate-800 p-8 sm:p-10 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Candidate Name */}
          <div>
            <label htmlFor="candidateName" className="block text-sm font-medium text-slate-300 mb-1">
              Candidate Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="candidateName"
              id="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.candidateName}
              aria-describedby={errors.candidateName ? "candidateName-error" : undefined}
              className={`mt-1 block w-full px-3 py-2 bg-slate-700 border ${errors.candidateName ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white`}
            />
            {errors.candidateName && (
              <p id="candidateName-error" className="mt-1 text-xs text-red-400">{errors.candidateName}</p>
            )}
          </div>

          {/* Candidate Email */}
          <div>
            <label htmlFor="candidateEmail" className="block text-sm font-medium text-slate-300 mb-1">
              Candidate Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="candidateEmail"
              id="candidateEmail"
              value={formData.candidateEmail}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.candidateEmail}
              aria-describedby={errors.candidateEmail ? "candidateEmail-error" : undefined}
              className={`mt-1 block w-full px-3 py-2 bg-slate-700 border ${errors.candidateEmail ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white`}
            />
            {errors.candidateEmail && (
              <p id="candidateEmail-error" className="mt-1 text-xs text-red-400">{errors.candidateEmail}</p>
            )}
          </div>

          {/* Job Position */}
          <div>
            <label htmlFor="jobPosition" className="block text-sm font-medium text-slate-300 mb-1">
              Job Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="jobPosition"
              id="jobPosition"
              value={formData.jobPosition}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.jobPosition}
              aria-describedby={errors.jobPosition ? "jobPosition-error" : undefined}
              className={`mt-1 block w-full px-3 py-2 bg-slate-700 border ${errors.jobPosition ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white`}
            />
            {errors.jobPosition && (
              <p id="jobPosition-error" className="mt-1 text-xs text-red-400">{errors.jobPosition}</p>
            )}
          </div>

          {/* Referrer Name */}
          <div>
            <label htmlFor="referralName" className="block text-sm font-medium text-slate-300 mb-1">
              Your Name (Referrer) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="referralName"
              id="referralName"
              value={formData.referralName}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.referralName}
              aria-describedby={errors.referralName ? "referralName-error" : undefined}
              className={`mt-1 block w-full px-3 py-2 bg-slate-700 border ${errors.referralName ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white`}
            />
            {errors.referralName && (
              <p id="referralName-error" className="mt-1 text-xs text-red-400">{errors.referralName}</p>
            )}
          </div>

          {/* API error */}
          {apiError && (
            <p className="text-sm text-red-400 bg-red-900/30 p-3 rounded-md border border-red-700">
              {apiError}
            </p>
          )}

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full !bg-blue-600 hover:!bg-blue-700 focus:!ring-blue-500 font-bold"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit Referral'}
            </Button>
          </div>
        </form>
      </div>
      <ChatBot/>n
    </div>
  );vv
};

export default ReferFriendPage;
