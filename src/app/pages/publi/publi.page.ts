import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publi',
  templateUrl: './publi.page.html',
  styleUrls: ['./publi.page.scss'],
})
export class PubliPage implements OnInit, OnDestroy {
  buffer: number;
  progress: number;
  intervalId: any;

  constructor(private router: Router) {
    this.buffer = 1; // Puedes ajustar el buffer si necesitas un efecto de "buffering"
    this.progress = 0;
  }

  ngOnInit() {
    this.startProgress();
  }

  ngOnDestroy() {
    // Limpiar el intervalo cuando el componente sea destruido
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startProgress() {
    const interval = 100; // Intervalo de 100 ms
    const duration = 10000; // 10000 ms = 10 segundos
    const step = interval / duration;

    this.intervalId = setInterval(() => {
      if (this.progress < 1) {
        this.progress += step;
      } else {
        clearInterval(this.intervalId);
        this.router.navigate(['/inicio']);
        console.log("Estoy Rediriguiendo");
      }
    }, interval);
  }
}
