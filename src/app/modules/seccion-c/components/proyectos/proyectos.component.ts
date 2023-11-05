import { Component, Input, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { IconoSkillComponent } from 'src/app/shared/components/icono-skill/icono-skill.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() img: string = "";
  @Input() id: string = "";
  @Input() tecnologiasNombre: string[] = [];
  //@ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {

      let proyecto = document.getElementById("proyecto" + this.id);
      let portada = document.getElementById("portada" + this.id);
      let img = document.getElementById("expandir-img" + this.id);
      let difuminado = document.getElementById("difuminado" + this.id);
      let habilidades = document.getElementById("contenedor-habilidades" + this.id);
      // const factory = this.componentFactoryResolver.resolveComponentFactory(IconoSkillComponent);


      if (proyecto && (portada && portada instanceof HTMLElement) && img && difuminado && habilidades) {

        /*    this.tecnologiasNombre.forEach(e => {

              const componenteRef = factory.create(this.dynamicComponentContainer.parentInjector);
              this.dynamicComponentContainer.insert(componenteRef.hostView);

              let appHabilidad = componenteRef.instance as IconoSkillComponent;
              appHabilidad.ancho = 60;
              appHabilidad.largo = 60;
              appHabilidad.nombre = e;
              appHabilidad.noScale = true;
              appHabilidad.tooltip = e.toUpperCase();


              //habilidades.appendChild(appHabilidad);
            })*/

        proyecto.addEventListener('mouseover', () => {
          portada.style.filter = "blur(3px)";
          img.style.display = "flex";
          difuminado.style.display = "block"
          habilidades.style.display = "flex"
          proyecto.style.transform = "scale(1.2)";
          proyecto.style.zIndex = "2";

        })

        img.addEventListener('mouseover', () => {
          img.style.transform = "scale(1.2)";
        })

        img.addEventListener('mouseout', () => {
          img.style.transform = "scale(1)";
        })

        proyecto.addEventListener('mouseout', () => {
          portada.style.filter = "blur(0px)";
          difuminado.style.display = "none"
          img.style.display = "none";
          habilidades.style.display = "none"
          proyecto.style.transform = "scale(1)";
          proyecto.style.zIndex = "1";

        })
      }
    })
  }
}
