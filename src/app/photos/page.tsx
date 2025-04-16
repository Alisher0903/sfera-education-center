import { Photo } from "@/helpers/api";
import PhotoSplide from "@/pages/photo/photo";


async function getPhotos() {
    const res = await fetch(`${Photo}`, {
        cache: 'no-store',
    });

    return res.json();
}

const  Photos = async()=> {
    const photosData = await getPhotos();
    return (
        <main>
            <PhotoSplide photosData={photosData} />
        </main>
    )
}
export default Photos;