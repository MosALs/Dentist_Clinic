export interface Patient{
    position: number;
    name: string;
    age: number;
    address: string;
    mobile: string;
    homePhone: string;
    job: string;
    trustedPersonMobile: string;
    anyPreviousSurgical: string;
    diseaseState: string;
    medicalProblems: string;
    anyCureSensitivity: string;
    sensitivityCureName: string;
    gender: string;
    pregnant?: boolean;
    pregnantMonth?: number;
    breastFeeding?: boolean;

}
