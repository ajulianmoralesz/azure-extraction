
function GetValues(data)
{
    return {
        bugsCount: data.length,
        openBugsCount: data.filter(x=> x['System.State'] !== 'Done').length
    };
}

function GetChartValues(data, iterations)
{
    let iterationsGrouped = iterations.map(x=> x.path);
    let result = [];
    iterationsGrouped.forEach(element => {
        let partialData = data.filter( (x) => x['System.IterationPath'] === element)
        let values = GetValues(partialData);
        result.push({
            iteration: element,
            totalBugs: values.bugsCount,
            openBugs : values.openBugsCount
        })        
    });
    return result;
}

export default {
    GetValues,
    GetChartValues
}