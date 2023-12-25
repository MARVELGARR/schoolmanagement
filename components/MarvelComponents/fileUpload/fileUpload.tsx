import { UploadDropzone } from "@/util/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";
import '@uploadthing/react/styles.css'
interface FileUploadProps{
    onChange: (url?: string) => void
    value: string
    endpoint: 'messageFile' | 'serverImage'
}

const FileUpload = ({ onChange, value, endpoint
}: FileUploadProps) => {

    const fileType = value.split('.').pop();

    if(value && fileType !== 'pdf'){

        return (
            <div className=" relative h-20 w-full flex items-center justify-center ">
                <div className="absolute w-20 h-20">

                    <Image
                        src={value}
                        alt="upload"
                        width={70}
                        height={70}
                        className=" object-cover rounded-full"
                    />
                    <button onClick={() => onChange('')} type='button' className="absolute top-0 right-0 bg-rose-700 rounded-full p-1">
                        < X className='w-2 h-2 text-white'/>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res)=>{
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error)=>{
                console.log(error)
            }}
        />
    );
}
 
export default FileUpload;