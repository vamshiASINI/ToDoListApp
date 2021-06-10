
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


# Global API List

#### country

http://t2.binay.local:8000/api/v1/global/country/?is_active=true

        {
    "count": 6,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 4,
            "name": "Germany",
            "currency_id": 4,
            "currency": "Euro",
            "country_code": "DE",
            "dialing_code": "+49",
            "is_active": true
        },
        {
            "id": 2,
            "name": "India",
            "currency_id": 2,
            "currency": "INR",
            "country_code": "IN",
            "dialing_code": "+91",
            "is_active": true
        }        
    ]
    }

#### State

http://t2.binay.local:8000/api/v1/global/state/?country_id=2

    {
    "count": 32,
    "next": "http://t2.binay.local:8000/api/v1/global/state/?country_id=2&limit=5&offset=15",
    "previous": "http://t2.binay.local:8000/api/v1/global/state/?country_id=2&limit=5&offset=5",
    "results": [
        {
            "id": 12,
            "name": "Himachal Pradesh",
            "is_active": true,
            "country_id": 2,
            "country": "India"
        },
        {
            "id": 13,
            "name": "Jammu and Kashmir",
            "is_active": true,
            "country_id": 2,
            "country": "India"
        },
        {
            "id": 14,
            "name": "Jharkhand",
            "is_active": true,
            "country_id": 2,
            "country": "India"
        },
        {
            "id": 15,
            "name": "Karnataka",
            "is_active": true,
            "country_id": 2,
            "country": "India"
        },
        {
            "id": 16,
            "name": "Kerala",
            "is_active": true,
            "country_id": 2,
            "country": "India"
        }
    ]
}

#### currency

http://t2.binay.local:8000/api/v1/global/currency/?is_active=true

    {
        "count": 5,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 5,
                "name": "Custom",
                "code": "es",
                "symbol": "&",
                "separator": "\\",
                "decimal_places": 2,
                "date_format": "dd/mm/yyyyy",
                "is_active": true
            }]
            }
        
        
#### religion

http://t2.binay.local:8000/api/v1/global/religion/?is_active=true

    {
        "count": 4,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 4,
                "name": "Christian",
                "is_active": true
            },
            {
                "id": 1,
                "name": "Hindu",
                "is_active": true
            },
            {
                "id": 2,
                "name": "Muslim",
                "is_active": true
            },
            {
                "id": 3,
                "name": "Sikh",
                "is_active": true
            }
        ]
    }

#### marital status

http://t2.binay.local:8000/api/v1/global/marital-status/?is_active=true

    {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "name": "Married",
                "is_active": true
            }
        ]
    }


####  dialing code

get from country api

    {
            "id": 4,
            "name": "Germany",
            "currency_id": 4,
            "currency": "Euro",
            "country_code": "DE",
            "dialing_code": "+49",
            "is_active": true
    },
 
#### Institution Type Global

http://t2.binay.local:8000/api/v1/global/institution-type-global/

    {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Higher Education",
            "country": "India",
            "country_id": 2,
            "description": "Higher Education",
            "is_active": true
        },
        {
            "id": 1,
            "name": "School Education",
            "country": "India",
            "country_id": 2,
            "description": "School Education",
            "is_active": true
        },
        {
            "id": 3,
            "name": "School Education",
            "country": "USA",
            "country_id": 1,
            "description": "School Education",
            "is_active": true
        }
        ]
    }

#### program level global

http://t2.binay.local:8000/api/v1/global/program-level-global/

    {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Pre-School Education",
            "instiution_type": "School Education",
            "instiution_type_id": 1,
            "description": "Pre-School Education",
            "country_id": 2,
            "country": "India",
            "is_active": true
        },
        {
            "id": 2,
            "name": "Primary Schooling",
            "instiution_type": "School Education",
            "instiution_type_id": 1,
            "description": "Primary Schooling",
            "country_id": 2,
            "country": "India",
            "is_active": true
        }
    ]
    }

