export interface CourseCardProps {
    id: string
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
    variant: string
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