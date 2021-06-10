import { FacultyTypeModel } from './faculty-type-model';
export class FacultyTypeResponseModel {
    count: number;
    next: string;
    previous: string;
    results: FacultyTypeModel[];
}
