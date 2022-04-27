import axiosHelper from "./helpers/axiosHelper"


async function getTasks(project, team){
    let body = {
        query: `Select [System.Id] From WorkItems Where [System.WorkItemType] = 'Task'  
        AND [System.AreaPath] = '${project}\\${team}'`
    }
    return await axiosHelper.request()
    .post(`${project}/${team}/_apis/wit/wiql?api-version=6.0`, body)
    .then(async function(response){
        return await Promise.all(
            response.data.workItems.map(async (x) => {
                return await getWorkItemDetail(x.url)
            })
        );
    })
    .catch(function(e){
        console.warn(e);
        return [];
    })
}


async function getTasksIteration(project, team, iteration){
    let body = {
        query: `Select [System.Id] From WorkItems Where [System.WorkItemType] = 'Task'  
        AND [System.AreaPath] = '${project}\\${team}' AND 
        [System.IterationPath] = '${project}\\${iteration}'`
    }
    return await axiosHelper.request()
    .post(`${project}/${team}/_apis/wit/wiql?api-version=6.0`, body)
    .then(async function(response){
        return await Promise.all(
            response.data.workItems.map(async (x) => {
                return await getWorkItemDetail(x.url)
            })
        );
    })
    .catch(function(e){
        console.warn(e);
        return [];
    })
}


async function getBugs(project, team){
    let body = {
        query: `Select [System.Id] From WorkItems Where [System.WorkItemType] = 'Bug'  
        AND [System.AreaPath] = '${project}\\${team}'`
    }
    return await axiosHelper.request()
    .post(`${project}/${team}/_apis/wit/wiql?api-version=6.0`, body)
    .then(async function(response){
        return await Promise.all(

            response.data.workItems.map(async (x) => {
                return await getWorkItemDetail(x.url)
            })

        );
    })
    .catch(function(e){
        console.warn(e);
        return [];
    })
}

async function getBugsIteration(project, team, iteration){
    let body = {
        query: `Select [System.Id] From WorkItems Where [System.WorkItemType] = 'Bug'  
        AND [System.AreaPath] = '${project}\\${team}' AND 
        [System.IterationPath] = '${project}\\${iteration}'`
    }
    return await axiosHelper.request()
    .post(`${project}/${team}/_apis/wit/wiql?api-version=6.0`, body)
    .then(async function(response){
        return await Promise.all(

            response.data.workItems.map(async (x) => {
                return await getWorkItemDetail(x.url)
            })

        );
    })
    .catch(function(e){
        console.warn(e);
        return [];
    })
}

async function getWorkItemDetail(url){
    let myUrl = url.replace(process.env.VUE_APP_APIURL, '/')
    return await axiosHelper.request()
    .get(myUrl)
    .then(function(response){
        return response.data.fields;
    })
    .catch(function(e){
        console.warn(e);
        return  {};
    })
    
}

export default{
    getTasks,
    getTasksIteration,
    getBugsIteration,
    getBugs
}