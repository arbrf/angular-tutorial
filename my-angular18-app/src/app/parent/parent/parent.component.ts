import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildComponent } from "../../child/child/child.component";
import { ClassService } from '../../../services/class-service.service';
import { Subject, takeUntil } from 'rxjs';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChildComponent, NgFor],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  intervalId: any;

  @ViewChild('textarea') box!: ElementRef;
  resizeObserver!: ResizeObserver;
  private destroy$ = new Subject<void>();
  data: any;

  constructor(public classService: ClassService) { }
  onSaved(count: number) {
    console.log("Count increased " + count);
  }

  @Input() name: string = "Send string to child;"
  showContent = false;
  @ViewChild('container') container!: ElementRef;
  mutationObserver!: MutationObserver;

  ngOnInit() {
  this.classService.getServiceName()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      names => {
        this.data = names;
      },
      error => {
        console.error("Error fetching service names", error);
      }
    );

  console.log("Parent Component Initialized");

  // ---- FIXED MutationObserver ----
  this.mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      console.log('Mutation type:', mutation.type);
      console.log('Affected nodes:', mutation.addedNodes, mutation.removedNodes);
    });
  });

  // observe after observer is created
  setTimeout(() => {
    this.mutationObserver.observe(this.container.nativeElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
  });

} 


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    console.log("Cleanging up resources");
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log("Interval cleared");
    }
  }



  
  addItem() {
    this.container.nativeElement.insertAdjacentHTML('beforeend', '<p>New Item Added</p>');
  }

removeItem() {
    this.container.nativeElement.removeChild(this.container.nativeElement.lastChild);
  }

  ngAfterViewInit() {

      this.resizeObserver = new ResizeObserver(entries => {
      const size = entries[0].contentRect;
      console.log(
        'Width:', size.width,
        'Height:', size.height
      );
    });

    this.resizeObserver.observe(this.box.nativeElement);
  }




}
