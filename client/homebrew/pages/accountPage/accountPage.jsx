const React = require('react');
const createClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');

const UIPage = require('../basePages/uiPage/uiPage.jsx');

const Nav = require('naturalcrit/nav/nav.jsx');
const Navbar = require('../../navbar/navbar.jsx');

const RecentNavItem = require('../../navbar/recent.navitem.jsx').both;
const Account = require('../../navbar/account.navitem.jsx');
const NewBrew = require('../../navbar/newbrew.navitem.jsx');
const HelpNavItem = require('../../navbar/help.navitem.jsx');

const AccountPage = createClass({
	displayName     : 'AccountPage',
	getDefaultProps : function() {
		return {
			brew    : {},
			uiItems : []
		};
	},
	getInitialState : function() {
		return {
			uiItems : this.props.uiItems
		};
	},

	renderNavItems : function() {
		return <Navbar>
			<Nav.section>
				<NewBrew />
				<HelpNavItem />
				<RecentNavItem />
				<Account />
			</Nav.section>
		</Navbar>;
	},

	renderUiItems : function() {
		// console.log(JSON.stringify(this.props.uiItems));
		return <>
			<h1>Account Information  <i className='fas fa-user'></i></h1>
			<p><strong>Username: </strong> {this.props.uiItems.username || 'No user currently logged in'}</p>
			<p><strong>Last Login: </strong> {this.props.uiItems.issued || '-'}</p>
			<p></p>
			<h3>MongoDB Information</h3>
			<p><strong>Brews on MongoDB: </strong> {this.props.uiItems.mongoCount || '-'}</p>
			<p></p>
			<h3>Google Information <i className='fa-brands fa-google-drive'></i></h3>
			<p><strong>Linked to Google: </strong> {this.props.uiItems.googleId ? 'YES' : 'NO'}</p>
			{this.props.uiItems.googleId ? <p><strong>Brews on Google Drive: </strong> {this.props.uiItems.fileCount || '-'}</p> : '' }
		</>;
	},

	render : function(){
		return <UIPage brew={this.props.brew} uiItems={this.renderUiItems()} ></UIPage>;
	}
});

module.exports = AccountPage;
