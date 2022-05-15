import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
users:User[];
User:User;
closeResult:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userService:UserService,
    private modalService: NgbModal
  )  { this.User=new User();}
  ngOnInit() {
    this.userService.getListUser().subscribe(data=>
      this.users=data)
  }
  onSubmit(){
    this.userService.adduser(this.User).subscribe
    (result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/users']);
    
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
