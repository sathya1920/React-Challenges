import React from 'react';
import './Product.css'

function Products({ data }) {
  return (
    <div>
      <div className='row'>
        {data.map((recipe,index) => (
          <div className='col-lg-4' key={recipe.id}>
            <div className="card mt-5" style={{ width: '20rem', height:'30rem' }} >
            <img className="card-img-top" src={recipe.recipe.image} alt="Card image cap" />
              <div className="card-body">
                <center>
                <h5 className="card-title">{recipe.recipe.label}</h5>
                <p className="card-text">Total Amount of Calories : {Math.floor(recipe.recipe.calories)} </p>
                
                  
                <button
                    type="button"
                    className="btn btn-success w-100"
                    data-toggle="modal"
                    data-target={`#exampleModalCenter${index}`}
                  >
                    Ingredients
                  </button>

                  <div
                    className="modal fade"
                    id={`exampleModalCenter${index}`}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby={`exampleModalLongTitle${index}`}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id={`exampleModalLongTitle${index}`}>Ingredients</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ul style={{listStyle:'none'}}>
                            {recipe.recipe.ingredients.map((ingredient, ingredientIndex) => (
                              <li key={ingredientIndex} className='ingredient-item'>
                                <div className="ingredient-text">{ingredient.text}</div>
                                  <div className="ingredient-details">
                                    <span>{ingredient.quantity}</span>
                                    <span>{ingredient.measure}</span>
                                  </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
