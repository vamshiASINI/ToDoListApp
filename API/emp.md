
# API INFO
### for  ORDERING

descending `?ordering=-name`

ascending `?ordering=name`

### for PAGINATION 
`?limit=10&offset=10`

output

`
"count": 25,
"next": null,
"previous": null,
`   
### for SEARCH BY FIELDS
`?search=test&search_fields=name&search_fields=description`

### for FILTERS
`is_active=true`


# Employee API List

#### Faculty Type
http://127.0.0.1:8000/api/v1/employee/faculty-type/?is_active=true

###### GET, POST, PUT, DELETE

`{
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 3,
            "name": "Full Time",
            "is_active": true
        },
        {
            "id": 1,
            "name": "Guest Faculty",
            "is_active": true
        },
        {
            "id": 27,
            "name": "Part Time Faculty",
            "is_active": true
        }
    ]
}`

#### Faculty Type Grade
http://127.0.0.1:8000/api/v1/employee/faculty-type-grade/
###### GET, POST, PUT, DELETE
institution_id = Institution
 
faculty_type_id = FacultyType
 
`{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Full Time Faculty",
            "is_active": true,
            "institution_id": 1,
            "institution": "sunrise",
            "max_no_class": 5,
            "min_no_class": 3,
            "faculty_type_id": 3,
            "faculty_type": "Full Time",
            "description": ""
        }
    ]
}`

#### Leave Type Payment
http://127.0.0.1:8000/api/v1/employee/leave-type-payment/
###### GET, POST, PUT, DELETE
 

`{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "paid",
            "is_active": true
        },
        {
            "id": 2,
            "name": "unpaid",
            "is_active": true
        }
    ]
}`

#### Leave Type 

http://127.0.0.1:8000/api/v1/employee/leave-type/
###### GET, POST, PUT, DELETE
 `{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
           {
            "id": 1,
            "name": "test",
            "is_active": true,
            "institution": "sunrise",
            "institution_id": 1,
            "leave_type": "Full",
            "leave_type_id": 1,
            "code": "test",
            "number_of_off_days": 11,
            "start_date": "2021-02-03T12:36:21Z",
            "allow_carry_forward": false,
            "maximum_balance_to_carry_forward": 0,
            "is_paid_leave": false,
            "maximum_carry_over": 12
        }
    ]
}`


#### Leave Group
http://127.0.0.1:8000/api/v1/employee/leave-group/
###### GET, POST, PUT, DELETE
`{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "all",
            "is_active": true,
            "institution_id": 1,
            "institution": "sunrise"
        }
    ]
}`

#### Leave Group Info
http://127.0.0.1:8000/api/v1/employee/leave-group-info/
###### GET, POST, PUT, DELETE

filter 
>is_active

>leave_group_id

>leave_type_id

`{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "is_active": true,
            "leave_group": "all",
            "leave_group_id": 1,
            "leave_type": "Sick leave",
            "leave_type_id": 1,
            "day_number": 0
        },
        {
            "id": 2,
            "is_active": true,
            "leave_group": "all",
            "leave_group_id": 1,
            "leave_type": "Casual Leaves",
            "leave_type_id": 2,
            "day_number": 0
        }
    ]
}`
#### Employee Departments
http://127.0.0.1:8000/api/v1/employee/employee-departments/

`{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Computer Science",
            "code": "CS",
            "is_active": true,
            "institution_id": 1,
            "institution": "sunrise"
        }
    ]
}`
#### Employee Category
http://127.0.0.1:8000/api/v1/employee/employee-category/

`{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Faculty",
            "code": "F1",
            "is_active": true,
            "institution_id": 1,
            "institution": "sunrise"
        }
    ]
}`
#### Employee Designations 
http://127.0.0.1:8000/api/v1/employee/employee-designations/
`{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Librarian",
            "description": "Description",
            "is_active": true,
            "employee_category_id": 1,
            "employee_category": "Faculty"
        }
    ]
}`
#### HR settings custom fields
http://127.0.0.1:8000/api/v1/employee/employee-hr-setting-custom-field/
http://127.0.0.1:8000/api/v1/employee/employee-hr-setting-custom-field/?input_type_id__in=1
#####input_type_id
>TEXT = '1' 
>
 >   NUMBER = '2'  
>
  >  CHECKBOX = '3'
>
   > SELECT = '4'
