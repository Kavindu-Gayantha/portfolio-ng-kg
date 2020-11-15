import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickLinkedin() {
    window.location.href = 'https://www.linkedin.com/in/kavindu-gayantha-73478615b/';
  }
  onClickGithub() {
    window.location.href = 'https://github.com/Kavindu-Gayantha';
  }
  onClickFacebook() {
    window.location.href = 'https://www.facebook.com/profile.php?id=100008929308296';
  }
  onClickMedium() {
    window.location.href = 'https://medium.com/@96kavindugayantha';
  }
  onClickYoutube() {
    window.location.href = 'https://www.youtube.com/channel/UC6RVPaqYWHRwBDpl7RFRrdg?view_as=subscriber';
  }
  onClickStack() {
    window.location.href = 'https://stackoverflow.com/users/9173526/kavindu-gayantha';
  }

}
