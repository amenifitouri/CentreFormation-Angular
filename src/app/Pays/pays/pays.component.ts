import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/model/pays.model';
import { PaysService } from 'src/app/service/pays.service';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

currentdomaine = null;
pays:Pays[];
pay:Pays;
closeResult:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userService:PaysService,
    private modalService: NgbModal
  )  { this.pay=new Pays();}
  ngOnInit() {
    this.userService.getListPays().subscribe(data=>
      this.pays=data)
  }
  onSubmit(){
    this.userService.addpays(this.pay).subscribe
    (result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/pays']);
    
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
