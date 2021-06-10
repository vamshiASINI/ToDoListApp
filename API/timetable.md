
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


# Time Table API List


#### Period Group

http://t2.binay.local:8000/api/v1/time-table/period-group/

###### GET, POST, PUT, DELETE

    {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Summer 2020",
            "description": "",
            "is_active": true
        },
        {
            "id": 2,
            "name": "Summer 2020 (1/2 Day)",
            "description": "",
            "is_active": true
        }
    ]
    }


#### Period Group Class

http://t2.binay.local:8000/api/v1/time-table/period-group-class/

###### GET, POST, PUT, DELETE

    {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "P!",
            "start_time": "08:00:00",
            "end_time": "08:45:00",
            "time_slot_type": "Class",
            "time_slot_type_id": 1,
            "period_group_or_set": "Summer 2020",
            "period_group_or_set_id": 1,
            "is_active": true,
            "is_attandance": true
        },
        {
            "id": 2,
            "name": "P2",
            "start_time": "08:45:00",
            "end_time": "09:30:00",
            "time_slot_type": "Class",
            "time_slot_type_id": 1,
            "period_group_or_set": "Summer 2020",
            "period_group_or_set_id": 1,
            "is_active": true,
            "is_attandance": true
        },
        {
            "id": 3,
            "name": "P1",
            "start_time": "10:00:00",
            "end_time": "10:45:00",
            "time_slot_type": "Class",
            "time_slot_type_id": 1,
            "period_group_or_set": "Summer 2020 (1/2 Day)",
            "period_group_or_set_id": 2,
            "is_active": true,
            "is_attandance": true
        }
    ]
    }




#### Time Table

http://t2.binay.local:8000/api/v1/time-table/time-table/

###### GET, POST, PUT, DELETE

    
    {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Summer 2020",
            "batch": "Bachelor of Engineering (C.S) SEM 1-B",
            "batch_id": 1,
            "start_date": "2020-07-01",
            "end_date": "2020-12-31",
            "is_active": true,
            "is_by_master": true
        }
    ]
    }




#### Time Table Master

http://t2.binay.local:8000/api/v1/time-table/time-table-master/

###### GET, POST, PUT, DELETE

    {
    "count": 6,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "time_table_id": 1,
            "time_table": "Summer 2020",
            "day_of_week": "4",
            "is_selected": true,
            "period_group_id": 1,
            "period_group": "Summer 2020",
            "is_active": true
        },
        {
            "id": 2,
            "time_table_id": 1,
            "time_table": "Summer 2020",
            "day_of_week": "1",
            "is_selected": true,
            "period_group_id": 1,
            "period_group": "Summer 2020",
            "is_active": true
        },
        {
            "id": 3,
            "time_table_id": 1,
            "time_table": "Summer 2020",
            "day_of_week": "2",
            "is_selected": true,
            "period_group_id": 1,
            "period_group": "Summer 2020",
            "is_active": true
        },
        {
            "id": 4,
            "time_table_id": 1,
            "time_table": "Summer 2020",
            "day_of_week": "3",
            "is_selected": true,
            "period_group_id": 1,
            "period_group": "Summer 2020",
            "is_active": true
        },
        {
            "id": 5,
            "time_table_id": 1,
            "time_table": "Summer 2020",
            "day_of_week": "5",
            "is_selected": true,
            "period_group_id": 1,
            "period_group": "Summer 2020",
            "is_active": true
        },
        {
            "id": 6,
            "time_table_id": 1,
            "time_table": "Summer 2020",
            "day_of_week": "6",
            "is_selected": true,
            "period_group_id": 2,
            "period_group": "Summer 2020 (1/2 Day)",
            "is_active": true
        }
    ]
    }




#### Time Table Info 

http://t2.binay.local:8000/api/v1/time-table/time-table-info/

