import axiosHelper from "./helpers/axiosHelper"

async function getTeamIterations(project, team)
{
    return await axiosHelper.request()
    .get(`${project}/${team}/_apis/work/teamsettings/iterations?api-version=6.0`)
    .then(function(response){
        return response.data.value;
    })
    .catch(function(e){
        console.warn(e);
    })
}

export default{
    getTeamIterations,
}