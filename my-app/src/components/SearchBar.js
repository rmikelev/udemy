import { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel  from "react-bootstrap/FormLabel";
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
               <FormGroup> 
                   <FormLabel  htmlFor="title">Title</FormLabel>
                   <FormControl
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button type='submit' disabled ={ !title }>Search</Button>
               </FormGroup>
               
           </Form>
       </div>
   ) 
}   
export default SearchBar