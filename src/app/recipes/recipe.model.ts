export class RecipeModel {
  public name: string ;
  public description: string ;
  public imageUrl: string ;

  constructor(name: string, desc: string, imageurl: string ) {
  this.name = name;
  this.description = desc;
  this.imageUrl = imageurl;
  }
}
