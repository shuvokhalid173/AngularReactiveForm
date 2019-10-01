import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {

  public CommentFrom : FormGroup ;

  constructor(private formBuilder : FormBuilder) { }

  get comment () {
    return this.CommentFrom.get('comment');
  }

  ngOnInit() {
    this.CommentFrom = this.formBuilder.group({
      comment : [''] , 
      ed_comment : [false]
    });
    this.CommentFrom.get('ed_comment').valueChanges.subscribe((checkedValue) => {
      const comment = this.CommentFrom.get('comment'); 
      if (checkedValue) {
        comment.setValidators(Validators.required);
      } else {
        comment.clearValidators(); 
      }
      comment.updateValueAndValidity();
    });
  }

}
