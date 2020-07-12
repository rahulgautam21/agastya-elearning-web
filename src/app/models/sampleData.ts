import { Url, UrlType } from './url.model';
import { sampleContent } from './content.model';
import { Lesson } from './lesson.model';
import { Section } from './section.model';
import { Course, Class } from './course.model';
import { Category } from './category.model';

export const sampleUrl: Url[] = [
  {
    id: 1,
    name: 'Sarga Samvad - Learning Math through Art',
    url: 'https://www.youtube.com/embed/7khyAF6B4IQ',
    type: UrlType.youtube,
  },
  {
    id: 2,
    name: 'Ramanujan Math Park',
    url: 'https://www.youtube.com/embed/8TnvDmxLQxg',
    type: UrlType.youtube,
  },
  {
    id: 3,
    name: 'Photosynthesis - Hindi',
    url: 'assetsscromsPhotosynthesis - Lesson - Hindistory.html',
    type: UrlType.animation,
  },

  {
    id: 3,
    name: 'Photosynthesis - Quiz',
    url: 'assetsscromsPhotosynthesis - PreQuiz - Hindistory.html',
    type: UrlType.animation,
  },
];

export const sampleLessons: Lesson[] = [
  {
    id: 1,
    name: 'Numbers 1 to 12',
    description: '',
    sequence: 1,
    content: [sampleContent[0]],
    animationUrl: [sampleUrl[3], sampleUrl[2]],
    youtubeUrl: [sampleUrl[0], sampleUrl[1]],
    updated_at: new Date(),
    created_at: new Date(),
  },

  {
    id: 2,
    name: 'Algebra',
    description: '',
    sequence: 2,
    content: [sampleContent[1]],
    animationUrl: [sampleUrl[3], sampleUrl[2]],
    youtubeUrl: [sampleUrl[0], sampleUrl[1]],
    updated_at: new Date(),
    created_at: new Date(),
  },
];

export const sampleSections: Section[] = [
  {
    id: 1,
    name: 'Numbers',
    description: '',
    sequence: 1,
    lessons: sampleLessons,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Geometry',
    description: '',
    sequence: 2,
    lessons: sampleLessons,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export const sampleCourses: Course[] = [
  {
    id: 1,
    teachers: ['M L Khanna', 'H Tripathi'],
    sections: sampleSections,
    name: 'Maths for Class 1',
    description: 'Maths for Class 1',
    requirements: 'Maths for UKG',
    objectives: 'Numbers, Geometry',
    likes: 2,
    categories: [],
    content: sampleContent,
    language: 'Hindi',
    class: Class.Class_1,
    image: sampleContent[0],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    teachers: ['M L Khanna', 'H Tripathi'],
    sections: sampleSections,
    name: 'Maths for Class 2',
    description: 'Maths for Class 2',
    requirements: 'Maths for Class 1',
    objectives: 'Numbers, Geometry',
    likes: 2,
    categories: [],
    content: sampleContent,
    language: 'Hindi',
    class: Class.Class_2,
    image: sampleContent[0],
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export const sampleCategories: Category[] = [
  {
    id: 1,
    name: 'Math',
    description: 'Mathematics',
    courses: sampleCourses,
    image: sampleContent[0],
    featuredCourse: sampleCourses[0],
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Science',
    description: 'Science',
    courses: sampleCourses,
    image: sampleContent[1],
    featuredCourse: sampleCourses[1],
    updated_at: new Date(),
  },
];
