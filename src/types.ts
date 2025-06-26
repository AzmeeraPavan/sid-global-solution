import React from 'react';

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  imageUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export interface ProductItem {
  id: string;
  icon: React.ReactNode;
  name: string;
  tagline?: string;
  subheading?: string;
  description: string;
}

export interface CareerPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ReferralFormData {
  candidateName: string;
  candidateEmail: string;
  jobPosition: string;
  referralName: string;
}

export interface ClientItem {
  name: string;
  description: string;
}

export interface LocationItem {
  name: string;
  address: string;
  icon?: React.ReactNode;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}
