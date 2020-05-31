import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector:'[modal-trigger]' //Different from Component, selector name is wrap in [...]
                                // which shows that this is an attriubute not directive
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement; 
    @Input('modal-trigger') modalId: string; // This means that 'modal-trigger' is the input that is coming in
                                            // And it is assigned to modalId

    //ElementRef: pointer to a specific HTML element
    constructor(rel: ElementRef, @Inject(JQ_TOKEN) private $: any){
        this.el = rel.nativeElement
    }
    ngOnInit() {
        this.el.addEventListener('click', e=>{
            this.$(`#${this.modalId}`).modal({})
        })  
    }
}