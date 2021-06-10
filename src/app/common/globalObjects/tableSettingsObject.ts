import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class tableSettingsObject {
    customLable: any = {};
    constructor(private _authService: AuthService) {
        this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
        console.log(this._authService.getInstituteDetails())
    }

    facultyType = {
        fields: [
            { name: 'name', type: 'text', text: 'Faculty Type Name' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true }
        ],
        isConditionalDelete: { apiUrl: 'employee/faculty-type-grade/?', apiSearchKey: 'faculty_type_id__in', messageText: 'Faculty type can\'t be deleted as faculty type grade already exist with selected faculty type.' },
        apiUrl: 'employee/faculty-type/',
        title: 'Faculty Type',
        formData: {}
    }

    facultyTypeGrade = {
        fields: [
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
            { name: 'name', type: 'text' },
            { name: 'max_no_class', type: 'number' },
            { name: 'min_no_class', type: 'number' },
            { name: 'faculty_type_id', type: 'autoComplete', text: 'Faculty Type', optional: true, isTableHidden: true, dataSourceUrl: 'employee/faculty-type/', dataSourceValue: 'name', dataSourceKey: 'faculty_type_id', isAddAllow: true, addObjectKey: 'facultyType' },
            { name: 'faculty_type', type: 'autoComplete', text: 'Faculty Type', isFormHidden: true, dataSourceUrl: 'employee/faculty-type/', dataSourceValue: 'name', dataSourceKey: 'faculty_type_id' },
            { name: 'description', type: 'textarea', optional: true },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true }
        ],
        isConditionalDelete: { apiUrl: 'employee/employee/?', apiSearchKey: 'faculty_type_grade_id__in', messageText: 'Faculty type grade can\'t be deleted as an employee already exist with selected faculty type grade.' },
        apiUrl: 'employee/faculty-type-grade/',
        title: 'Faculty Grades',
        formData: {}

    }

    hrSettingsCustomsFields = {
        fields: [
            { name: 'name', type: 'text' },
            { name: 'input_type_id', type: 'select', text: 'Input Type', isTableHidden: true, optional: true, dataSource: [{ value: 1, name: 'TEXT', icon: 'text_fields' }, { value: 2, name: 'NUMBER', icon: 'repeat_one' }, { value: 3, name: 'CHECKBOX', icon: 'check_box' }, { value: 4, name: 'SELECT', icon: 'unfold_more' }] },
            { name: 'input_type', type: 'select', isFormHidden: true, optional: true, dataSource: [{ value: 1, name: 'TEXT', icon: 'text_fields' }, { value: 2, name: 'NUMBER', icon: 'repeat_one' }, { value: 3, name: 'CHECKBOX', icon: 'check_box' }, { value: 4, name: 'SELECT', icon: 'unfold_more' }] },
            { name: 'is_mandatory', text: 'Required Field', type: 'boolean', optional: true, defaultValue: false },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'employee/employee-hr-setting-custom-field/',
        title: 'Additional Details (Custom Fields)',
        formData: {}
    }

    leaveGroupInfo = {
        fields: [
            { name: 'leave_group_id', type: 'autoComplete', text: 'Leave Group', isTableHidden: true, optional: true, dataSourceUrl: 'employee/leave-group/', dataSourceValue: 'name', dataSourceKey: 'leave_group_id', isAddAllow: true, addObjectKey: 'leaveGroups' },
            { name: 'leave_group', type: 'autoComplete', isFormHidden: true, optional: true, dataSourceUrl: 'employee/leave-group/', dataSourceValue: 'name', dataSourceKey: 'leave_group_id' },
            { name: 'leave_type_id', type: 'autoComplete', isTableHidden: true, text: 'Leave Type', optional: true, dataSourceUrl: 'employee/leave-type/', dataSourceValue: 'name', dataSourceKey: 'leave_type_id', isAddAllow: true, addObjectKey: 'leaveType' },
            { name: 'leave_type', type: 'autoComplete', isFormHidden: true, text: 'Leave Type', optional: true, dataSourceUrl: 'employee/leave-type/', dataSourceValue: 'name', dataSourceKey: 'leave_type_id' },
            { name: 'day_number', type: 'number' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
        ],
        apiUrl: 'employee/leave-group-info/',
        title: 'Leave Group Info',
        formData: {},
        deleteFieldName: 'leave_group'
    }

    hrSettingsDocumentTypes = {
        fields: [
            { name: 'file_name', type: 'text' },
            { name: 'type_file_id', type: 'select', text: 'File Type', isTableHidden: true, optional: true, dataSource: [{ value: 1, name: 'PHOTO' }, { value: 2, name: 'PDF' }, { value: 3, name: 'DOCUMENTATION' }, { value: 4, name: 'EXCEL' }, { value: 5, name: 'FILE' }] },
            { name: 'type_file', type: 'select', text: 'File Type', isFormHidden: true, optional: true, dataSource: [{ value: 1, name: 'PHOTO' }, { value: 2, name: 'PDF' }, { value: 3, name: 'DOCUMENTATION' }, { value: 4, name: 'EXCEL' }, { value: 5, name: 'FILE' }] },
            { name: 'is_mandatory', type: 'boolean', optional: true, defaultValue: false },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'employee/employee-hr-setting-custom-file-type/',
        title: 'Documents (Attachments)',
        formData: {},
        deleteFieldName: 'file_name'
    }

    leaveGroups = {
        fields: [
            { name: 'name', type: 'text', text: 'Leave Group Name' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'employee/leave-group/',
        title: 'Leave Group',
        formData: {}
    }

    leaveTypePayment = {
        fields: [
            { name: 'name', type: 'text', text: 'Leave Type' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },

        ],
        apiUrl: 'employee/leave-type-payment/',
        title: 'Leave Type Payment',
        formData: {}
    }

    leaveType = {
        fields: [
            { name: 'name', type: 'text', text: 'Leave Type' },
            // { name: 'leave_type_id', type: 'autoComplete', isTableHidden: true, text: 'Leave Payment Type', optional: true, dataSourceUrl: 'employee/leave-type-payment/', dataSourceValue: 'name', dataSourceKey: 'leave_type_id', isAddAllow: true, addObjectKey: 'leaveTypePayment' },
            // { name: 'leave_type', type: 'autoComplete', isFormHidden: true, text: 'Leave Payment Type', optional: true, dataSourceUrl: 'employee/leave-type-payment/', dataSourceValue: 'name', dataSourceKey: 'leave_type_id' },
            { name: 'code', type: 'text' },
            { name: 'number_of_off_days', type: 'number' },
            { name: 'start_date', type: 'date' },
            { name: 'allow_carry_forward', type: 'boolean', optional: true, defaultValue: true },
            { name: 'maximum_carry_over', type: 'number' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_paid_leave', type: 'boolean', text: 'Paid Leave', optional: true, defaultValue: false },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'employee/leave-type/',
        title: 'Leave Type',
        formData: {}
    }

    employeeDesignation = {
        fields: [
            { name: 'name', type: 'text' },
            { name: 'employee_category_id', type: 'autoComplete', text: 'Employee Category', isTableHidden: true, optional: true, dataSourceUrl: 'employee/employee-category/', dataSourceValue: 'name', dataSourceKey: 'employee_category_id' },
            { name: 'employee_category', type: 'autoComplete', isFormHidden: true, optional: true, dataSourceUrl: 'employee/employee-category/', dataSourceValue: 'name', dataSourceKey: 'employee_category_id' },
            { name: 'description', type: 'textarea', optional: true },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
        ],
        isConditionalDelete: { apiUrl: 'employee/employee/?', apiSearchKey: 'designation_id__in', messageText: 'Employee designation can\'t be deleted as an employee already exist with selected designation.' },
        apiUrl: 'employee/employee-designations/',
        title: 'Employee Designation',
        formData: {}
    }

    employeeDepartment = {
        fields: [
            { name: 'name', type: 'text', text: 'Department Name' },
            { name: 'code', type: 'text' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        isConditionalDelete: { apiUrl: 'employee/employee/?', apiSearchKey: 'department_id__in', messageText: 'Employee department can\'t be deleted as an employee already exist with selected department.' },
        apiUrl: 'employee/employee-departments/',
        title: 'Employee Department',
        formData: {}
    }

    employeeCategory = {
        fields: [
            { name: 'name', type: 'text', text: 'Category Name' },
            { name: 'code', type: 'text' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        isConditionalDelete: { apiUrl: 'employee/employee/?', apiSearchKey: 'category_id__in', messageText: 'Employee category can\'t be deleted as an employee already exist with selected category.' },
        apiUrl: 'employee/employee-category/',
        title: 'Employee Category',
        formData: {}
    }

    academicSession = {
        fields: [
            { name: 'name', type: 'text', text: 'Session Name' },
            { name: 'description', type: 'textarea', optional: true },
            { name: 'start_date', type: 'date', optional: true },
            { name: 'end_date', type: 'date', optional: true },
            { name: 'is_active', type: 'boolean', optional: true, isFormHidden: true, defaultValue: false, isBothCheck: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        isConditionalDelete: { apiUrl: 'academic/batch-or-section/?', apiSearchKey: 'academicSession_id__in', messageText: 'Session can\'t be deleted as batch already exist with selected session.' },
        apiUrl: 'academic/session/',
        title: 'Academic Session',
        formData: {}
    }

    academicSubjects = {
        fields: [
            { name: 'name', type: 'text', text: 'Name' },

            { name: 'description', type: 'text', text: 'Description' },
            { name: 'code', type: 'text', text: 'Code' },


            { name: 'course_or_grade_class_management_id', type: 'autoComplete', text: 'Course', optional: false, isTableHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_or_grade_class_management_id', isAddAllow: true, addObjectKey: 'academicCourseGrade' },
            // { name: 'course_or_grade_class_management', type: 'autoComplete', text: 'Course', isFormHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_or_grade_class_management_id' },


            { name: 'subject_type_global_id', type: 'select', text: 'Type', isTableHidden: true, dataSource: [{ value: 1, nameDef: 'Normal', name: 'Normal change from local', }, { value: 2, nameDef: 'Elective', name: 'Elective change from local', }] },
            { name: 'subject_type_global', type: 'select', text: 'Type', isFormHidden: true, },


            { name: 'classes_per_week', type: 'number', text: 'classes/week' },
            { name: 'credit_hours', type: 'number', text: 'credit/hours' },
            { name: 'course_or_grade_class_management_term_id', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },
            // { name: 'academic_term_value', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },


            { name: 'is_exam', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_activity', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'academic/subject/',
        title: (this.customLable.customLabels && this.customLable.customLabels.normal_subject) ? this.customLable.customLabels.normal_subject : 'Normal Subject',
        formData: {}
    };

    academicSubjectGroup = {
        fields: [
            { name: 'name', type: 'text', text: 'Name' },
            { name: 'subject_list_id', type: 'chip', text: 'Subject List', optional: true, isTableHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'id', isAddAllow: true, addObjectKey: 'AddNormalSubjects', isPreFilter: [{ key: 'subject_type_global_id__in', value: 1 }, { key: 'in_group', value: false }] },
            { name: 'subject_list', type: 'chip', text: 'Course', isFormHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'id' },
            { name: 'course_or_grade_class_management_term_id', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },
            { name: 'number_of_subject', type: 'number', text: 'No. of Subject' },
            { name: 'score_options_id', type: 'autoComplete', text: 'Score', optional: false, isTableHidden: true, dataSourceUrl: 'global/score-option/', dataSourceValue: 'name', dataSourceKey: 'score_options_id', isConditionalCheck: true, conditionalFormula: ['score_options_id', 'batch_mark_calcutation_id', 'hideShow', 1] },
            { name: 'score_options', type: 'autoComplete', text: 'Score', isFormHidden: true, dataSourceUrl: 'global/score-option/', dataSourceValue: 'name', dataSourceKey: 'score_options_id' },
            { name: 'batch_mark_calcutation_id', type: 'autoComplete', text: 'Formula', optional: false, isTableHidden: true, isFormHidden: true, dataSourceUrl: 'global/mark-calculation/', dataSourceValue: 'name', dataSourceKey: 'marks_calculation_formula_id' },
            { name: 'batch_mark_calcutation', type: 'autoComplete', text: 'Formula', isFormHidden: true, dataSourceUrl: 'global/mark-calculation/', dataSourceValue: 'name', dataSourceKey: 'marks_calculation_formula_id' },
            // { name: 'academic_term_value', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },
            { name: 'is_activity', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
        ],
        apiUrl: 'academic/subject-subject-group/',
        title: (this.customLable.customLabels && this.customLable.customLabels.subject_group) ? this.customLable.customLabels.subject_group : 'Subject Groups',
        formData: {}
    };

    academicSubjectElectiveGroup = {
        fields: [
            { name: 'name', type: 'text', text: 'Name' },
            { name: 'subject_list_id', type: 'chip', text: 'Subject List', optional: true, isTableHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'id', isAddAllow: true, addObjectKey: 'AddElectiveSubjects', isPreFilter: [{ key: 'subject_type_global_id__in', value: 2 }, { key: 'in_group', value: false }] },
            { name: 'subject_list', type: 'chip', text: 'Course', isFormHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'id' },
            { name: 'course_or_grade_class_management_term_id', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },
            // { name: 'academic_term_value', type: 'select', isFormHidden: true, isTableHidden: true, defaultValue: '', text: 'Academic Term', dataSource: [] },
            { name: 'is_activity', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
        ],
        apiUrl: 'academic/subject-elective-group/',
        title: (this.customLable.customLabels && this.customLable.customLabels.elective_subject) ? this.customLable.customLabels.elective_subject : 'Subject Elective Groups',
        formData: {}
    };

    academicTopicSkills = {
        fields: [
            { name: 'name', type: 'text', text: 'Name' },
            { name: 'description', type: 'text', text: 'Description' },
            { name: 'max_marks', type: 'text', text: 'Max Marks' },
            { name: 'module_chapter_id', type: 'autoComplete', text: 'Module/Chapter', optional: false, isTableHidden: true, dataSourceUrl: 'academic/module-chapter/', dataSourceValue: 'name', dataSourceKey: 'module_chapter_id', isAddAllow: true, addObjectKey: 'academicModuleChapter' },
            { name: 'module_chapter', type: 'autoComplete', text: 'Module/Chapter', isFormHidden: true, dataSourceUrl: 'academic/module-chapter/', dataSourceValue: 'name', dataSourceKey: 'module_chapter_id' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
        ],
        apiUrl: 'academic/topics-skills/',
        dragnDrop: true,
        title: (this.customLable.customLabels && this.customLable.customLabels.topics_skills) ? this.customLable.customLabels.topics_skills : 'Topics/Skills',
        formData: {}
    };

    academicProgram = {
        fields: [
            { name: 'program_level_id', type: 'autoComplete', text: 'Program Level', optional: false, isTableHidden: true, dataSourceUrl: `global/program-level-global/?is_active=true&instiution_type_id=${this._authService.getInstituteDetails().customLabels.institution_id}`, dataSourceValue: 'name', dataSourceKey: 'id', isConditionalCheck: true, conditionalFormula: ['program_level_id', 'program_global_id', 'disableEnable'] },
            { name: 'program_global_id', readonly: true, type: 'autoComplete', text: 'Name', optional: false, isTableHidden: true, dataSourceUrl: 'global/program-global/?is_active=true', dataSourceValue: 'name', dataSourceKey: 'id', dependsOn: 'program_level_id', dependsText: 'Program Level', isInputFieldAddAllow: true },
            { name: 'name', type: 'autoComplete', text: 'Name', isFormHidden: true },
            { name: 'abbreviation', type: 'text', text: 'Abbreviation' },
            { name: 'details', type: 'text', text: 'Details' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'text', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
            { name: 'instiution_type_id', type: 'text', isFormHidden: true, isTableHidden: true },
        ],
        isConditionalDelete: { apiUrl: 'academic/course-or-grade-class/?', apiSearchKey: 'program_id__in', messageText: 'Program can\'t be deleted as one or more course exist with selected program.' },
        apiUrl: 'academic/program/',
        title: (this.customLable.customLabels && this.customLable.customLabels.program) ? this.customLable.customLabels.program : 'Program',
        formData: {
            instiution_type_id: this._authService.getInstituteDetails().customLabels.institution_id
        }
    };

    academicModuleChapter = {
        fields: [
            { name: 'name', type: 'text', text: 'Name' },
            { name: 'description', type: 'text', text: 'Description' },
            { name: 'estimated_no_of_classes', type: 'number', text: 'No. of Class' },

            { name: 'subject_id', type: 'autoComplete', text: 'Subject', optional: false, isTableHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'subject_id', isAddAllow: true, addObjectKey: 'academicSubjects' },
            { name: 'subject', type: 'autoComplete', text: 'Subject', isFormHidden: true, dataSourceUrl: 'academic/subject/', dataSourceValue: 'name', dataSourceKey: 'subject_id' },

            { name: 'score_options_id', type: 'autoComplete', text: 'Score', optional: false, isTableHidden: true, dataSourceUrl: 'global/score-option/', dataSourceValue: 'name', dataSourceKey: 'score_options_id', isConditionalCheck: true, conditionalFormula: ['score_options_id', 'marks_calculation_formula_id', 'hideShow', 1] },
            { name: 'score_options', type: 'autoComplete', text: 'Score', isFormHidden: true, dataSourceUrl: 'global/score-option/', dataSourceValue: 'name', dataSourceKey: 'score_options_id' },

            { name: 'marks_calculation_formula_id', type: 'autoComplete', text: 'Formula', optional: false, isTableHidden: true, isFormHidden: true, dataSourceUrl: 'global/mark-calculation/', dataSourceValue: 'name', dataSourceKey: 'marks_calculation_formula_id' },
            { name: 'marks_calculation_formula', type: 'autoComplete', text: 'Formula', isFormHidden: true, dataSourceUrl: 'global/mark-calculation/', dataSourceValue: 'name', dataSourceKey: 'marks_calculation_formula_id' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },

        ],
        apiUrl: 'academic/module-chapter/',
        // extraAddButton: { title: 'Topic/Skills', tableData: 'academicTopicSkills' },
        title: (this.customLable.customLabels && this.customLable.customLabels.module_chapter) ? this.customLable.customLabels.module_chapter : 'Topic/Skills',
        formData: {}
    };

    // academicModuleChapterSkills: {
    //     fields: [
    //         { name: 'module_chapter_id', type: 'autoComplete', text: 'Module/Chapter', optional: false, isTableHidden: true, dataSourceUrl: 'academic/module-chapter/', dataSourceValue: 'name', dataSourceKey: 'module_chapter_id', isAddAllow: true, addObjectKey: 'academicModuleChapter' },
    //         { name: 'module_chapter', type: 'autoComplete', text: 'Module/Chapter', isFormHidden: true, dataSourceUrl: 'academic/module-chapter/', dataSourceValue: 'name', dataSourceKey: 'module_chapter_id' },
    //         { name: 'max_marks', type: 'number' },
    //         { name: 'description', type: 'textarea', optional: true }
    //     ],
    //     apiUrl: 'academic/topics-skills/',
    //     title: 'Module/Chapter',
    //     formData: {}
    // };

    academicCourseGrade = {
        fields: [
            { name: 'program_id', type: 'autoComplete', text: 'Program Name', optional: false, isTableHidden: true, dataSourceUrl: 'academic/program-search/', dataSourceValue: 'name', dataSourceKey: 'program_id', isAddAllow: true, addObjectKey: 'academicProgram' },
            { name: 'program', type: 'autoComplete', text: 'Program Name', isFormHidden: true, dataSourceUrl: 'academic/program-search/', dataSourceValue: 'name', dataSourceKey: 'program_id' },

            { name: 'type_of_course_global_id', type: 'autoComplete', text: 'Academic Term', optional: false, isTableHidden: true, dataSourceUrl: 'global/academic-type-of-course-duration/', dataSourceValue: 'name', dataSourceKey: 'type_of_course_global_id', isConditionalCheck: true, conditionalFormula: ['type_of_course_global_id', 'duration_in_years', 'multiply', 'type_of_course_global_duration'] },
            { name: 'type_of_course_global', type: 'autoComplete', text: 'Academic Term', isFormHidden: true, dataSourceUrl: 'global/academic-type-of-course-duration/', dataSourceValue: 'name', dataSourceKey: 'type_of_course_global_id' },

            { name: 'name', type: 'text', text: 'Course Name' },
            { name: 'description', type: 'textarea', text: 'Detailed Info', optional: true },

            { name: 'type_of_course_global_duration', type: 'number', text: 'Number of Academic Terms', isConditionalCheck: true, conditionalFormula: ['type_of_course_global_id', 'duration_in_years', 'multiply', 'type_of_course_global_duration'] },
            { name: 'duration_in_years', type: 'text', readonly: true, text: 'Duration(Year)' },

            { name: 'employee_departments_id', type: 'autoComplete', text: 'Department', optional: false, isTableHidden: true, dataSourceUrl: 'employee/employee-departments/', dataSourceValue: 'name', dataSourceKey: 'employee_departments_id', isAddAllow: true, addObjectKey: 'employeeDepartment' },
            { name: 'employee_departments', type: 'autoComplete', text: 'Department', isFormHidden: true, dataSourceUrl: 'employee/employee-departments/', dataSourceValue: 'name', dataSourceKey: 'employee_departments_id' },


            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'text', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        tableColumnOrder: ['name', 'program', 'employee_departments', 'type_of_course_global', 'type_of_course_global_duration', 'duration_in_years', 'is_active'],
        isConditionalDelete: { apiUrl: 'academic/batch-or-section/?', apiSearchKey: 'course_grade_class_management_id__in', messageText: 'Course can\'t be deleted as one or more batch exist with selected course.' },
        apiUrl: 'academic/course-or-grade-class/',
        title: (this.customLable.customLabels && this.customLable.customLabels.course) ? this.customLable.customLabels.course : 'Course/Grade Class',
        formData: {}
    };

    AddNormalSubjects = {
        fields: [
            { name: 'name', type: 'text', text: 'Name' },

            { name: 'description', type: 'text', text: 'Description' },
            { name: 'code', type: 'text', text: 'Code' },


            { name: 'course_or_grade_class_management_id', type: 'autoComplete', text: 'Course', optional: false, isTableHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_or_grade_class_management_id', isAddAllow: true, addObjectKey: 'academicCourseGrade' },
            { name: 'course_or_grade_class_management', type: 'autoComplete', text: 'Course', isFormHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_or_grade_class_management_id' },


            { name: 'subject_type_global_id', type: 'select', readonly: true, text: 'Type', isTableHidden: true, dataSource: [{ value: 1, nameDef: 'Normal', name: 'Normal Subject', }, { value: 2, nameDef: 'Elective', name: 'Elective Subject', }], defaultValue: 1 },


            { name: 'classes_per_week', type: 'number', text: 'classes/week' },
            { name: 'credit_hours', type: 'number', text: 'credit/hours' },


            { name: 'is_exam', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_activity', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'academic/subject/',
        title: (this.customLable.customLabels && this.customLable.customLabels.normal_subject) ? this.customLable.customLabels.normal_subject : 'Normal Subject',
        formData: {}
    };
    AddElectiveSubjects = {
        fields: [
            { name: 'name', type: 'text', text: 'Name' },

            { name: 'description', type: 'text', text: 'Description' },
            { name: 'code', type: 'text', text: 'Code' },


            { name: 'course_or_grade_class_management_id', type: 'autoComplete', text: 'Course', optional: false, isTableHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_or_grade_class_management_id', isAddAllow: true, addObjectKey: 'academicCourseGrade' },
            { name: 'course_or_grade_class_management', type: 'autoComplete', text: 'Course', isFormHidden: true, dataSourceUrl: 'academic/course-or-grade-class/', dataSourceValue: 'name', dataSourceKey: 'course_or_grade_class_management_id' },


            { name: 'subject_type_global_id', type: 'select', readonly: true, text: 'Type', isTableHidden: true, dataSource: [{ value: 1, nameDef: 'Normal', name: 'Normal Subject', }, { value: 2, nameDef: 'Elective', name: 'Elective Subject', }], defaultValue: 2 },


            { name: 'classes_per_week', type: 'number', text: 'classes/week' },
            { name: 'credit_hours', type: 'number', text: 'credit/hours' },


            { name: 'is_exam', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_activity', type: 'boolean', optional: true, defaultValue: true },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'academic/subject/',
        title: (this.customLable.customLabels && this.customLable.customLabels.elective_subject) ? this.customLable.customLabels.elective_subject : 'Elective Subject',
        formData: {}
    };

    studentCategory = {
        fields: [
            { name: 'name', type: 'text', text: 'Category Name' },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        isConditionalDelete: { apiUrl: 'student/student/?', apiSearchKey: 'category_id__in', messageText: 'Student category can\'t be deleted as an student already exist with selected category.' },
        apiUrl: 'student/student-category/',
        title: 'Student Category',
        formData: {}
    };

    studentSettingsDocumentTypes = {
        fields: [
            { name: 'file_name', type: 'text' },
            { name: 'type_file_id', type: 'select', text: 'File Type', isTableHidden: true, dataSource: [{ value: 1, name: 'PHOTO' }, { value: 2, name: 'PDF' }, { value: 3, name: 'DOCUMENTATION' }, { value: 4, name: 'EXCEL' }, { value: 5, name: 'FILE' }] },
            { name: 'type_file', type: 'select', text: 'File Type', isFormHidden: true, dataSource: [{ value: 1, name: 'PHOTO' }, { value: 2, name: 'PDF' }, { value: 3, name: 'DOCUMENTATION' }, { value: 4, name: 'EXCEL' }, { value: 5, name: 'FILE' }] },
            { name: 'is_mandatory', type: 'boolean', optional: true, defaultValue: false },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        isConditionalDelete: { apiUrl: 'student/student-documents-type/', apiSearchKey: '', messageText: '' },
        apiUrl: 'student/student-documents-type/',
        title: 'Documents (Attachments)',
        formData: {},
        deleteFieldName: 'file_name'
    };


    studentSettingCustomField = {
        fields: [
            { name: 'name', type: 'text' },
            { name: 'input_type_id', type: 'select', text: 'Input Type', isTableHidden: true, optional: true, dataSource: [{ value: 1, name: 'TEXT', icon: 'text_fields' }, { value: 2, name: 'NUMBER', icon: 'repeat_one' }, { value: 3, name: 'CHECKBOX', icon: 'check_box' }, { value: 4, name: 'SELECT', icon: 'unfold_more' }] },
            { name: 'input_type', type: 'select', isFormHidden: true, optional: true, dataSource: [{ value: 1, name: 'TEXT', icon: 'text_fields' }, { value: 2, name: 'NUMBER', icon: 'repeat_one' }, { value: 3, name: 'CHECKBOX', icon: 'check_box' }, { value: 4, name: 'SELECT', icon: 'unfold_more' }] },
            { name: 'is_mandatory', text: 'Is Mandatory', type: 'boolean', optional: true, defaultValue: false },
            { name: 'is_active', type: 'boolean', optional: true, defaultValue: true },
            { name: 'institution_id', type: 'text', isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstId().toString() },
            { name: 'institution', type: 'test', readonly: true, isFormHidden: true, isTableHidden: true, defaultValue: this._authService.getCurrentInstName().toString(), dataSourceUrl: 'institution/', dataSourceValue: 'name', dataSourceKey: 'institution_id' },
        ],
        apiUrl: 'student/student-custom-fields/',
        title: 'Additional Details (Custom Fields)',
        formData: {}
    }

  

}