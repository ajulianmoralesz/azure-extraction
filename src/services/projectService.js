import axiosHelper from "./helpers/axiosHelper"

async function getProjects()
{
    return await axiosHelper.request()
    .get('_apis/projects')
    .then(function(response){
        return response.data.value;
    })
    .catch(function(e){
        console.warn(e);
    })
}

export default{
    getProjects,
}