export class BillCurrentValidityModel {
    id: number;
    plan_name: string;
    institution_id: boolean;
    licence_used_student: boolean;
    licence_used_employee: boolean;
    licence_student: boolean;
    licence_employee: boolean;
    valid_till: Date;
    is_active: boolean;
}