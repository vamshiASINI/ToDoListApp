import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/common/services/api.service';
import { DialogService } from 'src/app/common/services/dialog.service';
import { Subject, Subscription } from 'rxjs';
import { NavUpdateService } from 'src/app/services/common/nav-update.service';
import { debounceTime, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  step = 0;
  isAddMode = false;
  isEditMode = false;
  subscription: Subscription;
  bottomPanelBGCColor = '#fff';
  student: any;

  globalAPIResponse = {
    countryCode: [],
    religion: [],
    maritalStatus: [],
    state: [],
    qualification: [],
    gender: [],
    bloodGroup: [],
    autoComplete: [],
    category: [],
    country: [],
    course: [],
    courseType: []
  }

  presentAddressArray = [];
  permanentAddressArray = [];
  isLoading = false;

  studentDetails: any = {
    institution_id: this._authService.getCurrentInstId().toString(),
    institution: this._authService.getCurrentInstName().toString(),
    categories_id: [0],
    category: [],
    course_or_grade_class_management_id: null,
    type_of_course_global_id: null,
    admission_number: null,
    date_of_admission: null,
    contact_id: null,
    present_address_id: null,
    present_address: '',
    permanent_address_id: null,
    permanent_address: '',
    father_detail_id: null,
    mother_detail_id: null,
    is_guardian: false,
    guardian_detail_id: null,
    status: '',
    custom_fields_type: '',
    is_active: false
  }

  contactData: any = {
    name: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    username: '',
    gender_id: null,
    gender: '',
    date_of_birth: null,
    email: '',
    phone_dialing_code_id: null,
    phone_dialing_code: '',
    phone: '',
    emergency_phone: '',
    emergency_phone_dialing_code_id: null,
    emergency_phone_dialing_code: '',
    blood_group_id: null,
    blood_group: '',
    religion_id: null,
    religion: '',
    marital_status_id: null,
    marital_status: '',
    country_id: null,
    country: '',
    qualification_id: null,
    qualification: '',
    total_experience: "0.00",
    experience_info: '',
    is_new_onbording: false,
    is_billing_done: false,
    is_active: false,
    is_admin: false,
    is_app_user: false,
    is_invited: false,
    is_accept_terms: false,
    change_password: false
  }

  presentAddressData: any = {
    contact_id: null,
    address1: "",
    address2: "",
    city: null,
    pincode: null,
    country_id: null,
    state_id: null,
    is_active: true
  }

  permanentAddressData: any = {
    contact_id: null,
    address1: "",
    address2: "",
    city: null,
    pincode: null,
    country_id: null,
    state_id: null,
    is_active: true
  }

  fatherData: any = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_dialing_code_id: null,
    phone_dialing_code: '',
    phone: '',
    // country_id: null,
    // country: ''
  }

  motherData: any = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_dialing_code_id: null,
    phone_dialing_code: '',
    phone: '',
    // country_id: null,
    // country: ''
  }

  guardianData: any = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_dialing_code_id: null,
    phone_dialing_code: '',
    phone: '',
    // country_id: null,
    // country: ''
  }


  isAddressEditMode: boolean = false;
  EditId: any;
  searchDatadata: { value: any; field: any; };
  searchTextChanged = new Subject<any>()

  constructor(private api: ApiService,
    private _authService: AuthService,
    private dialogService: DialogService,
    private _snackBar: MatSnackBar,
    private navUpdate: NavUpdateService) {
      this.student = {
        fields: [
          { name: 'name', type: 'text' },
          { name: 'admission_number', type: 'text' },
          { name: 'category_id', type: 'autoComplete', text: 'Category', optional: true, isTableHidden: true, dataSourceUrl: 'student/student-category/', dataSourceValue: 'name', dataSourceKey: 'category_id' },
          { name: 'category', type: 'autoComplete', text: 'Category', isFormHidden: true, dataSourceUrl: 'student/student-category/', dataSourceValue: 'name', dataSourceKey: 'category_id' },
          { name: 'is_active', type: 'boolean', optional: true, defaultValue: true }
        ],
        apiUrl: 'student/student/',
        title: 'Student Details',
        formData: {}
      }
    if (localStorage.getItem('darkMode') === 'true') {
      this.bottomPanelBGCColor = '#494949'
    }

  }
 
  ngOnInit(): void {
    this.getCountryCode();
    this.getMaritalStatus();
    this.getReligion();
    this.getCategory();
    this.getQualifications();
    this.getGender();
    this.getBloodGroup();
    this.checkEditMode();
    this.getCourseClass();
    this.getTypeOfCourse();

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
    });
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
    this.step = 0;
  }

  getCountryCode() {
    const apiUrl = 'global/country/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.countryCode = res.results;
    });
  }

  getMaritalStatus() {
    const apiUrl = 'global/marital-status/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.maritalStatus = res.results;
    });
  }

  getReligion() {
    const apiUrl = 'global/religion/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.religion = res.results;
    });
  }

  getCategory() {
    const apiUrl = 'student/student-category/?is_active=true'
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.category = res.results;
    });
  }

  getQualifications() {
    const apiUrl = 'global/qualification/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.qualification = res.results;
    });
  }

  getGender() {
    const apiUrl = 'global/gender/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.gender = res.results;
    });
  }

  getBloodGroup() {
    const apiUrl = 'global/blood-group/?is_active=true';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.bloodGroup = res.results;
    });
  }

  getCourseClass(){
    const apiUrl = 'academic/course-or-grade-class/';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.course = res.results;
    });
  }

  getTypeOfCourse(){
    const apiUrl = 'global/academic-type-of-course-duration/';
    this.api.get(apiUrl).subscribe(res => {
      this.globalAPIResponse.courseType = res.results;
    });
  }

  checkEditMode() {
    this.subscription = this.api.studentEdit.subscribe(res => {
      this.isEditMode = true;
      console.log(res);
    });
  }

  getAutoComplete(search) {
    let apiUrl = '';
   if (search.field === 'country') {
      apiUrl = `global/country/?&is_active=true&search=${search.value}&search_fields=name`;
      return this.api.get(apiUrl);
    } else {
      if (this.presentAddressData.country_id) {
        apiUrl = `global/state/?&country_id__in=${this.presentAddressData.country_id}&is_active=true&search=${search.value}&search_fields=name`;
        return this.api.get(apiUrl);
      }
      if (this.permanentAddressData.country_id) {
        apiUrl = `global/state/?&country_id__in=${this.permanentAddressData.country_id}&is_active=true&search=${search.value}&search_fields=name`;
        return this.api.get(apiUrl);
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cancel() {
    this.isAddMode = false;
    this.isAddressEditMode = false;
    this.isEditMode = false;
    this.step = 0;
  }

  search($event, field) {
    this.isLoading = true;
    this.globalAPIResponse.autoComplete = []
    this.searchDatadata = {
      value: $event.target.value,
      field: field
    }
    this.searchTextChanged.next(this.searchDatadata);
  }

  onAutoCompleteChange(form?, event?) {
    if (event) {
      if (form === 'present_country') {
        this.presentAddressData.country_id = event.option.id;
        this.presentAddressData.state = undefined;
        this.presentAddressData.state_id = null;
      } else {
        this.presentAddressData.state_id = event.option.id;
      }

      if (form === 'permanent_country') {
        this.permanentAddressData.country_id = event.option.id;
        this.permanentAddressData.state = undefined;
        this.permanentAddressData.state_id = null;
      } else {
        this.permanentAddressData.state_id = event.option.id;
      }

      this.globalAPIResponse.autoComplete = [];
    } else {
      this.isLoading = true;
      this.globalAPIResponse.autoComplete = [];
      let apiUrl = '';
      if (form === 'present_country' || form === 'permanent_country') {
        apiUrl = `global/country/?&is_active=true`;
        this.api.get(apiUrl).subscribe(res => { 
          this.globalAPIResponse.autoComplete = res.results; 
          this.isLoading = false })
      }
      else {
        if (this.presentAddressData.country_id) {
          apiUrl = `global/state/?&country_id__in=${this.presentAddressData.country_id}&is_active=true`;
          this.api.get(apiUrl).subscribe(res => { this.globalAPIResponse.autoComplete = res.results; this.isLoading = false; });
        }

        if (this.permanentAddressData.country_id) {
          apiUrl = `global/state/?&country_id__in=${this.permanentAddressData.country_id}&is_active=true`;
          this.api.get(apiUrl).subscribe(res => { this.globalAPIResponse.autoComplete = res.results; this.isLoading = false; });
        }
      }
    }
  }

  resetFormfield() {
    this.studentDetails = {
      institution_id: this._authService.getCurrentInstId().toString(),
      institution: this._authService.getCurrentInstName().toString(),
      categories_id: [0],
      category: [],
      course_or_grade_class_management_id: 0,
      type_of_course_global_id: 0,
      admission_number: null,
      date_of_admission: null,
      contact_id: 0,
      present_address_id: 0,
      present_address: '',
      permanent_address_id: 0,
      permanent_address: '',
      father_detail_id: 0,
      mother_detail_id: 0,
      is_guardian: false,
      guardian_detail_id: 0,
      status: '',
      custom_fields_type: '',
      is_active: false
    }
  
    this.contactData = {
      name: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      username: '',
      gender_id: 0,
      gender: '',
      date_of_birth: null,
      email: '',
      phone_dialing_code_id: 0,
      phone_dialing_code: '',
      phone: '',
      emergency_phone: '',
      emergency_phone_dialing_code_id: 0,
      emergency_phone_dialing_code: '',
      blood_group_id: 0,
      blood_group: '',
      religion_id: 0,
      religion: '',
      marital_status_id: 0,
      marital_status: '',
      // country_id: 0,
      // country: '',
      // qualification_id: 0,
      // qualification: '',
      // total_experience: "0.00",
      // experience_info: '',
      is_new_onbording: false,
      is_billing_done: false,
      // is_active: false,
      is_admin: false,
      is_app_user: false,
      is_invited: false,
      is_accept_terms: false,
      change_password: false
    }
  
    this.presentAddressData = {
      contact_id: 0,
      address1: "",
      address2: "",
      city: null,
      pincode: null,
      country_id: null,
      state_id: null,
      // is_active: true
    }
  
    this.permanentAddressData = {
      contact_id: 0,
      address1: "",
      address2: "",
      city: null,
      pincode: null,
      country_id: null,
      state_id: null,
      // is_active: true
    }
  
    this.fatherData = {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      phone_dialing_code_id: 0,
      phone_dialing_code: '',
      phone: '',
      // country_id: 0,
      // country: ''
    }
  
    this.motherData = {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      phone_dialing_code_id: 0,
      phone_dialing_code: '',
      phone: '',
      // country_id: 0,
      // country: ''
    }
  
    this.guardianData = {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      phone_dialing_code_id: 0,
      phone_dialing_code: '',
      phone: '',
      // country_id: 0,
      // country: ''
    }
 }


 async submit() {
   this.presentAddressArray = [];
   this.permanentAddressArray = [];
  if (this.contactData.date_of_birth) {
    const date = new Date(this.contactData.date_of_birth);
    const changedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    this.contactData.date_of_birth = changedDate;
  }

  if (this.studentDetails.date_of_admission) {
    const date = new Date(this.studentDetails.date_of_admission);
    const changedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    this.studentDetails.date_of_admission = changedDate;
  }

  try {
    const basicRes = await this.api.post('employee/basic-info/', this.contactData).toPromise();
    this.presentAddressArray.push(this.presentAddressData);
    this.presentAddressArray[0].contact_id = basicRes.id;
    const presentAddressRes = await this.api.post(`employee/employee-address/${basicRes.id}/`, this.presentAddressArray[0]).toPromise();
    this.studentDetails.present_address_id = presentAddressRes.id;

    this.permanentAddressArray.push(this.permanentAddressData);
    this.permanentAddressArray[0].contact_id = basicRes.id;
    const permanentAddressRes = await this.api.post(`employee/employee-address/${basicRes.id}/`, this.permanentAddressArray[0]).toPromise();
    this.studentDetails.permanent_address_id = permanentAddressRes.id;
    this.studentDetails.contact_id = basicRes.id;
    this.fatherData.username = this.fatherData.email;
    const fatherRes = await this.api.post('employee/basic-info/', this.fatherData).toPromise();
    this.studentDetails.father_detail_id = fatherRes.id;

    this.motherData.username = this.motherData.email;
    const motherRes = await this.api.post('employee/basic-info/', this.motherData).toPromise();
    this.studentDetails.mother_detail_id = motherRes.id;

    if(this.studentDetails.is_guardian){
    this.guardianData.username = this.guardianData.email;
    const guardianRes = await this.api.post('employee/basic-info/', this.guardianData).toPromise();
    this.studentDetails.guardian_detail_id = guardianRes.id;
    }

    this.api.post('student/student/', this.studentDetails).subscribe(studentRes => {
      if (studentRes) {
        this.dialogService.openSnackBar(this._snackBar, 'Added successfully', 'Success');
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
  this.presentAddressArray = [];
  this.permanentAddressArray = [];
 if (this.contactData.date_of_birth) {
   const date = new Date(this.contactData.date_of_birth);
   const changedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
   this.contactData.date_of_birth = changedDate;
 }

 if (this.studentDetails.date_of_admission) {
   const date = new Date(this.studentDetails.date_of_admission);
   const changedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
   this.studentDetails.date_of_admission = changedDate;
 }
  try {
    const basicRes = await this.api.post(`employee/basic-info/${this.contactData.id}/`, this.contactData).toPromise();
    this.presentAddressArray.push(this.presentAddressData);
    const presentAddressRes = await this.api.put(`employee/employee-address/${this.contactData.id}/${this.presentAddressArray[0].id}/`, this.presentAddressArray[0]).toPromise();

    this.permanentAddressArray.push(this.permanentAddressData);
    const permanentAddressRes = await this.api.put(`employee/employee-address/${this.contactData.id}/${this.permanentAddressArray[0].id}/`, this.permanentAddressArray[0]).toPromise();

    this.fatherData.username = this.fatherData.email;
    const fatherRes = await this.api.put(`employee/basic-info/${this.studentDetails.father_detail_id}/`, this.fatherData).toPromise();

    this.motherData.username = this.motherData.email;
    const motherRes = await this.api.put(`employee/basic-info/${this.studentDetails.mother_detail_id}/`, this.motherData).toPromise();

    if(this.studentDetails.is_guardian){
      this.guardianData.username = this.guardianData.email;
    const guardianRes = await this.api.put(`employee/basic-info/${this.studentDetails.guardian_detail_id}/`, this.guardianData).toPromise();
    this.studentDetails.guardian_detail_id = guardianRes.id;
    }
    this.api.put(`student/student/${this.studentDetails.id}/`, this.studentDetails).subscribe(employeeRes => {
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

}
