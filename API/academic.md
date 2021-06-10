
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

#### session

http://t2.binay.local:8000/api/v1/academic/session/

###### GET, POST, PUT, DELETE

    {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "institution_id": 1,
                "institution": "Sunrise",
                "name": "2020-2021",
                "description": "",
                "start_date": "2020-01-01T00:00:00Z",
                "end_date": "2020-12-31T00:00:00Z",
                "is_active": true
            }
        ]
    }


#### program

http://t2.binay.local:8000/api/v1/academic/program/

here in UI user will type in name and it will be autocomplete from   

> step 1. Institution Type Global
>
> select name by country filter from Institution country 

    http://t2.binay.local:8000/api/v1/global/institution-type-global/?is_active=true
 
> step 2. program level global

    http://t2.binay.local:8000/api/v1/global/program-level-global/?is_active=true
> step 3.   program global

    http://t2.binay.local:8000/api/v1/global/program-global/?is_active=true

> step 4. then program_global_id will be selected
> 
> by searching in name  from program global table
    

    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "institution_id": null,
            "institution": null,
            "name": "Play School",
            "abbreviation": "PS",
            "program_global_id": 1,
            "program_global": "Play School",
            "details": "Play School (PS)",
            "is_active": true
        }
    ]
    }
    
    
    
#### program search

http://t3.binay.local:8000/api/v1/academic/program-search/?search=school


    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "institution_id": 1,
            "institution": "ram",
            "name": "Play School",
            "abbreviation": "ddd",
            "program_global_id": 1,
            "program_global": "Play School",
            "program_level": "Pre-School Education",
            "program_level_id": 1,
            "instiution_type_id": 1,
            "instiution_type": "School Education",
            "details": "ddd",
            "is_active": true
        }
        ]
    }


#### Course Or Grade Class


for type_of_course_global_id API

`http://t2.binay.local:8000/api/v1/global/academic-type-of-course-duration/`
 
http://t2.binay.local:8000/api/v1/academic/course-or-grade-class/


    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "institution_id": 1,
            "institution": "Sunrise",
            "name": "Play School",
            "description": "",
            "program_id": 1,
            "program": "Play School",
            "type_of_course_global_id": 1,
            "type_of_course_global": "Year",
            "type_of_course_global_duration": 2,
            "duration_in_years": "1.00",
            "employee_departments_id": 1,
            "employee_departments": "Primary School",
            "is_active": true
        }
    ]
    }




#### Course Or Grade Class Term

 
http://t2.binay.local:8000/api/v1/academic/course-or-grade-class-term/

    {
    "count": 5,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "course_or_grade_class_management": "B. COM",
            "course_or_grade_class_management_id": 7,
            "name": "Trimester 1",
            "description": null,
            "is_active": true
        },
        {
            "id": 2,
            "course_or_grade_class_management": "B. COM",
            "course_or_grade_class_management_id": 7,
            "name": "Trimester 2",
            "description": null,
            "is_active": true
        },
        {
            "id": 3,
            "course_or_grade_class_management": "B. COM",
            "course_or_grade_class_management_id": 7,
            "name": "Trimester 3",
            "description": null,
            "is_active": true
        },
        {
            "id": 4,
            "course_or_grade_class_management": "B. COM",
            "course_or_grade_class_management_id": 7,
            "name": "Trimester 4",
            "description": null,
            "is_active": true
        },
        {
            "id": 5,
            "course_or_grade_class_management": "B. COM",
            "course_or_grade_class_management_id": 7,
            "name": "Trimester 5",
            "description": "",
            "is_active": true
        }
    ]
    }



#### Batch Or Section **updated

http://t2.binay.local:8000/api/v1/academic/batch-or-section/
    
    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Bachelor of Engineering (C.S) SEM 1-B",
            "program_id": 1,
            "program": "Bachelor of Engineering (B.E)",
            "course_or_grade_class_management_term": "Trimester 1",
            "course_or_grade_class_management_term_id": 1,
            "start_date": "2020-01-01T09:50:44Z",
            "end_date": "2020-06-30T09:50:45Z",
            "max_number_of_student": 30,
            "academicSession_id": 1,
            "academicSession": "AY 2020",
            "is_active": true
        }
    ]
    }

#### Batch Or Section Management Subject Normal 

http://t3.binay.local:8000/api/v1/academic/batch-or-section-normal/

    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 35,
            "batch_or_section_management_id": 1,
            "subject_list_id": [
                2,
                3,
                4,
                6
            ],
            "is_active": true
        }
    ]
    }


####  Batch Or Section Management Elective Group  

http://t3.binay.local:8000/api/v1/academic/batch-or-section-elective-group/

    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "last_date_to_choose": false,
            "last_date": null,
            "is_active": true,
            "created_at": "2020-10-31T16:23:00.214016Z",
            "updated_at": "2020-10-31T16:23:30.380478Z",
            "batch_or_section_management_id": 1,
            "subject_list_id": [
                1
            ]
        }
    ]
    }
    
    
#### Batch Or Section Management Subject Group ****updated 22-jan-2001

http://t3.binay.local:8000/api/v1/academic/batch-or-section-subject-group/

    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "selection": false,
            "last_date_to_choose": false,
            "last_date_select_subject": null,
            "is_active": true,
            "created_at": "2021-01-19T14:48:21.308287Z",
            "updated_at": "2021-01-19T14:48:21.308300Z",
            "batch_or_section_management_id": 1,
            "subject_list_id": [
                9
            ]
        }
    ]
    }
