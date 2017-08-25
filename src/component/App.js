import React, { Component } from 'react';

class App extends Component {


	render () {

			return (

				<form>
				<label htmlFor="send">Ajouter</label>
				<input id="send" type="text"/>
				<button type="submit">envoyer</button>

				</form> 


				);
	}


}

export default App;