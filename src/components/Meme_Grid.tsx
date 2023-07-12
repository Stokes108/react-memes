import { useState } from 'react'
import MemeCreate from "./MemeCreate";
import { useGetData } from "../custom_hooks/FetchData";
import Modal from "./Modal";

const Meme_Grid = () => {
  // const [imageFile, setImageFile] = useState('');
  // const [content, setContent] = useState();
  // const [content1, setContent1] = useState();

  const { memeData, getData } = useGetData();
  const [open, setOpen ] = useState(false);
  const [ memeId, setMemeId] = useState('')


  // const getData =  async () => {
  //   const data = await server_calls.get();
  //   setImageFile(data[3]['image_file'])
  //   setContent1(data[3]['content_bottom'])
  //   setContent(data[3]['content_top'])



  //   console.log(imageFile, content, content1);
    
  // }

  const createCar  = () =>{
    setMemeId('')
    setOpen(true)
    getData
  }

  


  return (
    <div>

      <Modal 
        open = {open}
        onClose = {() => {setOpen(false)}}
        id = {memeId}
      />


      <div onClick={(e) => {e.stopPropagation()}} className="text-center pt-4">
        <button onClick={createCar} className="text-gray-800 bg-orange-600 hover:text-indigo-100  border-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create a New Meme</button>    
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 pt-4 px-3 place-items-center">
        {memeData.map((meme, index) =>(
          <div  onClick={(e) => {e.stopPropagation()}}>
          <div key={index} className="" onClick={() => setMemeId(meme['id'])}>

              <div onClick={() => setOpen(true)}> 
                <MemeCreate
                url= {`https://meme-app-flask.onrender.com/static/meme_photos/${meme['image_file']}`}
                content_bottom= {meme['content_bottom']}
                content_top= {meme['content_top']}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Meme_Grid
