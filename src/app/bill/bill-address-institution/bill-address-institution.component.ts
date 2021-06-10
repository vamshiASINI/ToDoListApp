import { BillService } from './../bill.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BillAddressInstitution } from '../models/bill-address-institution';

@Component({
  selector: 'app-bill-address-institution',
  templateUrl: './bill-address-institution.component.html',
  styleUrls: ['./bill-address-institution.component.scss']
})
export class BillAddressInstitutionComponent implements OnInit {

  @Input() billAddressInstitution: BillAddressInstitution[];
  localbillAddressInstitution: BillAddressInstitution[];
  @Output() selectedAddress = new EventEmitter();

  constructor(private _billService: BillService) { }

  ngOnInit(): void {
    // this.localbillAddressInstitution = this.billAddressInstitution;
  }
  onClickSelectAddress(pos: number): void {
    this.billAddressInstitution[pos].selected = true;
  }
}
