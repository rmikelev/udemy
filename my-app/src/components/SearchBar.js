import { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export const SearchBar = ({onSearch}) => {
    const [title, setTitle] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearch(title);
    }
  
   return (
       <div>
           <Form onSubmit={(e) => onFormSubmit(e)}>
               <Form.Group> 
                   <Form.Label htmlFor="title">Title</Form.Label>
                   <Form.Control
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button type='submit' disabled ={ !title }>Search</Button>
               </Form.Group>
           </Form>
       </div>
   ) 
}   
export default SearchBar