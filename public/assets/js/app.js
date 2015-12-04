'use strict';

var Nav = React.createClass({
	displayName: 'Nav',

	// State.
	getInitialState: function getInitialState() {
		return {
			navPills: [{
				link: '/home',
				name: 'Home'
			}, {
				link: '/aboutUs',
				name: 'About us'
			}]
		};
	},
	// Render function.
	render: function render() {
		return React.createElement(
			'header',
			null,
			React.createElement(
				'nav',
				{ 'class': 'navbar navbar-default' },
				React.createElement(
					'div',
					{ 'class': 'container' },
					React.createElement(
						'div',
						{ 'class': 'navbar-header' },
						React.createElement(
							'a',
							{ 'class': 'navbar-brand', href: '/#/' },
							'MarketPlace'
						)
					),
					React.createElement(
						'ul',
						{ 'class': 'nav navbar-nav navbar-right' },
						React.createElement(ListOfAnchors, { anchors: this.state.navPills })
					)
				)
			),
			React.createElement(
				'nav',
				{ 'class': 'navbar navbar-inverse navbar-fixed-top' },
				React.createElement(
					'div',
					{ 'class': 'container' },
					React.createElement(
						'div',
						{ 'class': 'navbar-header' },
						React.createElement(
							'button',
							{ type: 'button', 'class': 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
							React.createElement(
								'span',
								{ 'class': 'sr-only' },
								'Toggle navigation'
							),
							React.createElement('span', { 'class': 'icon-bar' }),
							React.createElement('span', { 'class': 'icon-bar' }),
							React.createElement('span', { 'class': 'icon-bar' })
						),
						React.createElement(
							'a',
							{ 'class': 'navbar-brand', href: '#' },
							'Bootstrap theme'
						)
					),
					React.createElement(
						'div',
						{ id: 'navbar', 'class': 'navbar-collapse collapse' },
						React.createElement(
							'ul',
							{ 'class': 'nav navbar-nav' },
							React.createElement(
								'li',
								{ 'class': 'active' },
								React.createElement(
									'a',
									{ href: '#' },
									'Home'
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									'a',
									{ href: '#about' },
									'About'
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									'a',
									{ href: '#contact' },
									'Contact'
								)
							),
							React.createElement(
								'li',
								{ 'class': 'dropdown' },
								React.createElement(
									'a',
									{ href: '#', 'class': 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
									'Dropdown ',
									React.createElement('span', { 'class': 'caret' })
								),
								React.createElement(
									'ul',
									{ 'class': 'dropdown-menu' },
									React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: '#' },
											'Action'
										)
									),
									React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: '#' },
											'Another action'
										)
									),
									React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: '#' },
											'Something else here'
										)
									),
									React.createElement('li', { role: 'separator', 'class': 'divider' }),
									React.createElement(
										'li',
										{ 'class': 'dropdown-header' },
										'Nav header'
									),
									React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: '#' },
											'Separated link'
										)
									),
									React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: '#' },
											'One more separated link'
										)
									)
								)
							)
						)
					)
				)
			)
		);
	}
});
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
//# sourceMappingURL=app.js.map
