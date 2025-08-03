// src/GitClient.test.js
import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    // 1. Prepare mock data
    const mockRepos = [
      { name: 'awesome-project' },
      { name: 'react-hooks-demo' },
    ];
    axios.get.mockResolvedValue({ data: mockRepos });

    // 2. Invoke module
    const names = await GitClient.getRepositories('techiesyed');

    // 3. Assert
    expect(names).toEqual(['awesome-project', 'react-hooks-demo']);
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/techiesyed/repos'
    );
  });
});
