import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'input-color',
    templateUrl: 'input-color.component.html'

})
export class InputColorComponent implements OnInit {
    text: string;

    @Input() set value(val) {
        this.ngModel = val;
        this.text = val;
    }
    @Output() valueChange = new EventEmitter();
    constructor() { }

    get value() {
        return this.text;
    }
    ngOnInit() {
        this.ngModel = this.value;
    }

    get ngModel() {
        return this.value;
    }

    set ngModel(value) {
        this.valueChange.emit(value);
    }
}
