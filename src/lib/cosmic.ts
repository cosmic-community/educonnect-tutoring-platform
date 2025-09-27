import { createBucketClient } from '@cosmicjs/sdk';
import type { 
  CosmicResponse, 
  Tutor, 
  Subject, 
  Testimonial, 
  PaymentMethod 
} from '../types';

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
});

// Error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch tutors with their subjects
export async function getTutors(): Promise<Tutor[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tutors' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Tutor[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch tutors');
  }
}

// Fetch subjects
export async function getSubjects(): Promise<Subject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'subjects' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Subject[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch subjects');
  }
}

// Fetch testimonials with related data
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Fetch payment methods
export async function getPaymentMethods(): Promise<PaymentMethod[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'payment-methods' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as PaymentMethod[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch payment methods');
  }
}

// Fetch featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const testimonials = response.objects as Testimonial[];
    return testimonials.filter(testimonial => testimonial.metadata?.is_featured === true);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured testimonials');
  }
}

// Fetch popular subjects
export async function getPopularSubjects(): Promise<Subject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'subjects' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    const subjects = response.objects as Subject[];
    return subjects.filter(subject => subject.metadata?.is_popular === true);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch popular subjects');
  }
}

// Get single tutor by slug
export async function getTutorBySlug(slug: string): Promise<Tutor | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'tutors', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Tutor;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Get single subject by slug
export async function getSubjectBySlug(slug: string): Promise<Subject | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'subjects', slug })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as Subject;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}