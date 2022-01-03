import React from 'react';
import '../style/cars.css';


function Cars({cars, addCars, formData, updateFormData}) {

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addCars([
            ...cars,
            {title:formData.title, description: formData.description, image: formData.image, done : false, id: Math.ceil(Math.random() * 10000)}
        ])
        // ... submit to API or something

    };

    return (

        <div>
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title" onChange={handleChange}/><br/><br/>

                <label for="description">Description:</label><br/>
                <input type="text" id="description" name="description" onChange={handleChange}/><br/><br/>

                <label for="image">Image:</label><br/>
                <input type="text" id="image" name="image" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>

        </div>

    )
}

export default Cars;