import axios from "axios";
class ApiClient {
	constructor(remoteHostUrl) {
		this.remoteHostUrl = remoteHostUrl;
		this.token = null;
		this.tokenName = "token";
	}

	setToken(token) {
		this.token = token;
		// AsyncStorage.setItem(this.tokenName, token);
	}

	async request({ endpoint, method = `GET`, data = {} }) {
		const url = `${this.remoteHostUrl}${endpoint}`;

		const headers = {
			"Content-Type": "application/x-www-form-urlencoded", Accept: "application/json",
			Authorization: this.token ? `Bearer ${this.token}` : "",
		};

		try {
			const res = await axios({ url, method, data, headers });
			return { data: res.data, error: null };
		} catch (error) {
			console.error("APIclient.makeRequest.error:");
			console.error({ errorResponse: error.response });
			console.error(error)
			const message = error?.response?.data?.error?.message;
			return { data: null, error: message || String(error) };
		}
	}

	async fetchUserFromToken() {
		return await this.request({ endpoint: `/auth/me`, method: `GET` });
	}

	async registerUser(credentials) {
		return await this.request({
			endpoint: `/auth/register`,
			method: `POST`,
			data: credentials,
		});
	}

	async loginUser(credentials) {
		return await this.request({
			endpoint: `/auth/login`,
			method: `POST`,
			data: credentials,
		});
	}

	async logoutUser() {
		// localStorage.removeItem(this.tokenName);
	}

    async fetchPosts(){
        return await this.request({
            endpoint: `/posts/`,
            method: `GET`
        })
    }

    async fetchUserData(username) {
		// Endpoint format is `/user/$[user.username}/`
        return await this.request({
            endpoint: `/user/${username}`,
            method: `GET`
        })
    }

	async fetchUserPost(endpoint){
		// Endpoint format is `/posts/${user.username}/${post.id}`
		return await this.request({
			endpoint: endpoint,
			method: `GET`
		})
	}

	async createPost(endpoint, data){
		// Endpoint format is `/posts/${user.username}`,
		return await this.request({
			endpoint: endpoint,
			method: `POST`,
			data: data,
		})
	}

	async createComment(endpoint, data){
		// Endpoint format is `/comments/${post.id}`,
		return await this.request({
			endpoint: endpoint,
			method: `POST`,
			data: data,
		})
	}

}

const API = new ApiClient("https://quillpoems.herokuapp.com");
export default API;