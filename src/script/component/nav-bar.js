class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      nav{
        box-shadow : 2px 2px 2px 2px grey;
        height : 70px;
      }
      nav > h1{
        font-size : 35px;
        color : white;
      }
      @media screen and (max-width : 550px){
        nav > h1{
          font-size : 20px;
          color : white;
        }
      }
    </style>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1>Al Quran</h1>
      </nav>`;
  }
}

customElements.define("nav-bar", NavBar);