>
`{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 3,
            "name": "Passport",
            "institution_id": 1,
            "institution": "sunrise",
            "is_active": true,
            "input_type_id": "1",
            "input_type": "TEXT",
            "is_mandatory": false
        },
        {
            "id": 4,
            "name": "PAN",
            "institution_id": 1,
            "institution": "sunrise",
            "is_active": true,
            "input_type_id": "2",
            "input_type": "NUMBER",
            "is_mandatory": false
        }
    ]
}`

#### HR settings documents type
http://127.0.0.1:8000/api/v1/employee/employee-hr-setting-custom-file-type/

##### type_file_id
 > PHOTO = '1' 
>
 > PDF = '2'   
>
 > DOCUMENTATION = '3'
>
 > EXCEL = '4' 
>
 > FILE = '5'
    
`{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "institution_id": 1,
            "institution": "sunrise",
            "is_active": true,
            "file_name": "Pan File",
            "type_file": "FILE",
            "type_file_id": "5",
            "is_mandatory": true
        }
    ]
}`

#### Employee

http://t2.binay.local:8000/api/v1/employee/employee/

`{
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "employee_auto_generated_id": null,
            "institution_id": 1,
            "institution": "sunrise",
            "is_active": true,
            "basic_info_id": 1,
            "category_id": null,
            "category": null,
            "department_id": null,
            "department": null,
            "designation_id": null,
            "designation": null,
            "faculty_type_grade_id": null,
            "faculty_type_grade": null,
            "address_emp_id": [],
            "custom_fields_type": "",
            "joining_date": null,
            "reporting_manager_id": null,
            "is_teaching_or_faculty_staff": false
        }
    ]
}`

#### contact 

List / create 

http://t2.binay.local:8000/api/v1/employee/basic-info/ 

get info / update 

http://t2.binay.local:8000/api/v1/employee/basic-info/<int>/

e.g.

http://t2.binay.local:8000/api/v1/employee/basic-info/2/

     [
    {
        "id": 1,
        "name": "t2 ",
        "country_id": 2,
        "country": "India",
        "religion_id": 1,
        "religion": "Hindu",
        "marital_status_id": 1,
        "marital_status": "Married",
        "designation_id": [
            1
        ],
        "phone": "9836292954",
        "phone_dialing_code_id": 2,
        "phone_dialing_code": "+91",
        "username": "binay",
        "first_name": "t2",
        "middle_name": null,
        "last_name": null,
        "father_name": null,
        "mother_name": null,
        "date_of_birth": null,
        "uuid": "20b4ed83-a8d0-4316-8398-518c1494eb91",
        "email": "binay.pg@gmail.com",
        "is_new_onbording": false,
        "is_billing_done": true,
        "is_active": true,
        "is_admin": true,
        "is_app_user": true,
        "is_accept_terms": true,
        "change_password": false,
        "is_invited": false,
        "url": null,
        "blood_group_id": 3,
        "blood_group": "B+",
        "emergency_phone": null,
        "emergency_phone_dialing_code_id": 2,
        "emergency_phone_dialing_code": "+91",
        "spouse_name": null,
        "qualification_id": 1,
        "qualification": "BCA",
        "experience_info": "",
        "total_experience": "0.00",
        "gender_id": 1,
        "gender": "Male"
    }
    ]
   
   #### Employee Address
   
   by employee  ( contact id)
    
   and add new
    
   http://t2.binay.local:8000/api/v1/employee/employee-address/<contact id>/
    
   e.g. 
    
   http://t2.binay.local:8000/api/v1/employee/employee-address/1/
    
    [
    {
        "id": 1,
        "contact": "binay sharma",
        "contact_id": 1,
        "address1": "liluah",
        "address2": "",
        "city": "liluah",
        "pincode": "711204",
        "state_id": 3,
        "country": "India",
        "state": "West Bengal",
        "is_active": true
    }
    ]

#### Add Address in employee 
GET/PUT

http://t2.binay.local:8000/api/v1/employee/employee-address/<userID>/<addressID>/

e.g.

http://t2.binay.local:8000/api/v1/employee/employee-address/1/1/

`{
    "id": 1,
    "contact": "binay sharma",
    "contact_id": 1,
    "address1": "liluah",
    "address2": "howrah",
    "city": "liluah",
    "pincode": "711204",
    "state_id": 3,
    "country": "India",
    "state": "West Bengal",
    "is_active": true
}`