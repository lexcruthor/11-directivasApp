import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red'
  private _mensaje: string = 'Este campo es obligatorio'
  htmlElement: ElementRef<HTMLElement>

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
   if (valor) {
    this.htmlElement.nativeElement.classList.add('hidden')
   } else {
    this.htmlElement.nativeElement.classList.remove('hidden')
   }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // const mensaje = changes['mensaje'].currentValue;
    // this.htmlElement.nativeElement.innerText = mensaje

  }
  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text')

  }
  setColor(){
  this.htmlElement.nativeElement.style.color=  this._color

  }

  setMensaje(){
  this.htmlElement.nativeElement.innerText = this._mensaje
  }
}
