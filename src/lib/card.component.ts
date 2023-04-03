import { Component, HostBinding, Input } from '@angular/core';

import { TcView, View, view, Align } from '@ngx-tc/base';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements TcView {
  @HostBinding('class') get class() {
    return 'tc-card';
  };
  @HostBinding('class.outline') @Input() outline: boolean;
  @HostBinding('class.bg-image') @Input() bgImg: string;
  @HostBinding('class.card-primary') get viewDefault() { return this.tcView === view.primary; }
  @HostBinding('class.card-info') get viewInfo() { return this.tcView === view.info; }
  @HostBinding('class.card-accent') get viewAccent() { return this.tcView === view.accent; }
  @HostBinding('class.card-success') get viewSuccess() { return this.tcView === view.success; }
  @HostBinding('class.card-warning') get viewWarning() { return this.tcView === view.warning; }
  @HostBinding('class.card-error') get viewError() { return this.tcView === view.error; }
  @HostBinding('class.text-end') get rightAlign() { return this.align === 'end'; }
  @HostBinding('class.text-center') get centerAlign() { return this.align === 'center'; }
  @HostBinding('style.backgroundImage') get bgImage() {
    return !this.gradient ? (this.bgImg ? `url(${this.bgImg})` : null) : this.gradient;
  }

  @Input() align: Align;
  @Input() title: string;
  @Input() img: string;
  @Input() padding: number;
  @Input('view') tcView: View = view.primary;
  @Input('tcGradient') gradient: string[];
}
