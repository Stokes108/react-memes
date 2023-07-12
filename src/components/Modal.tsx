import ContactForm from "./ContactForm";


type Props  = {
    id?: string;
    open: boolean;
    onClose: () => void;

}

const Modal = ( props: Props ) => {

    if ( !props.open ) return (<></>);
    
    return(
            <div >
                    { props.id ? (
                        <div>
                            <div onClick={props.onClose} className="z-10 fixed top-0 left-0 overflow-x-hidden  h-screen max-h w-full flex justify-center align-middle bg-black bg-opacity-50 pt-32">
                                <div onClick={(e) => {e.stopPropagation()} } className = ' max-w-600px w-2/5 fixed flex z-10 bg-indigo-100 shadow-xl overflow-auto rounded  h-1/2'  >
                                    <div className="w-full flex flex-col">
                                        <div className="flex flex-row space-apart justify-end">
                                            <p className="flex justify-start m-3 bg-gray-300 p-2 rounded hover:bg-slate-800 text-black hover:text-white"
                                            onClick = {props.onClose}>
                                                X
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center text-center mt-2 p-1">
                                            <ContactForm id={props.id} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                
                    ):(
                    <div onClick = {props.onClose }className="z-10 fixed top-0 left-0 overflow-x-hidden overflow-y-auto  h-screen max-h w-full flex overflow-auto z-10 justify-center align-middle bg-black bg-opacity-50 pt-32">
                        <div onClick={(e) => {e.stopPropagation()} } className = ' max-w-600px w-2/5 fixed flex z-10 bg-indigo-100 shadow-xl rounded overflow-auto h-4/5'  >
                            <div className="w-full flex flex-col">
                                <div className="flex flex-row space-apart justify-end">
                                    <p className="flex justify-start m-3 bg-gray-300 p-2 rounded hover:bg-slate-800 text-black hover:text-white"
                                    onClick = {props.onClose}>
                                        X
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center mt-2 p-1">
                                    <ContactForm id={props.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                
                    )}
                
            </div>
    )}


export default Modal
