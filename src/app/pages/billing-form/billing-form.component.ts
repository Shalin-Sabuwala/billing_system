import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'app-billing-form',
    templateUrl: './billing-form.component.html',
    styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {
    billingForm: FormGroup;
    bsConfig: Partial<BsDatepickerConfig>;
    submitted = false;
    deleteProduct = false;
    constructor(private fb: FormBuilder) {
        this.bsConfig = Object.assign({}, { containerClass: 'theme-orange' });

    }
    ngOnInit(): void {
        this.checkValidation();
    }
    get f() {
        return this.billingForm.controls;
    }
    checkValidation() {
        this.billingForm = this.fb.group({
            billNo: ['', [Validators.required]],
            date: ['', Validators.required],
            mobileNo: ['', [Validators.required]],
            customorName: ['', [Validators.required]],
            address: ['', [Validators.required]],
            city: ['', [Validators.required]],
            country: ['', [Validators.required]],
            pinCode: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            selling_points: this.fb.array([this.createItemFormGroup()])
        })
    }
    PostData(): void {
        this.submitted = true;
        if (this.billingForm.valid) {
            console.log(this.billingForm.value);
        }
    }
    createItemFormGroup() {
        return this.fb.group({
            productName: null,
            HSNNo: null,
            qty: null,
            total: null
        });
    }
    get sellingPoints() {
        return this.billingForm.get('selling_points') as FormArray;
    }
    addSellingPoint() {
        this.sellingPoints.push(this.createItemFormGroup());
    }
    deleteSellingPoint(index) {
        this.sellingPoints.removeAt(index);
        if (index >= 2) {
            this.deleteProduct = true;
        }
    }

}
