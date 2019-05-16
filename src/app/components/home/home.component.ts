import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

import { CurrencyService } from '../../services/currency.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formValue: FormGroup
  isIdr = false
  isCar = false
  isUsd = false
  isCad = false
  isGbp = false
  isChf = false
  isSgd = false
  isInr = false
  isMyr = false
  isJpy = false
  isKrw = false
  selected
  currencies : any

  usd_default = 10.00
  
  idr_value = 0
  usd_value = 0
  cad_value = 0
  gbp_value = 0
  chf_value = 0
  sgd_value = 0
  inr_value = 0
  myr_value = 0
  jpy_value = 0
  krw_value = 0

  constructor(
    private route: ActivatedRoute,
    private currencyServ: CurrencyService,
    private router: Router,
  ) { 
    this.formValue = new FormGroup({
      value: new FormControl('', Validators.required)
      //: new FormControl('', Validators.required)
    });

    this.currencyServ.getCurrency().subscribe((res: any) => {
      this.currencies = res.rates;
      
      this.idr_value = this.currencies.IDR * this.usd_default
      this.usd_value = this.currencies.USD * this.usd_default
      this.cad_value = this.currencies.CAD * this.usd_default
      this.gbp_value = this.currencies.GBP * this.usd_default
      this.chf_value = this.currencies.CHF * this.usd_default
      this.sgd_value = this.currencies.SGD * this.usd_default
      this.inr_value = this.currencies.INR * this.usd_default
      this.myr_value = this.currencies.MYR * this.usd_default
      this.jpy_value = this.currencies.JPY * this.usd_default
      this.krw_value = this.currencies.KRW * this.usd_default
    })
  }

  ngOnInit() {
  }

  hideIdr() {
    this.isIdr = false;
  }

  hideUsd() {
    this.isUsd = false;
  }

  hideGbp() {
    this.isGbp = false;
  }

  hideChf() {
    this.isChf = false;
  }

  hideSgd() {
    this.isSgd = false;
  }

  hideMyr() {
    this.isMyr = false;
  }

  hideJpy() {
    this.isJpy = false;
  }

  hideKrw() {
    this.isKrw = false;
  }

  hideCad() {
    this.isCad = false;
  }

  hideInr() {
    this.isInr = false;
  }

  getOption() {
    const selected = this.selected;
    switch(selected) {
      case "IDR":
        this.isIdr = true;
        break;
      case "USD":
        this.isUsd = true;          
        break;
      case "CAD":
        this.isCad = true;          
        break;
      case "GBP":
        this.isGbp = true;          
        break;
      case "CHF":
        this.isChf = true;          
        break;
      case "SGD":
        this.isSgd = true;          
        break;
      case "INR":
        this.isInr = true;          
        break;
      case "MYR":
        this.isMyr = true;          
        break;
      case "JPY":
        this.isJpy = true;          
        break;
      case "KRW":
        this.isKrw = true;          
        break;
    }
    this.selected = ""; // Reset Drop down
  }

  onChangedValue(value) {
    this.idr_value = this.currencies.IDR * value
    this.usd_value = this.currencies.USD * value
    this.cad_value = this.currencies.CAD * value
    this.gbp_value = this.currencies.GBP * value
    this.chf_value = this.currencies.CHF * value
    this.sgd_value = this.currencies.SGD * value
    this.inr_value = this.currencies.INR * value
    this.myr_value = this.currencies.MYR * value
    this.jpy_value = this.currencies.JPY * value
    this.krw_value = this.currencies.KRW * value
  }

}
