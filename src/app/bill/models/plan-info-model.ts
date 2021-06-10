import { PlanPriceResponseModel } from './plan-price-response-model';

export class PlanInfoModel {
    onboarded: boolean;
    set: number;
    plan: string;
    trial: boolean;
    price: PlanPriceResponseModel[];
}
