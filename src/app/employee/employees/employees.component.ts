import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/common/services/api.service';
import { DialogService } from 'src/app/common/services/dialog.service';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { NavUpdateService } from 'src/app/services/common/nav-update.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy, AfterViewInit {

  step = 0;
  isAddMode = false;
  isEditMode = false;
  subscription: Subscription;
  customFieldsFlex = '0 1 calc(33.33% - 25px)';
  docFieldsFlex = '0 1 calc(33.33% - 25px)';
  bottomPanelBGCColor = '#fff';
  globalAPIResponse = {
    country: [],
    currency: [],
    religion: [],
    maritalStatus: [],
    state: [],
    qualification: [],
    gender: [],
    bloodGroup: [],
    autoComplete: []
  }

  extraInfoResponse = {
    category: [],
    department: [],
    designation: [],
    facultyTypeGrade: [],
    apiUrl: {
      categoryEndpoint: 'employee/employee-category/?is_active=true',
      departmentEndpoint: 'employee/employee-departments/?is_active=true',
      designationEndpoint: 'employee/employee-designations/?is_active=true',
      facultyTypeGradeEndpoint: 'employee/faculty-type-grade/?is_active=true',
    }
  }

  employee = {
    fields: [
      { name: 'name', type: 'text' },
      { name: 'category_id', type: 'autoComplete', text: 'Category', optional: true, isTableHidden: true, dataSourceUrl: 'employee/employee-category/', dataSourceValue: 'name', dataSourceKey: 'category_id' },
      { name: 'category', type: 'autoComplete', text: 'Category', isFormHidden: true, dataSourceUrl: 'employee/employee-category/', dataSourceValue: 'name', dataSourceKey: 'category_id' },
      { name: 'department_id', type: 'autoComplete', text: 'Department', optional: true, isTableHidden: true, dataSourceUrl: 'employee/employee-departments/', dataSourceValue: 'name', dataSourceKey: 'department_id' },
      { name: 'department', type: 'autoComplete', text: 'Department', isFormHidden: true, dataSourceUrl: 'employee/employee-departments/', dataSourceValue: 'name', dataSourceKey: 'department_id' },
      { name: 'designation_id', type: 'autoComplete', text: 'Designation', optional: true, isTableHidden: true, dataSourceUrl: 'employee/employee-designations/', dataSourceValue: 'name', dataSourceKey: 'designation_id' },
      { name: 'designation', type: 'autoComplete', text: 'Designation', isFormHidden: true, dataSourceUrl: 'employee/employee-designations/', dataSourceValue: 'name', dataSourceKey: 'designation_id' },
      { name: 'faculty_type_grade_id', type: 'autoComplete', text: 'faculty_type_grade', optional: true, isTableHidden: true, dataSourceUrl: 'employee/faculty-type-grade/', dataSourceValue: 'name', dataSourceKey: 'faculty_type_grade_id' },
      { name: 'faculty_type_grade', type: 'autoComplete', text: 'faculty_type_grade', isFormHidden: true, dataSourceUrl: 'employee/faculty-type-grade/', dataSourceValue: 'name', dataSourceKey: 'faculty_type_grade_id' },
      { name: 'is_active', type: 'boolean', optional: true, defaultValue: true }
    ],

    apiUrl: 'employee/employee/',
    title: 'Employee Details',
    formData: {}

  }


  customsFields = [];
  docFields = [];
  customformData = {};
  documentData = {};

  addressFieldData: any = {
    contact_id: 1,
    address1: "",
    address2: "",
    city: null,
    pincode: null,
    country_id: null,
    state_id: null,
    is_active: true
  }

  addressArray = [];
  isLoading = false;

  extraInfoData: any = {
    institution_id: this._authService.getCurrentInstId().toString(),
    institution: this._authService.getCurrentInstName().toString(),
    is_active: true,
    basic_info_id: null,
    category_id: null,
    department_id: null,
    designation_id: null,
    faculty_type_grade_id: null,
    address_emp_id: [],
    custom_fields_type: ""
  };

  basicDetailsData: any = {
    name: null,
    country_id: 2,
    religion_id: null,
    marital_status_id: null,
    designation_id: [
      2
    ],
    phone: null,
    phone_dialing_code_id: null,
    username: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    father_name: null,
    mother_name: null,
    date_of_birth: null,
    email: null,
    is_new_onbording: false,
    is_billing_done: false,
    is_active: false,
    is_admin: false,
    is_app_user: false,
    is_accept_terms: false,
    change_password: false,
    is_invited: false,
    url: null
  };
  isAddressEditMode: boolean = false;
  EditId: any;
  searchDatadata: { value: any; field: any; };
  searchTextChanged = new Subject<any>()

  constructor(private api: ApiService,
    private _authService: AuthService,
    private dialogService: DialogService,
    private _snackBar: MatSnackBar,
    private navUpdate: NavUpdateService) {
    console.log(localStorage.getItem('darkMode'))
    if (localStorage.getItem('darkMode') === 'true') {
      this.bottomPanelBGCColor = '#494949'
    }
  }

  ngOnInit(): void {
    console.log(this._authService.getCurrentInstCountryID())
    this.getCustomFields();
    this.getCountry();
    this.getMaritalStatus();
    this.getReligion();
    this.getcurrency();
    this.getCategory();
    this.getDepartment();
    this.getFacultyTypeGrade();
    this.getDocFields();
    this.getQualifications();
    this.getGender();
    this.getBloodGroup();

    this.checkEditMode();

    this.subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      mergeMap(search => this.getAutoComplete(this.searchDatadata))
    ).subscribe((data) => {
      this.isLoading = false;
      this.globalAPIResponse.autoComplete = data.results;
    });
  }

  ngAfterViewInit() {
    this.navUpdate.getMessage().subscribe(res => {
      console.log(res);
      this.bottomPanelBGCColor = res ? '#494949' : '#fff';
    })

  }

  checkEditMode() {
    this.subscription = this.api.employeeEdit.subscribe(res => {
      console.log(res);
      this.isEditMode = true;
      this.getBasicInfo(res.basic_info_id);
      this.getAddress(res.basic_info_id);
      this.extraInfoData = res;
      console.log(res.custom_fields_type);
      this.customformData = JSON.parse(res.custom_fields_type);
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  add() {
    this.isAddMode = true;
    this.resetFormfield();
    this.step = 0;
  }

  search($event, field) {
    this.isLoading = true;
    this.globalAPIResponse.autoComplete = []
    console.log(field)
    this.searchDatadata = {
      value: $event.target.value,
      field: field
    }
    this.searchTextChanged.next(this.searchDatadata);
  }

  onAutoCompleteChange(form?, event?) {
    if (event) {
      if (form === 'reporting manager') {
        this.extraInfoData.reporting_manager_id = event.option.id;
      } else if (form === 'country') {
        this.addressFieldData.country_id = event.option.id;
        this.addressFieldData.state = undefined;
        this.addressFieldData.state_id = null;
      } else {
        this.addressFieldData.state_id = event.option.id;
      }
      this.globalAPIResponse.autoComplete = [];
    } else {
      this.isLoading = true;
      this.globalAPIResponse.autoComplete = [];
      let apiUrl = '';
      if (form === 'reporting manager') {
        if (this.extraInfoData.department_id) {
          apiUrl = `employee/employee/?&department_id__in=${this.extraInfoData.department_id}&is_active=true`;
          this.api.get(apiUrl).subscribe(res => { this.globalAPIResponse.autoComplete = res.results; this.isLoading = false })
        }
      } else if (form === 'country') {
        apiUrl = `global/country/?&is_active=true`;
        this.api.get(apiUrl).subscribe(res => { this.globalAPIResponse.autoComplete = res.results; this.isLoading = false })
      }
      else {
        if (this.addressFieldData.country_id) {
          apiUrl = `global/state/?&country_id__in=${this.addressFieldData.country_id}&is_active=true`;
          this.api.get(apiUrl).subscribe(res => { this.globalAPIResponse.autoComplete = res.results; this.isLoading = false; });
        }
      }
    }
  }

  cancel() {
    this.isAddMode = false;
    this.isAddressEditMode = false;
    this.isEditMode = false;
    this.resetFormfield();
    this.step = 0;
  }

  getCustomFields() {
    const apiUrl = 'employee/employee-hr-setting-custom-field/?is_active=true'
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.customsFields = res.results;
      this.customFieldsFlex = this.customsFields.length < 3 ? '0 1 calc(50% - 25px)' : '0 1 calc(33.33% - 25px)';
    })
  }

  getDocFields() {
    const apiUrl = 'employee/employee-hr-setting-custom-file-type/?is_active=true'
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.docFields = res.results;
      this.docFieldsFlex = this.customsFields.length < 3 ? '0 1 calc(50% - 25px)' : '0 1 calc(33.33% - 25px)';
    })
  }

  getCountry() {
    const apiUrl = 'global/country/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.globalAPIResponse.country = res.results;
    })
  }
  getcurrency() {
    const apiUrl = 'global/currency/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.globalAPIResponse.currency = res.results;
    })
  }
  getReligion() {
    const apiUrl = 'global/religion/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.globalAPIResponse.religion = res.results;
    })
  }
  getAutoComplete(search) {
    console.log(search)
    let apiUrl = '';
    if (search.field === 'reporting manager') {
      if (this.extraInfoData.department_id) {
        apiUrl = `employee/employee/?&department_id__in=${this.extraInfoData.department_id}&is_active=true&search=${search.value}&search_fields=name`;
        return this.api.get(apiUrl);
      }
    } else if (search.field === 'country') {
      apiUrl = `global/country/?&is_active=true&search=${search.value}&search_fields=name`;
      return this.api.get(apiUrl);
    } else {
      if (this.addressFieldData.country_id) {
        apiUrl = `global/state/?&country_id__in=${this.addressFieldData.country_id}&is_active=true&search=${search.value}&search_fields=name`;
        return this.api.get(apiUrl);
      }
    }
  }
  getMaritalStatus() {
    const apiUrl = 'global/marital-status/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.globalAPIResponse.maritalStatus = res.results;
    })
  }
  getQualifications() {
    const apiUrl = 'global/qualification/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.globalAPIResponse.qualification = res.results;
    })
  }
  getGender() {
    const apiUrl = 'global/gender/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.globalAPIResponse.gender = res.results;
    })
  }
  getBloodGroup() {
    const apiUrl = 'global/blood-group/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.globalAPIResponse.bloodGroup = res.results;
    })
  }
  getCategory(type?) {
    if (type === 'designation') {
      this.extraInfoResponse.designation = [];
      this.getDesignation();
    } else {
      this.api.get(this.extraInfoResponse.apiUrl.categoryEndpoint).subscribe(res => {
        console.log(res);
        this.extraInfoResponse.category = res.results;
      })
    }

  }
  getDepartment() {
    this.api.get(this.extraInfoResponse.apiUrl.departmentEndpoint).subscribe(res => {
      console.log(res);
      this.extraInfoResponse.department = res.results;
    })
  }
  getDesignation() {
    if (this.extraInfoData.category_id) {
      this.api.get(`${this.extraInfoResponse.apiUrl.designationEndpoint}?&employee_category_id__in=${this.extraInfoData.category_id}`).subscribe(res => {
        console.log(res);
        this.extraInfoResponse.designation = res.results;
      })
    }
  }
  getFacultyTypeGrade() {
    this.api.get(this.extraInfoResponse.apiUrl.facultyTypeGradeEndpoint).subscribe(res => {
      console.log(res);
      this.extraInfoResponse.facultyTypeGrade = res.results;
    })
  }

  getBasicInfo(id) {
    const apiUrl = `employee/basic-info/${id}/`;
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.basicDetailsData = res;
      this.basicDetailsData.date_of_birth = new Date(this.basicDetailsData.date_of_birth);
    })
  }

  getAddress(id) {
    const apiUrl = `employee/employee-address/${id}/`;
    this.api.get(apiUrl).subscribe(res => {
      console.log(res);
      this.addressFieldData = res[0];
    })
  }

  // addAddress(type, form: NgForm) {
  //   console.log(this.addressFieldData)
  //   console.log(this.globalAPIResponse.state)
  //   if (this.globalAPIResponse.state.length) {
  //     this.addressFieldData.country = this.globalAPIResponse.state[0].country;
  //   }
  //   if (type === 'add') {
  //     this.addressArray.push({ ...this.addressFieldData })
  //     this.isAddressEditMode = false;
  //   } else if (type === 'edit') {
  //     this.addressArray[this.EditId] = { ...this.addressFieldData };
  //     this.isAddressEditMode = false;
  //   }

  //   console.log(this.addressArray)
  //   form.resetForm();
  // }

  // editAddress(data, index) {
  //   this.EditId = index;
  //   console.log(data);
  //   this.addressFieldData = { ...data };
  //   console.log(this.addressFieldData)
  //   this.isAddressEditMode = true
  // }

  // deleteAddress(index) {
  //   this.addressArray.splice(index, 1);
  // }


  async submit() {
    this.addressArray = [];
    if (this.basicDetailsData.date_of_birth) {
      const date = new Date(this.basicDetailsData.date_of_birth);
      const changedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      this.basicDetailsData.date_of_birth = changedDate;
    }
    try {
      this.basicDetailsData.username = this.basicDetailsData.email;
      const basicRes = await this.api.post('employee/basic-info/', this.basicDetailsData).toPromise();
      this.addressArray.push(this.addressFieldData);
      this.addressArray[0].contact_id = basicRes.id;
      const addressRes = await this.api.post(`employee/employee-address/${basicRes.id}/`, this.addressArray[0]).toPromise();
      this.extraInfoData.address_emp_id.push(addressRes.id);
      this.extraInfoData.custom_fields_type = JSON.stringify(this.customformData);
      this.extraInfoData.basic_info_id = basicRes.id;
      this.api.post('employee/employee/', this.extraInfoData).subscribe(employeeRes => {
        if (employeeRes) {
          this.dialogService.openSnackBar(this._snackBar, 'added successfully', 'Success');
          this.isAddMode = false;
        }
      })
    } catch (e) {
      if (e.error.email) {
        this.dialogService.openSnackBar(this._snackBar, e.error.email[0], 'Failed');
        return
      } else if (e.error.username) {
        this.dialogService.openSnackBar(this._snackBar, e.error.username[0], 'Failed');
        return
      } else {
        this.dialogService.openSnackBar(this._snackBar, 'Some network problem occured. Please try after some time', 'Failed');
        return
      }
    }
  }

  async update() {
    this.addressArray = [];
    if (this.basicDetailsData.date_of_birth) {
      const date = new Date(this.basicDetailsData.date_of_birth);
      const changedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
      this.basicDetailsData.date_of_birth = changedDate;
    }
    try {
      const basicRes = await this.api.put(`employee/basic-info/${this.basicDetailsData.id}/`, this.basicDetailsData).toPromise();
      this.addressArray.push(this.addressFieldData);
      const addressRes = await this.api.put(`employee/employee-address/${this.basicDetailsData.id}/${this.addressArray[0].id}/`, this.addressArray[0]).toPromise();

      this.extraInfoData.custom_fields_type = JSON.stringify(this.customformData);
      this.api.put(`employee/employee/${this.extraInfoData.id}/`, this.extraInfoData).subscribe(employeeRes => {
        if (employeeRes) {
          this.dialogService.openSnackBar(this._snackBar, 'Updated successfully', 'Success');
          this.isAddMode = false;
          this.isEditMode = false;
        }
      })
    } catch (e) {
      if (e.error.email) {
        this.dialogService.openSnackBar(this._snackBar, e.error.email[0], 'Failed');
        return
      } else if (e.error.username) {
        this.dialogService.openSnackBar(this._snackBar, e.error.username[0], 'Failed');
        return
      } else {
        this.dialogService.openSnackBar(this._snackBar, 'Some network problem occured. Please try after some time', 'Failed');
        return
      }
    }

  }

  resetFormfield() {
    this.customformData = {};

    this.addressFieldData = {
      address1: "",
      address2: "",
      city: null,
      pincode: null,
      state_id: 3,
      is_active: true
    }
    this.extraInfoData = {
      institution_id: this._authService.getCurrentInstId().toString(),
      institution: this._authService.getCurrentInstName().toString(),
      is_active: true,
      basic_info_id: null,
      category_id: null,
      department_id: null,
      designation_id: null,
      faculty_type_grade_id: null,
      address_emp_id: [],
      custom_fields_type: ""
    };

    this.basicDetailsData = {
      name: null,
      country_id: 2,
      religion_id: null,
      marital_status_id: null,
      designation_id: [
        1
      ],
      phone: null,
      phone_dialing_code_id: null,
      username: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      father_name: null,
      mother_name: null,
      date_of_birth: null,
      email: null,
      is_new_onbording: false,
      is_billing_done: false,
      is_active: false,
      is_admin: false,
      is_app_user: false,
      is_accept_terms: false,
      change_password: false,
      is_invited: false,
      url: null
    };

    this.addressArray = [];

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
