import {ToDoTask} from '../src/to-do/to-do-task.js';
import {fixture, html, expect} from '@open-wc/testing';

//describe es una forma simple de agrupar tests titulo + funcion conteniendo los test cases

describe('Test ToDoTask', () => {

    //cada it es un test case descripcion + funcion test case	


    it('to-do-task es una instancia ToDoTask', async () => {
        const element = document.createElement('to-do-task');
        assert.instanceOf(element, ToDoTask);
    });


    it('to-do-task tiene un string vacio como Id por defecto', async () => {
        const el = await fixture(html`<to-do-task></to-do-task>`);
        assert.equal(el.id, '');
    });

    it('to-do-task initialize Id', async () => {
        const el = await fixture(html`<to-do-task id="123456"></to-do-task>`);
        assert.equal(el.id, '123456');
    });

    it('todo-do-task evento click', async () => {
	var callback=function(e){ assert.equal(e.detail.id,123456); }
    	const el = await fixture(html`<to-do-task id='123456' @remover-tarea=${callback}></to-do-task>`);
    	const button = el.shadowRoot.querySelector('a');
    	button.click();
    });	

});


