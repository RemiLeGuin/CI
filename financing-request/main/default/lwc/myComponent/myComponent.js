import { LightningElement, api } from 'lwc';

export default class MyComponent extends LightningElement {
    @api title;
    @api paragraph;
}