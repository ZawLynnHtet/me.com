import { Component, ElementRef, OnInit } from '@angular/core';

// declare var require: any
// const FileSaver = require('file-saver');
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  pageNum: number = 0
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
      this.animation();
      this.openCover();
      this.home();
      this.hire();
  }

  reverse(){
    let pages = this.elementRef.nativeElement.querySelectorAll('.book-page.page-right');
    let totalPages = pages.length;
    console.log(totalPages);
    this.pageNum--;
    if(this.pageNum < 0){
      this.pageNum = totalPages - 1;
    }
  }

  home(){
    let pages = this.elementRef.nativeElement.querySelectorAll('.book-page.page-right');
    const toProfile = document.querySelector('.back-profile');
    toProfile?.addEventListener('click', () => {
      pages.forEach((page: HTMLElement, index: number) => {
        setTimeout(() => {
          this.reverse();
          pages[this.pageNum].classList.remove('turn');
          setTimeout(() => {
            this.reverse();
            pages[this.pageNum].style.zIndex = (10 + index).toString();
          }, 500);
        }, (index + 1) * 200 + 100);
      });
    })
  }

  openCover(){
    const coverRight = document.querySelector('.cover.cover-right') as HTMLElement;
    const pageLeft = document.querySelector('.book-page.page-left') as HTMLElement;
    let pages = this.elementRef.nativeElement.querySelectorAll('.book-page.page-right');
;    setTimeout(() => {
      coverRight.classList.add('turn');
    }, 2100);
    
;    setTimeout(() => {
        coverRight.style.zIndex = '-1';
    }, 2800);

    setTimeout(() => {
        pageLeft.style.zIndex = '20';
    }, 3200);

    pages.forEach((page: HTMLElement, index: number) => {
      setTimeout(() => {
        this.reverse();
        console.log(this.pageNum);
        
        pages[this.pageNum].classList.remove('turn');
        setTimeout(() => {
          this.reverse();
          pages[this.pageNum].style.zIndex = (10 + index).toString();
        }, 500);
      }, (index + 1) * 200 + 2100);
    });
}

  animation(): void {
    const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

    pageTurnBtns.forEach((el, index) => {
      el.addEventListener('click', () => {
        const pageTurnId = el.getAttribute('data-page');
        console.log(pageTurnId)
        const pageTurn = document.getElementById(pageTurnId!);

        if (pageTurn!.classList.contains('turn')) {
          pageTurn!.classList.remove('turn');
          setTimeout(() => {
            pageTurn!.style.zIndex = (20 - index).toString();
          }, 500);
        } else {
          pageTurn!.classList.add('turn');
          setTimeout(() => {
            pageTurn!.style.zIndex = (20 + index).toString();
          }, 500);
        }
        console.log("animation is going");
      });
    });
  }

  hire(){
    const pages = this.elementRef.nativeElement.querySelectorAll('.book-page.page-right');
    const contact = this.elementRef.nativeElement.querySelector('.btn.hire-me');
    contact!.addEventListener('click', () => {
      pages.forEach((page: HTMLElement, index: number) => {
        setTimeout(() => {
          page.classList.add('turn');
          setTimeout(() => {
            page.style.zIndex = (20 + index).toString();
          }, 500);
        }, (index + 1) * 200 + 100);
      });
    });
  }

  downloadCV() {
    const url = "../../assets/images/projects.pdf";
    const name = "CV_zawlynnhtet.pdf";

    // try {
    //   FileSaver.saveAs(url, name);
    // } catch (err) {
    //   console.log(err);
    // }
  }
}
