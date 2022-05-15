import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/app/model/domaine.model';
import { DomaineService } from 'src/app/service/domaine.service';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
currentdomaine = null;
domaines:Domaine[];
domaine:Domaine;
closeResult:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userService:DomaineService,
    private modalService: NgbModal
  )  { this.domaine=new Domaine();}
  ngOnInit() {
    this.userService.getListDomaine().subscribe(data=>
      this.domaines=data)
  }
  onSubmit(){
    this.userService.adddomaine(this.domaine).subscribe
    (result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/domaines']);
    
  }
  delete(id) {
    this.userService.deleteData(id)
      .subscribe(response => {
        console.log(response);
      })
  }
  deleteDomainel(): void {
    this.userService.deleteData(this.currentdomaine.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
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
