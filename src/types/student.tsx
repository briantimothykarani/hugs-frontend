export interface Student {
    id?: number;
    username: string;
    email: string;
    age: number;
    institution: string;
    gender: 'M' | 'F';
    year_of_study: number;
    admission_year: number;
    about_student?: string;
}