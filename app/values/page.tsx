import {achievement} from "@/helpers/api";
import Values from "@/pages-comp/values/values"
import {getAllData} from "@/helpers/request";

const Visits = async () => {
    const achievementData = await getAllData(achievement);

    return <Values achievementData={achievementData}/>
}

export default Visits