export interface CourseCardProps {
  id: number
  name: string
  description: string
  photo: string
  detailsUrl: string
  subtitle: string
  about: string
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
  id?: number
  name: string
  level: string
  photo: string
  socialLinks?: {
    instagram?: string
    facebook?: string
    twitter?: string
    telegram?: string
  }
}
export type teacher = {
  teacherData: TeamMemberCardProps[]
};

export interface InfoCardProps {
  image: string;
  title: string;
  description?: string;
  imageAlt?: string;
}
export interface TeamMember {
  id: number
  name: string
  level: string
  photo: string
}
export interface VisitData {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}


export interface VisitsCardProps {
  visitData: {
    id: number;
    full_name: string;
    date: string;
    description: string;
    photo: string;
  };
  isLeft?: boolean;
}

export interface BackendCardProps {
  courseTitle: string
  start_date: string
  duration: string
  price: number
  instructorName: string
  instructorImage: string
  photo: string
  image: string
}

export interface Coursepage{
  course:BackendCardProps[]
}

export interface BestStudent {
  course_name: string
  description: string
  full_name: string
  id?: number
  photo: string,
  readMoreUrl? : string
  readMoreText? :string,
}

export interface IProps {
  about: string
  course_duration: number
  description: string
  format: string
  id: number
  lesson_count: number
  lesson_duration: number
  name: string
  photo: string
  subtitle: string
  teachers: any[]
}

export type CoursesProps = {
  courseData: IProps[];
};

export type Teacher = {
  id: number;
  name: string;
  photo: string;
  level: string;
};

export type Course = {
  id?: number;
  name?: string;
  subtitle?: string;
  about?: string;
  description?: string;
  format?: string;
  course_duration?: number;
  lesson_count?: number;
  lesson_duration?: number;
  photo?: string;
  teachers?: Teacher[];
};

export type CourseId ={
  course :CourseId[]
}