import { useState } from "react";

export const SearchBar = ({onSearch}) => {
    const [title, setTitle] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearch(title);
    }
  
   return (
       <div>
           <form onSubmit={(e) => onFormSubmit(e)}>
               <div className="form-group">
                   <label htmlFor="title">Title</label>
                   <input
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button disabled ={ !title }>Search</button>
               </div>
           </form>
       </div>
   ) 
}   