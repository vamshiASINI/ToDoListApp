export class BillCurrentPlanBillListModel {
    id: number;
    license_address_id: number;
    billing_address_id: number;
    bill_paid_status_id: number;
    bill_paid_status: string;
    institution_id: number;
    bill_paid_by_email: string;
    bill_number: string;
    bill_date: Date;
    licence_student: number;
    licence_employee: number;
    discount_percent: number;
    plan_name: string;
    plan_duration_id: number;
    promocode_added: boolean;
    promocode_name: string;
    promocode_discount_percent: number;
    promocode_max_limit: number;
    valid_till: Date;
    is_active: boolean;
}
