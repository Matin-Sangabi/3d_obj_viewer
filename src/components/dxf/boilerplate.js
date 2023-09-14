import { Boilerplate3D } from "./boilerplate3d";

export class Boilerplate {
  constructor() {
    this.onLoad = null;
    this.data_file = null;
  }

  init(file) {
    //add html
    this._addHtml();
    console.log("run");
    this.data_file = file;
    //scene managing code
    this.three = new Boilerplate3D();
    if (this.data_file) {
      this.loadFile(this.data_file);
    }
    // this.loading = document.getElementById("loading");
  }

  _addHtml() {
    //create input element

    let loading = document.createElement("div");
    loading.id = "loading";
    loading.innerText = "Loading...";
    document.body.insertBefore(loading, document.body.firstChild);
  }

  async loadFile(event) {
    var file = event;
    this.loading = document.getElementById("loading");
    this.loading.style.display = "block";

    if (this.onLoad) await this.onLoad(file);

    this.loading.style.display = "none";
  }
}
