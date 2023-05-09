// lwc-component.js
import { LightningElement, api } from 'lwc';
import getBankList from '@salesforce/apex/BankController.getBankList';

export default class LwcComponent extends LightningElement {
    @api policyId;
    bankDetails;
    error;

    connectedCallback() {
        this.getBankList();
    }

    // Call the getBankList Apex method
    getBankList() {
        getBankList({ policyId: this.policyId })
            .then(result => {
                this.bankDetails = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}