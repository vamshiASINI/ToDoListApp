export class GeneralSettingsModel {

    id: number;
    plan_set_module_id: number;
    institution_group_profile_id: number;
    name: string;
    phone: string;
    phone_dialing_code_id: number;
    email: string;
    www_url: string;
    institution_type_global_id: number;
    start_day_of_the_week: number;
    date_format_id: number;
    language_id: number;
    currency_id: number;
    time_zone_id: number;
    country_id: number;
    upload_logo: string;
    upload_institute: string;
    student_admission_auto: boolean;
    prefix_counter_employee: string;
    enable_auto_employee: boolean;
    prefix_counter_student: string;
    enable_auto_student: boolean;
    enable_sibling: boolean;
    enable_roll_number_for_student: boolean;
    is_active: boolean;

}
