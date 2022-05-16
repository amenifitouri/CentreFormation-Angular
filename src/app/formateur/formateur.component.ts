import { Component, OnInit } from '@angular/core';

import { OrganismeService } from 'src/app/service/organisme.service';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Organisme } from 'src/app/model/organisme.model';
import { Formateur } from 'src/app/model/formateur.model';
import { FormateurService } from '../service/formateur.service';
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class  FormateurComponent implements OnInit {

organismes:Organisme[];
organisme:Organisme;
closeResult:string;
formateurss:Formateur[];
formateur:Formateur;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userService:OrganismeService,
    private formateurService:FormateurService,
    private modalService: NgbModal
  )  { this.organisme=new Organisme();}


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
  ngOnInit() {
    this.userService.getListOrganisme().subscribe(data=>
      this.organismes=data)
      this.formateurService.getListFormateur().subscribe(data=>
        this.formateurss=data)
  }
  onSubmit(){
    this.formateurService.addformateur(this.formateur).subscribe
    (result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/formateurs']);
    
  }

  delete(id) {
    this.formateurService.deleteData(id)
      .subscribe(response => {
        console.log(response);
      })
  }


  open2(contentt) {
    this.modalService.open(contentt);
  }

}
