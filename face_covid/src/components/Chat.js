import React, { Component } from 'react';
import Navigation from "./Navigation";
import url from '../Url';
import io from "socket.io-client"

export default class Chat extends Component {
	constructor(props) {
		super(props)
		this.token = "Bearer " + localStorage.getItem("authToken");
		this.user_id = localStorage.getItem("userID")
		this.state = {
			users: [],
			counsellors: [],
			chats: [],
			receiver: null,
			currentuser: null
		}
	};
	loadChats = (user2_id) => {
		this.setState({ receiver: user2_id });
		fetch(url.BASE_URL + "chat/conversation/" + this.user_id + "/" + user2_id, {
			headers: {
				Authorization: this.token
			}
		})
			.then((response) => response.json())
			.then((chats) => {
				console.log(chats)
				this.setState({ chats: chats });
			})
			.catch((err) => {
				console.log(err);
			})

		fetch(url.BASE_URL + "user/users/" + user2_id, {
			headers: {
				Authorization: this.token
			}
		})
			.then((response) => response.json())
			.then((currentuser) => {
				let cu = currentuser[0].name;
				console.log(cu);
				this.setState({ currentuser: cu })
			})
			.catch((err) => {
				console.log(err);
			})
	}

	componentDidMount = () => {
		fetch(url.BASE_URL + "chat/conversation/" + this.user_id, {
			headers: {
				Authorization: this.token
			}
		})
			.then((response) => response.json())
			.then((users) => {
				this.setState({ users: users });
			})
			.catch((err) => {
				console.log(err);
			})

		fetch(url.BASE_URL + "user/counsellors/", {
			headers: {
				Authorization: this.token
			}
		})
			.then((response) => response.json())
			.then((counsellors) => {
				this.setState({ counsellors: counsellors });
			})
			.catch((err) => {
				console.log(err);
			})

		this.socket = io("http://localhost:8000", { query: { id: this.user_id } });

		this.socket.on('receive-message', (chat) => {
			console.log(chat);
			let tempChats = this.state.chats;
			tempChats.push(chat);
			this.setState({ chats: tempChats });
		})

	}

	componentWillUnmount = () => {
		this.socket.close();
	}

	sendMessage = (event) => {
		if (event.code === "Enter") {
			let chat = {
				sender: this.user_id,
				receiver: this.state.receiver,
				message: event.target.value
			};
			this.socket.emit('send-message', chat);
			let tempChats = this.state.chats;
			tempChats.push(chat);
			this.setState({ chats: tempChats });
			event.target.value = "";
		}
	}

	logout = () => {
		localStorage.removeItem("authStatus");
		this.props.history.replace("/login");
	}

	render() {
		return (
			<div>
				<Navigation />
				<div className="container" style={{ marginTop: "100px" }}>
					<div className="row chatrow">
						<div className="col-4" style={{ backgroundColor: "lightgray", height: "85vh" }}>
							<h3>Recent Chats</h3>
							<ul>
								{this.state.users.map((user, index) => (
									<li style={{ cursor: "pointer" }} key={index} onClick={() => { this.loadChats(user._id) }}>{user.name}</li>
								))
								}
							</ul>

							<h3>Counsellors Available</h3>
							<ul>
								{this.state.counsellors.map((counsellor, index) => (
									<li style={{ cursor: "pointer" }} key={index} onClick={() => { this.loadChats(counsellor._id) }}>{counsellor.name}</li>
								))
								}
							</ul>

							<p style={{ cursor: "pointer" }} onClick={() => { this.logout(); }}>Logout</p>
						</div>

						<div className="col-8">
							{
								this.state.currentuser !== "null" ? (
									<div className="col-12"><h3>{this.state.currentuser}</h3></div>
								) :
									null
							}
							<div className="col-12" style={
								{
									height: "70vh",
									boxShadow: "inset 0 0 5px gray",
									paddingTop: "20px",
									overflow: "scroll",
									overflowX: "visible"
								}}>
								{
									this.state.chats.map((chat, index) => (
										chat.sender === this.user_id ? (
											<div className="chatM" key={index} style={{ float: "right" }}>{chat.message}</div>
										) :
											(
												<div className="chatM" key={index} style={{ float: "left" }}>{chat.message}</div>
											)

									))
								}
							</div>
							<div className="col-12">
								<div className="form-group">
									<input type="text" onKeyUp={(event) => { this.sendMessage(event) }} className="form-control" placeholder="Type a message" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
