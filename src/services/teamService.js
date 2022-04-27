import axiosHelper from "./helpers/axiosHelper"


async function getTeams(projectId){
    return await axiosHelper.request()
    .get(`_apis/projects/${projectId}/teams?api-version=6.0`)
    .then(function(response){
        return response.data.value;
    })
    .catch(function(e){
        console.warn(e);
    })
}

export default{
    getTeams
}