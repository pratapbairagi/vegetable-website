

export const OnchangeFunction = ({e, createProduct, setCreateProduct}) => {
    let { name, value } = e.target;

        if (name !== "tags" && name !== "feature" && name !== "images" && name !== "category") {
            setCreateProduct({ ...createProduct, [name]: value })
        }
        else if (name === "images") {
            let fileList = e.target.files
            let imgs = []


            for (let i = 0; fileList.length > i; i++) {

                let file = fileList[i];
                let reader = new FileReader()

                reader.onload = () => {
                    if (reader.DONE) {
                        imgs.push({url : reader.result, public_id : "", _id : ""})
                        // setCreateProduct({...createProduct, images : [...createProduct.images, createProduct.images.map(v=> reader.result != ""  && reader.result != undefined ? reader.result : v )[0] ] })
                    }

                    setCreateProduct({ ...createProduct, images: [...createProduct.images, imgs[0]] })
                }

                reader.readAsDataURL(file)
            }
        }
}

export const OnKeyPressFunction = ({e, createProduct, setCreateProduct}) => {
    let {name, value} = e.target
        {
            if (value && value.length >= 2 && e.key === "Enter") {
                
                if( name == "tags") setCreateProduct({ ...createProduct, tags: [...createProduct.tags, value] })
                if( name == "category") setCreateProduct({ ...createProduct, category: [...createProduct.category, value] })
                
                return document.getElementById(e.target.id).value = ""
            }
            else {
                null
            }

        }
}