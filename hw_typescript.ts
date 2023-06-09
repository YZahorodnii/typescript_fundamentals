// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
//

interface ICore{
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}
interface IArray{
    flight: number;
    core: {
        reuse_count: number;
        status: boolean;
    }
}
interface IRocket{
    rocket_name: string;
    first_stage: {
        cores: IArray[]
    },
    second_stage: {
        payloads: ICore[]
    }
}
interface newObject{
    mission_name: string;
    launch_date_local: string;
    launch_site: {
    site_name_long: string;
},
    links: {
    article_link: string;
        video_link: string;
},
    rocket: IRocket;
}
//
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
//
interface IntUser{
    name:string,
    age:number,
    gender:string
}

    const user: IntUser = {
        name:'Max',
        age:18,
        gender:'male'
    }

function sum(a:number,b:number):number{
    return a+b
}
function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser, inc:number):IntUser{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)