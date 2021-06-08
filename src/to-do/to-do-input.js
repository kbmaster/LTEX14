import { LitElement, html, css } from 'lit-element';  

class ToDoInput extends LitElement {    
	
	
	static get styles()
        {
                return css `

                         .break{
				height:20px;
                         }
                `;
        }



        constructor() {
                // Always calls super() first.
                super();
                this.tarea='';
		this.prioridad=1;
        }
	
	// Properties code up here	   
	render() {

	return html`
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<form>
			<div class='form-row'>
			<div class="col-7">
				<input type="text" class="form-control"  value="${this.tarea}" @input="${this.updateTarea}" placeholder="Ingrese una tarea"/>
			</div>	
			
			<div class="col">
				<select class='form-control'  @change="${this.updatePrioridad}">
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
			</div>
			
			<div class='col'>
				<input type="button" class="btn btn-primary" value='Agregar' @click="${this.agregarTarea}" />
			</div>
			</div>

			<div class="form-row break"></div>
		</form>
		`;
	}

	updateTarea(e)
	{
		this.tarea=e.target.value;
	}

	updatePrioridad(e)
	{
		this.prioridad=e.target.value;
	}

	agregarTarea()
	{
		this.dispatchEvent(new CustomEvent('agregar-tarea',
		{	
			detail:{'texto':this.tarea,'prioridad':this.prioridad},
			bubbles:true,
			composed:true
		}));		
	}

}

customElements.define('to-do-input', ToDoInput)
