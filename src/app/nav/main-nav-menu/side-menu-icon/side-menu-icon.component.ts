import { Component, Input, OnInit, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-menu-icon',
  templateUrl: './side-menu-icon.component.html',
  styleUrls: ['./side-menu-icon.component.scss']
})
export class SideMenuIconComponent implements OnInit {
  @Input() iconStatus: boolean;
  @Input() menuText: string;
  @Output() menuClickStatus = new EventEmitter<boolean>();
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  menuClickStatusFun(valHtml): void {
    if (this.iconStatus === false) {
      const htmlMenu = valHtml.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children;
      const shtmlParent = valHtml.target.parentNode.parentNode.parentNode.parentNode;
      if (shtmlParent) {
        const shtml = valHtml.target.parentNode.parentNode.parentNode.parentNode.children[1].children;
        Array.from(shtml).forEach(element => {
          this.renderer.removeClass(element, 'showSubMenu1stlevel');
        });
      }
      this.iconStatus = !this.iconStatus;
      this.menuClickStatus.emit(this.iconStatus);
    }
  }
}
