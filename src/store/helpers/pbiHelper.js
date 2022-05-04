import workitemsService from "../../services/workitemsService";
function GetValues(data){
    return {
        compliance: (data.filter(x => x['System.State'] === 'Done').length / (data.length === 0 ? 1: data.length) ) * 100.0
    };
}

function setIconState(pbi){
    switch (pbi['System.State']) {
        case 'New':
            return {
                icon : 'mdi-emoticon-sick',
                last : pbi['System.BoardColumn'] ?? 'Sin estado',
                color: 'red'
            };
        case 'Done':
            return {
                icon: 'mdi-emoticon',
                last : pbi['System.BoardColumn'] ?? 'Sin Estado',
                color: 'green'
            };
        default:
            return {
                icon : 'mdi-emoticon-confused',
                last: pbi['System.BoardColumn'] ?? 'Sin Estado',
                color: 'amber'
            };
    }
}

function getTags(tags){
    if(tags !== null && tags !== undefined)
    {
        return tags.split(';');
    }
    return [];
}
async function getSprintGoalInfo(info, data){
    let items = await workitemsService.getItemsIteration(info.project, info.team, info.iteration);
    let result = [];
    data.forEach(pbi => {
        let pbiBugs = items.filter( (x) => x['System.WorkItemType'] === 'Bug' && x.Parent === pbi.Id );
        let pbiTask = items.filter( (x) => x['System.WorkItemType'] === 'Task' && x.Parent === pbi.Id );
        let progress = 0.0;
        if(items.filter(p => p.Parent === pbi.Id).length>0){
            progress = (items.filter(p => p.Parent === pbi.Id && p['System.State'] === 'Done').length/items.filter(p => p.Parent === pbi.Id).length) * 100
        }
            
        let r = {
            title : pbi['System.Title'],
            state : setIconState(pbi),
            bugs: pbiBugs.length,
            task: pbiTask.length,
            progress: progress,
            tags : getTags(pbi['System.Tags'])
        }
        result.push(r);
    });
    return result;
}


export default{
    GetValues,
    getSprintGoalInfo,
}