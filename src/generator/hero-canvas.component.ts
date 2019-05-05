import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { autoDetectRenderer, Container } from 'pixi.js';

/**
 * Component which is used to display a generated hero on a canvas
 */
@Component({
    selector: 'hero-canvas',
    template: '<div></div>'
})
export class HeroCanvasComponent implements OnInit {
    private stage: Container;

    @Input() width: number = 64;
    @Input() height: number = 64;
    @Input() scaling: number = 4;

    constructor(private readonly elementRef: ElementRef) { }

    ngOnInit() {
        const renderer = autoDetectRenderer({
            clearBeforeRender: true,
            width: this.width * this.scaling,
            height: this.height * this.scaling
        });

        this.elementRef.nativeElement.appendChild(renderer.view);
        this.stage = new Container();
    }
}