#### program global

http://t2.binay.local:8000/api/v1/global/program-global/

    {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Grade 1",
            "program_level": "Primary Schooling",
            "country": "India",
            "country_id": 2,
            "instiution_type_id": 1,
            "instiution_type": "School Education",
            "program_level_id": 2,
            "description": "Grade 1",
            "is_active": true
        },
        {
            "id": 1,
            "name": "Play School",
            "program_level": "Pre-School Education",
            "country": "India",
            "country_id": 2,
            "instiution_type_id": 1,
            "instiution_type": "School Education",
            "program_level_id": 1,
            "description": "Play School",
            "is_active": true
        }
    ]
    }


#### Academic Type Of Course Duration

http://t2.binay.local:8000/api/v1/global/academic-type-of-course-duration/

    {
    "count": 4,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Semester",
            "details": "Semester"
        },
        {
            "id": 3,
            "name": "Trimester",
            "details": "Trimester"
        },
        {
            "id": 4,
            "name": "Week",
            "details": "Week"
        },
        {
            "id": 1,
            "name": "Year",
            "details": "Year"
        }
    ]
    }
    
    
#### Score Option

http://t2.binay.local:8000/api/v1/global/score-option/

    {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Calculate Scores",
            "details": "Option to calculate Module / Chapter marks for reports",
            "is_active": true
        },
        {
            "id": 2,
            "name": "Don't Calculate Scores",
            "details": "Option for not calculate Module / Chapter marks for reports",
            "is_active": true
        }
    ]
    }


#### Mark Calculation Batch
http://t2.binay.local:8000/api/v1/global/mark-calculation-batch/

    {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Average",
            "details": "The scores of all the skills will be added and divided by the number of skills to get the average"
        },
        {
            "id": 3,
            "name": "Best of",
            "details": "The scores of all the skills will be compared and the highest will be taken."
        },
        {
            "id": 1,
            "name": "Sum",
            "details": "The scores of all the skills will be added"
        }
    ]
    }


#### Mark Calculation
http://t2.binay.local:8000/api/v1/global/mark-calculation/


    {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Average",
            "details": "The scores of all the skills will be added and divided by the number of skills to get the average"
        },
        {
            "id": 3,
            "name": "Best of",
            "details": "The scores of all the skills will be compared and the highest will be taken."
        },
        {
            "id": 1,
            "name": "Sum",
            "details": "The scores of all the skills will be added"
        }
    ]
    }


#### Subject Type

http://t2.binay.local:8000/api/v1/global/subject-type/

    {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Elective",
            "details": "",
            "is_active": true
        },
        {
            "id": 1,
            "name": "Normal",
            "details": "",
            "is_active": true
        }
    ]
    }


#### Qualification

http://t2.binay.local:8000/api/v1/global/qualification/

        
    {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "name": "BCA",
                "details": "",
                "is_active": true
            }
        ]
    }

####  Gender

http://t2.binay.local:8000/api/v1/global/gender/
 
    {
        "count": 2,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 2,
                "name": "Female",
                "details": "",
                "is_active": true
            },
            {
                "id": 1,
                "name": "Male",
                "details": "",
                "is_active": true
            }
        ]
    }

#### Blood Group 

http://t2.binay.local:8000/api/v1/global/blood-group/

    {
        "count": 8,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "name": "A+",
                "is_active": true
            },
            {
                "id": 2,
                "name": "A-",
                "is_active": true
            },
            {
                "id": 7,
                "name": "AB+",
                "is_active": true
            },
            {
                "id": 8,
                "name": "AB-",
                "is_active": true
            },
            {
                "id": 3,
                "name": "B+",
                "is_active": true
            },
            {
                "id": 4,
                "name": "B-",
                "is_active": true
            },
            {
                "id": 6,
                "name": "O+",
                "is_active": true
            },
            {
                "id": 5,
                "name": "O-",
                "is_active": true
            }
        ]
    }