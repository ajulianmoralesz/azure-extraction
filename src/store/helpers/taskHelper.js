
function GetValues(data){
    return {
        estimate: data.map((x)=> {
            if(isNaN(x['Microsoft.VSTS.Scheduling.OriginalEstimate']))
            {return 0;}
            else{
                return x['Microsoft.VSTS.Scheduling.OriginalEstimate'];
            }
        }).reduce((a,b) => a+b, 0),
        real: data.map((x)=> {
            if(isNaN(x['Microsoft.VSTS.Scheduling.CompletedWork']))
            {return 0;}
            else{
                return x['Microsoft.VSTS.Scheduling.CompletedWork'];
            }
        }).reduce((a,b) => a+b, 0),
        compliance: (data.filter(x => x['System.State'] === 'Done').length / (data.length === 0 ? 1: data.length) ) * 100.0
    };
}
function getChartIterationValues(data){
    let users = data.map( (x)=> {
        if(x['System.AssignedTo'] !== undefined)
        {
            return x['System.AssignedTo'].displayName
        }        
    });
    let groupedUsers = [...new Set(users)];
    let result = [];
    groupedUsers.filter((x) => x !== undefined).forEach(element => {
        let notNullsData = data.filter( (x) => x['System.AssignedTo'] !== undefined);
        let partialData = notNullsData.filter( (x) => x['System.AssignedTo'].displayName === element);
        let values = GetValues(partialData);
        result.push({
            user: element,
            estimate: values.estimate,
            real : values.real,
            compliance: values.compliance
        });
    });
    let notAssignedData = data.filter( (x) => x['System.AssignedTo'] === undefined);
    if(notAssignedData.length > 0)
    {
        let notAssignedValues = GetValues(notAssignedData);
        result.push({
            user: 'Sin Asignar',
            estimate: notAssignedValues.estimate,
            real : notAssignedValues.real,
            compliance: notAssignedValues.compliance
        });
    }

    return result;

}
function getChartValues(data, iterations){
    let iterationsGrouped = iterations.map(x=> x.path);
    let result = [];
    iterationsGrouped.forEach(element => {
        let partialData = data.filter( (x) => x['System.IterationPath'] === element)
        let values = GetValues(partialData);
        result.push({
            iteration: element,
            estimate: values.estimate,
            real : values.real,
            compliance: values.compliance
        })        
    });
    return result;
}

export default{
    GetValues,
    getChartValues,
    getChartIterationValues
}