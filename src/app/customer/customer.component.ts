import { Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  accountNumber: string;
  poNumber: string;

  disableAccountNumber: boolean;
  disablePoNumber: boolean;
  sub: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      const accno = params['accno'];
      if (accno) {
        this.setAccount();
        this.accountNumber = accno;
      }

      const pono = params['pono'];
      if (pono) {
        this.setPoNumber();
        this.poNumber = pono;
      }
    });
    console.log('onchange');
  }

  ngOnDestroy() {
    this.sub.
  }

  setAccount() {
    this.disablePoNumber = true;
  }

  setPoNumber() {
    this.disableAccountNumber = true;
  }

  clear() {
    this.accountNumber = '';
    this.poNumber = '';

    this.disableAccountNumber = false;
    this.disablePoNumber = false;
  }

  go() {
    this.router.navigate(['/dashboard']);
  }
}
