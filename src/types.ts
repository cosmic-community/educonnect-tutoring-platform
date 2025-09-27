// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Tutor interface
export interface Tutor extends CosmicObject {
  type: 'tutors';
  metadata: {
    full_name?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    qualifications?: string;
    experience_years?: number;
    hourly_rate?: number;
    subjects?: Subject[];
    teaching_methods?: string;
    availability_status?: {
      key: string;
      value: string;
    };
  };
}

// Subject interface
export interface Subject extends CosmicObject {
  type: 'subjects';
  metadata: {
    subject_name?: string;
    subject_icon?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    difficulty_level?: {
      key: string;
      value: string;
    };
    fee_structure?: string;
    session_duration?: number;
    is_popular?: boolean;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    student_name?: string;
    student_photo?: {
      url: string;
      imgix_url: string;
    };
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    subject_studied?: Subject;
    tutor?: Tutor;
    achievement?: string;
    is_featured?: boolean;
  };
}

// Payment Method interface
export interface PaymentMethod extends CosmicObject {
  type: 'payment-methods';
  metadata: {
    method_name?: string;
    payment_icon?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    processing_fee?: number;
    processing_time?: string;
    is_available?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isTutor(obj: CosmicObject): obj is Tutor {
  return obj.type === 'tutors';
}

export function isSubject(obj: CosmicObject): obj is Subject {
  return obj.type === 'subjects';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isPaymentMethod(obj: CosmicObject): obj is PaymentMethod {
  return obj.type === 'payment-methods';
}