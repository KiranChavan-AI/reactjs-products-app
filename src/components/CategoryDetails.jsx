function CategoryDetails({category, onDelete}){
    return(
        <>
          <tr>
            <td>{category.categoryId} </td>
            <td>{category.categoryName}</td>
            <td>
                <input type="button" className="btn btn-danger" value="X" 
                onClick={(e)=>onDelete(e)}/>
            </td>
          </tr>
        </>
    )

}

export default CategoryDetails;