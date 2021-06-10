import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-confirm-dialogbox',
  templateUrl: './confirm-dialogbox.component.html',
  styleUrls: ['./confirm-dialogbox.component.scss']
})
export class ConfirmDialogboxComponent implements OnInit {

  isCondtionalDeleteMatched = false;
  isLoading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) {
    console.log(data)
    if (data.data.isConditionalDelete) {
      this.getConditionalDeleteData(data.data.isConditionalDelete)
    }
  }

  ngOnInit(): void {
  }

  getConditionalDeleteData(config) {
    if(config.apiSearchKey){
    this.isLoading = true;
    let params = `&${config.apiSearchKey}=${this.data.data.id}`;
    this.api.get(config.apiUrl + params).subscribe(res => {
      this.isLoading = false;
      if (res.results.length) {
        this.isCondtionalDeleteMatched = true;
      }
    })
   }
  }

}
