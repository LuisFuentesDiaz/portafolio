export enum ProyectoDirectorioBase {
  PROYECTO = "assets/proyectos/",
  CCA = `${ProyectoDirectorioBase.PROYECTO}cca/`,
  CENCOSUD = `${ProyectoDirectorioBase.PROYECTO}cencosud/`,
  GRUPOFIRMA = `${ProyectoDirectorioBase.PROYECTO}grupo-firma/`,
  PERSONAL = `${ProyectoDirectorioBase.PROYECTO}personal/`
}

export enum UrlCCA {
  CCAFAST = `${ProyectoDirectorioBase.CCA}ccafast/`,
  GUACHIMAN = `${ProyectoDirectorioBase.CCA}guachiman/`,
}

export enum UrlCENCOSUD {
  AUTOSERVICIORRHH = `${ProyectoDirectorioBase.CENCOSUD}autoservicio-rrhh/`,
}

export enum UrlGRUPOFIRMA {
  RENTACAR = `${ProyectoDirectorioBase.GRUPOFIRMA}rentacar/`,
}

export enum UrlPERSONAL {
  TESIS = `${ProyectoDirectorioBase.PERSONAL}tesis/`,
}
