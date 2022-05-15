import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/model/profil.model';
import { ProfilService } from 'src/app/service/profil.service';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


currentdomaine = null;
profils:Profil[];
profil:Profil;
closeResult:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userService:ProfilService,
    private modalService: NgbModal
  )  { this.profil=new Profil();}
  ngOnInit() {
    this.userService.getListPays().subscribe(data=>
      this.profils=data)
  }
  onSubmit(){
    this.userService.addpays(this.profil).subscribe
    (result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/profil']);
    
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
