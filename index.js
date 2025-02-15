function saturdayFun(fun1 = "roller-skate"){
   return `This Saturday, I want to ${fun1}!`;
};

saturdayFun("bathe my dog");

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
};

mondayWork("work from home");

//


function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}