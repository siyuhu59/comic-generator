import Image from "next/image"

interface ImagesInterface {
    id: string | string[] | undefined
}

export default function Images({id} : ImagesInterface) {
    return (
        <div className="flex flex-wrap">
            <Image className="mr-2 mb-2" src={`http://cvpr.kumoh.ac.kr/bini/gen_comic/img/${id}_00001_.png`} alt={""} width={300} height={300}/>
            <Image className="ml-2 mb-2" src={`http://cvpr.kumoh.ac.kr/bini/gen_comic/img/${id}_00002_.png`} alt={""} width={300} height={300}/>
            <Image className="mr-2 mt-2" src={`http://cvpr.kumoh.ac.kr/bini/gen_comic/img/${id}_00003_.png`} alt={""} width={300} height={300}/>
            <Image className="ml-2 mt-2" src={`http://cvpr.kumoh.ac.kr/bini/gen_comic/img/${id}_00004_.png`} alt={""} width={300} height={300}/>
        </div>
    )
}