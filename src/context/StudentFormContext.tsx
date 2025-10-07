import React, { createContext, useContext, useState } from "react";

const defaultValues = {
    username: "",
    age: "",
    institution: "",
    gender: "",
    year_of_study: "",
    about_student: "",
};

type StudentFormType = typeof defaultValues;

interface StudentFormContextType {
    values: StudentFormType;
    updateValues: (newData: Partial<StudentFormType>) => void;
}

const StudentFormContext = createContext<StudentFormContextType | null>(null);

export function StudentFormProvider({ children }: { children: React.ReactNode }) {
    const [values, setValues] = useState<StudentFormType>(defaultValues);

    const updateValues = (newData: Partial<StudentFormType>) =>
        setValues(prev => ({ ...prev, ...newData }));

    return (
        <StudentFormContext.Provider value={{ values, updateValues }}>
            {children}
        </StudentFormContext.Provider>
    );
}

export const useStudentForm = () => {
    const context = useContext(StudentFormContext);
    if (!context) {
        throw new Error("useStudentForm must be used within a StudentFormProvider");
    }
    return context;
};
