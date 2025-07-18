export const validateProductForm = (fieldName, fieldValue) =>
{
    let errors={};
    let priceRegex=/^\d+(\.\d{1,2})?$/;
     errors.fieldName =fieldName;
    if(fieldName == 'productName')
    {
        if(!fieldValue.length)
        {
            errors.title='Product Name is Mandatory';
        }
        else
        
         delete errors.title;
    }
    if(fieldName == 'price')
        {
            if(!fieldValue.length)
            {
                errors.title='Price is Mandatory';
            }
            else if(!priceRegex.test(fieldValue))
            {
            errors.title='Price should be a number';
            }
            else
             delete errors.title;
        }


    return errors;
}