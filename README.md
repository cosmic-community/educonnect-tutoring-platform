# EduConnect Tutoring Platform

![App Preview](https://imgix.cosmicjs.com/eddf5450-a044-11ed-81f2-f50e185dd248-rAHEjUB-L6c.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, fast-loading Astro website for an online tutoring service, featuring expert tutors, comprehensive subjects, student testimonials, and flexible payment options. Built for performance and SEO optimization.

## Features

✨ **Expert Tutor Profiles** - Comprehensive tutor information with qualifications, experience, and teaching methods  
📚 **Subject Catalog** - Detailed subject listings with pricing structures and difficulty levels  
⭐ **Student Testimonials** - Authentic reviews with star ratings and achievement stories  
💳 **Payment Options** - Multiple secure payment methods with processing information  
🚀 **Lightning Fast** - Built with Astro for exceptional performance and SEO  
📱 **Fully Responsive** - Optimized for all devices and screen sizes  
🔍 **SEO Optimized** - Built-in meta tags and structured data for search engines

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68d797bae4b13704227fbabb&clone_repository=68d79bf7e4b13704227fbaec)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for an "Online Tutoring Service" website with brief description of teaching methods implemented, subjects taught, course fee structure, tuition fee / hour,  payment methods, and testimonials by our happy and successful students."

### Code Generation Prompt

> Set up an Astro website powered by my existing content

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Astro** - Modern static site generator for optimal performance
- **TypeScript** - Type-safe development environment
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Cosmic CMS** - Headless CMS for content management
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling capabilities

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd educonnect-tutoring-platform
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   ```

4. **Start the development server**
   ```bash
   bun run dev
   ```

5. **Build for production**
   ```bash
   bun run build
   ```

## Cosmic SDK Examples

### Fetching Tutors with Subjects
```typescript
const tutors = await cosmic.objects
  .find({ type: 'tutors' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

console.log(tutors.objects);
```

### Getting Subject Details
```typescript
const subjects = await cosmic.objects
  .find({ type: 'subjects' })
  .props(['id', 'title', 'slug', 'metadata']);

console.log(subjects.objects);
```

### Retrieving Testimonials
```typescript
const testimonials = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

console.log(testimonials.objects);
```

## Cosmic CMS Integration

This application integrates with your Cosmic CMS content structure:

- **Tutors** - Profile information, qualifications, subjects taught, and availability
- **Subjects** - Course details, pricing structures, and difficulty levels  
- **Testimonials** - Student reviews with ratings and achievements
- **Payment Methods** - Accepted payment options with processing details

All content is dynamically fetched from your Cosmic bucket and rendered with optimal performance using Astro's static site generation capabilities.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in project settings
3. Deploy automatically on git push

### Netlify
1. Connect your repository to Netlify
2. Add environment variables in site settings  
3. Deploy with automatic builds

### Other Platforms
This Astro application can be deployed to any static hosting platform that supports Node.js builds.

Remember to set your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`) in your hosting platform's dashboard.

<!-- README_END -->