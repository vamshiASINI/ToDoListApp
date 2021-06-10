import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { FacultyTypeModel } from '../models/faculty-type-model';
import { FacultyTypeService } from './faculty-type.service';



export class FacultyTypeDataSource implements DataSource<FacultyTypeModel> {

    private facultyTypeSubject = new BehaviorSubject<FacultyTypeModel[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);
    private pageSizeSubject = new BehaviorSubject<number>(0);

    public loading$ = this.loadingSubject.asObservable();

    public pageSize$ = this.pageSizeSubject.asObservable();

    constructor(private _facultyTypeService: FacultyTypeService) {

    }

    loadFacultyType(pageIndex: number, pageSize: number) {

        this.loadingSubject.next(true);


        this._facultyTypeService.getListFacultyType(pageIndex, pageSize).subscribe(
            res => {
                this.facultyTypeSubject.next(res.results);
                this.pageSizeSubject.next(res.count);
            }, err => {

            }, () => {
                this.loadingSubject.next(false);
            }
        );

    }

    connect(collectionViewer: CollectionViewer): Observable<FacultyTypeModel[]> {
        console.log('Connecting data source');
        return this.facultyTypeSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.facultyTypeSubject.complete();
        this.loadingSubject.complete();
    }

}