###### GET, POST, PUT, DELETE
    
    {
    "count": 5,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 17,
            "time_table": "Summer 2020",
            "time_table_id": 1,
            "date": "2020-07-01",
            "is_active": true
        },
        {
            "id": 18,
            "time_table": "Summer 2020",
            "time_table_id": 1,
            "date": "2020-07-02",
            "is_active": true
        },
        {
            "id": 19,
            "time_table": "Summer 2020",
            "time_table_id": 1,
            "date": "2020-07-03",
            "is_active": true
        },
        {
            "id": 20,
            "time_table": "Summer 2020",
            "time_table_id": 1,
            "date": "2020-07-04",
            "is_active": true
        },
        {
            "id": 21,
            "time_table": "Summer 2020",
            "time_table_id": 1,
            "date": "2020-07-05",
            "is_active": true
        }
    ]
    }



#### Time Table Info Time

http://t2.binay.local:8000/api/v1/time-table/time-table-info-time/
###### GET, POST, PUT, DELETE
     
    {
    "count": 7,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 15,
            "start_date": "08:00:00",
            "end_date": "08:45:00",
            "time_table_info": "Summer 2020",
            "time_table_info_id": 17,
            "subject": null,
            "subject_id": null,
            "module_chapter": null,
            "module_chapter_id": null,
            "faculty_id": null,
            "faculty": null,
            "room": null,
            "room_id": null,
            "is_online_class": false,
            "is_elective_group": false,
            "is_active": true
        },
        {
            "id": 16,
            "start_date": "08:45:00",
            "end_date": "09:30:00",
            "time_table_info": "Summer 2020",
            "time_table_info_id": 17,
            "subject": null,
            "subject_id": null,
            "module_chapter": null,
            "module_chapter_id": null,
            "faculty_id": null,
            "faculty": null,
            "room": null,
            "room_id": null,
            "is_online_class": false,
            "is_elective_group": false,
            "is_active": true
        },
        {
            "id": 17,
            "start_date": "08:00:00",
            "end_date": "08:45:00",
            "time_table_info": "Summer 2020",
            "time_table_info_id": 18,
            "subject": null,
            "subject_id": null,
            "module_chapter": null,
            "module_chapter_id": null,
            "faculty_id": null,
            "faculty": null,
            "room": null,
            "room_id": null,
            "is_online_class": false,
            "is_elective_group": false,
            "is_active": true
        },
        {
            "id": 18,
            "start_date": "08:45:00",
            "end_date": "09:30:00",
            "time_table_info": "Summer 2020",
            "time_table_info_id": 18,
            "subject": null,
            "subject_id": null,
            "module_chapter": null,
            "module_chapter_id": null,
            "faculty_id": null,
            "faculty": null,
            "room": null,
            "room_id": null,
            "is_online_class": false,
            "is_elective_group": false,
            "is_active": true
        },
        {
            "id": 19,
            "start_date": "08:00:00",
            "end_date": "08:45:00",
            "time_table_info": "Summer 2020",
            "time_table_info_id": 19,
            "subject": null,
            "subject_id": null,
            "module_chapter": null,
            "module_chapter_id": null,
            "faculty_id": null,
            "faculty": null,
            "room": null,
            "room_id": null,
            "is_online_class": false,
            "is_elective_group": false,
            "is_active": true
        },
        {
            "id": 20,
            "start_date": "08:45:00",
            "end_date": "09:30:00",
            "time_table_info": "Summer 2020",
            "time_table_info_id": 19,
            "subject": null,
            "subject_id": null,
            "module_chapter": null,
            "module_chapter_id": null,
            "faculty_id": null,
            "faculty": null,
            "room": null,
            "room_id": null,
            "is_online_class": false,
            "is_elective_group": false,
            "is_active": true
        },
        {
            "id": 21,
            "start_date": "10:00:00",
            "end_date": "10:45:00",
            "time_table_info": "Summer 2020",
            "time_table_info_id": 20,
            "subject": null,
            "subject_id": null,
            "module_chapter": null,
            "module_chapter_id": null,
            "faculty_id": null,
            "faculty": null,
            "room": null,
            "room_id": null,
            "is_online_class": false,
            "is_elective_group": false,
            "is_active": true
        }
    ]
    }