#### Subject **updated

http://t2.binay.local:8000/api/v1/academic/subject/

        
    {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "name": "ttt",
                "description": "",
                "course_or_grade_class_management_term_id": 1,
                "course_or_grade_class_management_term": "Trimester 1",
                "is_active": true,
                "subject_type_global_id": 1,
                "subject_type_global": "Normal",
                "code": "tt",
                "classes_per_week": 1,
                "credit_hours": 1,
                "is_exam": true,
                "is_activity": true
            }
        ]
    }
#### Subject Elective Group 

http://t3.binay.local:8000/api/v1/academic/subject-elective-group/
    
        {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "MCOM",
            "subject_list_id": [
                1
            ],
            "subject_list": [
                {
                    "id": 1,
                    "name": "Math"
                }
            ],
            "course_or_grade_class_management_term_id": 2,
            "course_or_grade_class_management_term": "Trimester 2",
            "is_activity": true
        }
    ]
    }

#### Subject Subject Group  **updated 22Jan2021
 
http://t3.binay.local:8000/api/v1/academic/subject-subject-group/  

    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 9,
            "name": "EXC",
            "subject_list_id": [
                1
            ],
            "subject_list": [
                {
                    "id": 1,
                    "name": "CS 01"
                }
            ],
            "is_activity": true,
            "is_active": true,
            "course_or_grade_class_management_term_id": 1,
            "course_or_grade_class_management_term": "Semester 1",
            "number_of_subject": 0,
            "score_options_id": null,
            "batch_mark_calcutation_id": null
        },
    ]
    }
    
#### Module Chapter
http://t2.binay.local:8000/api/v1/academic/module-chapter/

    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "subject_id": 1,
            "subject": "ABC Book",
            "name": "Alphabet Fun",
            "description": "",
            "estimated_no_of_classes": 5,
            "score_options_id": 1,
            "score_options": "Calculate Scores",
            "marks_calculation_formula_id": 1,
            "marks_calculation_formula": "Sum",
            "is_active": true
        }
    ]
    }

#### Topics Skills
 
 http://t2.binay.local:8000/api/v1/academic/topics-skills/
 
 
    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "module_chapter_id": 1,
            "module_chapter": "Alphabet Fun",
            "name": "A",
            "description": "A For Apple",
            "max_marks": "2.00",
            "is_active": true
        }
    ]
    }
 
 
 #### Batch Or Section  
 
 ##### GET / POST
    
 `http://t2.binay.local:8000/api/v1/academic/batch-or-section/`
 
  #### e.g.

  http://t2.binay.local:8000/api/v1/academic/batch-or-section/?course_or_grade_class_management_term_id__in=1
  
#### OUTPUT

    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "C.S. Sem-1",
            "program_id": 2,
            "program": "Bachelor of Engineering (B.E)",
            "course_or_grade_class_management_term": "Semester 1",
            "course_or_grade_class_management_term_id": 1,
            "start_date": "2020-12-31T18:30:00Z",
            "end_date": "2021-01-30T18:30:00Z",
            "max_number_of_student": 11,
            "academicSession_id": 1,
            "academicSession": "year 2020-21",
            "is_active": true
        }
    ]
    }



 #### Batch Or Section Management Subject Group 
 
 ##### GET / POST
    
 `http://t2.binay.local:8000/api/v1/academic/batch-or-section-subject-group/`
 
  #### e.g.

  http://t2.binay.local:8000/api/v1/academic/batch-or-section-subject-group/?batch_or_section_management_id__in=1
  
#### OUTPUT
    
    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "selection": false,
            "number_of_subject": 11,
            "last_date_to_choose": false,
            "last_date_select_subject": null,
            "is_active": true,
            "created_at": "2021-01-19T14:48:21.308287Z",
            "updated_at": "2021-01-19T14:48:21.308300Z",
            "batch_or_section_management_id": 1,
            "score_options_id": 1,
            "batch_mark_calcutation_id": 2,
            "subject_list_id": [
                9
            ]
        }
    ]
    }


 #### Batch Or Section Management Elective Group
 
 ##### GET / POST
    
 `http://t2.binay.local:8000/api/v1/academic/batch-or-section-elective-group/`
 
  #### e.g.

  http://t2.binay.local:8000/api/v1/academic/batch-or-section-elective-group/?batch_or_section_management_id__in=1
  
#### OUTPUT
    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "last_date_to_choose": false,
            "last_date": null,
            "is_active": true,
            "created_at": "2021-01-19T14:48:21.302712Z",
            "updated_at": "2021-01-19T14:48:21.302725Z",
            "batch_or_section_management_id": 1,
            "subject_list_id": [
                1
            ]
        }
    ]
    }



 #### Batch Or Section Management Subject Normal
 
 ##### GET / POST
    
 `http://t2.binay.local:8000/api/v1/academic/batch-or-section-normal/`
 
  #### e.g.

  http://t2.binay.local:8000/api/v1/academic/batch-or-section-normal/?batch_or_section_management_id__in=1
  
#### OUTPUT
        
    {
        "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "batch_or_section_management_id": 1,
            "subject_list_id": [
                3
            ],
            "is_active": true
        }
    ]
    }