import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publi',
  templateUrl: './publi.page.html',
  styleUrls: ['./publi.page.scss'],
})
export class PubliPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.redirectAfterDelay();
  }

  redirectAfterDelay() {
    setTimeout(() => {
      console.log("Estoy diriguiendote");
      this.router.navigate(['/inicio']);
    }, 10000); // 10000 milisegundos = 10 segundos
  }
}
