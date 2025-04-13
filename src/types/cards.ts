export interface CourseCardProps {
    id: number
    title: string
    description: string
    imageUrl: string
    detailsUrl: string
    text: string
  }

 export interface FeatureCardProps {
    title: string
    description: string
    highlight: string
    iconSrc: string
    variant: any
  }
  

  export interface StudentTestimonialCardProps {
    name: string
    course: string
    testimonial: string
    imageSrc: string
    readMoreUrl?: string
    readMoreText?: string
  }

 export interface TeamMemberCardProps {
    name: string
    position: string
    imageSrc: string
    socialLinks: {
      instagram?: string
      facebook?: string
      twitter?: string
      telegram?: string
    }
  }

  export interface InfoCardProps {
    image: string;
    title: string;
    description?: string;
    imageAlt?: string;
  }