###  time table add by time tabe id 

with 
or
without master info

1 is table id

http://t2.binay.local:8000/api/v1/time-table/time-table-add/<1>/

 
######   POST 
> ok

    200 responce on ok

> error 

    406 error code

    {
    "error": "info already added"
    }




###  time table view

#### date in formate ->  %Y-%m-%d  

#### 1 is table id

http://t2.binay.local:8000/api/v1/time-table/time-table-list-view/1/2020-07-01/2020-07-05/

for same day

http://t2.binay.local:8000/api/v1/time-table/time-table-list-view/1/2020-07-01/2020-07-01/


######   GET 

    [
    {
        "date": "2020-07-02",
        "info": [
            {
                "id": 17,
                "name": "P1",
                "time_slot_type_id": 1,
                "time_slot_type": "Class",
                "start_date": "08:00:00",
                "end_date": "08:45:00",
                "time_table_info": "Summer 2020",
                "time_table_info_id": 18,
                "subject": null,
                "subject_id": null,
                "module_chapter": null,
                "module_chapter_id": null,
                "faculty_id": null,
                "faculty": null,
                "room": null,
                "room_id": null,
                "is_online_class": false,
                "is_elective_group": false,
                "is_active": true
            },
            {
                "id": 18,
                "name": "P2",
                "time_slot_type_id": 1,
                "time_slot_type": "Class",
                "start_date": "08:45:00",
                "end_date": "09:30:00",
                "time_table_info": "Summer 2020",
                "time_table_info_id": 18,
                "subject": null,
                "subject_id": null,
                "module_chapter": null,
                "module_chapter_id": null,
                "faculty_id": null,
                "faculty": null,
                "room": null,
                "room_id": null,
                "is_online_class": false,
                "is_elective_group": false,
                "is_active": true
            }
        ]
    },
    {
        "date": "2020-07-03",
        "info": [
            {
                "id": 19,
                "name": "P1",
                "time_slot_type_id": 1,
                "time_slot_type": "Class",
                "start_date": "08:00:00",
                "end_date": "08:45:00",
                "time_table_info": "Summer 2020",
                "time_table_info_id": 19,
                "subject": null,
                "subject_id": null,
                "module_chapter": null,
                "module_chapter_id": null,
                "faculty_id": null,
                "faculty": null,
                "room": null,
                "room_id": null,
                "is_online_class": false,
                "is_elective_group": false,
                "is_active": true
            },
            {
                "id": 20,
                "name": "P2",
                "time_slot_type_id": 1,
                "time_slot_type": "Class",
                "start_date": "08:45:00",
                "end_date": "09:30:00",
                "time_table_info": "Summer 2020",
                "time_table_info_id": 19,
                "subject": null,
                "subject_id": null,
                "module_chapter": null,
                "module_chapter_id": null,
                "faculty_id": null,
                "faculty": null,
                "room": null,
                "room_id": null,
                "is_online_class": false,
                "is_elective_group": false,
                "is_active": true
            }
        ]
    },
    {
        "date": "2020-07-04",
        "info": [
            {
                "id": 21,
                "name": "P1",
                "time_slot_type_id": 1,
                "time_slot_type": "Class",
                "start_date": "10:00:00",
                "end_date": "10:45:00",
                "time_table_info": "Summer 2020",
                "time_table_info_id": 20,
                "subject": null,
                "subject_id": null,
                "module_chapter": null,
                "module_chapter_id": null,
                "faculty_id": null,
                "faculty": null,
                "room": null,
                "room_id": null,
                "is_online_class": false,
                "is_elective_group": false,
                "is_active": true
            }
        ]
    }
    ]