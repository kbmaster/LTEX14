import { LitElement, html} from 'lit-element';  

class HeaderApp extends LitElement {   

	render() {
		return html`
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
			<nav class="navbar navbar-inverse fixed-top bg-dark">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <a class="navbar-brand" href="">Test API</a>
			    </div>
  			</div>
			</nav>
		`;
	}

}  

customElements.define('header-app', HeaderApp); 
