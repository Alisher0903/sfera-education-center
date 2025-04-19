import { achievement } from "@/helpers/api";
import Values from "@/pages/values/values"


async function getAchievement() {
    const res = await fetch(`${achievement}`, {
        cache: 'no-store',
    });

    return res.json();
}

const Visits = async()=>{
    const achievementData = await getAchievement();
    
    return(
        <div>
           <Values achievementData={achievementData}/>
        </div>
    )
}

export default Visits