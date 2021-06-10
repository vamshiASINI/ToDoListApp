import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class globalFunctions {
    calculateAcademicTerms(courseData) {
        var academicTerms = [];
        let length = courseData['type_of_course_global_duration'];
        for (let i = 1; i <= length; i++) {
            academicTerms.push({ value: `${i}`, name: `${courseData['type_of_course_global']}-${i}` })
        }
        console.log(courseData['type_of_course_global_duration']);

        return academicTerms;
    }
}