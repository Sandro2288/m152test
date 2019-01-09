import { environment } from 'src/environments/environment';

export class nlclub {
	public championshipTitle: number[] = new Array();

  public id: string;
  public name: string;
  public gruendung: number;
  public headcoach: string;
  public gf: string;
  public sportchef: string;
  public stadion: string;
  public sitzplaetze: number;
  public stehplaetze: number;
  public adresse: string;
  public plz: string;
  public ort: string;
  public email: string;
  public logo: string;
  public photo: string;

  constructor (id: string) {

    for (const club of environment.clubs) {
      if (club[0] === id) {
        this.id = club[0];
        this.name = club[1];
        this.gruendung = Number(club[2]);
        this.headcoach = club[3];
        this.gf = club[4];
        this.sportchef = club[5];
        this.stadion = club[6];
        this.sitzplaetze = Number(club[7]);
        this.stehplaetze = Number(club[8]);
        this.adresse = club[9];
        this.plz = club[10];
        this.ort = club[11];
        this.email = club[12];
        this.logo = club[13];
        this.photo = club[14];
      }
    }

    for (const year of environment.championship) {
      if (year[2] === id) {
        this.championshipTitle.push(Number(year[0]));
      }
    }

  }

}
