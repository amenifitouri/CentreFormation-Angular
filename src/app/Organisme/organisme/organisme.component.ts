import { Component, OnInit } from '@angular/core';

import { OrganismeService } from 'src/app/service/organisme.service';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Organisme } from 'src/app/model/organisme.model';
@Component({
  selector: 'app-organisme',
  templateUrl: './organisme.component.html',
  styleUrls: ['./organisme.component.css']
})
export class OrganismeComponent implements OnInit {

organismes:Organisme[];
organisme:Organisme;
closeResult:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userService:OrganismeService,
    private modalService: NgbModal
  )  { this.organisme=new Organisme();}
  ngOnInit() {
    this.userService.getListOrganisme().subscribe(data=>
      this.organismes=data)
  }
  onSubmit(){
    this.userService.addOrganisme(this.organisme).subscribe
    (result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/organismes']);
    
  }
  delete(id) {
    this.userService.deleteData(id)
      .subscribe(response => {
        console.log(response);
      })
  }
 

  open2(contentt) {
    this.modalService.open(contentt);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
