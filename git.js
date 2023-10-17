// import { Octokit} from "https://esm.sh/octokit";
// const key = " "
// const octokit = new Octokit({ auth: key });

// const getFollowers =async (login) => {
//     const resp = await octokit.request(`GET /users/${login}/followers`);
//     console.log(resp);
// };

// const getName =async (login) => {
//     const resp = await octokit.request(`GET /users/${login}`);
//     console.log("name",resp);
// };

// const loadUsers = async () => {
//     const resp = await octokit.request(`GET /users`);
//     console.log(resp);
//     return resp.data;
// };
// const getRepos =async (login) => {
//     const resp = await octokit.request(`GET /users/${login}/repos`);
//     console.log("repos",resp);
// };


// const getInfo = async () => {
//     const data = await loadUsers()
//  data.forEach(async(user) => {
//      await getFollowers(user.login);
//      await getRepos(user.login);
//      await getName(user.login);
// })
    
// };
// getInfo();

