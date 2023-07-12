import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server';
import {useState} from 'react'

interface ContactFormProps{
    id?: string
}


const ContactForm = (props:ContactFormProps) => {
    const { register, handleSubmit } = useForm();
    const [ deleteMeme, setDeleteMeme ] = useState(false)
    const [ update, setUpdate ] = useState(false)
    
    

  


    const onSubmit = async (data : any) =>{

        if (props.id && data.picture[0]){
            const formData = new FormData();
            formData.append('file', data.picture[0])
            server_calls.delete(props.id)
            server_calls.create(formData, data)
            setTimeout(() => {window.location.reload()}, 1000);
        }else if (props.id) {
            server_calls.update(data = data, props.id)
            setTimeout(() => {window.location.reload()}, 1000);
        }else{
            

        const formData = new FormData();
        formData.append('file', data.picture[0])
        // data = { ...data, picture: data.file[0].name}
        // formData.append('content_bottom', JSON.stringify(data.content_bottom))
        server_calls.create(formData, data)
        setTimeout(() => {window.location.reload()}, 1000);

    }
}



    const deleteMemeFunc = async () =>{
        if(props.id){
            server_calls.delete(props.id)
        }

        setTimeout(() => {window.location.reload()}, 1000);
    }

    

    if ( props.id && deleteMeme ) return (
        <div>
            <h1 className='text-lg text-bold pb-4'>Are you sure you want to delete this meme?</h1>
            <div className='flex p-1 justify-around'>
                <button onClick={deleteMemeFunc} className = 'flex justify-center bg-red-700 p-2 rounded hover:bg-slate-800 hover:text-white text-black'>
                    Delete
                </button>
                <button  onClick={()=> setDeleteMeme(false)} className = 'flex justify-center bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'>
                    Cancel
                </button>
            </div>
        </div>
    )

    if ( props.id && update )
    return (
        <div className='flex flex-col'>
            <h1 className='text-black text-2xl '>Update Your Meme</h1>
            
            <div>
              <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full py-1 align-center'>
                <div className='py-4'>
            
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file">Upload file</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file" type="file" {...register('picture')} />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">JPG, PNG or GIF.</p>
                </div>
                <div className='py-4'>
                    <label htmlFor="content_top" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Top of Meme</label>
                    <input type="text" {...register('content_top')} className='p-1 hover:border-2 hover:border-indigo-800'/>
                </div>
                <div className='py-4'>
            
                    <label htmlFor="content_bottom" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Bottom of Meme</label>
                    <input type="text" {...register('content_bottom')} className='p-1 hover:border-2 hover:border-indigo-800'/>
                </div>
                <div className='flex p-1 justify-around'>
                <button type='submit' className = 'flex justify-center bg-green-700 p-2 rounded hover:bg-slate-800 hover:text-white text-black'>
                    Update
                </button>
                <button  onClick={()=> setUpdate(false)} className = 'flex justify-center bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'>
                    Cancel
                </button>
                </div>
                </form>
            </div>
        </div>

    )


  return (
    <div className='w-full'>

        

        { props.id ? (
            <div>
                <h1 className='text-lg text-bold pb-4'>How would you like you proceed?</h1>
                <div className='flex p-1 justify-around'>
                    <button onClick={() => setUpdate(true)} className = 'flex justify-center bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'>
                        Update
                    </button>
                    <button onClick={() => setDeleteMeme(true)} className = 'flex justify-center bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'>
                        Delete
                    </button>
                </div>
            </div>
        ):(

        <div>
            <h1 className='text-black text-2xl '>Create Your Meme</h1>
            
            <div>
              <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full py-1 align-center'>
                <div className='py-4'>
            
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file">Upload file</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file" type="file" {...register('picture')} />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">JPG, PNG or GIF.</p>
                </div>
                <div className='py-4'>
                    <label htmlFor="content_top" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Top of Meme</label>
                    <input type="text" {...register('content_top')} className='p-1 hover:border-2 hover:border-indigo-800'/>
                </div>
                <div className='py-4'>
            
                    <label htmlFor="content_bottom" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Bottom of Meme</label>
                    <input type="text" {...register('content_bottom')} className='p-1 hover:border-2 hover:border-indigo-800'/>
                </div>
                <div className='flex p-1 justify-center'>
                    <button
                        className = 'flex justify-center bg-gray-300 p-2 rounded hover:bg-slate-800 hover:text-white text-black'
                    >
                            Create
                    </button>
                </div>
                </form>
            </div>
        </div>
    )}
    </div>
  )
}

export default ContactForm
