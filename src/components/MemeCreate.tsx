
interface meme_props{
    url : string,
    content_top : React.ReactNode,
    content_bottom : React.ReactNode

}


const MemeCreate = (props: meme_props) => {

    console.log(props.url);
    
  return (
    <div className="h-[200px] w-[200px] relative">
        <img src={props.url} className="object-cover h-48 w-full" alt="" />
        <div className="absolute bottom-0 px-4 py-3 w-full">
            <p className="text-black text-center font-impact text-xl"> {props.content_bottom}</p>
        </div>
        <div className="absolute top-0 px-4 py-3 w-full">
            <p className="text-black text-center font-impact text-xl"> {props.content_top}</p>
        </div>
    </div>
  )
}

export default MemeCreate
