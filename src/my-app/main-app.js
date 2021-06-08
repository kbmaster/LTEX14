import { LitElement, html, css } from 'lit-element';  
//import '../to-do/to-do.js';
import '../test-api/test-api.js';

class MainApp extends LitElement {   

	static get styles()
	{
		return css `
			div
			{
			   margin-top:100px;	
			}
		`;
	}

	/*
	render() {
		return html`
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
			

			<div class='container'>
				<to-do title='Lista de tareas' 
				tareas='[{"id":123456,"texto":"Tarea 1","prioridad":3},
					 {"id":125674,"texto":"Tarea 2","prioridad":2},
					 {"id":126789,"texto":"Tarea 3","prioridad":1}]' @agregar-tarea="${this.log}"></to-do>
			</div>
		`;
	}
	*/


	render()
	{
		return html`
			<div class='container'>
				<test-api></test-api>
			</div>		
		`;
	}


	
	log(e)
	{
		console.log(e.detail.texto);
	}

}  

customElements.define('main-app', MainApp); 
