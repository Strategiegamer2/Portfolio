class AdComponent extends HTMLElement {
    connectedCallback() {
      const isMobile = matchMedia('(max-width: 500px)').matches;    
      const ad = document.currentScript.closest('.ad');
      const content = this
        .querySelector(isMobile ? '.ad__mobile' : '.ad__desktop')
        .content;
      
      this.appendChild(document.importNode(content, true));
    }
  }
  
  customElements.define('cool-ad', AdComponent);