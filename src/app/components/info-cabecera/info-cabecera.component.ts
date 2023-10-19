import { Component } from '@angular/core';

@Component({
  selector: 'app-info-cabecera',
  templateUrl: './info-cabecera.component.html',
  styleUrls: ['./info-cabecera.component.css']
})
export class InfoCabeceraComponent {

  urlFotoPersonal: String = "https://scontent.fccp1-1.fna.fbcdn.net/v/t39.30808-6/305820862_5522048017840703_6173529586920252887_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGWScTf8ARVhaJzVwCAG5jAO9FLNC5CfQ470Us0LkJ9Du2ViqlgPIxcMqV0lMT1JgX-v7tuRsLe87iWrVvIfD_f&_nc_ohc=iu0vAro46nsAX-EESlH&_nc_ht=scontent.fccp1-1.fna&oh=00_AfD3djeAuuOrduhpjHifM5QZHEc-VwPLujRpSGD2XPhu2w&oe=65357B6A";

  InfoCabeceraComponent() {
    this.efectoSkill();
  }


  efectoSkill = () => {
    let divEfectoSkill = document.getElementById("SkillCabecera") || document.createElement("div");

    divEfectoSkill.innerText = "asdsad";
    console.log("aaaaaaaaaa");

  }
}
