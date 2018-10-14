import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/userService.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  items: any;
  totalRec : number;
  constructor(private service: UserServiceService) { }
  recordToDisplay = [10, 20, 30,40,50];
  recordsSelected:any;
  public searchText : string;
  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  pagesize:number =10;
  p: number = 1;
  public length:number = 0;
  public page: number = 1;
  public rows: Array<any> = [];
  public itemsPerPage: number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  tempportData:any;
  s: any = { page:this.page , itemsPerPage: this.itemsPerPage };
  key: string = 'Tittle';
  reverse: boolean = false;
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.service.getData().map((response: Response) => response.json()).subscribe(data => {
      this.items = data;
      this.tempportData = data;

      this.length = this.tempportData.length;
      this.s.page="1"
      this.s.itemsPerPage="10"
     
        // this.page && this.config.paging ?
        this.setPage(1);
    });
  }
  onOptionSelectedForRecords(event) {
      if (event == "10") {
       this.pagesize =10;
        
      }
      if (event == "20") {
  
        this.pagesize =20;
      }
      if (event == "30") {
  
        this.pagesize =30;
      }
      if (event == "40") {
  
        this.pagesize =40;
      }
      if (event == "50") {
        this.pagesize =50;
      }
    // this.s.page="1"
    // this.s.pagesize=event
    this.setPage(1);
  
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.getPager(this.tempportData.length, page,this.pagesize);
    // get current page of items
    this.items = this.tempportData.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pager);
    }
  
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
      // calculate total pages
      let totalPages = Math.ceil(totalItems / pageSize);
    
      // ensure current page isn't out of range
      if (currentPage < 1) { 
          currentPage = 1; 
      } else if (currentPage > totalPages) { 
          currentPage = totalPages; 
      }
      
      let startPage: number, endPage: number;
      if (totalPages <= 10) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
      } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }
    
      // calculate start and end item indexes
      let startIndex = (currentPage - 1) * pageSize;
      let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    
      // create an array of pages to ng-repeat in the pager control
      let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    
      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
    }
    filter:any;
    test= "";
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
