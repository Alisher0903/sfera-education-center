import {Photo} from "@/helpers/api";
import PhotoSplide from "@/pages-comp/photo/photo";
import {getAllData} from "@/helpers/request";

const Photos = async () => {
    const photosData = await getAllData(Photo);

    return <PhotoSplide photosData={photosData}/>

}
export default Photos;