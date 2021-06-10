import { CustomLabelsModel } from './customLabelsModel';

export class InstitutionModel {
    id: number;
    name: string;
    currency: string;
    currency_id: string;
    customLabels: CustomLabelsModel;
    country_id: number;
}
