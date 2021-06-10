# Student API List

#### Categories

http://t1.local:8000/api/v1/student/student-category/

`{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "General",
            "is_active": true,
            "institution_id": 1,
            "institution": "santpublic"
        }
    ]
}`

#### Student custom fields
http://t1.local:8000/api/v1/student/student-custom-fields/
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
            "id": 1,
            "institution_id": 1,
            "name": "sandy",
            "input_type_id": "1",
            "input_type_data": "text",
            "is_mandatory": true,
            "is_active": true,
            "institution": "santpublic"
        },
        {
            "id": 2,
            "institution_id": 1,
            "name": "sandy",
            "input_type_id": "1",
            "input_type_data": "text",
            "is_mandatory": true,
            "is_active": true,
            "institution": "santpublic"
        }
    ]
}`

#### Student documents type
http://t1.local:8000/api/v1/student/student-documents-type/
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
 
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "institution_id": 1,
            "institution": "santpublic",
            "file_name": "Student Information",
            "type_file": "PHOTO",
            "type_file_id": "1",
            "is_mandatory": false,
            "is_active": false
        }
    ]
}