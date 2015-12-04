var root       = document.getElementById('js-react-root');
var Router     = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink  = ReactRouter.IndexLink;
var Route  	   = ReactRouter.Route;
var Link   	   = ReactRouter.Link ;
var Render 	   = React.render;

var ListItem = React.createClass({
	render : function(){
		return <li key={this.props.key} >{this.props.content}</li>
	}
});
  
var ListOfAnchors = React.createClass({
	handleClick : function(data){
		console.log('So power much full '+data);
	},
	render : function(){
		var self = this;
		return (
			<ul>
				{
					self.props.anchors.map(function(data, index){
						return <li><Link to={data.link} key={index} onClick={self.handleClick.bind(null, index)} >{data.name}</ Link></li>
					})
				}
			</ul>
		);
	}
});

// var Nav = React.createClass({
// 	// State.
// 	getInitialState : function(){
// 		return {
// 			navPills : 	[
// 							{
// 								link : '/home',
// 								name : 'Home'
// 							},
// 							{
// 								link : '/aboutUs',
// 								name : 'About us'
// 							}
// 						]
// 		};
// 	},
// 	// Render function.
// 	render : function(){
// 		return (
// 			<nav>
// 				<ul>
// 					<ListOfAnchors  anchors={this.state.navPills} />
// 				</ul>
// 			</nav>
// 		)
// 	}
// });

var Content = React.createClass({
	// Render function.
	render : function(){
		return (
			<section>
			   <h1>{this.props.message}</h1>
			</section>
		)
	}
});

var Main = React.createClass({
	getInitialState : function(){
		return {
			salute : 'Component, I am your father.'
		}
	},
	render : function(){
		return (
			<section>
				<Nav />
				<Content message={this.state.salute} />
		        {this.props.children}
			</section>
		);
	}
});

var Home = React.createClass({
	render : function(){
		return (
			<section>
				<h1>Home</h1>
			</section>
		);
	}
});

var root       = document.getElementById('js-react-root');

var AboutUs = React.createClass({
	// Functions.
	getText : function(){
		return this.state.text
	},
	// State.
	getInitialState : function(){
		return {
			text : 'About us'
		}
	},
	// Render function.
	render : function(){
		return (
			<section>
				<h1>{this.getText()}</h1>
			</section>
		);
	}
});

ReactDOM.render(<AboutUs />, root);

Render((
  <Router>
    <Route path="/" component={Main}>
    	<Route path='home'component={Home} />
    	<Route path='aboutUs'component={AboutUs} />
    </Route>
  </Router>
), root)