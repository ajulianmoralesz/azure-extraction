import axiosHelper from "./helpers/axiosHelper"


async function getItemsIteration(project, team, iteration){
    let body = {
        query: `Select [System.Id] From WorkItems Where [System.AreaPath] = '${project}\\${team}' AND 
        [System.IterationPath] = '${project}\\${iteration}' AND [System.State] != 'Removed'`
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


async function getTasks(project, team){
    let body = {
        query: `Select [System.Id] From WorkItems Where [System.WorkItemType] = 'Task'  
        AND [System.AreaPath] = '${project}\\${team}' AND [System.State] != 'Removed'`
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
        [System.IterationPath] = '${project}\\${iteration}' AND [System.State] != 'Removed'`
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
        AND [System.AreaPath] = '${project}\\${team}' AND [System.State] != 'Removed'`
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
        [System.IterationPath] = '${project}\\${iteration}' AND [System.State] != 'Removed'`
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

async function getPbiIteration(project, team, iteration){
    let body = {
        query: `Select [System.Id] From WorkItems Where [System.WorkItemType] = 'Product Backlog Item'  
        AND [System.AreaPath] = '${project}\\${team}' AND 
        [System.IterationPath] = '${project}\\${iteration}' AND [System.State] != 'Removed'`
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
    .then(async function(response){
        let result = response.data.fields;
        let detail = await getItemIds(myUrl);
        result.Id = detail.id;
        result.Parent = detail.parent
        return result;
    })
    .catch(function(e){
        console.warn(e);
        return  {};
    })    
}

async function getItemIds(url){
    return await axiosHelper.request()
    .get(`${url}?fields=System.Id,System.Parent`)
    .then(function(response){
        return {
            id : parseFloat(response.data.fields['System.Id']),
            parent: parseFloat(response.data.fields['System.Parent'])
        }
    })
    .catch(function(e){
        console.warn(e);
        return {id: 0, parent: 0};
    });
}

export default{
    getTasks,
    getTasksIteration,
    getBugsIteration,
    getBugs,
    getPbiIteration,
    getItemsIteration
}