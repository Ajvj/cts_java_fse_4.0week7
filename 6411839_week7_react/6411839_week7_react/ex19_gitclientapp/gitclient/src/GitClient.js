// src/GitClient.js
import axios from 'axios';

class GitClient {
  /**
   * Fetches repositories for a given GitHub username
   * @param {string} username
   * @returns {Promise<string[]>} array of repo names
   */
  static async getRepositories(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await axios.get(url);
    return response.data.map(repo => repo.name);
  }
}

export default GitClient;
