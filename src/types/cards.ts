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

  export interface InfoCardProps {
    image: string;
    title: string;
    description?: string;
    imageAlt?: string;
  }
  export  interface TeamMember {
    id: number
    name: string
    title: string
    image: string
}
export interface VisitData {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}


export interface VisitsCardProps {
  visitData: VisitData;
  isLeft?: boolean;
}

export interface BackendCardProps {
  courseTitle: string
  startDate: string
  duration: string
  price: string
  instructorName: string
  instructorImage: string
  image: string
}
